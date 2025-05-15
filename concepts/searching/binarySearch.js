const binarySearch = (left, right, arr, val) => {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < val) return binarySearch(mid + 1, right, arr, val);
    else if (arr[mid] > val) return binarySearch(left, mid - 1, arr, val);
    else if (arr[mid] === val) return mid;
};

const inputArray = [2, 4, 7, 88, 96, 521];

const res = binarySearch(0, inputArray.length - 1, inputArray, 3);

console.log(res, "res");
// complexity: O(log n)
