// zigzag conversion

const convert = (s, n) => {
    if (n === 1 || s.length <= n) return s;

    const rows = Array.from({ length: Math.min(n, s.length) }, () => "");

    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === n - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

console.log(convert("paypalishiring", 3));
