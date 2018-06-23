class Stack {

    constructor(arr){
        this.items = arr || []
    }
    
    push  (item)  {
        this.items.push(item);
    }

    peek () {
        return this.items[this.items.length - 1]
    }

    pop () {
        return this.items.pop();
    }


}


let stack = new Stack();

stack.push(4);
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(7);


function findLowest (stack) {
    let lowest = Infinity;

    while (stack.items.length > 0) {
        lowest = stack.peek() < lowest? stack.peek() : lowest;
        stack.pop()
    }

    return lowest

}

console.log(findLowest(stack));