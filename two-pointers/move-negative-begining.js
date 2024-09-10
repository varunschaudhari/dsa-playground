function moveNegative(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] < 0) {
            // swapping with array destructuring
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right++;
    }
    return arr;
}

const arr = [1, -2, 3, -4, 5];
console.log(moveNegative(arr));
