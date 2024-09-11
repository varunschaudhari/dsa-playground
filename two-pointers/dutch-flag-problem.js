function sortColors(nums) {
    let left = 0;
    let current = 0;
    let right = nums.length - 1;

    while (current <= right) {
        if (nums[current] === 0) {
            [nums[current], nums[left]] = [nums[left], nums[current]];
            left++;
            current++;
        } else if (nums[current] === 2) {
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        } else {
            current++;
        }
    }

    return nums;
}

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));


/*

Explanation of Changes:
1.current starts at 0: It should start from the beginning, not 1.

2.Handling nums[current] === 0:
    When a 0 is found, it is swapped with the element at left. Then, both left and current are incremented since 0 is in the correct place.
3.Handling nums[current] === 2:
    When a 2 is found, it is swapped with the element at right, and right is decremented. However, we do not increment current here because we still need to check the element that was swapped into the current position (from right).
4.Handling nums[current] === 1:
    When a 1 is found, no swaps are necessary, and only current is incremented.
*/