function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let res = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] <= target) {
            start = mid + 1;
        } else {
            res = mid;
            end = mid - 1;
        }
    }
    return start === nums.length ? nums[0] : nums[start];
}

const letters = ["c", "f", "j"], target = "c";
console.log(binarySearch(letters, target));
