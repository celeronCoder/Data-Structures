class Node:
	def __init__(self, data):
		self.data = data;
		self.next = None;

class LinkedList:
	def __init__(self):
		self.head = None;

	def traverse(self):
		# creates a temporary node
		temp = self.head;
		# looping the node till the next becomes none and it terminates
		while (temp is not None):
			# printing the node;
			print(temp.data);
			# setting the temp node as the next node of the current temp node;
			temp = temp.next;

	def push(self, new_data):
		# creates a new node with new_data;
		new_node = Node(new_data);
		# set the node.next to the head node;
		new_node.next = self.head;
		# changing the head node of the linked list;
		self.head = new_node;

	def insertAfter(self, prev_node, new_data):
		# checking if the prev_node exists
		if prev_node is None:
			print("The given node must be in the linked-list");
			return

		# creting a new node with the data;
		new_node = Node(new_data);
		# setting the next of the new node same as the next of the previous node;
		new_node.next = prev_node.next;
		# setting the previous node's next as the new node;
		prev_node.next = new_node;

	def append(self, new_data):
		# creting a new node with the data;
		new_node = Node(new_data);

		# if the list is empty
		if self.head is None:
			self.head = new_node;
			return

		# traversing to the last node;
		last = self.head
		while (last.next is not None):
			last = last.next;

		# setting the next of last node to the new_node from None;
		last.next = new_node;

	def deleteNode(self, key):
		# storing the head node.
		temp = self.head;

		# checking is the list is not empty.
		if (temp is not None):
			# checking if the head is the key.
			if (temp.data == key):
				# setting the next of the head node as the new head node.
				self.head = temp.next;
				# freeing up the space for the deleted node.
				temp = None;
				return "Head Node changed.\n";

		# traversing through the list.
		while (temp is not None):
			# checking for the key match.
			if temp.data == key:
				# if the key matches breaking the while loop.
				break;
			# setting up the previous node.
			prev = temp;
			# changing the temp to next to keep the while loop going.
			temp = temp.next;

		# if the key is not in the list.
		if (temp is None):
			return "Node is not in the list.\n";

		# unlinking the key node.
		prev.next = temp.next;

		# deleting the key node.
		temp = None;