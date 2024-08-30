class Stack {
    constructor() {
        this.items = [];
    }

    // Push the element at top of stack;
    push(element) {
        this.items.push(element);
    }

    // remove the top element of stack
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items.pop();
    }

    // Peek at the top element without removing it
    top() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items[this.items.length - 1];
    }

    // checks if stack is empty or not
    isEmpty() {
        return this.items.length === 0;
    }

    // checks size of stack
    size() {
        return this.items.length;
    }
}

// stack usage
const stack = new Stack();

stack.push(1);
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.top()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log('Stack', stack.items);
