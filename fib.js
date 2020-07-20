function fib(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let prev = fib(n - 1);
        prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
        return prev;
    }
}

fib(8);
