const findLHS = function (nums) {
    const entry = {};
    let result = 0;

    for (let val of nums) {
        if (typeof entry[val] !== "undefined") entry[val] += 1;
        else entry[val] = 1;
    }

    for (let val of nums) {
        if (typeof entry[val - 1] !== "undefined")
            result = Math.max(result, entry[val] + entry[val - 1]);
    }

    return result;
};

console.log(findLHS([1, 1, 1, 1]));
