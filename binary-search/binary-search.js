// time complexity --> O(logn and base 2) --> where n is no. of elements
// space complexity --> O(1)

function binarySearch(arr, target) {
    if (arr.length === 0) return -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 23, 30, 40];
console.log(binarySearch(arr, 23));
