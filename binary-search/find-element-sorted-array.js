function findMin(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        // to restrict go out of bound, we added modulo n
        const next = (mid + 1) % arr.length;
        const prev = (mid - 1 + arr.length) % arr.length;
        // Check if the mid element is the minimum element
        if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            // return mid;
            const left = binarySearch(arr, target, 0, mid - 1);
            const right = binarySearch(arr, target, mid, arr.length - 1);
            return left !== -1 ? left : right;
        }

        // Decide which half to search next
        if (arr[start] < arr[mid]) {
            // Left part is sorted, go to the right part
            start = mid;
        } else {
            // Right part is sorted, go to the left part
            end = mid;
        }
    }
    return -1; // In case the input is not a rotated sorted array
}

function binarySearch(arr, target, left, right) {
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

const arr = [11, 12, 15, 18, 2, 5, 6, 8];
console.log(findMin(arr, 2));

// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         } else if (target < nums[mid] && nums[mid] <= nums[right]) {
//             right = mid - 1;
//         } else {
//             left = mid - 1;
//         }
//     }
//     return -1;
// };
// console.log(search(arr, 2));
