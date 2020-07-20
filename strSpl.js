function strSpl(inp) {
    if (inp.search("/") == -1) {
        console.log("end", inp);
        return inp;
    } else {
        console.log("inp", inp);
        let newSpl = [inp.substring(0, inp.search("/"))];
        console.log("pre", newSpl);
        let rem = inp.substring(inp.search("/") + 1, inp.length);
        console.log("post", rem);
        return [...newSpl, strSpl(rem)].flat();
    }
}

strSpl("02/20/2020");
