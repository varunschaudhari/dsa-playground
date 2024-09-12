function squareArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    const result = new Array().fill(arr.length);

    console.log(result);

    while (left <= right) {
        const leftSquare = left * left;
        const rightSquare = right * right;

        if (leftSquare < rightSquare) {
            result[right] = rightSquare;
            right--;
        } else {
            result[right] = leftSquare;
            left++;
        }
    }

    return result;
}

const nums = [-4, -1, 0, 3, 10];
console.log(squareArray(nums));
