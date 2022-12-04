/*
Implement a Queue using 2 stacks s1 and s2 .
A Query Q is of 2 Types 
(i) 1 x (a query of this type means pushing 'x' into the queue) 
(ii) 2 (a query of this type means to pop element from queue and print the poped element)
*/

class Queue {
    constructor() {
      this.stack1 = []
      this.stack2 = []
    }
  
    enqueue(ele) {
      this.stack1.push(ele)
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          let val = this.stack1.pop()
          this.stack2.push(val)
        }
      }
          return this.stack2.pop()
    }
  }

  
 
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q.dequeue())