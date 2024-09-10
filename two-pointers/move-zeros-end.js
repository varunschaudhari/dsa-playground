function moveZeros(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        while (arr[left] !== 0) {
            left++;
        }

        while (arr[right] === 0) {
            right--;
        }

        // swapping with array destructuring
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // swapping with temporary variable
        // const temp = arr[left];
        // arr[left] = arr[right];
        // arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));
