// longest substring without repeating characters

const helper = (str) => {
    if (str[0] === str[1]) return 0;
    const sliced = str.slice(1);
    console.log(sliced);
    return Math.max(1 + helper(sliced), helper(sliced));
};

const longestSubstring = (s) => {
    let [obj, maxLength, left] = [{}, 0, 0];

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (obj[char] !== undefined && obj[char] >= left) {
            left = obj[char] + 1;
        }
        obj[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(longestSubstring("dvdf"));
