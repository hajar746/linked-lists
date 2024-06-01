function ListNode(value = null, next = null) {
  return {
    value,
    next,
  };
}

function LinkedList() {
  let head = null;

  const append = (value) => {
    const newNode = ListNode(value);

    if (head === null) head = newNode;
    else {
      let pointer = head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = ListNode(value, head);
    head = newNode;
  };

  const size = () => {
    let sum = 0;
    let counter = head;
    while (counter !== null) {
      sum += 1;
      counter = counter.next;
    }
    console.log(`size of list is ${sum}`);
    return sum;
  };

  const findHead = () => {
    console.log(`head node: ${head.value}`);
    return head;
  };

  const findTail = () => {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    console.log(`tail node: ${pointer.value}`);
    return pointer;
  };

  const at = (index) => {
    let pointer = head;
    let i = 0;
    while (pointer && i < index) {
      pointer = pointer.next;
      i++;
    }
    console.log(`the node at ${index} is ${pointer.value}`);
    return pointer;
  };

  const pop = () => {
    if (head === null) return "ERROR, cannot remove null value";
    else if (head.next === null) head = null;
    else {
      let lastNode = head;
      while (lastNode.next.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = null;
    }
  };

  const contains = (value) => {
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value === value) {
        console.log(true);
        return true;
      } else {
        pointer = pointer.next;
      }
    }
    console.log(false);
    return false;
  };

  const find = (value) => {
    let pointer = head;
    for (let i = 0; pointer !== null; i++) {
      if (pointer.value === value) {
        console.log(`index of ${value} is ${i}`);
        return i;
      } else {
        pointer = pointer.next;
      }
    }
    console.log(`ERROR! value not found`);
    return null;
  };

  const toString = () => {
    let pointer = head;
    let string = "";
    while (pointer !== null) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.next;
    }
    string += "null";
    console.log(string);
  };

  const insertAt = (value, index) => {
    if (index === 0) {
      prepend(value);
      return;
    }

    const nodeBeforeIndex = at(index - 1);
    const newNode = ListNode(value, nodeBeforeIndex.next);
    nodeBeforeIndex.next = newNode;
  };

  const removeAt = (index) => {
    if (index === 0) {
      head = head.next;
      return;
    }

    const nodeBeforeIndex = at(index - 1);
    nodeBeforeIndex.next = nodeBeforeIndex.next.next;
  };

  return {
    head,
    append,
    prepend,
    size,
    findHead,
    findTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();

// TEST
list.append("A");
list.append("B");
list.append("C");
list.toString();
list.findHead();
list.findTail();
list.size();
list.contains("B");
list.find("C");
