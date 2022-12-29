class Node {
  // constructor
  constructor(element,next) {
    this.element = element; 
    this.next = (next === undefined ? null : next);
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
  insertAt(element, index) { 
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;
      curr = this.head; // append the element to the // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0; // iterate over the list to find // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        } // appending an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeElement(toFind) { 
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === toFind) {
        if (prev == null) { //deleting at the start
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  searchElement(toFind) { 
    var current = this.head; // iterate over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === toFind) return true;
      current = current.next;
    }
    // not found
    return false;
  }

  getElementByIndex(index) { 
    let current = this.head;
    let counter = 0;
    if(index < 0 || index > this.length() - 1) {
      return 'Index incorrect'
    }
    while(counter !== index ){ 
      current = current.next;
      counter++;
    }
    return current.element;
  }

  // Helper Methods
  isEmpty() {
    return this.size == 0;
  }
  length() {
    return this.size;
  }
  reverse (head = this.head) {
    let first = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    //return this.print();
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

  rotate(k) {
    let previousHead = this.head,
        prev = this.head,
        current = this.head;

    let i = 1;
    while(current.next){
        if(i == k+1){
            this.head = current;
            prev.next = null;
        }
        prev = current;
        current = current.next;
        i++;
    }
    current.next = previousHead;
    return this;
  }
}
const ll = new SingleLinkedList();
module.exports = SingleLinkedList











