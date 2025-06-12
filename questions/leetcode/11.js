const maxArea = (height) => {
    let [left, right, maxArea] = [0, height.length - 1, 0];

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
