const maximumDifference = (nums) => {
    let minValue = nums[0];
    let maxDifference = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minValue) {
            maxDifference = Math.max(maxDifference, nums[i] - minValue);
        } else {
            minValue = nums[i];
        }
    }

    return maxDifference;
};

console.log(maximumDifference([1, 5, 2, 10]));
