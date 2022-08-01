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
    'Balanced Parentheses ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '4',
      name: 'Balanced Parentheses ',
      notes:
        "Create a helper Permutation class. Needs a string property, openCount property, and closedCount property.\n\nin main func, create an output arr and a queue. Loop while the queue.length > 0.\n\nEach loop, shift from the queue. If the permutation.closeCount === num, push the perm.STRING into the output arr. Otherwise, if the perm.openCount < num, push a new class into the queue while adding a '(' to the string and incrementing the openCount. Do the same for closeCount IF the openCount > closeCount on the individual perm.",
      timeStamp: '2022-07-27T05:04:54.257Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2',
    },
  ],
  [
    'Binary Tree Level Order Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '25',
      name: 'Binary Tree Level Order Traversal ',
      notes:
        'Push root node into a queue.\n`while queue.length`: store queue.length in variable `levelSize`. Create new array to hold values at this level of tree.\nNested loop while `i < levelSize`. Shift a node from queue, push the val into new array and push each left/right if theyre truthy.',
      timeStamp: '2022-07-24T08:19:14.089Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz',
    },
  ],
  [
    'Binary Tree Path Sum ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '11',
      name: 'Binary Tree Path Sum ',
      notes:
        'recursive solution:\n- if there is no root, return false\n- subtract root.val from sum\n- if sum === 0 AND there is no left/right node, return true since we found a leaf node where the sum added up to the initial target\n- return recursively, ie `return myFunc(leftNode, sum) || myFunc(rightNode, sum)`',
      timeStamp: '2022-07-26T05:54:04.228Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY',
    },
  ],
  [
    'Bitonic Array Maximum ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '10',
      name: 'Bitonic Array Maximum ',
      notes:
        'Normal binary search (while start <= end), except there is no concrete target. You perform the binary search by comparing arr[mid] > arr[mid + 1]. If greater, then we need to move to the left. If not, then we can still find a larger number moving to the right. Each iteration, reassign a `maxNum` variable if the current `arr[mid]` is larger.',
      timeStamp: '2022-07-28T05:51:01.848Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK',
    },
  ],
  [
    'Ceiling of a Number ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '3',
      name: 'Ceiling of a Number ',
      notes:
        'typical binary search, set `start = 0, end = arr.length - 1`. Loop while start <= end. For this problem, create a `returnIndex` variable and assign to -1.\n\nEach loop, assign `mid = Math.floor(start + (end - start) / 2).` If the arr[mid] > key, reassign returnIndex if the value is smaller than the value at the existing returnIndex.\n',
      timeStamp: '2022-07-24T23:11:45.118Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7',
    },
  ],
  [
    'Conflicting Appointments ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '7',
      name: 'Conflicting Appointments ',
      notes:
        'Deceptively easy. Sort the intervals based on their start time, and then loop over the sorted array. If arr[i].end > arr[i + 1].start, we have a conflict so we return false. After the loop ends, return true since we didnt find any conflicts',
      timeStamp: '2022-07-26T06:40:03.642Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG',
    },
  ],
  [
    'Connect Level Order Siblings ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '25',
      name: 'Connect Level Order Siblings ',
      notes: '',
      timeStamp: '2022-07-11T01:42:03.188Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03',
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
      daysBeforeReminder: '3',
      name: 'Dutch National Flag Problem ',
      notes:
        'create 3 variables, `low = 0`, `i = 0`, and `high = arr.length - 1`. The goal is to get all 0s before `low`, and all 2s after `high`.\n\nwhile (i <= high), we need 3 if branches. The first branch handles arr[i] === 0 -- we swap arr[i] and arr[low], then increment both low and i. This helps us slowly move all 0s before `low`.\n\nsecond if branch handles arr[i] === 1 -- this branch simply increments i, because the other 2 branches will naturally push the 1s into the middle of the array.\n\nlast branch handles arr[i] === 2 -- swap arr[high] and arr[i] and then decrement `high` but DONT increment `i` because we still need to look at the new number in the `i` slot because it could be anything after swapping (we can only be confident that the swapped 2 is in the right spot, but the incoming number might still need to move again).',
      timeStamp: '2022-07-26T06:26:32.509Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0',
    },
  ],
  [
    'Find all Duplicate Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '4',
      name: 'Find all Duplicate Numbers ',
      notes:
        'do an in-place sort. regardless of the starting point of the array, the correct index for a number will be the number - 1. So `correctIndex = nums[i] - 1`. Anytime `nums[i] !== nums[correctIndex]`, you swap them.\n\nThen, just do a for loop. Anytime nums[i] !== i + 1, we can push into the duplicates array since the most times a number will appear is twice.',
      timeStamp: '2022-07-30T08:50:01.107Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0',
    },
  ],
  [
    'Find all Missing Numbers ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '4',
      name: 'Find all Missing Numbers ',
      notes:
        'Sort input in place by looping over it. If the value at targetIndex !== nums[currIndex], swap them. Otherwise, the targetIndex is already filled correctly so we increment.\n\nAfter sorting, loop over the input again and push any value that !== currIndex + 1',
      timeStamp: '2022-07-23T08:02:24.958Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK',
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
    'Fruits into Baskets ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '20',
      name: 'Fruits into Baskets ',
      notes:
        'Create a Map, and then do a sliding window `for` loop. Increment the value in the map for the corresponding letter, and then do a `while` loop when the map.size > 2. After getting the map.size back to 2 or less, use Math.max to compare the previously recorded `maxFruits` against the current window size.',
      timeStamp: '2022-07-30T19:36:11.323Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ',
    },
  ],
  [
    'Happy Number ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '22',
      name: 'Happy Number ',
      notes:
        'All numbers eventually get stuck in a cycle. Key is to just loop while slow !== fast. Every loop, check if fast is 1 (it would reach 1 faster than slow). \n\nTo actually do the squaring, you can loop while (input > 0). Each loop we can use `digit = input % 10` and then add digit * digit to `sum`. Then `Math.floor(num /10)` to move forwards.',
      timeStamp: '2022-07-11T03:57:38.523Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM',
    },
  ],
  [
    'Insert Interval ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '15',
      name: 'Insert Interval ',
      notes:
        'create an iterator variable. loop over arr, and while the arr item END time is less than the new interval START time, increment and push the current interval.\n\nThen, loop again while arr item START time is <= new interval end time (basically the opposite condition of the first loop). reassign new interval start + end based on a Math.max',
      timeStamp: '2022-07-11T03:22:37.016Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM',
    },
  ],
  [
    'Intervals Intersection ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '2',
      name: 'Intervals Intersection ',
      notes:
        'declare i + j = 0. While Loop over both arrays as long as i < a.length && j < b.length. \n\nEach loop, youre searching for an overlap. Overlap is when one intervals start time >= the other start time AND the start time is <= the other end time.\n\nIf A overlaps B OR B overlaps A, push a new interval with start = Math.max(starts) and end = Math.min(ends).\n\nTo move forward, use ternary: A.end < b.end ? i += 1 : j += 1 at end of each loop.',
      timeStamp: '2022-07-25T06:46:33.688Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D',
    },
  ],
  [
    'Kth Smallest Number ',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'Kth Smallest Number ',
      notes:
        'Sort the array and then return arr[k - 1] (since the 3rd largest element would be at index 2)',
      timeStamp: '2022-07-29T08:10:38.313Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G',
    },
  ],
  [
    'Level Averages in a Binary Tree ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '28',
      name: 'Level Averages in a Binary Tree ',
      notes: '',
      timeStamp: '2022-07-11T00:51:14.546Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW',
    },
  ],
  [
    'Level Order Successor ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '26',
      name: 'Level Order Successor ',
      notes: '',
      timeStamp: '2022-07-11T03:05:37.893Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr',
    },
  ],
  [
    'LinkedList Cycle ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'LinkedList Cycle ',
      notes:
        'create two pointers starting from `head`. loop while and `fast && fast.next`. if values ever match, return true',
      timeStamp: '2022-07-10T20:17:35.344Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D',
    },
  ],
  [
    'Longest Substring with Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '22',
      name: 'Longest Substring with Distinct Characters ',
      notes: 'use a Set',
      timeStamp: '2022-07-11T03:05:09.321Z',
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
        'Use for loop + sliding window + frequency Map. \n\nTrack max repeating letter in a variable, recalculate via Math.max in each loop. Then, IF the current window is bigger than max repeating char + k, slide the window. At end of each for loop, Math.max `maxLengthSeen`',
      timeStamp: '2022-07-29T08:30:23.532Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR',
    },
  ],
  [
    'Longest Substring with maximum K Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '25',
      name: 'Longest Substring with maximum K Distinct Characters ',
      notes: '',
      timeStamp: '2022-07-23T08:17:53.488Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80',
    },
  ],
  [
    'Maximum Sum Subarray of Size K ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '30',
      name: 'Maximum Sum Subarray of Size K ',
      notes: 'Because the window size is constant, you never need a while loop',
      timeStamp: '2022-06-28T00:48:16.937Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP',
    },
  ],
  [
    'Merge Intervals ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '14',
      name: 'Merge Intervals ',
      notes:
        'Sort the array based on `interval.start`. Create a new start + end variables and initialize them based on `inputArr[0]`. \n\nLoop, and overwrite `end` IF intervals[i].start is lesser or equal to end. Else, push the existing start+end and reset them to intervals[i]',
      timeStamp: '2022-07-31T01:27:20.077Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx',
    },
  ],
  [
    'Middle of the LinkedList ',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '25',
      name: 'Middle of the LinkedList ',
      notes: 'loop while (fast && fast.next). return `slow` after the while loop stops',
      timeStamp: '2022-07-26T05:56:30.963Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM',
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
      timeStamp: '2022-07-28T05:41:07.389Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9',
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
      timeStamp: '2022-07-24T23:34:43.981Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk',
    },
  ],
  [
    'Number Range ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '4',
      name: 'Number Range ',
      notes:
        'create a helper function that will do the binarysearch. it take `arr, target, findMaxIndex` as args.\n\nThe helper uses the typical start/end variables, but also creates a `keyIndex = -1` variable which will be used to return the desired index. Unlike normal binary search once `arr[mid] === target` you reassign `keyIndex = mid` AND CONTINUE SEARCHING. if `findMaxIndex === true`, you search the greater part of the ascending array to try and find the LAST valid index (start = mid + 1). Otheriwse, you try to find the FIRST valid index (end = mid - 1). Basically, youre continuing your binary search past the first match in order to find the first or last index, based on findMaxIndex. \n\nWithin the main function, call your binary search helper with `findMaxIndex = false` in order to find the index to insert as `result[0]`. Then, repeat the call with `findMaxIndex = true` to find `result[1]` ONLY IF the initial function did not return an index of `-1` since -1 means there are no matches.',
      timeStamp: '2022-07-25T05:25:40.523Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz',
    },
  ],
  [
    'Order-agnostic Binary Search ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '3',
      name: 'Order-agnostic Binary Search ',
      notes:
        "declare start = 0, end = arr.length - 1. Youll reassign these values on each loop. Also, determine whether the arr is ascending.\n\n`while start <= end`, let middle = Math.floor(start + (end - start) / 2). <-- this is done to make sure we dont exceed the maximum safe integer.\n\nIn the while loop, return `mid` if arr[mid] === tartget`. We also need an if/else based on whether we are ascending or not. \n\nIf we are ascending: if target < arr[mid], reassign end to `mid - 1`. Else, reassign start to `mid + 1`. If we're not ascending, do the same logic in reverse.",
      timeStamp: '2022-07-24T05:04:19.871Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO',
    },
  ],
  [
    'Pair with Target Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '45',
      name: 'Pair with Target Sum ',
      notes: 'Can be done in O(1) space.',
      timeStamp: '2022-07-09T08:05:17.302Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP',
    },
  ],
  [
    'Path With Given Sequence ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '3',
      name: 'Path With Given Sequence ',
      notes:
        'recurse, but make sure you include a 3rd argument to track an index (default val = 0).\n\nif !root, return sequence.length === 0.\nif index >= sequence.length OR root.val !== sequence[index], return false.\nif its a leaf node AND index === sequence.length - 1, return true. Otherwise return func(left) || func(right).',
      timeStamp: '2022-07-23T18:10:54.109Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn',
    },
  ],
  [
    'Permutation in a String',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '14',
      name: 'Permutation in a String',
      notes:
        'Build a map from pattern. Loop over input string and decrement the counts anytime map[char] === 0. Each iteration where the window === length of pattern, drop the char at the windowStat and increment. return `true` if the `matched === patternMap.size` <-- NOTE that you compare the charsMatched against the map size, NOT against the pattern.length!',
      timeStamp: '2022-07-31T00:57:37.569Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D',
    },
  ],
  [
    'Permutations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '2',
      name: 'Permutations ',
      notes:
        "create an output array, and a permutations array. permutations starts with an empty array at index 0.\n\nfor loop over nums. Each loop, declare a `len` variable to store `permutations.length`.\n\nnested for loop `(j < len)`. All we do is shift() from permutations to get the next permutation we need to build.\n\nAnother nested for loop (so we have 3 for loops total) where `k < shiftedPermutation.length + 1`. This loop builds the next permutation. Start by copying the shifted permutation from the 2nd for loop -- can be done via array spread. Then, splice nums[i] into the permutation at the kth index. `splice(k, 0, nums[i]`.\n\nIn the most nested loop, if the copied array length === nums.length, push it into the output array. otherwise we're not done filling up the permutation, so push it into the pending permutations array.",
      timeStamp: '2022-07-24T00:37:15.485Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY',
    },
  ],
  [
    'Remove Duplicates ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '20',
      name: 'Remove Duplicates ',
      notes:
        'NEW APPROACH:\ndeclare `nextNonDuplicateSlot = 0. For loop -- each iteration, if arr[i] !== arr[i - 1] then reassign arr[nextNonDuplicateSlot] = arr[i] and increment nextNonDuplicateSlot. At the end, return nextNonDuplicateSlot since it will be equal to the LENGTH of the non duplicate array.\n\nORIGINAL approach:\nset `nextNonDuplicateSlot = 1`. \n\nIterate through input arr. if `arr[nextNonDuplicateSlot - 1] !== arr[i]` then we have a new unique number. overwrite the item in `nextNonDuplicateSlot` with the new number and increment nextNonDuplicateSlot. \n\nSince youre returning a length, you can just return nextNonDuplicateSlot.',
      timeStamp: '2022-07-24T08:13:18.608Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA',
    },
  ],
  [
    'Reverse Level Order Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '21',
      name: 'Reverse Level Order Traversal ',
      notes:
        'Use a queue to process the nodes. while queue.lenth, use a nested for loop to process the nodes for a given level of the tree.',
      timeStamp: '2022-07-11T00:27:43.377Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r',
    },
  ],
  [
    'Reverse a LinkedList ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '20',
      name: 'Reverse a LinkedList ',
      notes:
        'Assign a value to copy `head`, and assign `prev` to null. while `curr !==` null, do the reversal. At the end, return `prev` since `curr` will not point to the right place',
      timeStamp: '2022-07-23T08:08:03.748Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9',
    },
  ],
  [
    'Reverse a Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '3',
      name: 'Reverse a Sub-list ',
      notes:
        '`let i= 0` --> `while curr !== null && i < p - ` -- Skips the first p-1 nodes, to reach the node at position p.\n\nCreate new variable `lastNodeOfFirstChain` to hold `prev` pointer so we can reconnect it later IF it is not null when its time to reconnect. \nAlso create `lastNodeOfSublist = curr` so that we can reassign its `next` value to whatever `curr` is at the end of all the reversing.\n\nNext, reverse the nodes via while loop, `curr !== null && i <= q - 1`. \n\nafter reversing, prev will be the first node in our reversed sub list (curr is useless at this point). if lastNodeOfFirstChain !== null then reassign its .next value to `prev`. Otherwise, if its null then `head` is the first node so we point head.next to prev. return head.',
      timeStamp: '2022-07-28T07:25:15.768Z',
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
    'Search in a Sorted Infinite Array ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '7',
      name: 'Search in a Sorted Infinite Array ',
      notes:
        'This one uses a normal binary search EXCEPT you first need to find the right range to search through.\n\nDeclare start = 0, end = 1. while `(reader[end] < target)` reassign start to `end + 1` to keep the search range small. Then just double `end` to bring in more numbers `end *= 2`. Once the while loop ends, do a normal binary search',
      timeStamp: '2022-07-25T06:32:13.503Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2',
    },
  ],
  [
    'Single Number ',
    {
      categories: ['xor'],
      daysBeforeReminder: '4',
      name: 'Single Number ',
      notes:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR\n\nWhen you XOR 0 against a number, youll always return the original number. And when you XOR a number against itself, the 32 bit representation will cancel out, returning 0. \n\nWith this in mind, you can initialize `result = 0` and then just loop over the arr, performing `result ^= arr[i]`. The end will result will be the only non-duplicate number, because all other numbers will have cancelled their bits out.',
      timeStamp: '2022-07-28T06:30:17.729Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG',
    },
  ],
  [
    'Smallest Subarray With a Greater Sum ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '20',
      name: 'Smallest Subarray With a Greater Sum ',
      notes:
        'typical sliding window, just add the current value to a running sum. `while sum >= target` recalculate a `minLength` before trying to shrink the window.',
      timeStamp: '2022-07-28T06:46:52.567Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ',
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
      daysBeforeReminder: '14',
      name: 'Start of LinkedList Cycle ',
      notes:
        'Create fast + slow pointer. Loop while `fast && fast.next` and break when fast and slow meet. \n\nDetermine length of cycle by doing a `true` while loop where you iterate a new pointer and count the # of steps until `newPointer` meets `slow` again.\n\nFinally, make 2 new pointers referencing `head`. Iterate ONE pointer by the length of the cycle. Then iterate both pointers 1 step at a time until they meet',
      timeStamp: '2022-07-23T08:25:28.602Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN',
    },
  ],
  [
    'String Permutations by changing case ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '2',
      name: 'String Permutations by changing case ',
      notes:
        "declare a new array, and put the input string as the first element of the array. You'll return this array at the very end of the algorithm.\n\nFor loop (i < inputString.length). In each loop, use isNaN on the current character and `continue` (skip current iteration) if isNaN returns false so that we dont try to lowercase a number.\n\nIn each loop, declare a `len = output.length` variable. Then, do a for loop while `j < len`.\n\nIn the nested for loop, use `.split('')` on `output[j]` to turn the string into an array because strings are immutable in JS. Then, just test if the current character is lowercase -- if it is, uppercase it, else lowercase it. `.join('')` the array and push the permutation back into the output array.",
      timeStamp: '2022-07-26T07:18:07.326Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P',
    },
  ],
  [
    'Subsets ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '5',
      name: 'Subsets ',
      notes:
        'create an output array that contains an empty array, ie `[ [ ] ]`.\n\nPerform a for loop over the input. Then, do a nested while loop -- `while (j < n)` where n = output.length. You have to save the output length to a variable before beginning the while loop otherwise youll loop infinitely.Within each while loop, create a new array from `output[j] + input[i]`',
      timeStamp: '2022-07-23T19:32:43.613Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG',
    },
  ],
  [
    'Sum of Path Numbers ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '4',
      name: 'Sum of Path Numbers ',
      notes:
        'function should take in a node and a sum arg. If there is no node, return 0. Otherwise, reassign sum to (sum * 10) + node.value to achieve a "concatenating number".\n\nIf its a leaf node, return sum. Otherwise, return (func(left) + func(right)',
      timeStamp: '2022-07-23T17:52:14.720Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69',
    },
  ],
  [
    "Top 'K' Numbers ",
    {
      categories: [],
      daysBeforeReminder: '7',
      name: "Top 'K' Numbers ",
      notes:
        'Brute force solution: sort the array and then return arr.slice(-k) <-- dont miss the "negative" symbol so that you slice from the end of the array rather than the beginning',
      timeStamp: '2022-07-29T08:03:36.392Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0',
    },
  ],
  [
    'Triplet Sum Close to Target ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '14',
      name: 'Triplet Sum Close to Target ',
      notes:
        'sort input array.\n\nlet `closestSum = Infinity`. For loop, and skip any duplicates.\n\nwhile loop, if `curr === target` return curr. Otherwise, recalculate closestSum by using Math.abs to compare `targetSum - currSum vs targetSum - closestSum.` dont forget to conditionally choose the smaller. sum of the two if the diff is identical.\n\nreturn closestSum',
      timeStamp: '2022-07-26T05:36:22.565Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA',
    },
  ],
  [
    'Triplet Sum to Zero ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '3',
      name: 'Triplet Sum to Zero ',
      notes:
        'Sort input arr. Then for loop. if `nums[i] === nums[i - 1] continue` so that you skip duplicates.\n\nNested while loop using two pointers. if `curr + arr[l] + arr[r] === 0` push them into output array AND incremenet l / decrement r AND do nested while loops until `left !== l - 1` and `right !== r + 1`.  ',
      timeStamp: '2022-07-25T07:17:34.478Z',
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
      timeStamp: '2022-07-27T06:58:31.688Z',
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
      timeStamp: '2022-07-29T05:15:26.585Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm',
    },
  ],
  [
    'Unique Generalized Abbreviations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '3',
      name: 'Unique Generalized Abbreviations ',
      notes: 're-read the code, this one was hard to understand',
      timeStamp: '2022-07-27T05:41:14.525Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN',
    },
  ],
  [
    'Zigzag Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '4',
      name: 'Zigzag Traversal ',
      notes:
        'Typical BFS except you track a boolean to determine if youre going left or right. \n\nBased on that boolean, you either PUSH (truthy) `curr.value` into the `currLevel` array, or you UNSHIFT (falsey) into it. Flip the boolean on each level',
      timeStamp: '2022-07-25T07:01:33.332Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0',
    },
  ],
];

export default {
  questionMocks,
  questionMocksLarge,
};
