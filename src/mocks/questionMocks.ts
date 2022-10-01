import { ReminderInterface } from '~/components/QuestionCard/QuestionCard';

const questionMocksLarge: [string, ReminderInterface][] = [];
for (let i = 0; i < 1000; i++) {
  questionMocksLarge.push([
    `${i}`,
    {
      name: `${i}`,
      timeStamp: new Date().toISOString(),
      daysBeforeReminder: String(Math.floor(Math.random() * 10)),
      url: `${i}`,
    },
  ]);
}

const questionMocks: [string, ReminderInterface][] = [
  [
    "'K' Closest Numbers ",
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '5',
      name: "'K' Closest Numbers ",
      notes:
        'Start by doing a binary search (start < end) to find the closest number in the sorted input.\nif arr[mid] === target, assign start to mid and break the loop.\nAfter the loop ends, make sure `start` isnt === arr.length, and decrement it by 1 if it is.\n\nThen in the main function, use a two pointer solution that initializes left/right to the `start` index.\n\nThe goal is to decrement left or increment right based on the absolute difference of target - `input[left - 1]` and `input[right + 1]` while right - left + 1 < k.\nBefore comparing the absolute differences, make sure left - 1 or right + 1 are in bounds, otherwise you need to increment/decrement the opposite end and `continue`.\nAfter the while loop ends (right - left + 1 < K), return arr.slice using the left and `right + 1` pointers.',
      timeStamp: '2022-09-27T19:41:57.422Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL',
    },
  ],
  [
    "'K' Closest Points to the Origin ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '20',
      name: "'K' Closest Points to the Origin ",
      notes:
        'build a helper function to calculate Euclidean Distance. \nNormally, this would be "distance^2 = (x2 - x1)^2 + (y2 -y1)^2" HOWEVER because we are comparing against the origin 0,0 we can just simplify our function to take in an x,y object and return x^2 + y^2.\n\nIn the main function, create a max heap that uses `euclideanHelper(a) > euclideanHelper(b)` for the comparison function.\n\nLoop over the input array up to the `k`th element and just insert into the maxHeap to populate the first k elements.\n\nThen, do a follow up for loop starting from k. IF the euclideanDistance of maxHeap.peek is greater than the current array element, remove from the maxHeap and insert the current array element.\n\nAt the end, populate a results array by removing from the Heap (or call some `.toArray` helper if you made one) and return the results.',
      timeStamp: '2022-09-28T18:57:48.369Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p',
    },
  ],
  [
    'Balanced Parentheses ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '16',
      name: 'Balanced Parentheses ',
      notes:
        "Create a helper Permutation class. Needs a string property, openCount property, and closedCount property.\n\nin main func, create an output arr and a queue. Loop while the queue.length > 0.\n\nEach loop, shift from the queue. \nIf the permutation.closeCount === num, push the perm.STRING into the output arr. \nif perm.openCount < num, push a new class into the queue while adding a '(' incrementing the openCount. \nDo the same for closeCount IF the openCount > closeCount on the individual perm.",
      timeStamp: '2022-09-27T02:19:06.670Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2',
    },
  ],
  [
    'Binary Tree Level Order Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '45',
      name: 'Binary Tree Level Order Traversal ',
      notes:
        'Push root node into a queue.\n`while queue.length`: store queue.length in variable `levelSize`. Create new array to hold values at this level of tree.\nNested loop while `i < levelSize`. Shift a node from queue, push the val into new array and push each left/right if theyre truthy.',
      timeStamp: '2022-08-25T07:26:02.876Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz',
    },
  ],
  [
    'Binary Tree Path Sum ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '30',
      name: 'Binary Tree Path Sum ',
      notes:
        'recursive solution:\n- if there is no root, return false\n- subtract root.val from sum\n- if sum === 0 AND there is no left/right node, return true since we found a leaf node where the sum added up to the initial target\n- return recursively, ie `return myFunc(leftNode, sum) || myFunc(rightNode, sum)`',
      timeStamp: '2022-09-19T23:36:35.467Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY',
    },
  ],
  [
    'Bitonic Array Maximum ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '12',
      name: 'Bitonic Array Maximum ',
      notes:
        'Normal binary search (while start < end), except there is no concrete target. \nYou perform the binary search by comparing arr[mid] < arr[mid + 1]. \nIf true, then we can only find a larger number by moving to the right. \nIf not, then we need to move left. \n\nEach iteration, reassign a `maxNum` variable if the current `arr[mid]` is larger.',
      timeStamp: '2022-09-24T21:00:34.400Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK',
    },
  ],
  [
    'Branch Sums',
    {
      categories: ['dfs'],
      daysBeforeReminder: '21',
      name: 'Branch Sums',
      notes:
        'recursive main function accepts a node, a sum = 0, and results = [].\nAdd the current nodes value to the sum.\nIf were a leaf node, push the sum into the results array.\nRecursively call the main function on left side if it exists.\nDo the same on the right side.\nreturn the results array.',
      timeStamp: '2022-09-24T03:25:52.697Z',
      url: 'https://www.algoexpert.io/questions/branch-sums',
    },
  ],
  [
    'Breadth-first Search',
    {
      categories: ['bfs'],
      daysBeforeReminder: '5',
      name: 'Breadth-first Search',
      notes:
        "Same as BFS on a binary tree.\nCreate a queue that contains `this`.\nLoop while the queue has length.\nEach iteration, shift from the queue and push the shifted name into the output array.\nThen loop over the shifted node's children and push them into the queue.\n\nTime: O(V + E), where V is the max # of vertices (nodes) and E is the max # of edges on a node. Could maybe be worded as O(N) where N is the total # of nodes in the graph\nSpace: O(V) since we have to be able to store all of an individuals nodes children in the queue",
      timeStamp: '2022-09-30T22:29:19.300Z',
      url: 'https://www.algoexpert.io/questions/breadth-first-search',
    },
  ],
  [
    'Bubble Sort',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Bubble Sort',
      notes:
        'Outer for loop `i` over the entire input.\nNested for loop `j` from 0 to input.length - i;\nif j > j + 1, swap.\nreturn the now-sorted array.',
      timeStamp: '2022-09-25T18:06:06.514Z',
      url: 'https://www.algoexpert.io/questions/bubble-sort',
    },
  ],
  [
    'Ceiling of a Number ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '25',
      name: 'Ceiling of a Number ',
      notes:
        'typical binary search, set `start = 0, end = arr.length - 1`. Loop while start <= end. For this problem, create a `returnIndex` variable and assign to -1.\n\nEach loop, assign `mid = Math.floor(start + (end - start) / 2).` If the arr[mid] > key, reassign returnIndex if the value is smaller than the value at the existing returnIndex.\n',
      timeStamp: '2022-09-16T20:28:41.977Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7',
    },
  ],
  [
    'Comparing Strings containing Backspaces',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '7',
      name: 'Comparing Strings containing Backspaces',
      notes:
        "create a helper function that accepts a string and index. \nInitialize a count variable to 0. \nLoop while the input index >= 0. \nIn the while loop, if string[index] is a '#', increment count. \nelse if count is > 0, decrement count. \nElse, return the index. \nOutside of that if/else-if/else, decrement index by 1 each loop. \nMake sure to return the index after the while loop in case you didnt hit the early return.\n\nBack in the main function, create 1 pointer for each input string, and make it point to that input string's length - 1 (last index). \nLoop while either pointer is >= 0. \n\nIn each loop, reassign the pointer by passing them and their associated string to the helper function. \nThen, if both pointers are below 0 then return true. \nElse if one pointer is below 0 but not the other, return false. \nElse if str1[i] !== str2[j], also return false. Then, decrement each pointer by 1.\nIf the while loop finishes, return true.",
      timeStamp: '2022-09-24T21:10:03.191Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl',
    },
  ],
  [
    'Conflicting Appointments ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '30',
      name: 'Conflicting Appointments ',
      notes:
        'Deceptively easy. \nSort the intervals based on their start time, and then loop over the sorted array. If arr[i].end > arr[i + 1].start, we have a conflict so we return false. \nAfter the loop ends, return true since we didnt find any conflicts',
      timeStamp: '2022-09-16T20:32:34.228Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG',
    },
  ],
  [
    'Connect All Level Order Siblings',
    {
      categories: ['bfs'],
      daysBeforeReminder: '30',
      name: 'Connect All Level Order Siblings',
      notes:
        'the best way to solve this one is to "cheat" by adding a next pointer to each node.\n\nBasically, do a normal BFS, nothing special. While processing each node in the queue, mutate its `.next` pointer to store to a `prev` pointer that is scoped outside the while loop. Thats it',
      timeStamp: '2022-09-05T20:23:02.511Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v',
    },
  ],
  [
    'Connect Level Order Siblings ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '20',
      name: 'Connect Level Order Siblings ',
      notes:
        'In the node class, make sure `.next` is a property and is initialized to `null` for all nodes. \nThen, BFS using a queue. \nLoop while the queue has elements in it.\n\nEach while loop, declare a `len` to measure the nodes at a level and declare `prev = null`. \nThen, do a nested while loop if len > 0.\n\nIn the nested while loop, shift from the queue. \nIf prev is truthy, assign prev.next to the current node. \nThen, reassign `prev` to the current node for the next loop. \nThen just push the left/right nodes if they exist, and decrement the length to proceed.',
      timeStamp: '2022-09-17T22:14:18.324Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03',
    },
  ],
  [
    'Connect Ropes ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '12',
      name: 'Connect Ropes ',
      notes:
        'Confusing wording. You need to create a min heap based on the input array, and then loop while the heap has at least 2 elements in it.\n\nEach loop, remove the 2 smallest elements and then add them together. Then, add the sum to a `result` variable that exists outside the loop. Then, re-add the sum to the minHeap.\n\nAt the end, return the `result` variable.',
      timeStamp: '2022-09-27T19:45:11.697Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0',
    },
  ],
  [
    'Cycle in a Circular Array',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '8',
      name: 'Cycle in a Circular Array',
      notes:
        "Make a helper function that gets the next index.\nIt accepts a currentIndex, an arr, and an `isForward` boolean that indicates whether we need to move forwards or backwards to be a valid cycle.\nIn the helper, create a `nextIndex` variable that is equal to (currentIndex + the value at the current index) MODULO the arr length to handle positively wrapping around. \n\nCheck if `arr[nextIndex] < 0` and compare against isForward boolean. \nIf isForward is true and arr[nextIndex < 0` is also true, then return -1 since we're going in opposite directions.\nif that check passes, check if `nextIndex < 0` due to negative values and add the arr.length to nextIndex to wrap around if so.\n\nLastly, if nextIndex equals the current index, then we have a one element cycle which doesnt satisfy our requirements so we return -1. Otherwise if all those other checks succeeded, we return the nextIndex.\n\nBack in the main function we perform a for loop over the entire input. \nIn each loop, we assign slow to `i` and fast to `helper(i)`. we pass our `isForward` variable based on whether the current array value is >=0. \n\nThen, do a nested while loop as long as slow !== fast.\nEach loop, reassign slow and fast to the getNextIndex return value. \nAfter the initial reassignment, check if either value is -1 and break if so.\nOtherwise, reassign fast again (recreating the fast.next.next pattern).\nAfter slow + fast are reassigned, if slow === fast return true.",
      timeStamp: '2022-10-01T00:42:58.467Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr',
    },
  ],
  [
    'Cyclic Sort ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '50',
      name: 'Cyclic Sort ',
      notes:
        'Create an iterator. While the iterator is less than the array length, do an in-place swap of the current element with its correct position IF the current position is incorrect',
      timeStamp: '2022-08-28T08:37:52.220Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY',
    },
  ],
  [
    'Depth-first Search',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '3',
      name: 'Depth-first Search',
      notes:
        "ensure the DFS function accepts a `node` argument with a default value of `this`.\nPush the node's name into the array of names, then loop over the children and invoke DFS recursively, ensuring you pass in the array.\nThen, return the array.",
      timeStamp: '2022-09-30T08:27:35.755Z',
      url: 'https://www.algoexpert.io/questions/depth-first-search',
    },
  ],
  [
    'Diameter of binary tree',
    {
      categories: [],
      daysBeforeReminder: '1',
      name: 'Diameter of binary tree',
      notes:
        'declare `diameter = 0`.\nThen declare a nested `dfs` function that accepts a node.\n\nThe nested function returns 0 if there is no node.\nElse, it sets `left` to `dfs(node.left)` and does the same for `right`.\nThen it does a Math.max on (diameter, left + right) since left + right === currDiameter.\nThen, it returns the `height` which is 1 + max(left, right).\n\nDont forget to invoke the nested function prior to returning `diameter` from the main func.',
      timeStamp: '2022-10-01T02:27:28.480Z',
      url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    },
  ],
  [
    'Dutch National Flag Problem ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '21',
      name: 'Dutch National Flag Problem ',
      notes:
        'create 3 variables, `low = 0`, `i = 0`, and `high = arr.length - 1`. The goal is to get all 0s BEFORE `low`, and all 2s AFTER `high`.\n\nwhile (i <= high), we need to handle 3 scenarios.\n\nThe first scenario is when arr[i] = 0. If we have 0, swap arr[i] and arr[low], then increment both low and i. \nThis helps us move all 0s before `low`.\n\nsecond if branch handles arr[i] = 2. In this branch, swap `i` and `high` elements and then decrement high.\nNotice that we dont increment `i` -- this is because we might now have a `0` at `i` which would need to be moved.\n\nlast `else` branch just increments `i`, since the 1s will naturally wind up in the middle of low and high.',
      timeStamp: '2022-09-27T19:49:31.645Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0',
    },
  ],
  [
    'Employee Free Time',
    {
      categories: ['heaps'],
      daysBeforeReminder: '2',
      name: 'Employee Free Time',
      notes:
        'create a helper class EmployeeInterval that accepts an interval, \nan employeeIndex (used to track which employee it is from the original array), and an intervalIndex (used to track which interval this is for the employee).\n\nIn the main function, create a MinHeap, where the compareFunc is based on `a.interval.start < b.interval.start`. \nLoop over the input schedule and insert a new EmployeeInterval(input[i][0], i, 0). \nThis will find gaps between any employees FIRST schedules \n(since one employee might have multiple schedules, we will process those later.\n\nThen, create a previousInterval variable that points to minHeap.peek().\n\nwhile the minHeap has length, remove from the minHeap and destructure the `currInterval`,\nthe `employeeIndex`, and `intervalIndex`. \nIF prevInterval.end < currInterval.start, then push a new interval into the results array based on `prev.end, popped.start`. \nOutside the `if` block, reassign prev to currInterval.\n\nStill within the while loop, look up the employeeSchedule via input[popped.employeeIndex] \nand save it to a variable. \nIf that employeeSchedule.length is greater than the popped intervalIndex + 1, then we\nstill have more intervals for the same employee to process so we insert another EmployeeInterval into the minHeap, \npassing in `employeeSchedule[intervalIndex + 1], employeeIndex, and intervalIndex + 1`.\n\nThat wraps up the while loop, so now you can return the result arr',
      timeStamp: '2022-09-30T03:19:41.588Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0',
    },
  ],
  [
    'Evaluate Expression',
    {
      categories: ['subsets'],
      daysBeforeReminder: '3',
      name: 'Evaluate Expression',
      notes:
        'Recursive approach that slowly breaks down each character to an individual number within an array, ie `[num]`.\n\nStart by declaring an output array.\nIF the current input is a number (isNaN(input) === false), then just push the string as a Number into the output.\n\nELSE, loop over each index in the string.\n\nIF the current character is not a number (isNaN(Number(input[i])) === true), then we have one of our symbols (+, -, *).\nrecursively call the main function on the left half of the string via str.substring(0, i) and the right half of the string (str.substring(i + 1).\nThis generates smaller `result` arrays.\n\nPerform a for loop over the left half, and a nested for loop over the right half.\nif the current character is a `+`, then push leftHalf[i] + rightHalf[j]. \nElse if ifs a `-`, do the same for subtraction.\nLastly, handle `*`.\n\nAt the end, return the result',
      timeStamp: '2022-09-27T19:32:57.303Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l',
    },
  ],
  [
    'Find Closest Value In BST',
    {
      categories: ['dfs'],
      daysBeforeReminder: '14',
      name: 'Find Closest Value In BST',
      notes:
        'Create a `curr` variable and a `closest` variable.\nLoop while `curr` is truthy.\nRecalculate closest each loop using Math.abs(target - val).\n\nIf the curr.value is less than the target, traverse left.\nElse, traverse right',
      timeStamp: '2022-09-23T06:22:06.207Z',
      url: 'https://www.algoexpert.io/questions/find-closest-value-in-bst',
    },
  ],
  [
    'Find all Duplicate Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '40',
      name: 'Find all Duplicate Numbers ',
      notes:
        'do an in-place sort. regardless of the starting point of the array, the correct index for a number will be the number - 1. So `correctIndex = nums[i] - 1`. Anytime `nums[i] !== nums[correctIndex]`, you swap them.\n\nThen, just do a for loop. Anytime nums[i] !== i + 1, we can push into the duplicates array since the most times a number will appear is twice.',
      timeStamp: '2022-09-17T23:50:57.359Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0',
    },
  ],
  [
    'Find all Missing Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '15',
      name: 'Find all Missing Numbers ',
      notes:
        'Sort input in place by looping over it. Assign `correctIndex = nums[i] - 1`. If the value at nums[correctIndex] !== nums[currIndex], swap them. Otherwise, the targetIndex is already filled correctly so we increment.\n\nAfter sorting, loop over the input and push whenever input[index] !== index + 1\n\nAfter sorting, loop over the input again and push any value that !== currIndex + 1',
      timeStamp: '2022-09-19T23:23:55.836Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK',
    },
  ],
  [
    'Find the Corrupt Pair',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '35',
      name: 'Find the Corrupt Pair',
      notes: 'typical in place cyclic sort. if nums[correctIndex] !== nums[i], swap.',
      timeStamp: '2022-09-17T22:20:14.331Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0',
    },
  ],
  [
    'Find the First K Missing Positive Numbers',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '13',
      name: 'Find the First K Missing Positive Numbers',
      notes:
        'Start by doing a cyclic sort IF the current element is greater than 0, i <= input.length, and the correct slot (nums[i] -1) isnt already filled by \nnums[i]. \nElse, just increment `i`.\n\nThen, create a Set to track the missing numbers that we add. \nStarting from 0, loop while `j` < input.length AND missingNumbers.length < k. \nAny time the current element !== j + 1 AND `j + 1` is not already present in the Set, push the j + 1 into the ouput array AND add the input[j] value into a Set. \n\nAfter the loop ends, create a counter = 1 + input.length. \nLoop while output.length < k. \nIn each loop, if our Set doesnt have `counter`, then we can safely add that to our missing numbers array. \nNo matter what, increment count on each loop.\n\nFinally, return the output array',
      timeStamp: '2022-10-01T01:16:24.579Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0',
    },
  ],
  [
    'Find the Median of a Number Stream ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '24',
      name: 'Find the Median of a Number Stream ',
      notes:
        'Create a Heap class that can be used for Min/max heaps.\n\nWithin the primary "MedianStream" class, initialize a `lowers` MAX heap (so that we can always see the greatest number of the smaller half of the stream, since it will be closest to the middle) as well as a greaters MIN heap (to track the smallest number of the greater half of the stream).\n\nwrite a rebalanceHeaps method that checks if either heap is more than 1 element larger than the other heap, and then performs `.insert` and `.remove` accordingly.\n\nwrite an updateMedian method based on average of the two `peek()` methods if the heaps are equal in length, otherwise its based on the `peek()` of the LONGER of the two heaps.\n\nthe insertNum method checks if lowers.length === 0 OR the numToInsert < lowers.peek() and then inserts into lowers if either of those are true.\nElse, it inserts into greaters. \nAfter inserting, it invokes rebalanceHeaps and then updateMedian.',
      timeStamp: '2022-09-28T02:36:28.701Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4',
    },
  ],
  [
    'Find the Missing Number ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '40',
      name: 'Find the Missing Number ',
      notes:
        'While `i < nums.length` loop to do an in place sort. let `target = nums[i]` -- swap each element that is in the wrong index IF the element is less than the array length. Else, just increment the iterator.\n\nOnce the array has been sorted, loop over it until the current element mismatches the index',
      timeStamp: '2022-08-26T22:09:07.364Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9',
    },
  ],
  [
    'Find the Smallest Missing Positive Number',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '20',
      name: 'Find the Smallest Missing Positive Number',
      notes:
        'poorly worded question. \nthe actual goal is to place each element in its "correct index" where the correctIndex is 1 less than the element. \nSo the correct index for the element 4 would be an index of 3. \nBasically, its the usual cyclic sort.\n\nWhen doing the actual in place sort, you skip swapping any number below 1 or >= input.length.\n\nOnce sorted based on the above criteria, loop and report the first number where the value !== index + 1',
      timeStamp: '2022-09-19T23:26:41.577Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM',
    },
  ],
  [
    'Fruits into Baskets ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '50',
      name: 'Fruits into Baskets ',
      notes:
        'Create a Map, and then do a sliding window `for` loop. \nIncrement the value in the map for the corresponding letter, and then do a `while` loop when the map.size > 2. \nAfter getting the map.size back to 2 or less, use Math.max to compare the previously recorded `maxFruits` against the current window size.',
      timeStamp: '2022-09-15T19:34:33.731Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ',
    },
  ],
  [
    'Happy Number ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '15',
      name: 'Happy Number ',
      notes:
        'All numbers eventually get stuck in a cycle. \nInitialize slow and fast pointers to `num`, and then loop while `true`.\nIncrement slow and fast using slow/fast pattern, and break the while loop if slow === fast or fast === 1.\nAfter the loop breaks, return fast === 1.\n\nCreate a helper function to actually do the squaring. \nThe helpers loops while (num >= 1). \nEach loop assign `digit = num % 10`, which will give you the LAST digit in the number. \nThen add digit * digit to `sum`. \nNext assign num to  `Math.floor(num /10)` to move "backwards" in the number.',
      timeStamp: '2022-09-27T19:58:54.273Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM',
    },
  ],
  [
    'Insert Interval ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '10',
      name: 'Insert Interval ',
      notes:
        'Requires 3 sequential loops. \nFirst loop to push things that dont overlap (i.end < new.start), 2nd loop to merge the overlapping intervals (i.start <= new.end), and 3rd loop to push remaining intervals.\n\ncreate an iterator variable. while arr[i] END time is less than the new interval START time, increment and push the current interval.\n\nThen, loop again while arr[i] START time is <= new interval end time AND i is less than the input length to build an overlapping interval. \nReassign `new interval.start` + `newInterval.end` based on a Math.min/max.\n\nOnce that 2nd while loop is done, push `newInterval` and then loop from `i` over the remaining input arr and push the remaining intervals.',
      timeStamp: '2022-09-23T17:53:49.603Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM',
    },
  ],
  [
    'Intervals Intersection ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '13',
      name: 'Intervals Intersection ',
      notes:
        "declare i=0, j = 0. \nWhile Loop over both arrays as long as i < a.length && j < b.length. \n\nEach loop, youre searching for an overlap. Overlap is when one intervals start time >= the other start time AND the start time is <= the other's end time.\n\nIf A overlaps B OR B overlaps A, push a new interval with start = Math.max(starts) and end = Math.min(ends).\n\nTo move forward, use ternary: A.end < b.end ? i += 1 : j += 1 at end of each loop.",
      timeStamp: '2022-09-29T18:55:00.549Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D',
    },
  ],
  [
    'Invert Binary Tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '21',
      name: 'Invert Binary Tree',
      notes:
        'Use a stack or queue to process the tree.\nEach iteration, swap the left and right nodes and then process the next level.',
      timeStamp: '2022-09-24T19:16:49.296Z',
      url: 'https://www.algoexpert.io/questions/invert-binary-tree',
    },
  ],
  [
    'Kth Largest Number in a Stream ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '15',
      name: 'Kth Largest Number in a Stream ',
      notes:
        'within the class constructor, initialize a minHeap with an empty array. \nThen, invoke a .forEach on the input within the constructor and call the `this.add()` function.\nWithin this.add, always insert the number being added. \nThen after inserting, invoke .remove() on the minHeap if the length is greater than our `k`. Then, return minHeap.peek().',
      timeStamp: '2022-09-28T02:44:59.447Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX',
    },
  ],
  [
    'Kth Smallest Number ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '40',
      name: 'Kth Smallest Number ',
      notes:
        'simplest: Sort the array and then return arr[k - 1] (since the 3rd largest element would be at index 2)\n\n"optimal": use a max heap to track the K smallest elements, inserting an element any time its smaller than maxHeap.peek and removing the old larger value',
      timeStamp: '2022-09-14T05:32:27.799Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G',
    },
  ],
  [
    'Kth Smallest Number in M Sorted Lists ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '27',
      name: 'Kth Smallest Number in M Sorted Lists ',
      notes:
        "Create a minHeap.\nLoop over the input arrays and insert a tuple in the form of [integer, index = 0, sourceArray].\nWe'll use the value in the tuple both for comparing within our maxHeap as well as the return value at the end.\nThe index helps us keep track of where we are within an individual array, and we'll increment it each time we re-push.\nThe source array is used so we can iterate through the array until we reach the kth smallest element amongst all arrays.\n\nloop while the minHeap has length and k - 1 > 0 (because we dont want to remove the kth element).\nEach loop, remove the min element and increment count.\nif the sourceArr has another element in it (index + 1 < sourceArr.length) then repush the tuple, while updating the value and index.\n\nAt the end, return the minHeap.peek()[0]",
      timeStamp: '2022-09-29T19:06:14.704Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/myAqDMyRXn3',
    },
  ],
  [
    'Laptop Rentals',
    {
      categories: ['heaps'],
      daysBeforeReminder: '14',
      name: 'Laptop Rentals',
      notes:
        'Easier Array solution: create one array to hold the start times, another to hold the end times. \nLoop over the input and push the start/end for each interval into the appropriate array. \nOnce that loop ends, sort both the arrays in ascending order.\n\nOnce both arrays are sorted, create a pointer index for the ends array and another for the starts array. \n\nPerform a while loop, `i < inputArr.length`. If `starts[i] >= ends[j]` increment j (this is metaphorically "freeing up" a laptop that was previously occupied). \nNo matter what, increment i on each loop.\n\nAfter the while loop ends, simply return i - j.\n\n---\nAlternative approach using a minheap:\n\nSort the input arr by start time in ascending order. \nCreate a new minheap where the comparison function relies on `a[1] - b[1]`, and make sure to pass in `inputArr[0]` during construction. \nMake sure the heap tracks a `.length` property\n\nThen, loop over the sorted input starting at index 1 (since we already passed in the first input to the minheap). \nEach loop, insert the current interval into the minheap. \nThen, if the current interval start time is greater or equal to the minHeap.peek end time, we can run `minHeap.remove()` since that means the laptop is no longer occupied.\n\nat the end, return the minheap.length. \nBasically, because we remove intervals as they free up, the # of elements in the heap represents the max # of laptops that are occupied',
      timeStamp: '2022-09-27T02:51:21.749Z',
      url: 'https://www.algoexpert.io/questions/laptop-rentals',
    },
  ],
  [
    'Level Averages in a Binary Tree ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '50',
      name: 'Level Averages in a Binary Tree ',
      notes: '',
      timeStamp: '2022-10-01T01:23:52.310Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW',
    },
  ],
  [
    'Level Order Successor ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '50',
      name: 'Level Order Successor ',
      notes:
        'Relies on BFS.\nStart with the root node in a queue, and shift from the queue on each loop.',
      timeStamp: '2022-09-28T19:09:28.695Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr',
    },
  ],
  [
    'LinkedList Cycle ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '50',
      name: 'LinkedList Cycle ',
      notes:
        'create two pointers starting from `head`. loop while and `fast && fast.next`. \nif values ever match, return true.\nIf loop ends, return false.',
      timeStamp: '2022-09-29T20:06:57.797Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D',
    },
  ],
  [
    'Longest Substring with Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '33',
      name: 'Longest Substring with Distinct Characters ',
      notes:
        'use a Set within a typical sliding window start/end loop. \nEach loop, start by removing elements from the Set if the current element is present in it. \nThen, add the current element after the while loop. \nThen use math.max to determine the longest length',
      timeStamp: '2022-09-17T22:25:43.110Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO',
    },
  ],
  [
    'Longest Substring with Same Letters after Replacement ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '7',
      name: 'Longest Substring with Same Letters after Replacement ',
      notes:
        'Use for loop + sliding window + frequency Map. \n\nTrack max repeating letter count in a variable, recalculate via Math.max in each loop. \nThen, IF the current window is bigger than maxRepeatingCharCount + k, slide the window. \nAt end of each for loop, Math.max `maxLengthSeen`',
      timeStamp: '2022-09-29T20:23:28.395Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR',
    },
  ],
  [
    'Longest Substring with maximum K Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '45',
      name: 'Longest Substring with maximum K Distinct Characters ',
      notes:
        'Create a Map to hold the frequency of each character.\nPerform a sliding window over the input string.\nTo shrink the window, loop while the Map.size is greater than the input `k`.\nWithin that loop, decrement the freq of the `start` character.\nIf the freq is === 0 after decrementing, deleting the character from the map.\nafter the while loop, reassign `longest` based on Math.max',
      timeStamp: '2022-09-29T20:30:07.648Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80',
    },
  ],
  [
    'Max Path Sum In Binary Tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '1',
      name: 'Max Path Sum In Binary Tree',
      notes:
        'Define a recursive helper function `findMaxSum` that accepts a node. \nThis function will always return a tuple in the format of [maxSumAsBranch, maxSumAsPath].\nThe base case when `node` is undefined will return [0, -Infinity].\n\nIn the helper, compute the values for the left node and right nodes by calling the helper recursively.\nThen, declare a `maxChildSumAsBranch` which is just a Math.max on the first value from the left and right tuples (the `maxSumAsBranch` for left/right).\n\nStill in the helper, declare a `maxSumAsBranch` via Math.max on curr.value + the maxChildSumAsBranch vs curr.value alone.\n\nThen declare a `maxSumAsRootNode` which is the Math.max of `leftMaxSumAsBranch + rightMaxSumAsBranch + node.value` vs `maxSumAsBranch`. \nThis is basically the value if we formed a "triangle" rather than an individual branch IF the triangle value was actually greater than the branch value.\nForming a triangle would make the current node the root, since the topmost node in the tree may not actually have the max path running through it.\n\nFinally, declare a `maxPathSum` which is the Math.max of leftPathSum vs rightPathSum vs maxSumAsRootNode.\n\nThen, just return a tuple containing [maxSumAsBranch, maxPathSum].\n\nIn the main function, invoke your helper and pass in the root node. \nreturn the 2nd value from the resulting tuple, which will be the max path sum',
      timeStamp: '2022-09-30T03:12:54.112Z',
      url: 'https://www.algoexpert.io/questions/max-path-sum-in-binary-tree',
    },
  ],
  [
    'Maximum CPU Load',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '10',
      name: 'Maximum CPU Load',
      notes:
        "Fastest space time approach relies on a MinHeap:\n\nSort the input on start time. \ndeclare a maxLoad and currentLoad variable = 0. Create a new MinHeap.\n\nFor loop over the entire input array. \nWithin that, do a nested while loop. \nWhile the minHeap length > 0 AND the current array element start time is greater or equal to the minHeap end time, pop the minHeap element and subtract the cpuLoad from `currentLoad`. \nOutside that while loop, push the current array element into the minHeap and increment currentLoad by the element's cpuLoad.\nFinally, reassign maxLoad based on math.max",
      timeStamp: '2022-09-27T02:14:49.222Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93',
    },
  ],
  [
    'Maximum Distinct Elements ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '14',
      name: 'Maximum Distinct Elements ',
      notes:
        'Goal is to output the # of distinct elements after deleting stuff.\n\nStart by setting the character frequencies in a Map by looping over the input. \nThen, create a minHeap that will be used to hold the non-distinct numbers in a `[freq, key]` tuple.\n\nCreate a `distinct` variable and set it to 0.\nLoop over the Map and if the frequency for a number is 1, increment `distinct`.\nElse, push the `[freq, int]` tuple into the minHeap.\n\nLoop while the minHeap has length and the input `k` elements to remove is > 0.\nEach loop, remove the top element from the heap and then decrement `k` by the frequency - 1.\nWe dont subtract the full frequency because an element is distinct if it has a count of 1, not a count of 0 (meaning we need to leave 1 element of it).\nif `k` is >= 0 after subtracting the frequency - 1, increment `distinct`.\n\nAfter the while loop ends, run another `if` block since we might have elements to remove still.\nSince each element is distinct at this point, just decrement `distinct` by `k` since that is the number of elements to remove still.\n\nFinally, return `distinct`',
      timeStamp: '2022-09-28T02:53:22.219Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY',
    },
  ],
  [
    'Maximum Sum Subarray of Size K ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '40',
      name: 'Maximum Sum Subarray of Size K ',
      notes: 'Because the window size is constant, you never need a while loop.',
      timeStamp: '2022-09-06T18:31:26.399Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP',
    },
  ],
  [
    'Merge Intervals ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '15',
      name: 'Merge Intervals ',
      notes:
        'Sort the array based on `interval.start`. Create a new start + end variables and initialize them based on `inputArr[0]`. \n\nLoop, and overwrite `end` IF intervals[i].start is lesser or equal to end. Else, push the existing start+end and reset them to intervals[i].\n\nAfter the loop ends, youll still have a `start` and `end` that needs to be pushed, so dont forget that.',
      timeStamp: '2022-09-28T03:02:24.073Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx',
    },
  ],
  [
    'Merge K Sorted Lists ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '8',
      name: 'Merge K Sorted Lists ',
      notes:
        'Create a minHeap. \nLoop over each list in the input array and insert the head of the linked list into the minHeap.\n\nCreate a `head` and `curr` variable.\nLoop while the minHeap has length.\nEach loop, remove a node and store it in a variable.\nIf there is no `head` created yet, assign `curr` to the removed object and then assign `head` to curr.\nElse, assign `curr.next` to the removed node and then reassign curr to curr.next.\n\nOutside the if/else but within the loop, if the `removed` has a truthy `next` value, push that next value back into the minHeap. This is how we wind up processing every node in each list.\n\nAfter the loop, return the `head`',
      timeStamp: '2022-09-25T19:08:08.569Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK',
    },
  ],
  [
    'Middle of the LinkedList ',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '45',
      name: 'Middle of the LinkedList ',
      notes: 'loop while (fast && fast.next). return `slow` after the while loop stops',
      timeStamp: '2022-08-25T07:28:44.635Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM',
    },
  ],
  [
    'Min Heap Construction',
    {
      categories: ['heaps'],
      daysBeforeReminder: '45',
      name: 'Min Heap Construction',
      notes: '',
      timeStamp: '2022-09-05T22:25:53.119Z',
      url: 'https://www.algoexpert.io/questions/min-heap-construction',
    },
  ],
  [
    'Minimum Depth of a Binary Tree ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '45',
      name: 'Minimum Depth of a Binary Tree ',
      notes:
        'Can be solved recursively using DFS or with a queue to perform a BFS. \n\nDFS approach:\nadd a `depth` argument to the main function and default it to `0`. If there is no root, return `Infinity`, otherwise add `1` to depth. If we have a lead node, return depth. Otherwise, return the minimum of dfs(left, depth) vs dfs(right, depth).\n\nBFS approach:\nDeclare a `depth` variable and assign to 0, then loop while queue.length > 0, and increment the "depth" variable every time you process a new level in the queue. Return that variable as soon as you find a leaf node (no `left` or `right`).',
      timeStamp: '2022-08-28T08:28:15.903Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO',
    },
  ],
  [
    'Minimum Difference Element ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '12',
      name: 'Minimum Difference Element ',
      notes:
        'Perform a typical binary (while l <= r) search and return if `arr[mid] === target`.\nElse, if arr[mid] < key, increment start.\nElse, decrement end.\nEach loop, recalculate a `min` variable based on the Math.abs of target - currEl vs target - min.\nAt the end, return `min`.\n\nALTERNATIVE APPROACH:\nIf the while loop finishes with no match, write an `if` statement to return the smaller of two expressions, arr[start] - key vs key - arr[end]. This works because start will === end + 1 after the while loop is done, so we know arr[start] is greater than arr[end], and so the one with the smaller difference is closer to key.',
      timeStamp: '2022-09-24T21:31:46.468Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9',
    },
  ],
  [
    'Minimum Window Sort',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '7',
      name: 'Minimum Window Sort',
      notes:
        'do a typical two pointer while loop using left and right pointers. \nIn the while loop, increment left if arr[left + 1] is > arr[left]. \nDecrement right using the same logic. \nIf both of those two pieces of logic are false, break the while loop. \nThis is used to find the MINIMUM subarray that needs to be sorted, but we then need to check if it needs to be expanded. \n\nBefore we go further though, return 0 if right <= left since it means the array is already sorted.\n\nNext, create a min and max variable to track the min/max in our subarray. \nLoop from left up to and including right, and recalculate min/max at each step.\n\nAfter looping to establish the min/max in the subarray, do a while loop as long as left > 0 and arr[left - 1] > min and decrement left each time.\nDo basically the same thing for right, except incrementing and checking against max.\n\nfinally, return right - left + 1 since thats the length of our subarray that needs to be sorted.',
      timeStamp: '2022-09-30T02:57:10.041Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6',
    },
  ],
  [
    'Next Letter ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '14',
      name: 'Next Letter ',
      notes:
        'typical binary search (start = 0, end = arr.length). \n\nWhile start < end, calculate middle (Math.floor(start + (end - start) / 2)). \nIf arr[mid] > key are greater, reassign end to mid. Otherwise, reassign start.\n\nAt the end, return letters[start % len] to handle cases where the key wasnt available and start went past the end.',
      timeStamp: '2022-09-28T19:01:31.371Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk',
    },
  ],
  [
    'Node Depths',
    {
      categories: ['dfs'],
      daysBeforeReminder: '40',
      name: 'Node Depths',
      notes:
        'Can be solved using a stack (kinda similar to BFS with a queue), or recurisvely with a 2 liner:\ndepth + recurse(left) + recurse(right)',
      timeStamp: '2022-09-27T02:03:42.995Z',
      url: 'https://www.algoexpert.io/questions/node-depths',
    },
  ],
  [
    'Number Of Binary Tree Topologies',
    {
      categories: ['subsets'],
      daysBeforeReminder: '2',
      name: 'Number Of Binary Tree Topologies',
      notes:
        "main function accepts `n` but also a `cache` that defaults to a value of `{0: 1}`.\nWe'll use the cache to avoid recalculating the different subtrees as we recurse.\n\nTo begin the function, check if our cache has a value for `n` and return it if present.\n\nDeclare a `numberOfTrees` variable = 0.\nLoop from 0 to n, and name the iterator `leftTreeSize`.\nWithin the loop, declare a `rightTreeSize` = n - 1 - leftTreeSize.\nThese 2 values dictate how we split our binary tree topology between left/right sides for any given value of n.\n\nDeclare numOfLeftTrees = recursiveFunction(leftTreeSize, cache).\nDo the same for numberOfRightTrees but use rightTreeSize.\nThen, multiply the return value of those two variables (left * right) and add it to the numberOfTrees.\nWe use multiplication to handle all possible variations of the topologies.\n\nFinally, store the numberOfTrees in our cache and then return it.",
      timeStamp: '2022-09-29T01:50:31.550Z',
      url: 'https://www.algoexpert.io/questions/number-of-binary-tree-topologies',
    },
  ],
  [
    'Number Range ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '21',
      name: 'Number Range ',
      notes:
        'create a helper function that will do the binarysearch. it take `arr, target, findMaxIndex` as args.\n\nThe helper uses the typical start/end variables, but also creates a `keyIndex = -1` variable which will be used to return the desired index. \nUnlike normal binary search once `arr[mid] === target` you reassign `keyIndex = mid` AND CONTINUE SEARCHING. \nif `findMaxIndex === true`, you search the greater part of the ascending array to try and find the LAST valid index (start = mid + 1). Otheriwse, you try to find the FIRST valid index (end = mid - 1). \nBasically, youre continuing your binary search past the first match in order to find the first or last index, based on findMaxIndex. \n\nWithin the main function, call your binary search helper with `findMaxIndex = false` in order to find the index to insert as `result[0]`. \nThen, repeat the call with `findMaxIndex = true` to find `result[1]` ONLY IF the initial function did not return an index of `-1` since -1 means there are no matches.',
      timeStamp: '2022-09-16T20:24:29.466Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz',
    },
  ],
  [
    'Order-agnostic Binary Search ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '14',
      name: 'Order-agnostic Binary Search ',
      notes:
        "declare start = 0, end = arr.length. \nAlso, determine whether the arr is ascending via `arr[end - 1] > arr[start]`.\n\ndo a typical binary search\n\nIn the while loop, return `mid` if arr[mid] === tartget`. \nWe also need an if/else based on whether we are ascending or not. \n\nIf we are ascending: if target < arr[mid], reassign end to `mid - 1`. Else, reassign start to `mid + 1`. If we're not ascending, do the same logic in reverse.",
      timeStamp: '2022-09-28T19:12:29.962Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO',
    },
  ],
  [
    'Pair with Target Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '60',
      name: 'Pair with Target Sum ',
      notes: 'Can be done in O(1) space.',
      timeStamp: '2022-09-24T21:25:34.917Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP',
    },
  ],
  [
    'Palindrome Check',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '45',
      name: 'Palindrome Check',
      notes:
        'point to the left and right ends of the string.\nLoop while left < right and compare the values at each pointer.\nreturn false if the values ever mismatch.\nIncrement left / decrement right each loop.\nReturn `true` after while loop ends.',
      timeStamp: '2022-09-24T19:20:22.079Z',
      url: 'https://www.algoexpert.io/questions/palindrome-check',
    },
  ],
  [
    'Palindrome LinkedList',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '4',
      name: 'Palindrome LinkedList',
      notes:
        'use fast/slow pointers to find the middle pointer (slow = middle).\n\nCreate a helper function that reverses a linked list and returns the head of the newly reversed list (should be the `prev` value of the reverse function). \nPass in the middle node (slow), and store the returned node in a variable.\nCreate another variable to copy that returned head so that we can reverse it again at the end.\nReset `slow` back to the original head. \n\nWhile `slow && reversed`, check if `slow.val !== reversed.val`. \nIf they mismatch, return false, otherwise increment both nodes to the `next` property.\n\nAfter the while loop, unreverse the list and return `true`.\nThere is no need to reconnect anything',
      timeStamp: '2022-10-01T01:45:13.672Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ',
    },
  ],
  [
    'Palindrome number',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '89',
      name: 'Palindrome number',
      notes: 'test2',
      timeStamp: '2022-10-01T02:32:19.539Z',
      url: 'https://leetcode.com/problems/palindrome-number/',
    },
  ],
  [
    'Path With Given Sequence ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '30',
      name: 'Path With Given Sequence ',
      notes:
        'recurse, but make sure you include a 3rd argument to track an index (default val = 0).\n\nif !root, return sequence.length === 0.\nif index >= sequence.length OR root.val !== sequence[index], return false.\nif its a leaf node AND index === sequence.length - 1, return true. Otherwise return func(left) || func(right).',
      timeStamp: '2022-09-13T22:35:10.366Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn',
    },
  ],
  [
    'Permutation in a String',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '28',
      name: 'Permutation in a String',
      notes:
        'Build a map from pattern. \nLoop over input string and decrement the counts anytime map[char] === 0. \nEach iteration where the window === length of pattern, drop the char at the windowStat and increment. \nreturn `true` if the `matched === patternMap.size` <-- NOTE that you compare the charsMatched against the map size, NOT against the pattern.length!',
      timeStamp: '2022-09-23T01:02:01.715Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D',
    },
  ],
  [
    'Permutations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '5',
      name: 'Permutations ',
      notes:
        "create an output array, and a permutations array. \npermutations starts with an empty array at index 0.\n\nfor loop over nums -- this loop will determine which num to insert into the permutation. \nEach loop, declare a `len` variable to store `permutations.length`.\n\nnested for loop starting from 0, where `(j < len)`, which will ensure that we dont try to shift\ntoo many elements per iteration of `i`. \nAll we do is shift() from permutations and save to a variable.\n\nAnother nested for loop (so we have 3 for loops total) starting from 0, where `k < shiftedPermutation.length + 1`.\nStart by copying the shifted permutation from the 2nd for loop -- can be done via array spread. \nThen, splice nums[i] into the permutation at the kth index. `splice(k, 0, nums[i]`.\n \nThis loop builds the next permutation by splicing `nums[i]` into the `k`th index of the permutation + 1. \nBasically, if the `perm` is [1], the `k` loop will create `[1,3]` and `[3, 1]`. \n\nIn the most nested loop, if the copied array length === nums.length, push it into the output array. \notherwise we're not done filling up the permutation, so push it into the pending permutations array.\n\n--- ALTERNATIVE recursive approach\ncreate a helper that accept an input array, an index, a currentPermutation, and an output array.\nif `index === input.length` then push the currentPermutation into the output array.\n\nOtherwise, loop from 0 to the currentPermutation length + 1.\ncreate a copy of the current permutation, then splice `i, 0, nums[index]`.\nThen recursively call the helper while passing the original input, incrementing the index, the new permutation, and the original output.\n\nIn the main function, declare an output array.\nCall the recursive helper while passing in the output, and then return the output array",
      timeStamp: '2022-09-28T03:09:07.837Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY',
    },
  ],
  [
    'Rearrange String ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '21',
      name: 'Rearrange String ',
      notes:
        "First, populate a Map with the character frequencies.\nThen, create a maxHeap.\nLoop over the map and insert each value/key combo into the maxHeap.\n\nDeclare 3 variables -- previousChar = '', previousFreq = 0, and an outputStr = ''.\nDo a while loop as long as the maxHeap has elements in it.\nIn each loop, remove the top element and store it in a variable within the loop.\nThen, if the previousChar (not the element you just removed in this loop) is defined and the previousFreq is greater than 0, push them back into the maxHeap.\nThe idea here is that we avoid removing/inserting the elements during a single loop, otherwise our output string will wind up with neighboring characters.\n\nAfter pushing the previous stuff back into the heap (if applicable), append the current character to the output string.\nThen, reassign previousChar to the current character, and the previousFreq to the current freq - 1.\n\n(idk if this step is needed) At the end, loop over the output string and check if the next character ever equals the current character.\nif so, return ''.\nOtherwise, after the loop ends just return the result string.",
      timeStamp: '2022-09-24T22:29:01.871Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xV7wx4o8ymB',
    },
  ],
  [
    'Rearrange String K Distance Apart',
    {
      categories: ['heaps'],
      daysBeforeReminder: '21',
      name: 'Rearrange String K Distance Apart',
      notes:
        "start by creating a Map and populating the character counts in it.\nThen, loop over the map and push a [frequency, char] tuple into a maxHeap.\n\nCreate an output string and a queue.\nLoop while the maxHeap has length.\nEach loop, remove the top tuple and append the character to the output string.\nThen, push the tuple into the queue WHILE decrementing the count by 1.\nAny time the queue.length === k, shift from the queue. If the shifted frequency is > 0, push the tuple back into the maxHeap.\n\nThe above logic is crucial -- because we WONT push elements back into the maxHeap if their frequency becomes 0, other elements may get stuck waiting in the queue. \nThats what we want!\nThis helps ensure that if we cant place elements `k` distance from each other, then we will run out of elements in our maxHeap (because some of the elements are stuck in the queue) and our while loop will break.\n\nAfter the while loop, check if the output.length === inputStr.length.\nIf not, return ''.\nAgain, this will happen if elements get stuck in the queue rather than fully emptying both the queue and maxHeap.\n\nAfter the length check, return the output string.",
      timeStamp: '2022-09-24T22:31:07.881Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE',
    },
  ],
  [
    'Rearrange a LinkedList',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '2',
      name: 'Rearrange a LinkedList',
      notes:
        "Start by creating a `reverse` helper function that reverses a list by taking in a single node as the argument.\n\nIn the main function, use fast/slow pointers to find the middle node. \nThen, use the `reverse` helper and store the returned value as something like `reversedHead`.\nDeclare another variable to clone `head`, and a `temp variable.\n\nLoop while `reversedHead && headClone`. \nin the loop, you're just pointing the node in `headFirstHalf.next` to the node at `reversedHead`, then reassigning `headFirstHalf` to its ORIGINAL .next value (which you needed to store in a `temp` variable before overriding the .next pointer). \nThen, do the same thing for the `reversedHead.next` pointers, where you reassign them to point to the node at `headFirstHalf` before reassigning `reversedHead` to its ORIGINAL .next value in the reversed list.\n\nAfter the while loop is over, if `headFirstHalf.next` is truthy make sure to reassign it to `null` since it is now the tail node of the modified list.\nFinally, return the original `head` input.",
      timeStamp: '2022-09-29T02:32:43.452Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW',
    },
  ],
  [
    'Remove Duplicates ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'Remove Duplicates ',
      notes:
        'declare `nextNonDuplicateSlot = 0. For loop -- each iteration, if arr[i] === arr[i + 1] then `continue`. \nOtherwise, reassign arr[nextNonDuplicateSlot] = arr[i] and increment nextNonDuplicateSlot. \n\nAt the end, return nextNonDuplicateSlot since it will be equal to the LENGTH of the non duplicate array.',
      timeStamp: '2022-09-23T01:54:27.243Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA',
    },
  ],
  [
    'Remove Duplicates From Linked List',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '7',
      name: 'Remove Duplicates From Linked List',
      notes:
        'Initialize a `curr` value equal to the head.\nLoop while curr is truthy.\nNested loop while curr.value === curr.next.value.\nReassign curr.next to curr.next.next.\n\nAfter that nested loop breaks, reassign curr to curr.next.\nReturn the original head at the end of everything',
      timeStamp: '2022-09-28T03:13:50.633Z',
      url: 'https://www.algoexpert.io/questions/remove-duplicates-from-linked-list',
    },
  ],
  [
    'Reverse Level Order Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '57',
      name: 'Reverse Level Order Traversal ',
      notes:
        'Use a queue to process the nodes. \nwhile queue.lenth, use a nested for loop to process the nodes for a given level of the tree.',
      timeStamp: '2022-10-01T02:03:46.634Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r',
    },
  ],
  [
    'Reverse a LinkedList ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '35',
      name: 'Reverse a LinkedList ',
      notes:
        'Assign a value to copy `head`, and assign `prev` to null. \nwhile `curr !==` null, do the reversal. \nAt the end, return `prev` since `curr` will not point to the right place',
      timeStamp: '2022-09-24T21:27:12.396Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9',
    },
  ],
  [
    'Reverse a Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '8',
      name: 'Reverse a Sub-list ',
      notes:
        "Do a while loop where `i = 1`, as long as `curr` is truthy and `i < p`. \nAfter the final iteration, `curr` will point to `p` .\nMake sure to track a `tailFirstHalf` variable the whole time as well.\n\nAlso create a variable to store `curr` since it will be the tail of our reversed list. \nWe'll reassign its `next` value to whatever `curr` is pointing to at the end of all the reversing.\n\nNext, reverse the nodes via while loop, `curr !== null && i <= q`. \n\nafter reversing, update `tailOfReversedList` to point to `curr` so that it reconnects with whatever remaining nodes are in the last part of the linked list. \n\nAlso, if tailOfFirstHalf !== null then reassign its `.next` value to `prev`. \nOtherwise, if it IS null then `head` is the first node in the reversed sublist, so we point the .next to head.next. \n\nreturn head.",
      timeStamp: '2022-09-29T20:36:28.113Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2',
    },
  ],
  [
    'Reverse every K-element Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '1',
      name: 'Reverse every K-element Sub-list ',
      notes:
        'let `curr = head` and `prev = null`.\nInfinite loop `while(true)`. \nWithin loop, create variable "tailOfPrevSubArr = prev" to store the node we need to connect after reversing the next subArr. \nAlso, create variables for `lastNodeOfSublist = curr`, `next = null`, and `i = 0`.\n\nnested while loop, curr !== null && i < k. \nreverse the nodes here: next = curr.next, curr.next = prev, prev = curr, curr = next, i + 1.\nafter the nested while loop, connect the PREVIOUS subarray with the new `prev` -- if tailOfPrevSubArr !== null, tailOfPrevSubArr.next = prev. \nOtherwise, head = prev.\n\nAfter above if/else, assign `lastNodeOfSublist.next = curr` to connect the end of the current sub array with the upcoming one.\n\nAt any point within larger `while` loop, if !curr then we break the loop. \nOtherwise, we end the while loop by assigning `prev` to `lastNodeOfSublist`.\n\nNOTE: drawing this out on paper will help it make more sense :)',
      timeStamp: '2022-09-30T04:05:55.076Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR',
    },
  ],
  [
    'Rotation Count',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '4',
      name: 'Rotation Count',
      notes:
        "we're basically searching for the smallest element, since that will mark the pivot\n\nwithin the while loop (start < end), if the middle element is greater than the element to its right, then return the middle index + 1 since the next element is the pivot. \n\nIf the middle element is less than the element to the left return mid since we found the pivot.\n\nIf neither of the above cases were true, then we just check if the left of `mid` is sorted via `arr[start] < arr[mid]`. \nIf true, then move to the right since the sorted part of the array wont pass either of our two checks above. \nElse, move to the left (since the right side is sorted) so we can find the element smaller than its neighbor.",
      timeStamp: '2022-09-30T03:02:12.645Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7nPmB8mZ6vj',
    },
  ],
  [
    'Search Bitonic Array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Search Bitonic Array',
      notes:
        "Make a helper function that uses Binary Search to find the max number's index in the bitonic array. \nThis can be done via normal binary search and looping while `start < end`. \nRather than checking for a target value, you just check if arr[mid] > arr[mid + 1].\nIf true, then reassign `end` to `mid. \nOtherwise reassign start to mid + 1.\nAt the end, return start.\n\nNext, create a helper function that can do an order agnostic binary search, and it accepts `arr, key, start, end` args. \nThe core logic is the same, but you have to determine if the input isAscending via arr[start] < arr[end - 1]. \nOnce thats determined, you do a typical binary search and move the start/end based on the usual check and then a nested check based on isAscending. \nIf at any point you find the target, return it, otherwise return -1 at the end.\n\nIn the main function, you can call the first helper to find the max index in the array. \nThen, you can call the order agnostic binary search on the first half below the maxIndex and then conditionally call the 2nd half above/including that max index if the first search returned -1.",
      timeStamp: '2022-10-01T01:41:27.226Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE',
    },
  ],
  [
    'Search in a Sorted Infinite Array ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '8',
      name: 'Search in a Sorted Infinite Array ',
      notes:
        'This one uses a normal binary search EXCEPT you first need to find the right range to search through.\n\nDeclare start = 0, end = 1. while `(reader[end] <= target)` reassign start to `end` to keep the search range small. \nThen just double `end` to bring in more numbers `end *= 2`. \nOnce the while loop ends, do a normal binary search',
      timeStamp: '2022-09-25T01:53:44.973Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2',
    },
  ],
  [
    'Shifted Binary Search',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Shifted Binary Search',
      notes:
        'modified binary search using `while start < end` loop.\n\nCalculate middle and return it if it contains the target element.\nnext we need to determine if arr[start] < arr[mid], which would indicate that everything left of mid is sorted in ascending order. \nIf so, then we check if the `target` is >= `start` and <= `mid`. \nIf true, we reassign end to mid. \nIf false, we need to move to the right of mid.\n\nIf arr[start] was NOT <= arr[mid], then the right half of the array after `mid` will be in ascending order. \nSo we first check if the target is > `mid` and <= `end` and if it is, we move the `start` to mid + 1. \nOtherwise, we move leftwards.\n\nReturn -1 in the main function if the while loop never finds a match.',
      timeStamp: '2022-09-30T22:50:31.877Z',
      url: 'https://www.algoexpert.io/questions/shifted-binary-search',
    },
  ],
  [
    'Single Cycle Check',
    {
      categories: [],
      daysBeforeReminder: '2',
      name: 'Single Cycle Check',
      notes:
        'Poorly worded.\nQuestion is only asking us to check the first element for a cycle, not every single index in the array.\n\nNaive solution involves creating an array or map and marking the indices you visit. \nThis costs space.\nAnother naive solution involves mutating the array as you visit each index, setting it to `null`.\nThis is mutative, so still not ideal.\n\nideal solution involves tracking how many indices weve visited, a `currIndex`, and the original index (0).\nLoop while `visited` < input.length.\nEach loop, check is visited > 1 AND `currIndex === originalIndex`. \nIf true, return false since we hit our starting index but didnt visit all other indices.\nOtherwise, increment `visited` and then reassign curr.\n(curr + input[curr]) % input.length;\nDo a nested while loop as long as curr <0 and add the input.length to curr each time so that we are positive.\nAfter the main while loop ends, return curr === 0 which will indicate that we made it back to our starting point.',
      timeStamp: '2022-09-30T22:15:57.409Z',
      url: 'https://www.algoexpert.io/questions/single-cycle-check',
    },
  ],
  [
    'Single Number ',
    {
      categories: ['xor'],
      daysBeforeReminder: '20',
      name: 'Single Number ',
      notes:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR\n\nWhen you XOR 0 against a number, youll always return the original number. And when you XOR a number against itself, the 32 bit representation will cancel out, returning 0. \n\nWith this in mind, you can initialize `result = 0` and then just loop over the arr, performing `result ^= arr[i]`. The end will result will be the only non-duplicate number, because all other numbers will have cancelled their bits out.',
      timeStamp: '2022-09-15T19:38:26.598Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG',
    },
  ],
  [
    'Smallest Subarray With a Greater Sum ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '45',
      name: 'Smallest Subarray With a Greater Sum ',
      notes:
        'typical sliding window, just add the current value to a running sum. `while sum >= target` recalculate a `minLength` before trying to shrink the window.',
      timeStamp: '2022-08-25T05:59:21.017Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ',
    },
  ],
  [
    'Smallest Window containing Substring',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '24',
      name: 'Smallest Window containing Substring',
      notes:
        'populate a map based on the pattern, then perform a typical sliding window.\n\nDuring sliding window using a for loop, mark a `charsMatched` variable anytime you decrement a count to 0 (never delete any of the characters, only adjust their counts). \n\nPerform a while loop within the main for loop, while (charsMatched === map.size). Attempt to reassign a `smallestStr` variable IF the variable is an empty string or the current window has a smaller length than the string stored in that variable. Then shorten the window and increment any necessary counts.\n\nReturn the `smallestStr` variable at the end.',
      timeStamp: '2022-09-23T03:00:04.006Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR',
    },
  ],
  [
    'Sort K-Sorted Array',
    {
      categories: ['heaps'],
      daysBeforeReminder: '30',
      name: 'Sort K-Sorted Array',
      notes:
        'Solution involves a single MinHeap, so start by building that out as a Class.\n\nWithin the main function, create a new MinHeap and pass in the input array UP TO the `k + 1` index (but not including it). \nThis can be done using array.slice(0, k + 1).\n\nDeclare an indexToInsertAt counter = 0. \nPerform a for loop, starting from k + 1. \nDuring each loop, remove an element from the minheap and insert it at `indexToInsertAt`. \nThen, increment indexToInsertAt. \nLastly, insert array[i] into the minHeap.\n\nOnce the first for loop ends, there will still be elements in the minHeap and the array will only be partially sorted. \nSo, do a while loop that ends when minHeap.peek() === null. \nDuring each loop, repeat the same steps you did in the first for loop but without inserting any new elements into the minHeap.\n\nOnce the while loop ends, the array should be sorted-in-place so just return it.',
      timeStamp: '2022-09-18T00:03:39.003Z',
      url: 'https://www.algoexpert.io/questions/sort-k-sorted-array',
    },
  ],
  [
    'Squaring a Sorted Array ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '40',
      name: 'Squaring a Sorted Array ',
      notes:
        'Create a new array via `Array(input.length)` and create an `indexToInsertAt` variable that points to the end of the array.\n\nuse two pointers left + right and then populate the array backwards by looping `while left <= right`. Since a squared number is always positive, you can just compare via `arr[left] * arr[left]` vs the same thing on the right',
      timeStamp: '2022-08-28T08:35:46.933Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R',
    },
  ],
  [
    'Start of LinkedList Cycle ',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '14',
      name: 'Start of LinkedList Cycle ',
      notes:
        'Create fast + slow pointer. \nLoop while `fast && fast.next` and break when fast and slow meet. \nThis lets us find a node in the cycle.\n\nCreate a cycleLength variable = 1.\nIncrement `fast` to `fast.next`.\nLoop while (slow !== fast) and increment cycleLength each time.\n\nFinally, point slow and fast back to `head`. \nIterate `fast`  by the length of the cycle. \n\nThen iterate both pointers 1 step at a time until they meet. \nReturn `slow`',
      timeStamp: '2022-09-17T22:08:43.646Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN',
    },
  ],
  [
    'String Anagrams',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '60',
      name: 'String Anagrams',
      notes: '',
      timeStamp: '2022-08-13T08:47:41.064Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM',
    },
  ],
  [
    'String Permutations by changing case ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '8',
      name: 'String Permutations by changing case ',
      notes:
        "CHECK THE GRAPHIC to understand the solution.\n\nDeclare an output array, and put the input string as the first element of the array.\n\nFor loop over the input string -- we'll use this to ensure we handle permutations at each index. \nIn each loop, use isNaN on input[i] and `continue` (skip current iteration) if isNaN returns false so that we dont try to lowercase a number.\n\nWithin the loop, declare a `len = output.length` variable. \nThen, do a for loop starting from `0` while `j < len`. \nWhat we are doing here is creating new permutations based on existing permutations. \n\nIn the nested for loop, use `.split('')` on `output[j]` to copy the existing permutation as an array (because strings are immutable in JS). \nThen, just test if the splitStr[i] is lowercase -- if it is, reassign copy[i] to uppercase, else reassign to lowercase. \n`.join('')` the array and push the permutation back into the output array.",
      timeStamp: '2022-09-25T01:30:53.604Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P',
    },
  ],
  [
    'Structurally Unique Binary Search Trees',
    {
      categories: ['subsets'],
      daysBeforeReminder: '2',
      name: 'Structurally Unique Binary Search Trees',
      notes:
        'in the main function, if the `input` is <= 0, return [].\nOtherwise, call a recursive helper, passing in `1` for the start and `input` as the `end`.\nReturn the `length` of the array returned by the helper.\n\nThe recursive helper accepts a `start` and `end` argument, which it will use to generate valid binary trees.\n\nfor the base case, if `start > end` return [null].\n\nPast the base case, for loop from start to `end + 1`.\nCreate the leftSubtree by calling the recursive function on (start, `i - 1`).\nCreate the rightSubtree by calling the recursive function on (`i + 1`, end).\nWhat this does is create all possible valid binary trees below the current node with a value of `i`. start to `i - 1` creates all combinations of nodes on the left, and `i + 1 to end` does the same for the right.\n\nAfter generating the subtrees, loop from `0` over the leftSubtrees and then nested loop from 0 over the rightSubtrees.\nIn the most nested loop, push a new TreeNode into the output array, in the form of:\n{value: i, leftChild: leftSubtrees[l], rightChild: rightSubtrees[r]}.\nThis output array now contains all possible binary trees where `i` is the root node, and then we have our various tree shapes on the left and right.\n\nReturn `result` from the recursive function, since the output array contains all possible trees and so the length will equal all possible topologies.',
      timeStamp: '2022-09-29T01:35:57.832Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9',
    },
  ],
  [
    'Subsets ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '14',
      name: 'Subsets ',
      notes:
        'DOESNT USE A QUEUE. Just create an output array that contains an empty array, ie `[ [ ] ]`.\n\nPerform a for loop over the input. This loop will be responsible for pushing the current number to the end of each copied array.\nThen, do a nested while loop starting from 0, `while (j < n)` where n = output.length.\nWe start the nested loop from 0 each time so we can generate subsets that are copies of the empty array + each input number.\nWithin each while loop, copy the array @ `output[j]` and then push `input[i]` into the copy. then push the copied array back into the subsets.',
      timeStamp: '2022-09-23T19:23:53.685Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG',
    },
  ],
  [
    'Sum of Elements ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '9',
      name: 'Sum of Elements ',
      notes:
        'Create a maxHeap and pass in the input array.\nCreate an iterator variable = 0, as well as a `sum`.\nLoop while the maxHeap has length and iterator > k1.\neach loop, remove from the heap and save to a variable.\nIf `i` is < k2, then add the popped number to the running sum.\nDecrement `i` each loop.\nreturn `sum` at the end\n\nALTERNATIVE:\nInsert all the numbers into a minHeap, then remove the first `k1` numbers by looping while k1 > 0.\nEach loop decrement both k2 and k1.\n\nThen, initialize a `sum` to 0 and loop while `k2 - 1 > 0`. \nEach loop, remove from the heap and add it to the sum while decrementing k2.\nReturn the sum',
      timeStamp: '2022-09-28T03:23:45.704Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67',
    },
  ],
  [
    'Sum of Path Numbers ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '14',
      name: 'Sum of Path Numbers ',
      notes:
        'function should take in a node and a sum arg, where sum defaults to `0`. \nIf there is no node, return 0. \nOtherwise, reassign sum to (sum * 10) + node.value to achieve a "concatenating number".\n\nIf its a leaf node, return sum. Otherwise, recursively return func(left, sum) + func(right, sum)',
      timeStamp: '2022-09-16T21:33:27.427Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69',
    },
  ],
  [
    "Top 'K' Frequent Numbers ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '35',
      name: "Top 'K' Frequent Numbers ",
      notes:
        'Create a Heap class.\n\nIn the main function create a Map. \nLoop over the input array and set the counts of each number in the Map.\n\nThen, create a maxHeap. Loop over the Map itself using `forEach`, and push a tuple containing [frequency, integer] into the minHeap. \nIf the minHeap length becomes > k just break the while loop to avoid adding unnecessary tuples.\n\nAfter the while loop, create an output array. \n\nWhile the minHeap has length and k > 0, remove from it and insert the 2nd value of each tuple so we have a list of the most frequent integers. decrement k on each loop',
      timeStamp: '2022-09-27T02:25:14.158Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J',
    },
  ],
  [
    "Top 'K' Numbers ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '28',
      name: "Top 'K' Numbers ",
      notes:
        'Create a min heap, passing in `input.slice(0, k)` to build it. \nThen, loop over the input starting from k and if the current element is greater than  `minHeap.peek()`, remove from the minHeap and then insert the current element.\n\nAt the end, you can either invoke a `.toArray` helper if you build one into the Heap, otherwise you can just use a for loop to remove the elements.',
      timeStamp: '2022-09-13T22:31:39.616Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0',
    },
  ],
  [
    'Triplet Sum Close to Target ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '26',
      name: 'Triplet Sum Close to Target ',
      notes:
        'sort input array.\n\nlet `closestSum = Infinity`. For loop, and skip any duplicates.\n\nwhile loop, if `curr === target` return curr. Otherwise, recalculate closestSum by using Math.abs to compare `targetSum - currSum vs targetSum - closestSum.` \ndont forget to conditionally choose the smaller. sum of the two if the diff is identical.\n\nreturn closestSum',
      timeStamp: '2022-09-20T20:37:02.510Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA',
    },
  ],
  [
    'Triplet Sum to Zero ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '35',
      name: 'Triplet Sum to Zero ',
      notes:
        'Sort input arr. Then for loop. if `nums[i] === nums[i - 1] continue` so that you skip duplicates.\n\nNested while loop using two pointers. if `curr + arr[l] + arr[r] === 0` push them into output array AND incremenet l / decrement r AND do nested while loops until `left !== l - 1` and `right !== r + 1`.  ',
      timeStamp: '2022-09-14T00:42:21.378Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r',
    },
  ],
  [
    'Triplets with Smaller Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '20',
      name: 'Triplets with Smaller Sum ',
      notes:
        'similar to 3sum, except if `currSum < target` you increment `matches` by `right - left` and THEN increment left ONLY.\nThis works because any numbers BETWEEN left and right after sorting MUST also create a sum that is less than the target.\nWe can simplify the act of decrementing "right" for all those numbers since we already know they match. \nHowever, we still need to increment `left` in order to generate `(left +1) + [all potential rights]` since this problem isnt concerned with unique sums, only unique index combinations. ',
      timeStamp: '2022-09-14T17:45:34.326Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO',
    },
  ],
  [
    'Two Single Numbers ',
    {
      categories: ['xor'],
      daysBeforeReminder: '5',
      name: 'Two Single Numbers ',
      notes:
        'start by initializing a variable to 0. Then loop over the input right and XOR that variable by each number in the arr.\n\nNext, declare `rightMostBit = 1` so we can use the bitwise AND operator (&) on it.\n\nwhile( (rightMostBit & xor) === 0), aka the rightMostBit and the xor have the same bits in each position --> reassign rightMostBit to `rightMostBit << 1`, which shifts each bit in the 32bit representation of rightMostBit to the left by 1.\n\nFinally, declare `num1` and `num2`. Do another loop over the input array. In the loop, if `arr[i] & rightMostBit !== 0` then the bit is set, so we can perform num1 ^= num. Else, the bit is not set so we can perform `num2 ^= num`. This is basically performing the same "single number" algo on each number by using distinct bits.',
      timeStamp: '2022-08-19T04:34:04.362Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm',
    },
  ],
  [
    'Unique Generalized Abbreviations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '10',
      name: 'Unique Generalized Abbreviations ',
      notes:
        'Create an AbbreviatedWord class that will be a helper. \nIt accepts a string, `nextIndex`, and `replacedLetters` to track how many letters have been replaced.\n\nIn the main function, create an output array and a queue. \nThe queue should contain one element, a new AbbreviatedWord that receives an empty string, 0, and 0.\n\nLoop while there are elements still in the queue. \nEach while loop, shift an element from the queue. \nIF that elements `nextIndex` is equal to input.length, do a nested if checl:\nif the elements `replacedLetters` is greater than 0, \nappend the `replacedLetters` to the current string without pushing the result. \nThen, regardless of whether the replacedLetters was appended or not, push the string into the output array.\n\nELSE, if the nextIndex didnt equal the input length, push a new abbreviation into the queue that passes the existing string but increments `nextIndex` AND `replacedLetters`, indicating that we have replaced a letter. \n\nStill within the else block, if the replacedLetters is greater than 0, add the replacedLetters to the current string. \n(This is how we get strings like `c2e` from the string `code`.)\nThen, append the character from the input string @ nextIndex, so `str += word[abrev.nextIndex]`. \nFinally, push a new abbreviation by passing in the current string, incrementing nextIndex, and resetting count to 0.\n\nAfter processing queue, return the results',
      timeStamp: '2022-10-01T01:28:59.009Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN',
    },
  ],
  [
    'Validate Subsequence',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '10',
      name: 'Validate Subsequence',
      notes:
        'Create an `indexToMatchAgainst` variable initialized to 0.\nLoop over the main array and compare each letters against the subsequenceArray[indexToMatchAgainst].',
      timeStamp: '2022-09-28T03:26:04.699Z',
      url: 'https://www.algoexpert.io/questions/validate-subsequence',
    },
  ],
  [
    'Words Concatenation',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '4',
      name: 'Words Concatenation',
      notes:
        'create a Map to record the frequency of each WORD (not letter) in the input array.\nThen, loop over the input array to populate the map with word counts.\n\ncreate an output array that will contain the valid indices we find.\n\nPerform a for loop that ends when i < str.length - words.length * words[0].length + 1. \nThis helps us avoid iterating over the part of the input string where the substrings we\'ll create cannot possibly fit the full length of a string necessary to match the input array.\n\nDuring each iteration of the for loop, create a new Map that will hold the frequency of each substring we create. \nThen, do another for loop where `j` starts at 0 and ends when `j < inputArr.length`. \n\nWithin the nested for loop, create a `nextWordIndex` variable that is equal to `i + j * inputArr[0].length`. \nThis tells us the index for our next substring since each word is equal in length.\n\nOnce nextWordIndex is set, create a new variable to hold `inputString.subString(nextWordIndex, nextWordIndex + inputArr[0].length` to create the next substring.\n\nOnce we have the next substring, try to retrieve it from the "wordCounts" Map based on the input arr. \nif the substring isnt present, break the nested loop. \n\nAssuming it is present, set the substring into the substringCounts Map created during the main for loop. \nThen, compare the count at that map versus the count in the main map to see if we have seen the word too many times during this nested loop. \nIf we have too high of a frequency, break the loop.\n\nFinally, within the nested loop we can push `i` (the start of a valid substring) IF j + 1 === words.length because we reached the end of the j loop and didnt have to break for any reason.\n\nIn the main function, just return the results once the main for loop ends.\n---\nConsider this case\na) s.length = 10 -->(0-9 indexes) and\nb) given words[] = {"aa", "aa", "aa"}....\nc) The total length of substring is (3 words * 2 char len each) = 6.\n\nSo when searching for subString in \'s\' the window should contain at least 6 chars.\nSo possible start positions of subString in \'s\' are 0,1,2,3,4 only. From 5th position, there are only 5 chars or less to search...\nSo no point searching sections of \'s\' which have insufficient number of chars to required to find the subString\n+1 is required because array indexes start from 0 and not 1... an array of length 5 has index 0-4',
      timeStamp: '2022-09-28T03:33:05.986Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O',
    },
  ],
  [
    'Zigzag Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '30',
      name: 'Zigzag Traversal ',
      notes:
        'Typical BFS except you track a boolean to determine if youre going left or right. \n\nBased on that boolean, you either PUSH (truthy) `curr.value` into the `currLevel` array, or you UNSHIFT (falsey) into it. Flip the boolean on each level',
      timeStamp: '2022-09-06T00:10:52.232Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0',
    },
  ],
  [
    'two-sum',
    {
      categories: [],
      daysBeforeReminder: '21',
      name: 'Two sum',
      notes:
        'create a hashmap to store the sums we find.\nLoop over the input.\nEach loop, define a `match` that is equal to the target minus our current number.\nif the hashmap[match] is not undefined, return the current index and hashmap[match].\nOtherwise, store the current number and the index in our sums, ie hashmap[currNum] = i.',
      timeStamp: '2022-09-24T21:23:36.226Z',
      url: 'https://leetcode.com/problems/two-sum/',
    },
  ],
];

export default {
  questionMocks,
  questionMocksLarge,
};
