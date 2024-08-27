function binarySearch(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        // If the array is already sorted (no rotation)
        if (arr[start] <= arr[end]) {
            return start;
        }

        const mid = Math.floor((start + end) / 2);
        // to restrict go out of bound, we added modulo n
        const next = (mid + 1) % arr.length;
        const prev = (mid - 1 + arr.length) % arr.length;
        // Check if the mid element is the minimum element
        if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }

        // Decide which half to search next
        if (arr[prev] < arr[mid]) {
            // Left part is sorted, go to the right part
            start = mid + 1;
        } else {
            // Right part is sorted, go to the left part
            end = mid - 1;
        }
    }
    return -1; // In case the input is not a rotated sorted array
}

const arr = [11, 12, 15, 18, 2, 5, 6, 8];
console.log(binarySearch(arr));
