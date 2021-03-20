import createList from "./createList.js";
import { Node, LinkedList } from "../main.js";

function emptyListTest(data) {
  let myList = new LinkedList();
  myList.add(data);
  return myList;
}

/*
const list1 = emptyListTest(2445453);
list1.printList();
*/

function insertAtTest(data, index) {
  let list = createList(1, 2, 3);
  list.insertAt(data, index);
  return list;
}

const list2 = insertAtTest(34, -1);
list2.printList();
