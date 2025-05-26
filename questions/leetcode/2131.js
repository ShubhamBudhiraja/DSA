// longest palindrome by concatenating two letter words
const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};

const getPalindromeLength = (words) => {
    const map = {};
    let maxLength = 0;
    let sameAdded = false;

    for (let word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    for (let word in map) {
        const rev = word[1] + word[0];

        if (word === rev) {
            const count = map[word];
            maxLength += Math.floor(count / 2) * 4;
            if (count % 2 === 1) sameAdded = true;
        } else if (map[rev]) {
            const pairs = Math.min(map[word], map[rev]);
            maxLength += pairs * 4;
            map[word] = 0;
            map[rev] = 0;
        }
    }

    if (sameAdded) maxLength += 2;

    return maxLength;
};

const words = ["ab", "ty", "yt", "lc", "cl", "ab"];

console.log(getPalindromeLength(words));
