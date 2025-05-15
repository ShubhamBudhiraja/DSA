// works by sending the largest element to the end of the list
const bubbleSort = (arr) => {
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

console.log(bubbleSort([52, 31, 42, 4, 22, 6, 1]));
