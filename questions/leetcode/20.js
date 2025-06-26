const isValid = (s) => {
    if (s.length === 1) return false;

    const stack = [];
    const obj = { "[": "]", "{": "}", "(": ")" };

    for (let char of s) {
        if (typeof obj[char] !== "undefined") stack.push(char);
        else {
            if (char !== obj[stack[stack.length - 1]]) return false;
            else stack.pop();
        }
    }

    if (stack.length > 0) return false;
    return true;
};

console.log(isValid("([])"));
