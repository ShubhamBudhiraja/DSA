const trap = function (height) {
    let [left, leftMax, right, rightMax, total] = [
        0,
        0,
        height.length - 1,
        0,
        0,
    ];

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                total += leftMax - height[left];
            }
            left++;
        } else {
            console.log(rightMax);
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                total += rightMax - height[right];
            }
            right--;
        }
    }

    return total;
};

// console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([1, 2, 4]));
