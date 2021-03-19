from .createList import createList;

myList = createList(17,45,34);
myList.traverse();
print("\n");

def pushing():
	myList.push(442);

def insetingBetween():
	myList.insertAfter(myList.head,43);

def appendChild():
	myList.append(4554564);

if __name__=="__main__":
	appendChild();
	myList.traverse();