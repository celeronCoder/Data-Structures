from .createList import createList;

if __name__=='__main__':
	myList = createList(45,54534,13242315);
	myList.traverse();
	print("\n");
	myList.deleteNode(13242315);
	myList.traverse();