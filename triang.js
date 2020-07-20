function triang(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + triang(n - 1);
    }
}

triang(n);
