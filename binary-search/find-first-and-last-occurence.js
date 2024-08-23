function binarySearch(arr, target) {
    if (arr.length === 0) return [-1, -1];
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            const left = leftBinarySearch(arr, target, start, mid);
            const right = rightBinarySearch(arr, target, mid, end);
            return [left, right];
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        }
    }
    return [-1, -1];
}

function leftBinarySearch(arr, target, start, end) {
    let first = end;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            first = mid;
        }
        end = mid - 1;
    }
    return first;
}

function rightBinarySearch(arr, target, start, end) {
    let last = end;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            last = mid;
        }
        start = mid + 1;
    }
    return last;
}

const arr = [1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9, 9];
console.log(binarySearch(arr, 9));
