function moveZeros(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] !== 0) {
            // swapping with array destructuring
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right++;
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));
