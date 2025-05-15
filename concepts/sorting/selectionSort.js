// divides the array into sorted and unsorted arrays starting from the beginning
const selectionSort = (arr) => {
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        let min = arr[i];
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < min) {
                [min, arr[j]] = [arr[j], min];
            }
        }
        arr[i] = min;
    }

    return arr;
};

console.log(selectionSort([52, 31, 42, 4, 22, 6, 1]));
