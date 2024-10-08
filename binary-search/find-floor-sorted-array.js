function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let res = nums[0];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        console.log(target, nums[mid]);
        if (nums[mid] < target) {
            res = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}

const arr = [1, 3, 5, 6];
console.log(arr);
console.log(binarySearch(arr, 5));
