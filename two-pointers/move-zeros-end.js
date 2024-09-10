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

const arr = [2, 1, 0, 3, 12];
console.log(moveZeros(arr));

/*

Purpose:
    This function moves all zeros in an array to the end, while maintaining the relative order of non-zero elements.
Key Points:
    1.Two-pointer approach:
        left: Tracks the position where the next non-zero element should be placed.
        right: Traverses the entire array to find non-zero elements.
    2.Swapping:
        When a non-zero element is found at arr[right], it is swapped with the element at arr[left].
        After swapping, left is incremented to point to the next position for a potential swap.
        right increments regardless of whether a swap happens or not.
    3.Array Destructuring:
        The swapping is done using array destructuring:
        code:- [arr[left], arr[right]] = [arr[right], arr[left]];
        This effectively swaps the values of arr[left] and arr[right].
    4.Time Complexity: O(n)
        The right pointer goes through the array once, and each non-zero element is swapped at most once, making the time complexity linear.
    5.Space Complexity: O(1)
        The function modifies the array in place, requiring no additional memory except for the left and right pointers.
*/