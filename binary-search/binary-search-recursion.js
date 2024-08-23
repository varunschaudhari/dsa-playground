function binarySearch(arr, target, left, right) {
    if (right < left) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    }
    return binarySearch(arr, target, left, mid - 1);
}

const arr = [1, 3, 5, 7, 9, 11, 23, 30, 40];
console.log(binarySearch(arr, 23, 0, arr.length - 1));
