from .main import Node, LinkedList;

def createList(data1, data2, data3):
	# creates the linked list object
	linkedList = LinkedList();

	# setting the head prop as Node object with data1
	linkedList.head = Node(data1);

	# creating other seprate nodes
	second = Node(data2);
	third = Node(data3);

	# setting the head node link to the second node
	linkedList.head.next = second;

	# setting the link of the second node to the third node
	second.next = third;
	# third node is default set to NULL -> None;
	return linkedList;