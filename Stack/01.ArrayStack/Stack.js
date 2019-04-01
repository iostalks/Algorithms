class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.size() - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }
};
