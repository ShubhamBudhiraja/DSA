const longestPalindrome = (s) => {
    if (!s || s.length < 1) return "";

    let start = 0,
        end = 0;

    const helper = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = helper(i, i);
        const len2 = helper(i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
};

console.log(longestPalindrome("babad"));
