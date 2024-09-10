function moveNegative(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] % 2 !== 0) {
            // swapping with array destructuring
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right++;
    }
    return arr;
}

const arr = [2, 1, 4, 3, 5];
console.log(moveNegative(arr));