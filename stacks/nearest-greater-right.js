function nearerGreatest(arr) {
    const stack = [];
    const vector = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            vector.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            vector.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                vector.push(-1);
            } else {
                vector.push(stack[stack.length - 1]);
            }
        }
        stack.push(arr[i]);
    }
    return vector.reverse();
}

const arr = [1, 3, 2, 4];
console.log(nearerGreatest(arr));
