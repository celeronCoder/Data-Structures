import pkg from "../main.js";
const { Node, LinkedList } = pkg;

function createList(data1, data2, data3) {
  let node1, node2, node3;
  node1 = new Node(data1);
  node2 = new Node(data2);
  node3 = new Node(data3);
  const linkedList = new LinkedList();
  linkedList.head = node1;
  node1.next = node2;
  node2.next = node3;
  return linkedList;
}

myList = createList(45, 23, 56);
myList.printList();
