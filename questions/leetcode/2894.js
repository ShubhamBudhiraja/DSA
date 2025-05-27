// Divisible and Non-divisible Sums Difference

const getDiff = (num1, num2) => {
    let num1Sum = (num1 * (num1 + 1)) / 2;
    const num2MultiplesCountInNum1 = Math.floor(num1 / num2);
    const num2MultiplesSumInNum1 =
        ((2 * num2 + (num2MultiplesCountInNum1 - 1) * num2) *
            num2MultiplesCountInNum1) /
        2;

    num1Sum = num1Sum - 2 * num2MultiplesSumInNum1;
    return num1Sum;
};

getDiff(10, 3);
