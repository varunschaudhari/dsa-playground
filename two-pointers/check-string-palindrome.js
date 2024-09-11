function isPalindrome(str) {
// Convert the string to lowercase and remove non-alphanumeric characters
str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
let left = 0;
let right = str.length - 1;

while (left <= right) {
    if (str[left] !== str[right]) {
        return false;
    }
    left++;
    right--;
}

return true;
}

const str = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(str));  // Output: true


/*
Time and Space Complexity:
    Time Complexity:
        Filtering the string (removing non-alphanumeric characters) takes O(n) where n is the length of the string.
        Checking for the palindrome takes another O(n) time.
        So, overall the time complexity is O(n).
    Space Complexity:
        Since you're creating a new filtered string, the space complexity is O(n) for the filtered version of the input.
*/