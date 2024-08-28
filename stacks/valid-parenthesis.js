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
