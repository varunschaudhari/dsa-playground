function reverseString(s) {
    if (s.length === " ") return " ";
    let left = 0;
    let right = s.length - 1;

    // Swap characters from the start and end
    while (left < right) {
        // Swap s[left] and s[right]
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Move the pointers
        left++;
        right--;
    }
    return s;
}

// const s = ["h", "e", "l", "l", "o"];
const s = ["H", "a", "n", "n", "a", "h"];
console.log(reverseString(s));

// time complexity --> O(n)
// space complexity --> O(1) since the function modifies the input array 
// in place and uses a constant amount of extra memory (for the temp variable and the two pointers left and right).