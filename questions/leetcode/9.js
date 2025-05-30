// check if a number is palindrome without converting it into string

const isPalindrome = (num) => {
    if (num < 0) return false;
    let [num2, reversed] = [num, 0];

    while (num2 > 0) {
        const rem = num2 % 10;
        reversed = reversed * 10 + rem;
        num2 = Math.floor(num2 / 10);
    }

    return num === reversed;
};

console.log(isPalindrome(121));
