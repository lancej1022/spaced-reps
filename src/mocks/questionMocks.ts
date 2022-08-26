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
    "'K' Closest Points to the Origin ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '21',
      name: "'K' Closest Points to the Origin ",
      notes:
        'build a helper function to calculate Euclidean Distance. \nNormally, this would be "distance^2 = (x2 - x1)^2 + (y2 -y1)^2" HOWEVER because we are comparing against the origin 0,0 we can just simplify our function to take in an x,y object and return x^2 + y^2.\n\nIn the main function, create a max heap that uses `euclideanHelper(a) > euclideanHelper(b)` for the comparison function.\n\nLoop over the input array up to the `k`th element and just insert into the maxHeap to populate the first k elements.\n\nThen, do a follow up for loop starting from k. IF the euclideanDistance of maxHeap.peek is greater than the current array element, remove from the maxHeap and insert the current array element.\n\nAt the end, populate a results array by removing from the Heap (or call some `.toArray` helper if you made one) and return the results.',
      timeStamp: '2022-08-25T18:18:27.507Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p',
    },
  ],
  [
    'Balanced Parentheses ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '1',
      name: 'Balanced Parentheses ',
      notes:
        "Create a helper Permutation class. Needs a string property, openCount property, and closedCount property.\n\nin main func, create an output arr and a queue. Loop while the queue.length > 0.\n\nEach loop, shift from the queue. \nIf the permutation.closeCount === num, push the perm.STRING into the output arr. \nif perm.openCount < num, push a new class into the queue while adding a '(' incrementing the openCount. \nDo the same for closeCount IF the openCount > closeCount on the individual perm.",
      timeStamp: '2022-08-25T20:58:35.249Z',
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
      timeStamp: '2022-08-20T18:31:26.807Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY',
    },
  ],
  [
    'Bitonic Array Maximum ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '2',
      name: 'Bitonic Array Maximum ',
      notes:
        'Normal binary search (while start <= end), except there is no concrete target. You perform the binary search by comparing arr[mid] > arr[mid + 1]. If greater, then we need to move to the left. If not, then we can still find a larger number moving to the right. Each iteration, reassign a `maxNum` variable if the current `arr[mid]` is larger.',
      timeStamp: '2022-08-21T23:23:54.683Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK',
    },
  ],
  [
    'Ceiling of a Number ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '14',
      name: 'Ceiling of a Number ',
      notes:
        'typical binary search, set `start = 0, end = arr.length - 1`. Loop while start <= end. For this problem, create a `returnIndex` variable and assign to -1.\n\nEach loop, assign `mid = Math.floor(start + (end - start) / 2).` If the arr[mid] > key, reassign returnIndex if the value is smaller than the value at the existing returnIndex.\n',
      timeStamp: '2022-08-07T05:56:40.926Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7',
    },
  ],
  [
    'Comparing Strings containing Backspaces',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '5',
      name: 'Comparing Strings containing Backspaces',
      notes:
        "create a helper function that accepts a string and index. Initialize a count variable to 0. Loop while the input index >= 0. In the while loop, if string[index] is a '#', increment count. else if count is > 0, decrement count. Else, return the index. Outside of that if/else-if/else, decrement index by 1 each loop. Make sure to return the index after the while loop in case you didnt hit the early return.\n\nBack in the main function, create 1 pointer for each input string, and make it point to that input string's length - 1 (last index). Loop while either pointer is >= 0. \n\nIn each loop, reassign the pointer by passing them and their associated string to the helper function which will handle any backspace logic. Then, if both pointers are below 0 then return true. Else if one pointer is below 0 but not the other, return false. Else if str1[i] !== str2[j], also return false. Then, decrement each pointer by 1.\nIf the while loop finishes, return true.",
      timeStamp: '2022-08-15T21:51:48.631Z',
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
        'Deceptively easy. Sort the intervals based on their start time, and then loop over the sorted array. If arr[i].end > arr[i + 1].start, we have a conflict so we return false. After the loop ends, return true since we didnt find any conflicts',
      timeStamp: '2022-08-18T00:31:05.156Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG',
    },
  ],
  [
    'Connect All Level Order Siblings',
    {
      categories: ['bfs'],
      daysBeforeReminder: '5',
      name: 'Connect All Level Order Siblings',
      notes:
        'the best way to solve this one is to "cheat" by adding a next pointer to each node.\n\nBasically, do a normal BFS, nothing special. While processing each node in the queue, mutate its `.next` pointer to store to a `prev` pointer that is scoped outside the while loop. Thats it',
      timeStamp: '2022-08-19T06:44:10.828Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v',
    },
  ],
  [
    'Connect Level Order Siblings ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '21',
      name: 'Connect Level Order Siblings ',
      notes:
        'In the node class, make sure `.next` is a property and is initialized to `null` for all nodes. Then, BFS using a queue. Loop while the queue has elements in it.\n\nEach while loop, declare a `len` to measure the nodes at a level and declare `prev = null`. Then, do a nested while loop if len > 0.\n\nIn the nested while loop, shift from the queue. If prev is truthy, assign prev.next to the current node. Then, reassign `prev` to the current node for the next loop. Then just push the left/right nodes if they exist, and decrement the length to process.',
      timeStamp: '2022-08-20T18:27:17.899Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03',
    },
  ],
  [
    'Connect Ropes ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '7',
      name: 'Connect Ropes ',
      notes:
        'Confusing wording. You need to create a min heap based on the input array, and then loop while the heap has at least 2 elements in it.\n\nEach loop, remove the 2 smallest elements and then add them together. Then, add the sum to a `result` variable that exists outside the loop. Then, re-add the sum to the minHeap.\n\nAt the end, return the `result` variable.',
      timeStamp: '2022-08-25T18:29:50.321Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0',
    },
  ],
  [
    'Cycle in a Circular Array',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '3',
      name: 'Cycle in a Circular Array',
      notes:
        'Make a helper function that gets the next index. It accepts a currentIndex, an arr, and an `isForward` boolean that indicates whether we need to move forwards or backwards to be a valid cycle.\n\nIn the helper, create a `nextIndex` variable that is equal to the currentIndex + the value at the current index (arr[currentIndex]) MODULE the arr length to handle positively wrapping around. \n\nThen create a `direction` variable, which is the boolean value of arr[nextIndex] >= 0. Check if the direction matches the isForward boolean and return -1 if so. Past that, if `nextIndex < 0` due to negative values, add the arr.length to nextIndex to wrap around the back of the array. \n\nLastly, if nextIndex equals the current index, that we have a one element cycle which doesnt satisfy our requirements so we return -1. Otherwise if all those other checks succeeded, we return the nextIndex.\n\nBack in the main function we perform a for loop over the entire input. In each loop, we create our `isForward` variable based on whether the current array value is >=0. We also create a fast and slow pointer equal to `i`.\n\nWithin the for loop, do an infinite loop `while(true)`. In the while loop, reassign slow and fast to the return value of your helper function. YOU CANNOT immediately pass the new `fast` value to the helper again -- you have to check if fast !== -1 and only recall the helper if that check is true.\n\nThen, if slow or fast are -1, break the while loop. Otherwise, if slow === fast then return true.\n\nOutside the loops, return false if we havent returned true yet',
      timeStamp: '2022-08-17T05:31:42.066Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr',
    },
  ],
  [
    'Cyclic Sort ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '26',
      name: 'Cyclic Sort ',
      notes:
        'Create an iterator. While the iterator is less than the array length, do an in-place swap of the current element with its correct position IF the current position is incorrect',
      timeStamp: '2022-07-27T05:48:26.524Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY',
    },
  ],
  [
    'Dutch National Flag Problem ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '1',
      name: 'Dutch National Flag Problem ',
      notes:
        'create 3 variables, `low = 0`, `i = 0`, and `high = arr.length - 1`. The goal is to get all 0s BEFORE `low`, and all 2s AFTER `high`.\n\nwhile (i <= high), we need to handle 3 scenarios.\n\nThe first scenario is when arr[i] = 0. If we have 0, swap arr[i] and arr[low], then increment both low and i. \nThis helps us move all 0s before `low`.\n\nsecond if branch handles arr[i] = 2. In this branch, swap `i` and `high` elements and then decrement high.\nNotice that we dont increment `i` -- this is because we might now have a `0` at `i` which would need to be moved.\n\nlast `else` branch just increments `i`, since the 1s will naturally wind up in the middle of low and high.',
      timeStamp: '2022-08-25T20:44:18.656Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0',
    },
  ],
  [
    'Employee Free Time',
    {
      categories: ['heaps'],
      daysBeforeReminder: '3',
      name: 'Employee Free Time',
      notes:
        'create a helper class EmployeeInterval that accepts an interval, an employeeIndex (used to track which employee it is from the original array), and an intervalIndex (used to track which interval this is for the employee).\n\nIn the main function, create a MinHeap, where the compareFunc is based on `a.interval.start < b.interval.start`. Loop over the input schedule and insert a new EmployeeInterval(input[i][0], i, 0). This will find gaps between any employees FIRST schedules (since one employee might have multiple schedules, we will process those later.\n\nThen, create a `popped` variable and a previousInterval variable that points to minHeap.peek().\n\nwhile the minHeap has length, remove from the minHeap and assign it to `popped`. IF prevInterval.end < popped.start, then push a new interval into the results array based on `prev.end, popped.start`. Then, reassign prev to popped.interval.\n\nElse if prev.end < popped.end then we have an overlaping interval, so we reassign prev to the popped interval (???)\n\noutside of the above if/else if, look up the employeeSchedule via input[popped.employeeIndex and save it to a variable. If that employeeSchedule.length is greater than the popped intervalIndex + 1, then we still have more intervals for the same employee to process so we insert another EmployeeInterval into the minHeap, passing in `employeeSchedule[popped.intervalIndex + 1], employeeIndex, and popped.intervalIndex + 1.\n\nThat wraps up the while loop, so now you can return the result arr',
      timeStamp: '2022-08-20T01:52:01.604Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0',
    },
  ],
  [
    'Find all Duplicate Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '30',
      name: 'Find all Duplicate Numbers ',
      notes:
        'do an in-place sort. regardless of the starting point of the array, the correct index for a number will be the number - 1. So `correctIndex = nums[i] - 1`. Anytime `nums[i] !== nums[correctIndex]`, you swap them.\n\nThen, just do a for loop. Anytime nums[i] !== i + 1, we can push into the duplicates array since the most times a number will appear is twice.',
      timeStamp: '2022-08-19T04:57:02.506Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0',
    },
  ],
  [
    'Find all Missing Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '14',
      name: 'Find all Missing Numbers ',
      notes:
        'Sort input in place by looping over it. Assign `correctIndex = nums[i] - 1`. If the value at nums[correctIndex] !== nums[currIndex], swap them. Otherwise, the targetIndex is already filled correctly so we increment.\n\nAfter sorting, loop over the input and push whenever input[index] !== index + 1\n\nAfter sorting, loop over the input again and push any value that !== currIndex + 1',
      timeStamp: '2022-08-07T06:12:40.556Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK',
    },
  ],
  [
    'Find the Corrupt Pair',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '30',
      name: 'Find the Corrupt Pair',
      notes: 'typical in place cyclic sort.',
      timeStamp: '2022-08-18T19:13:57.948Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0',
    },
  ],
  [
    'Find the Duplicate Number ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '30',
      name: 'Find the Duplicate Number ',
      notes:
        'Uses a single `while` loop. If the value are currIndex !== currIndex + 1, assign `correctIndex` = currVal - 1. \n\nDo a nested if/else, where IF arr[currIndex] !== arr[correctIndex], we swap them. ELSE we have a duplicate, so we return it.',
      timeStamp: '2022-07-24T07:57:45.460Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A',
    },
  ],
  [
    'Find the First K Missing Positive Numbers',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '5',
      name: 'Find the First K Missing Positive Numbers',
      notes:
        "Start by doing a cyclic sort IF the current element is greater than 0, <= input.length, and the correct slot isnt already filled. Else, just increment.\n\nThen, perform a typical for loop to find indices with the wrong element IF we havent already maxed out our k missing elements. Any time we find a match, push the correct number into the ouput array AND add the current value into a Set. We'll need this set later if we need to add more missing numbers to satisfy the `k` requirement.\n\nAfter the loop ends, create a counter = 1. Loop while output.length < k. In each loop, if our Set doesnt have `count + nums.length`, then we can safely add that to our missing numbers array. no matter what, increment count on each loop.\n\nFinally, return the output array",
      timeStamp: '2022-08-20T22:00:56.413Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0',
    },
  ],
  [
    'Find the Median of a Number Stream ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '7',
      name: 'Find the Median of a Number Stream ',
      notes:
        'Create a Heap class that can be used for Min/max heaps.\n\nWithin the primary "MedianStream" class, initialize a `lowers` MAX heap (so that we can always see the greatest number of the smaller half of the stream, since it will be closest to the middle) as well as a greaters MIN heap (to track the smallest number of the greater half of the stream).\n\nwrite a rebalanceHeaps method that checks if either heap is more than 1 element larger than the other heap, and then performs `.insert` and `.remove` accordingly.\n\nwrite an updateMedian method based on average of the two `peek()` methods if the heaps are equal in length, otherwise its based on the `peek()` of the LONGER of the two heaps.\n\nthe insertNum method checks if lowers.length === 0 OR the numToInsert < lowers.peek() and then inserts into lowers if either of those are true. Else, it inserts into greaters. After inserting, it invokes rebalanceHeaps and then updateMedian.',
      timeStamp: '2022-08-22T21:22:26.127Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4',
    },
  ],
  [
    'Find the Missing Number ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '25',
      name: 'Find the Missing Number ',
      notes:
        'While `i < nums.length` loop to do an in place sort. let `target = nums[i]` -- swap each element that is in the wrong index IF the element is less than the array length. Else, just increment the iterator.\n\nOnce the array has been sorted, loop over it until the current element mismatches the index',
      timeStamp: '2022-07-26T05:42:38.071Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9',
    },
  ],
  [
    'Find the Smallest Missing Positive Number',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '7',
      name: 'Find the Smallest Missing Positive Number',
      notes:
        'poorly worded question. the actual goal is to place each element in its "correct index" where the correctIndex is 1 less than the element. So the correct index for the element 4 would be an index of 3. Basically, its the usual cyclic sort.\n\nWhen doing the actual in place sort, you skip swapping any number below 1 or >= input.length.\n\nOnce sorted based on the above criteria, loop and report the first number where the value !== index + 1',
      timeStamp: '2022-08-20T21:26:20.763Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM',
    },
  ],
  [
    'Fruits into Baskets ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '21',
      name: 'Fruits into Baskets ',
      notes:
        'Create a Map, and then do a sliding window `for` loop. Increment the value in the map for the corresponding letter, and then do a `while` loop when the map.size > 2. After getting the map.size back to 2 or less, use Math.max to compare the previously recorded `maxFruits` against the current window size.',
      timeStamp: '2022-08-25T07:28:09.504Z',
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
        'All numbers eventually get stuck in a cycle. Key is to just loop while slow !== fast. Every loop, check if fast is 1 (it would reach 1 faster than slow). \n\nTo actually do the squaring, you can loop while (input > 0). Each loop we can use `digit = input % 10` and then add digit * digit to `sum`. Then `Math.floor(num /10)` to move forwards.',
      timeStamp: '2022-08-17T06:55:34.774Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM',
    },
  ],
  [
    'Insert Interval ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '3',
      name: 'Insert Interval ',
      notes:
        'Requires 3 sequential loops. First loop to push things that dont overlap and come before the insertable interval, 2nd loop to merge the overlapping intervals before pushing new_interval, and 3rd loop to push remaining intervals ---\n\ncreate an iterator variable. while arr[i] END time is less than the new interval START time, increment and push the current interval.\n\nThen, loop again while ar[i] START time is <= new interval end time to build an overlapping interval. reassign `new interval.start` + `newInterval.end` based on a Math.min/max.\n\nOnce that 2nd while loop is done, push `newInterval` and then loop from `i` over the remaining input arr and push the remaining intervals.',
      timeStamp: '2022-08-21T20:34:06.931Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM',
    },
  ],
  [
    'Intervals Intersection ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '1',
      name: 'Intervals Intersection ',
      notes:
        'declare i + j = 0. While Loop over both arrays as long as i < a.length && j < b.length. \n\nEach loop, youre searching for an overlap. Overlap is when one intervals start time >= the other start time AND the start time is <= the other end time.\n\nIf A overlaps B OR B overlaps A, push a new interval with start = Math.max(starts) and end = Math.min(ends).\n\nTo move forward, use ternary: A.end < b.end ? i += 1 : j += 1 at end of each loop.',
      timeStamp: '2022-08-21T23:45:17.718Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D',
    },
  ],
  [
    'Kth Smallest Number ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '21',
      name: 'Kth Smallest Number ',
      notes:
        'simplest: Sort the array and then return arr[k - 1] (since the 3rd largest element would be at index 2)\n\n"optimal": use a max heap to track the K smallest elements, inserting an element any time its smaller than maxHeap.peek and removing the old larger value',
      timeStamp: '2022-08-24T06:04:24.482Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G',
    },
  ],
  [
    'Laptop Rentals',
    {
      categories: ['heaps'],
      daysBeforeReminder: '7',
      name: 'Laptop Rentals',
      notes:
        'Easier solution: create one array to hold the start times, another to hold the end times. Loop over the input and push the start/end for each interval into the appropriate array. Once that loop ends, sort both the arrays in ascending order.\n\nOnce both arrays are sorted, create 1 pointer index for the ends array and another for the starts array. \n\nPerform a while loop, `i < inputArr.length`. If `starts[i] >= ends[j]` increment j (this is metaphorically "freeing up" a laptop that was previously occupied). No matter what, increment i on each loop.\n\nAfter the while loop ends, simply return i - j.\n\n---\nAlternative approach using a minheap:\n\nSort the input arr by start time in ascending order. Create a new minheap where the comparison function relies on `a[1] - b[1]`, and make sure to pass in `inputArr[0]` during construction. Make sure the heap tracks a `.length` property\n\nThen, loop over the sorted input starting at index 1 (since we already passed in the first input to the minheap). Each loop, insert the current interval into the minheap. Then, if the current interval start time is greater or equal to the minHeap.peek end time, we can run `minHeap.remove()` since that means the laptop is no longer occupied.\n\nat the end, return the minheap.length. Basically, because we remove intervals as they free up, the # of elements in the heap represents the max # of laptops that are occupied',
      timeStamp: '2022-08-14T03:08:14.434Z',
      url: 'https://www.algoexpert.io/questions/laptop-rentals',
    },
  ],
  [
    'Level Averages in a Binary Tree ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '40',
      name: 'Level Averages in a Binary Tree ',
      notes: '',
      timeStamp: '2022-08-21T21:47:04.755Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW',
    },
  ],
  [
    'Level Order Successor ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '40',
      name: 'Level Order Successor ',
      notes: '',
      timeStamp: '2022-08-20T02:22:05.149Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr',
    },
  ],
  [
    'LinkedList Cycle ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '40',
      name: 'LinkedList Cycle ',
      notes:
        'create two pointers starting from `head`. loop while and `fast && fast.next`. if values ever match, return true',
      timeStamp: '2022-08-20T22:08:05.688Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D',
    },
  ],
  [
    'Longest Substring with Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '30',
      name: 'Longest Substring with Distinct Characters ',
      notes:
        'use a Set within a typical sliding window start/end loop. Each loop, start by removing elements from the Set if the current element is present in it. Then, add the current element after the while loop. Then use math.max to determine the longest length',
      timeStamp: '2022-08-18T19:51:18.396Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO',
    },
  ],
  [
    'Longest Substring with Same Letters after Replacement ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '14',
      name: 'Longest Substring with Same Letters after Replacement ',
      notes:
        'Use for loop + sliding window + frequency Map. \n\nTrack max repeating letter in a variable, recalculate via Math.max in each loop. Then, IF the current window is bigger than max repeating char + k, slide the window. At end of each for loop, Math.max `maxLengthSeen`',
      timeStamp: '2022-08-20T17:35:26.612Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR',
    },
  ],
  [
    'Longest Substring with maximum K Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '35',
      name: 'Longest Substring with maximum K Distinct Characters ',
      notes: '',
      timeStamp: '2022-08-25T07:23:19.975Z',
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
        'Define a recursive helper function `findMaxSum` that accepts a node. This function will always return a tuple in the format of [maxSumAsBranch, maxSumAsPath]. The base case when `node` is undefined will return [0, -Infinity].\n\nIn the helper, compute the values for the left node and right nodes by calling the helper recursively, and then save their return values. Then, declare a `maxChildSumAsBranch` which is just a Math.max on the first value from the left/right tuples (the `maxSumAsBranch` for left/right).\n\nStill in the helper, declare a `maxSumAsBranch` which is just the current node.value + the maxChildSumAsBranch.\n\nThen declare a `maxSumAsRootNode` which is the Math.max of `leftMaxSumAsBranch + rightMaxSumAsBranch + node.value` vs `maxSumAsBranch`. This is basically the value if we formed a "triangle" rather than an individual branch IF the triangle value was actually greater than the branch value.\n\nFinally, declare a `maxPathSum` which is the Math.max of leftPathSum vs rightPathSum vs maxSumAsRootNode.\n\nThen, just return a tuple containing [maxSumAsBranch, maxPathSum].\n\nIn the main function, invoke your helper and pass in the root node. return the 2nd value from the resulting tuple, which will be the max path sum',
      timeStamp: '2022-08-23T01:03:40.739Z',
      url: 'https://www.algoexpert.io/questions/max-path-sum-in-binary-tree',
    },
  ],
  [
    'Maximum CPU Load',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '3',
      name: 'Maximum CPU Load',
      notes:
        'I first solved this by sorting the array and performing a "greedy" nested loop that would create a window while the current elements end time was greater than the next element(s) start times. An alternative, faster space time, approach relies on a MinHeap:\n\nSort the input on start time. declare a maxLoad and currentLoad variable = 0. Create a new MinHeap.\n\nFor loop over the entire input array, then do a nested while loop. While the minHeap length > 0 AND the current array element start time is greater or equal to the minHeap end time, pop the minHeap element and subtract the cpuLoad from `currentLoad`. Outside that while loop, push the current array element into the minHeap and increment currentLoad by the element\'s cpuLoad. Finally, reassign maxLoad based on math.max',
      timeStamp: '2022-08-18T18:47:05.716Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93',
    },
  ],
  [
    'Maximum Sum Subarray of Size K ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '30',
      name: 'Maximum Sum Subarray of Size K ',
      notes: 'Because the window size is constant, you never need a while loop.',
      timeStamp: '2022-08-07T08:03:29.476Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP',
    },
  ],
  [
    'Merge Intervals ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '7',
      name: 'Merge Intervals ',
      notes:
        'Sort the array based on `interval.start`. Create a new start + end variables and initialize them based on `inputArr[0]`. \n\nLoop, and overwrite `end` IF intervals[i].start is lesser or equal to end. Else, push the existing start+end and reset them to intervals[i].\n\nAfter the loop ends, youll still have a `start` and `end` that needs to be pushed, so dont forget that.',
      timeStamp: '2022-08-22T02:55:08.788Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx',
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
      categories: [],
      daysBeforeReminder: '14',
      name: 'Min Heap Construction',
      notes: '',
      timeStamp: '2022-08-11T19:20:27.327Z',
      url: 'https://www.algoexpert.io/questions/min-heap-construction',
    },
  ],
  [
    'Minimum Depth of a Binary Tree ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '21',
      name: 'Minimum Depth of a Binary Tree ',
      notes:
        'Create a queue to perform a BFS. \n\nDeclare a `depth` variable and assign to 0, then loop while queue.length > 0, and increment the "depth" variable every time you process a new level in the queue. Return that variable as soon as you find a leaf node (no `left` or `right`).',
      timeStamp: '2022-07-31T01:38:53.947Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO',
    },
  ],
  [
    'Minimum Difference Element ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '5',
      name: 'Minimum Difference Element ',
      notes:
        'deceptively easy. Perform a typical binary (while l <= r) search and return if `arr[mid] === target`.\n\nIf the while loop finishes with no much, write an `if` statement to return the smaller of two expressions, arr[start] - key vs key - arr[end]. This works because start will === end + 1 after the while loop is done, so we know arr[start] is greater than arr[end], and so the one with the smaller difference is closer to key.',
      timeStamp: '2022-08-19T04:44:45.874Z',
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
        'do a typical two pointer while loop using left and right pointers. In the while loop, increment left if arr[left + 1] is > arr[left]. Decrement right using the same logic. If both of those two pieces of logic are false, break the while loop. This is used to find the MINIMUM subarray that needs to be sorted, but we then need to check if it needs to be expanded. Before we go further though, return 0 if right <= left since it means the array is already sorted.\n\nNext, create a min and max variable to track the min/max in our subarray. Loop from left up to and including right, and recalculate min/max at each step.\n\nAfter looping to establish the min/max in the subarray, do a while loop as long as left > 0 and arr[left - 1] > min and decrement left each time. Do basically the same thing for right, except incrementing and checking against max.\n\nfinally, return right - left + 1 since thats the length of our subarray that needs to be sorted.',
      timeStamp: '2022-08-18T00:21:09.425Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6',
    },
  ],
  [
    'Next Letter ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Next Letter ',
      notes:
        'typical binary search (start = 0, end = arr.length - 1). Also, create a `returnString` variable and assign it to `arr[0]` since the array is "cyclic".\n\nWhile start <= end, calculate middle (Math.floor(start + (end - start) / 2)). Calculate an `isGreater` variable based on arr[mid].localeCompare(target)`. If we are greater, reassign returnString. Proceed to binary search as normal.',
      timeStamp: '2022-08-16T05:44:09.470Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk',
    },
  ],
  [
    'Number Range ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Number Range ',
      notes:
        'create a helper function that will do the binarysearch. it take `arr, target, findMaxIndex` as args.\n\nThe helper uses the typical start/end variables, but also creates a `keyIndex = -1` variable which will be used to return the desired index. Unlike normal binary search once `arr[mid] === target` you reassign `keyIndex = mid` AND CONTINUE SEARCHING. if `findMaxIndex === true`, you search the greater part of the ascending array to try and find the LAST valid index (start = mid + 1). Otheriwse, you try to find the FIRST valid index (end = mid - 1). Basically, youre continuing your binary search past the first match in order to find the first or last index, based on findMaxIndex. \n\nWithin the main function, call your binary search helper with `findMaxIndex = false` in order to find the index to insert as `result[0]`. Then, repeat the call with `findMaxIndex = true` to find `result[1]` ONLY IF the initial function did not return an index of `-1` since -1 means there are no matches.',
      timeStamp: '2022-08-09T06:51:29.497Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz',
    },
  ],
  [
    'Order-agnostic Binary Search ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '30',
      name: 'Order-agnostic Binary Search ',
      notes:
        "declare start = 0, end = arr.length - 1. Youll reassign these values on each loop. Also, determine whether the arr is ascending via `arr[end] > arr[start]`.\n\n`while start <= end`, let middle = Math.floor((start + end) / 2). <-- this is done to make sure we dont exceed the maximum safe integer.\n\nIn the while loop, return `mid` if arr[mid] === tartget`. We also need an if/else based on whether we are ascending or not. \n\nIf we are ascending: if target < arr[mid], reassign end to `mid - 1`. Else, reassign start to `mid + 1`. If we're not ascending, do the same logic in reverse.",
      timeStamp: '2022-08-22T20:58:03.859Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO',
    },
  ],
  [
    'Pair with Target Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'Pair with Target Sum ',
      notes: 'Can be done in O(1) space.',
      timeStamp: '2022-08-25T07:29:29.972Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP',
    },
  ],
  [
    'Palindrome LinkedList',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '5',
      name: 'Palindrome LinkedList',
      notes:
        'use fast/slow pointers to find the middle pointer.\nyou DONT need to track `prev` because it will automatically continue pointing to the right place since we re-reverse at the end.\n\nCreate a helper function that reverses a linked list and returns the head of the newly reversed list (should be the `prev` value of the reverse function). \nPass in the middle node (slow), and store the returned node in a variable. \nCreate another variable called `start` that points to the original head. \nAlso, create a copy of `reversedHead` so we can unreverse the list at the end.\n\nWhile `reversedHead.next`, check if `start.val === reversedHead.val`. \nIf they mismatch, return false, otherwise increment both nodes to the `next` property.\n\nAfter the while loop, unreverse the list and return `true`',
      timeStamp: '2022-08-26T02:40:39.182Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ',
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
      timeStamp: '2022-08-09T06:24:26.842Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn',
    },
  ],
  [
    'Permutation in a String',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '30',
      name: 'Permutation in a String',
      notes:
        'Build a map from pattern. Loop over input string and decrement the counts anytime map[char] === 0. Each iteration where the window === length of pattern, drop the char at the windowStat and increment. return `true` if the `matched === patternMap.size` <-- NOTE that you compare the charsMatched against the map size, NOT against the pattern.length!',
      timeStamp: '2022-08-24T02:13:28.798Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D',
    },
  ],
  [
    'Permutations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '1',
      name: 'Permutations ',
      notes:
        "create an output array, and a permutations array. permutations starts with an empty array at index 0.\n\nfor loop over nums. Each loop, declare a `len` variable to store `permutations.length`.\n\nnested for loop `(j < len)`. All we do is shift() from permutations to get the next permutation we need to build.\n\nAnother nested for loop (so we have 3 for loops total) where `k < shiftedPermutation.length + 1`. This loop builds the next permutation. Start by copying the shifted permutation from the 2nd for loop -- can be done via array spread. Then, splice nums[i] into the permutation at the kth index. `splice(k, 0, nums[i]`.\n\nIn the most nested loop, if the copied array length === nums.length, push it into the output array. otherwise we're not done filling up the permutation, so push it into the pending permutations array.",
      timeStamp: '2022-08-21T00:36:55.443Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY',
    },
  ],
  [
    'Rearrange a LinkedList',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '1',
      name: 'Rearrange a LinkedList',
      notes:
        "Start by creating a `reverse` helper function that reverses a list by taking in a single node as the argument.\n\nIn the main function, use fast/slow pointers to find the middle node. Then, use the `reverse` helper and store the returned value as something like `reversedHead`. Declare another variable to clone `head`, and a `temp variable.\n\nLoop while `reversedHead && headClone`. in the loop, you're just pointing the node in `headFirstHalf.next` to the node at `reversedHead`, then reassigning `headFirstHalf` to its ORIGINAL .next value (which you needed to store in a `temp` variable before overriding the .next pointer). Then, do the same thing for the `reversedHead.next` pointers, where you reassign them to point to the node at `headFirstHalf` before reassigning `reversedHead` to its ORIGINAL .next value in the reversed list.\n\nAfter the while loop is over, if `headFirstHalf.next` is truthy make sure to reassign it to `null` since it is now the tail node of the modified list. Finally, return the original `head` input",
      timeStamp: '2022-08-23T06:22:01.776Z',
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
        'NEW APPROACH:\ndeclare `nextNonDuplicateSlot = 0. For loop -- each iteration, if arr[i] === arr[i + 1] then `continue`. Otherwise, reassign arr[nextNonDuplicateSlot] = arr[i] and increment nextNonDuplicateSlot. \n\nAt the end, return nextNonDuplicateSlot since it will be equal to the LENGTH of the non duplicate array.',
      timeStamp: '2022-08-23T23:50:55.835Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA',
    },
  ],
  [
    'Reverse Level Order Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '45',
      name: 'Reverse Level Order Traversal ',
      notes:
        'Use a queue to process the nodes. while queue.lenth, use a nested for loop to process the nodes for a given level of the tree.',
      timeStamp: '2022-08-16T05:50:56.861Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r',
    },
  ],
  [
    'Reverse a LinkedList ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '21',
      name: 'Reverse a LinkedList ',
      notes:
        'Assign a value to copy `head`, and assign `prev` to null. while `curr !==` null, do the reversal. At the end, return `prev` since `curr` will not point to the right place',
      timeStamp: '2022-08-20T22:11:08.161Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9',
    },
  ],
  [
    'Reverse a Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '1',
      name: 'Reverse a Sub-list ',
      notes:
        "Do a while loop as long as `curr` is truthy and your iterator is < `p - 1`. This Skips the first p-1 nodes, so that on the final loop, `curr` will point to the node directly before `p` (this math would vary based on whether the list starts for 1 or 0 -- for grokking, it works). Make sure to track a `prev` variable the whole time as well.\n\nAfter the initial loop, create a new variable to hold `prev` pointer so we can reconnect it later IF it is not null -- it could be `null` if the very first element to reverse was the `head`.\n\nAlso create a variable to store `curr` since we'll need to reassign its `next` value to whatever `curr` is pointing to at the end of all the reversing.\n\nNext, reverse the nodes via while loop, `curr !== null && i <= q - 1`. \n\nafter reversing, update `tailOfReversedList` to point to `curr` so that it reconnects with whatever remaining nodes are in the last part of the linked list. Also, if tailOfFirstHalf !== null then reassign its `.next` value to `prev`. Otherwise, if its null then `head` is the first node in the reversed sublist, so we point the .next to head.next. \n\nreturn head.",
      timeStamp: '2022-08-25T05:54:55.203Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2',
    },
  ],
  [
    'Reverse every K-element Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '2',
      name: 'Reverse every K-element Sub-list ',
      notes:
        'let `curr = head` and `prev = null`.\n\nInfinite loop `while(true)`. Within loop, create variable "tailOfPrevSubArr = prev" to store the node we need to connect after reversing the next subArr. Also, create variables for `currTail = curr`, `next = null`, and `i = 0`.\n\nnested while loop -- curr !== null && i < k. reverse the nodes here -- next = curr.next, curr.next = prev, prev = curr, curr = next, i + 1.\n\nafter nested while loop connect the PREVIOUS subarray with the new `prev` -- if prevTail !== null, prevTail.next = prev. Otherwise, head = prev.\n\nAfter above if/else, assign `currTail.next = curr` to connect the end of the current sub array with the upcoming one.\n\nAt any point within larger `while` loop, if !curr then we break the loop. Otherwise, we end the while loop by assigning `prev` to `currTail`.\n\nNOTE: drawing this out on paper will help it make more sense :)',
      timeStamp: '2022-07-12T01:37:29.432Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR',
    },
  ],
  [
    'Rotation Count',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '2',
      name: 'Rotation Count',
      notes:
        "relies on a mostly normal binary search, where start <= end. we're basically searching for the smallest element, since that will mark the pivot\n\nwithin the while loop, if the middle element is smaller than the element to the left, then return the middle index. If the middle element is greater than the element to the right, return the element to the right.\n\nIf neither of the above cases were true, then we just check if the left of `mid` is sorted via `arr[start] < arr[mid]`. If true, then move to the right since the sorted part of the array wont pass either of our two checks above. Otherwise, move to the left so we can find the element smaller than its neighbor.",
      timeStamp: '2022-08-24T19:45:43.834Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7nPmB8mZ6vj',
    },
  ],
  [
    'Search Bitonic Array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '1',
      name: 'Search Bitonic Array',
      notes:
        "Make a helper function that uses Binary Search to find the max number's index in the bitonic array. This can be done via normal binary search and looping while `start < end`. Rather than checking for a target value, you just check if arr[mid] < arr[mid + 1]. At the end, return either start of end since they should both point to the max index.\n\nNext, create a helper function that can do an order agnostic binary search. This is just a complicated sounding search that can work on eiither an ascending list or descending list. The core logic is the same, but you have to determine if the input isAscending via arr[start] < arr[end]. Once thats determined, you do a typical binary search and move the start/end based on the usual check and then a nested check based on isAscending. If at any point you find the target, return it, otherwise return -1 at the end.\n\nIn the main function, you can call the first helper to find the max index in the array. Then, you can call the order agnostic binary search on the first half below that index and then conditionally call the 2nd half above/including that max index if the first search doesnt return the desired result.",
      timeStamp: '2022-08-24T06:53:52.732Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE',
    },
  ],
  [
    'Search in Rotated Array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '1',
      name: 'Search in Rotated Array',
      notes:
        'modified binary search. Start with the typical `while start <= end` loop and calculate `mid` normally. \n\n\nFirst, make sure we handle duplicate elements. If arr[mid] === arr[start] === arr[end], increment start and decrement end by 1.\n\nOtherwise, in order too move, first we need to determine if the section from `start` to `mid` is in ascending order. If so, then we check if the `target` is between `start` and `mid`. If true, we reassign end to mid - 1. If false, we need to move to the right of mid.\n\nIf arr[start] was NOT <= arr[mid], then the right half of the array after `mid` will be in sorted order. So we first check if the target is between `mid` and `end` and if it is, we move the `start` to mid + 1 to adjust rightwards. Otherwise, we move leftwards.\n\nReturn -1 in the main function if the while loop never finds a match.',
      timeStamp: '2022-08-24T19:20:32.053Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8XZQ1q1O46',
    },
  ],
  [
    'Search in a Sorted Infinite Array ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Search in a Sorted Infinite Array ',
      notes:
        'This one uses a normal binary search EXCEPT you first need to find the right range to search through.\n\nDeclare start = 0, end = 1. while `(reader[end] < target)` reassign start to `end + 1` to keep the search range small. Then just double `end` to bring in more numbers `end *= 2`. Once the while loop ends, do a normal binary search',
      timeStamp: '2022-08-14T06:36:58.579Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2',
    },
  ],
  [
    'Single Number ',
    {
      categories: ['xor'],
      daysBeforeReminder: '21',
      name: 'Single Number ',
      notes:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR\n\nWhen you XOR 0 against a number, youll always return the original number. And when you XOR a number against itself, the 32 bit representation will cancel out, returning 0. \n\nWith this in mind, you can initialize `result = 0` and then just loop over the arr, performing `result ^= arr[i]`. The end will result will be the only non-duplicate number, because all other numbers will have cancelled their bits out.',
      timeStamp: '2022-08-17T07:03:13.623Z',
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
      daysBeforeReminder: '14',
      name: 'Smallest Window containing Substring',
      notes:
        'populate a map based on the pattern, then perform a typical sliding window.\n\nDuring sliding window using a for loop, mark a `charsMatched` variable anytime you decrement a count to 0 (never delete any of the characters, only adjust their counts). \n\nPerform a while loop within the main for loop, while (charsMatched === map.size). Attempt to reassign a `smallestStr` variable IF the variable is an empty string or the current window has a smaller length than the string stored in that variable. Then shorten the window and increment any necessary counts.\n\nReturn the `smallestStr` variable at the end.',
      timeStamp: '2022-08-14T07:23:44.932Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR',
    },
  ],
  [
    'Sort K-Sorted Array',
    {
      categories: ['heaps'],
      daysBeforeReminder: '1',
      name: 'Sort K-Sorted Array',
      notes:
        'Solution involves a single MinHeap, so start by building that out as a Class.\n\nWithin the main function, create a new MinHeap and pass in the input array UP TO the `k + 1` index (but not including it). This can be done using array.slice(0, k + 1).\n\nDeclare an indexToInsertAt counter = 0. Perform a for loop, starting from k + 1 and ending when i === array.length. During each loop, remove an element from the minheap and insert it at `indexToInsertAt`. Then, increment indexToInsertAt. Lastly, insert array[i] into the minHeap.\n\nOnce the first for loop ends, there will still be elements in the minHeap and the array will only be partially sorted. So, do a while loop that ends when minHeap.peek() === null. During each loop, repeat the same steps you did in the first for loop but without inserting any new elements into the minHeap.\n\nOnce the while loop ends, the array should be sorted-in-place so just return it.',
      timeStamp: '2022-08-25T20:31:42.321Z',
      url: 'https://www.algoexpert.io/questions/sort-k-sorted-array',
    },
  ],
  [
    'Squaring a Sorted Array ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '21',
      name: 'Squaring a Sorted Array ',
      notes:
        'Create a new array via `Array(input.length)` and create an `indexToInsertAt` variable that points to the end of the array.\n\nuse two pointers left + right and then populate the array backwards by looping `while left <= right`. Since a squared number is always positive, you can just compare via `arr[left] * arr[left]` vs the same thing on the right',
      timeStamp: '2022-07-30T22:12:10.636Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R',
    },
  ],
  [
    'Start of LinkedList Cycle ',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '1',
      name: 'Start of LinkedList Cycle ',
      notes:
        'Create fast + slow pointer. \nLoop while `fast && fast.next` and break when fast and slow meet. This lets us find a node in the cycle.\n\nCreate a new pointer starting from head and a `cycleLength` variable.\n\nLoop while `newPointer !== slow` and iterate cycleLength each cycle.\n\nFinally, point slow and fast back to `head`. \nIterate `fast`  by the length of the cycle. \n\nThen iterate both pointers 1 step at a time until they meet. Return either `slow` or `fast`.',
      timeStamp: '2022-08-25T06:12:04.744Z',
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
      daysBeforeReminder: '1',
      name: 'String Permutations by changing case ',
      notes:
        "CHECK THE GRAPHIC to understand the solution.\n\nDeclare an output array, and put the input string as the first element of the array.\n\nFor loop over the input string -- we'll use this to ensure we handle permutations at each index. In each loop, use isNaN on input[i] and `continue` (skip current iteration) if isNaN returns false so that we dont try to lowercase a number.\n\nWithin the loop, declare a `len = output.length` variable. Then, do a for loop starting from `0` while `j < len`. What we are doing here is creating new permutations based on existing permutations. Again, refer to the graphic in Grokking if there is confusion about how this works.\n\nIn the nested for loop, use `.split('')` on `output[j]` to copy the existing permutation as an array (because strings are immutable in JS). Then, just test if the splitStr[i] is lowercase -- if it is, uppercase it, else lowercase it. `.join('')` the array and push the permutation back into the output array.",
      timeStamp: '2022-08-24T20:41:31.907Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P',
    },
  ],
  [
    'Subsets ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '1',
      name: 'Subsets ',
      notes:
        'DOESNT USE A QUEUE. Just create an output array that contains an empty array, ie `[ [ ] ]`.\n\nPerform a for loop over the input. Then, do a nested while loop -- `while (j < n)` where n = output.length. Within each while loop, create a new array from `output[j] + input[i]` and then push it into the output.',
      timeStamp: '2022-08-24T20:24:58.429Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG',
    },
  ],
  [
    'Sum of Path Numbers ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '12',
      name: 'Sum of Path Numbers ',
      notes:
        'function should take in a node and a sum arg, where sum defaults to `0`. \nIf there is no node, return 0. Otherwise, reassign sum to (sum * 10) + node.value to achieve a "concatenating number".\n\nIf its a leaf node, return sum. Otherwise, return func(left) + func(right)',
      timeStamp: '2022-08-26T02:55:17.270Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69',
    },
  ],
  [
    "Top 'K' Frequent Numbers ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '5',
      name: "Top 'K' Frequent Numbers ",
      notes:
        'Create a Heap class.\n\nIn the main function create a Map. Loop over the input array and set the counts of each number in the Map.\n\nThen, create a minHeap. Loop over the Map itself using `forEach`, and push a tuple containing [frequency, integer] into the minHeap IF the minHeap length is < k.\nElse, check if the current element in the map has a higher frequency than the peek() of our minHeap, and remove/insert if so.\n\nFinally, create an output array. While the minHeap has length, remove from it and insert the 2nd value of each tuple so we have a list of the most frequent integers',
      timeStamp: '2022-08-26T02:18:20.037Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J',
    },
  ],
  [
    "Top 'K' Numbers ",
    {
      categories: ['heaps'],
      daysBeforeReminder: '21',
      name: "Top 'K' Numbers ",
      notes:
        'Create a min heap, passing in `input.slice(0, k)` to build it. Then, loop over the input starting from k and if the current element is greater than  `minHeap.peek()`, remove from the minHeap and then insert the current element.\n\nAt the end, you can either invoke a `.toArray` helper if you build one into the Heap, otherwise you can just use a for loop to remove the elements.',
      timeStamp: '2022-08-24T02:51:20.045Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0',
    },
  ],
  [
    'Triplet Sum Close to Target ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'Triplet Sum Close to Target ',
      notes:
        'sort input array.\n\nlet `closestSum = Infinity`. For loop, and skip any duplicates.\n\nwhile loop, if `curr === target` return curr. Otherwise, recalculate closestSum by using Math.abs to compare `targetSum - currSum vs targetSum - closestSum.` dont forget to conditionally choose the smaller. sum of the two if the diff is identical.\n\nreturn closestSum',
      timeStamp: '2022-08-21T21:36:22.556Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA',
    },
  ],
  [
    'Triplet Sum to Zero ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'Triplet Sum to Zero ',
      notes:
        'Sort input arr. Then for loop. if `nums[i] === nums[i - 1] continue` so that you skip duplicates.\n\nNested while loop using two pointers. if `curr + arr[l] + arr[r] === 0` push them into output array AND incremenet l / decrement r AND do nested while loops until `left !== l - 1` and `right !== r + 1`.  ',
      timeStamp: '2022-08-12T23:59:40.385Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r',
    },
  ],
  [
    'Triplets with Smaller Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '7',
      name: 'Triplets with Smaller Sum ',
      notes:
        'similar to 3sum, except if `currSum < target` you increment `matches` by `right - left` and THEN increment left.\n\nThis works because any numbers BETWEEN left and right after sorting MUST also create a sum that is less than the target, so we can simplify the act of decrementing "right" for all those numbers since we already know they match. However, we still need to increment `left` in order to generate `(left +1) + [ allpotential rights]` since this problem isnt concerned with unique sums, only unique index combinations. ',
      timeStamp: '2022-08-18T20:07:47.279Z',
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
      daysBeforeReminder: '1',
      name: 'Unique Generalized Abbreviations ',
      notes:
        'Create an AbbreviatedWord class that will be a helper. It accepts a string, `nextIndex`, and count to track how many letters have been replaced.\n\nIn the main function, create an output array and a queue. The queue should contain one element, a new AbbreviatedWord that receives an empty string, 0, and 0.\n\nLoop while there are elements still in the queue. Each while loop, shift an element from the queue. If that elements `nextIndex` is equal to input.length --> if the elements `count` is greater than 0, append the `count` to the current string (the string itself will still be the correct length even after appending). Regardless of whether the count was appended or not, push the string into the output array since there is no more room to insert.\n\nELSE, if the nextIndex didnt equal the input length, push a new abbreviation into the queue that passes the existing string but increments `nextIndex` AND `count`, indicating that we have replaced a letter. \n\nStill within the else block, if the count is greater than 0, add the count to the current string. This is how we get strings like `c2e` from the string `code`. Then, append the character from the input string @ nextIndex, so `str += word[abrev.nextIndex]`. Finally, push a new abbreviation by passing in the current string, incrementing nextIndex, and resetting count to 0.\n\nAfter processing queue, return the results',
      timeStamp: '2022-08-18T01:11:36.794Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN',
    },
  ],
  [
    'Words Concatenation',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '5',
      name: 'Words Concatenation',
      notes:
        "create a Map to record the frequency of each WORD (not letter) in the input array. Also create an output array that will contain the starting indices we find.\n\nPerform a for loop that ends when i < str.length - words.length * words[0].length + 1. This helps us avoid iterating over the part of the input string where the substrings we'll create cannot possibly fit the full length of a string necessary to match the input array. See end of this note for deeper explanation\n\nDuring each iteration of the for loop, create a new Map that will hold the frequency of each substring we create. Then, do another for loop where `j` starts at 0 and ends when `j < inputArr.length`. \n\nWithin the nested for loop, create a `nextWordIndex` variable that is equal to `i + j * inputArr[0].length`. This tells us the index for our next substring since each word is equal in length.\n\nOnce nextWordIndex is set, create a new variable to hold `inputString.subString(nextWordIndex, nextWordIndex + inputArr[0].length` to create the next substring.\n\nOnce we have the next substring, try to retrieve it from the primary Map based on the input arr. if the substring isnt present, break the nested loop. Assuming it is present, set the substring into the Map created during the main for loop. Then, compare the count at that map versus the count in the main map to see if we have seen the word too many times during this nested loop. If we have too high of a frequency, break the loop.\n\nFinally, within the nested loop we can push `i` (the start of a valid substring) IF j + 1 === words.length (basically, if we reached the end of the j loop and didnt have to break for any reason).\n\nIn the main function, just return the results once the main for loop ends.\n---\nConsider this case\na) s.length = 10 -->(0-9 indexes) and\nb) given words[] = {\"aa\", \"aa\", \"aa\"}....\nc) The total length of substring is (3 words * 2 char len each) = 6.\n\nSo when searching for subString in 's' the window should contain at least 6 chars.\nSo possible start positions of subString in 's' are 0,1,2,3,4 only. From 5th position, there are only 5 chars or less to search...\nSo no point searching sections of 's' which have insufficient number of chars to required to find the subString\n+1 is required because array indexes start from 0 and not 1... an array of length 5 has index 0-4",
      timeStamp: '2022-08-17T22:11:08.568Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O',
    },
  ],
  [
    'Zigzag Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '21',
      name: 'Zigzag Traversal ',
      notes:
        'Typical BFS except you track a boolean to determine if youre going left or right. \n\nBased on that boolean, you either PUSH (truthy) `curr.value` into the `currLevel` array, or you UNSHIFT (falsey) into it. Flip the boolean on each level',
      timeStamp: '2022-08-13T00:28:59.470Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0',
    },
  ],
  [
    'diameter-of-binary-tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '5',
      name: 'Diameter of binary tree',
      notes:
        'Create a DFS helper function that takes in a node. Within that function, if node is falsey then return a diameter of 0 and a height of 0, aka [0,0].\n\nCreate a leftTree variable equal to the return of dfs(node.left). Do the same for the right side. \n\nThen, create a maxDiameter variable and assign it to the max of leftTree[0] and rightTree[0] (the diameter in the tuple). Assign a longestPath variable to leftTree[1] + rightTree[1] (the height of each path). Assign a currDiameter variable to the max of maxDiameter vs longestPath. Then assign a currentHeight variable to `1 + max(leftTree height, rightTree height)`.\n\nFinally, return a tuple in the form of [currentDiameter, currentHeight]. \n\nThen in the main function, just invoke the helper and return the diameter from the tuple\n\n',
      timeStamp: '2022-08-19T20:15:11.516Z',
      url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    },
  ],
];

export default {
  questionMocks,
  questionMocksLarge,
};
