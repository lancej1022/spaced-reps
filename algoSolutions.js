const max_sub_array_of_size_k = function (k, arr) {
  if (k === undefined || arr === undefined) {
    return -1;
  }

  let maxSum = 0,
    windowSum = arr[0],
    windowStart = 0;

  for (windowEnd = 1; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // if we've not hit the required window size of 'k', skip this block and let `windowEnd` increment
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
};

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = new Map();

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    const rightCharCount = charFrequency.get(rightChar);
    if (!rightCharCount) {
      charFrequency.set(rightChar, 1);
    } else {
      charFrequency.set(rightChar, rightCharCount + 1);
    }

    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (charFrequency.size > k) {
      const leftChar = str[windowStart];
      const leftCharCount = charFrequency.get(leftChar);
      if (leftCharCount > 1) {
        charFrequency.set(leftChar, leftCharCount - 1);
      } else {
        charFrequency.delete(leftChar);
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

const fruits_into_baskets = function (fruits) {
  if (!fruits || !fruits.length) return null;

  // k = 2
  const fruitBasketMap = new Map();
  let maxLengthSubArr = 0,
    windowStart = 0;
  console.log('fruits', fruits);
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd += 1) {
    let currFruit = fruits[windowEnd];

    fruitBasketMap.set(
      currFruit,
      fruitBasketMap.has(currFruit) ? fruitBasketMap.get(currFruit) + 1 : 1
    );

    while (fruitBasketMap.size > 2) {
      let startingFruit = fruits[windowStart];
      let startingFruitCount = fruitBasketMap.get(startingFruit);
      if (startingFruitCount === 1) {
        fruitBasketMap.delete(startingFruit);
      } else {
        fruitBasketMap.set(startingFruit, startingFruitCount - 1);
      }
      windowStart += 1;
    }

    maxLengthSubArr = Math.max(maxLengthSubArr, windowEnd - windowStart + 1);
  }
  return maxLengthSubArr;
};

const non_repeat_substring = function (str = '') {
  if (!str.length) return null;

  const charsSet = new Set();
  let windowStart = 0,
    longestLength = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    let endingChar = str[windowEnd]; // aabccbb --> a

    if (charsSet.has(endingChar)) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowEnd, windowStart + 1);
    }
    charsSet.add(endingChar);
    longestLength = Math.max(longestLength, windowEnd - windowStart + 1);
  }
  return longestLength;
};

const length_of_longest_substring = function (str, k) {
  if (!str || !k) return null;

  const charsMap = new Map();
  let maxRepeatingCharCount = 0,
    longestLength = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    let endingChar = str[windowEnd];
    let endingCharCount = charsMap.get(endingChar);
    charsMap.set(endingChar, endingCharCount ? endingCharCount + 1 : 1);

    // if we have a new most frequent character, update it
    maxRepeatingCharCount = Math.max(maxRepeatingCharCount, charsMap.get(endingChar));
    // if the current window's length MINUS the repeatingCharacter > k,
    // move the window to the right 1 time
    if (windowEnd - windowStart + 1 - maxRepeatingCharCount > k) {
      let leftChar = str[windowStart];
      let leftCharCount = charsMap.get(leftChar);
      if (leftCharCount > 1) {
        charsMap.set(leftChar, leftCharCount - 1);
      } else {
        charsMap.delete(leftChar);
      }
      windowStart += 1;
    }

    longestLength = Math.max(longestLength, windowEnd - windowStart + 1);
  }
  return longestLength;
};

const length_of_longest_substring_v2 = function (arr, k) {
  if (!arr || !arr.length || k === undefined) return null;

  let onesCount = 0;
  let windowStart = 0,
    maxLength = -Infinity;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    if (arr[windowEnd] === 1) {
      onesCount += 1;
    }

    if (windowEnd - windowStart + 1 - onesCount > k) {
      let startingNum = arr[windowStart];
      if (startingNum === 1) onesCount -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

const pair_with_targetsum = function (arr, target_sum) {
  if (!arr || !arr.length || target_sum === undefined) return [];

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === target_sum) return [left, right];
    if (currSum < target_sum) left += 1;
    if (currSum > target_sum) right -= 1;
  }

  return [];
};
pair_with_targetsum([1, 2, 3, 4, 6], 6);

const remove_duplicates = function (arr) {
  if (!arr) return null;
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;
  let i = 0;
  while (i < arr.length) {
    // [2,3,3,3,6,9,9] --> [2,3,6,9,6,9,9]
    // eagerly replace any duplicates with the first NON duplicate.
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
};

const make_squares = function (arr = []) {
  if (!arr.length) return [];

  squares = [];
  let squaresPointer = arr.length - 1,
    left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let leftSquared = arr[left] * arr[left];
    let rightSquared = arr[right] * arr[right];
    // if left is bigger, insert left and increment left pointer
    if (leftSquared > rightSquared) {
      squares[squaresPointer] = leftSquared;
      left += 1;
    } else {
      // If equal or right is larger, insert the right num and decrement right pointer
      squares[squaresPointer] = rightSquared;
      right -= 1;
    }

    // decrement the index used to insert on the next loop
    squaresPointer -= 1;
  }
  return squares;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next || {};
  while (fast && fast.value !== slow.value && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast.value === slow.value) return true;
  }
  return false;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  if (!head) return null;

  let slow = head,
    fast = head,
    cycleLength = 0;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.value === fast.value) {
      cycleLength = calculateCycleLength(slow);
      break;
    }
  }
  return findStart(head, cycleLength);
};

function calculateCycleLength(node) {
  let current = node,
    cycleLength = 0;
  while (true) {
    current = current.next;
    cycleLength += 1;
    // because we know we're in a cycle,
    // we loop until we reach the beginning we can know the length of the loop (cycle)
    if (current === node) break;
  }
  return cycleLength;
}

function findStart(head, cycleLength) {
  let pointer1 = head,
    pointer2 = head;
  // move pointer2 ahead 'cycleLength' nodes
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// MinHeap
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // TODO: this doesnt make much sense
  // O(n) time | O(1) space
  buildHeap(array) {
    let firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  // O(log(n)) time | O(1) space
  siftDown(index, endIndex, heap) {
    let childOneIndex = index * 2 + 1; // will point to SOME child node, but maybe not left child
    while (childOneIndex <= endIndex) {
      let childTwoIndex = index * 2 + 2 <= endIndex ? index * 2 + 2 : -1;
      let indexToSwap;
      // childTwo is in range and smaller than child 1, so swap with that
      if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }

      if (heap[indexToSwap] < heap[index]) {
        this.swap(index, indexToSwap, heap);
        index = indexToSwap;
        childOneIndex = index * 2 + 1;
      } else {
        return;
      }
    }
  }

  // O(log(n)) time | O(1) space
  siftUp(index, heap) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && heap[index] < heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }

  // // O(log(n)) time | O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const returnVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return returnVal;
  }

  // O(log(n)) time | O(1) space
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap = this.heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
