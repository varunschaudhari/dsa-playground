function isValid(s) {
    if (s.length % 2 !== 0) return false;
    const stack = [];
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            const par = mapping[s[i]];
            const top = stack[stack.length - 1];
            stack.pop();
            if (par !== top) {
                return false;
            }
        }
    }
    return stack.length ? false : true;
}

const s = "((";
console.log(isValid(s));


// Time Complexity: O(n) :-
// For each character in the string, the operations performed are:
//  Pushing an element onto the stack (O(1) time).
//  Popping an element from the stack (O(1) time).
//  Checking the top of the stack and comparing (O(1) time).
// Thus, the overall time complexity is O(n), where n is the length of the string.

// Space Complexity: O(n)