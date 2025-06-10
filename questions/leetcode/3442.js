const maxDifference = (s) => {
    let [maxOdd, maxEven, count] = [0, 0, {}];

    for (let char of s) {
        if (typeof count[char] !== "undefined") count[char] += 1;
        else count[char] = 1;
    }

    Object.values(count).forEach((item) => {
        if (item % 2 === 0) {
            if (maxEven === 0) maxEven = item;
            else maxEven = Math.min(maxEven, item);
        } else maxOdd = Math.max(maxOdd, item);
    });

    return maxOdd - maxEven;
};

console.log(maxDifference("mmsmsym"));
