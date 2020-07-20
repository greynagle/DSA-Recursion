function reverse(string) {
    if (string.length == 1) {
        return string;
    } else {
        let lastLetter = string.slice(string.length - 1);
        return lastLetter.concat(reverse(string.slice(0, -1)));
    }
}

reverse("reverse me");
