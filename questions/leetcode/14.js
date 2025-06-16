const longestCommonPrefix = (str) => {
    if (!str.length) return "";

    for (let i = 0; i < str.length; i++) {
        const prefix = str[0][i];
        for (let j = 1; j < str.length; j++) {
            if (str[j][i] !== prefix) return str.slice(0, i);
        }
    }

    return str[0];
};
