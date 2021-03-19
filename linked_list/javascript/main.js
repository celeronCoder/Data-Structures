export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // creating a new node with data.
    const node = new Node(data);
    // defining a temporary variable;
    let temp;

    // if list is empty add the new node as the head node.
    if (this.head === null) {
      this.head = node;
    } else {
      temp = this.head;

      // iterate to the end of the list when temp.next = null.
      while (temp.next) {
        temp = temp.next;
      }
      // adding node as the last node's next.
      temp.next = node;
    }
    // increasing the size of the list.
    this.size++;
  }

  insertAt(data, index) {
    // checking if the index falls into the linkedList.
    if (index > 0 && index > this.size) {
      return false;
    } else {
      // creating a new node.
      const node = new Node(data);
      // declaring temporary and previous variables to iterate to the index.
      let temp, prev;

      temp = this.head;

      // add the element as the head node (first index)
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let i = 0;

        // iterate over the list to dine the position to insert the new node.
        while (i < index) {
          i++;
          prev = temp;
          temp = temp.next;
        }

        // setting up the links and adding the node to the list.
        node.next = temp;
        prev.next = node;
      }
      // increasing the size of the list.
      this.size++;
    }
  }

  append(data) {
    // creating a new node.
    node = new Node(data);

    // if the list is empty set the node as the head node.
    if (this.size === 0) {
      this.head = node;
    } else {
      // iterate to the end of the list.
      let temp = this.head;
      while (temp) {
        temp = temp.next;
      }
      // setting the null node pointer to the new node(null).
      temp.next = node;
    }
    // increasing the the size of the list.
    this.size++;
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let temp,
        prev,
        i = 0;
      temp = this.head;
      prev = temp;

      if (index === 0) {
        this.head = temp.next;
        temp = null;
      } else {
        while (i < index) {
          i++;
          prev = temp;
          temp = temp.next;
        }

        prev.next = temp.next;
      }
      this.size--;
      return temp.data;
    }
  }

  removeElement(data) {
    let temp = this.head;
    let prev = null;

    while (temp) {
      if (temp.data === data) {
        if (prev == null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        this.size--;
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return false;
  }

  printList() {
    let temp = this.head;
    let listString = "";
    while (temp) {
      listString += temp.data + " ";
      temp = temp.next;
    }
    console.log(listString);
  }

  size() {
    console.log(this.size);
  }

  isEmpty() {
    return this.size == 0;
  }

  indexOf(data) {
    let index = 0;
    let temp = this.head;

    while (temp) {
      if (temp.data == data) {
        return index;
      }
      index++;
      temp = temp.next;
    }
    // if not found.
    return false;
  }
}
