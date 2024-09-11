function moveNegative(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] % 2 === 0) {
            // swapping with array destructuring
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            // after swap left value will always be correct that's why we increment left++ to point out numbers should be replace
        }
        right++;
    }
    return arr;
}

const arr = [2, 1, 4, 3, 5];
console.log(moveNegative(arr));