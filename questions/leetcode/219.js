const containsNearbyDuplicate = (nums, k) => {
    const entry = {};
    let i = 0;

    while (i < nums.length) {
        if (typeof entry[nums[i]] !== "undefined") {
            if (i - entry[nums[i]] <= k) return true;
        }
        entry[nums[i]] = i;
        i++;
    }

    return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
