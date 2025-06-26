const romanToInt = (s) => {
    const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let [total, i] = [0, s.length - 1];

    while (i > 0) {
        if (symbols[s[i - 1]] >= symbols[s[i]]) total += symbols[s[i]];
        else total -= symbols[s[i]];
        i--;
    }

    if (symbols[s[0]] >= symbols[s[1]]) total += symbols[s[0]];
    else total -= symbols[s[0]];

    return total;
};

console.log(romanToInt("III"));
