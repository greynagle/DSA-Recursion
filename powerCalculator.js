function powerCalculator(base, exp) {
    if (exp < 0) {
        console.log("Exponent should be >=0");
    } else if (exp == 0) {
        return 1;
    } else {
        return base * powerCalculator(base, exp - 1);
    }
}

powerCalculator(10, 3);
