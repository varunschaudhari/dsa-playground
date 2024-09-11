const removeDuplicates = function (nums) {
    if (nums.length === 0) return [];
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            right++;
        }
        if (nums[left] !== nums[right]) {
            left++;
        }
    }
    return left;
};
const arr = [1, 1, 2];
console.log(removeDuplicates(arr));
