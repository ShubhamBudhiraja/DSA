const numSteps = (s) => {
    let [carry, steps] = [0, 0];

    for (let i = s.length - 1; i > 0; i--) {
        if (+s[i] + carry === 1) {
            carry = 1;
            steps += 2;
        } else {
            steps += 1;
        }
    }

    steps += carry;

    return steps;
};

console.log(
    numSteps("1111011110000011100000110001011011110010111001010111110001")
);
