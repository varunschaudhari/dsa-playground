function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (mid - 1 >= left && arr[mid - 1] === target) {
            return mid - 1;
        } else if (mid + 1 <= right && arr[mid + 1] === target) {
            return mid + 1;
        }
        if (arr[mid] < target) {
            left = mid + 2; // skip mid + 1 because it's already checked
        } else {
            right = mid - 2; // skip mid - 1 because it's already checked
        }
    }
    return -1;
}

const arr = [5, 10, 30, 20, 40];
console.log(binarySearch(arr, 10));
