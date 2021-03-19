# Linked List

Like arrays, Linked List is a __linear data structure__. Unlike arrays, linked list elements are __not stored at a contiguous location__; the elements are linked using __pointers__.

![Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

## Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have the following limitations.

- The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
- Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to be shifted.

## Advantages over arrays
- Dynamic size
- Ease of insertion/deletion

## Drawbacks
- Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it [here](https://www.geeksforgeeks.org/binary-search-on-singly-linked-list/).
- Extra memory space for a pointer is required with each element of the list.
- Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.

## Representation

A linked list is represented by a pointer to the first node of the linked list. The first node is called the head. If the linked list is empty, then the value of the head is NULL.
Each node in a list consists of at least two parts:

- __data__,
- __Pointer__ (or Reference) to the next _node_.

## Reference

- [GeeksforGeeks](https://www.geeksforgeeks.org/linked-list-set-1-introduction/)

## About the Repository

- The __main file__ is [__main.py__](https://github.com/khushalbhardwaj-0111/Data-Structures/blob/linked_list/linked_list/main.py) where the two classes and method are stroed.
