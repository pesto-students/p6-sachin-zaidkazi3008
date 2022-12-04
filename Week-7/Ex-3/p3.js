/* Given a linked list of N nodes.
The task is to check if the linked list has a loop.
Linked list can contain self loop.*/

class Node {
    // constructor
    constructor(element,next) {
      this.element = element; 
      this.next = next;
    }
}
class SingleLinkedList {
    constructor(value){
      if(value instanceof Array){
          this.size = value.length;
          this.head = value.reverse().reduce((acc,curr) => {
              if(acc == null){
                  acc = new Node(curr);
              }else{
                  acc = new Node(curr,acc);
              }
              return acc;
          },null);
      }else{
          this.head = new Node(value);
          this.size = 1;
      }
    }
  
    //Append an element to the end of linkedList.
    append(element) { 
      // creates a new node
      var node = new Node(element);
  
      // to store current node
      var current;
  
      // if list is Empty append the
      // element and make it head
      if (this.head == null) this.head = node;
      else {
        current = this.head;
  
        // iterate to the end of the
        // list
        while (current.next != null) {
          current = current.next;
        }
  
        // append node
        current.next = node;
      }
      this.size++;
    }
    printList() {
      let array = [];
      let currentList = this.head; 
      while (currentList !== null) {
          array.push(currentList.element);
          currentList = currentList.next;
      }
      array.push()
      console.log(array.join(" -> "));
      return;
    }
    detectLoop(head) {
          let slow = this.head;
          let fast = this.head;
          if (slow == null || fast.next == null){
            return false;
          } 
          while (slow.next !== null && fast.next.next !== null) {
              fast = fast.next.next;
              slow = slow.next;
              if (fast === slow){
                return true;
              } 
          }
          return false;
      }
  
    // Helper Methods
    isEmpty() {
      return this.size == 0;
    }
    length() {
      return this.size;
    }
  }

const one = new SingleLinkedList("a");
const two = new SingleLinkedList("b");
const three = new SingleLinkedList("c");
const four = new SingleLinkedList("d");
const five = new SingleLinkedList("e");
const six = new SingleLinkedList("f");
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = three;
one.detectLoop(one);

console.log(one.detectLoop(two));
console.log(two.detectLoop(three));