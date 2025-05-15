// generate all binary strings with n bits

const helper = (suffixArray) => {
    const res = [];
    suffixArray.forEach((item) => {
        res.push(`0${item}`);
        res.push(`1${item}`);
    });

    return res;
};

const generateStrings = (n) => {
    if (n === 0) return [];
    else if (n === 1) return ["0", "1"];
    else return [...helper(generateStrings(n - 1))];
};

console.log(generateStrings(3));
// complexity: O(2^n)
