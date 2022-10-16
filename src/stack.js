class Stack { 
  constructor() {

    this.items = [];

  }

  //Performing push operation

  push(element) {

    this.items.push(element);

    console.log(element + " is pushed to Stack.");

  }

  //Pop out element from Stack

  pop(element) {

    this.items.pop(element);
     console.log(element + " is poped  from stack.");


  }
//check top most element of Stack

  peek(element) {

    this.items[this.items.length - 1];
      console.log(element + " is peeked  from stack.");

  }


}
var stack = new Stack();

stack.push(1);
stack.peek(1); // returns the peek, but doesn't delete it, returns 1
stack.pop(1); // returns the top element from stack and deletes it, returns 1
stack.pop();
