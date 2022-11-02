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
      daysBeforeReminder: '19',
      name: "'K' Closest Numbers ",
      notes:
        'Start by doing a binary search (start < end) to find the closest number in the sorted input.\nif arr[mid] === target, assign start to mid and break the loop.\nAfter the loop ends, make sure `start` isnt === arr.length, and decrement it by 1 if it is.\n\nThen in the main function, use a two pointer solution that initializes left/right to the `start` index.\n\nThe goal is to decrement left or increment right based on the absolute difference of target - `input[left - 1]` and `input[right + 1]` while right - left + 1 < k.\nBefore comparing the absolute differences, make sure left - 1 or right + 1 are in bounds, otherwise you need to increment/decrement the opposite end and `continue`.\nAfter the while loop ends (right - left + 1 < K), return arr.slice using the left and `right + 1` pointers.',
      timeStamp: '2022-11-02T01:25:30.628Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL',
    },
  ],
  [
    'AlgoExpert Logo',
    {
      categories: [],
      daysBeforeReminder: '9',
      name: 'AlgoExpert Logo',
      notes:
        'You can most of the spacing necessary by making the wrapper flex and using gap + padding left.\nYou can make the logo a flex container as well to vertically + horizontally align the pseudo ::before + ::after elements.\nYou can control the positioning of the "rings" by positioning them absolutely so they dont get laid out by the usual layout algorithm.',
      timeStamp: '2022-10-25T02:21:59.016Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/algoexpert-logo',
    },
  ],
  [
    'AlgoExpert Products',
    {
      categories: [],
      daysBeforeReminder: '21',
      name: 'AlgoExpert Products',
      notes: 'Use flexbox',
      timeStamp: '2022-11-02T05:51:30.943Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/algoexpert-products',
    },
  ],
  [
    'Array.prototype.filter',
    {
      categories: [],
      daysBeforeReminder: '9',
      name: 'Array.prototype.filter',
      notes:
        'Loop from 0 to this.length.\nEach loop, if `Object.hasOwn(this, i)` is truthy AND callbackFn.call(thisArg, currEl, index, this) is truthy, then push the current element into an output array.\nREVIEW `.call` and `.hasOwn`',
      timeStamp: '2022-11-02T03:14:43.948Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-filter',
    },
  ],
  [
    'Array.prototype.map',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Array.prototype.map',
      notes:
        'Similar to the `.filter` problem, but instead of pushing into an output you assign output[i].\nThis ensures that sparse arrays dont get populated.',
      timeStamp: '2022-11-02T03:24:10.902Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-map',
    },
  ],
  [
    'Array.prototype.reduce',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Array.prototype.reduce',
      notes:
        'If there is no length AND no initial value, throw.\nIf initialValue is undefined, then use `this[0]` as the initial value and start the loop from `1` instead of `0`.\nEach loop, reassign the value to the result of invoking the callbackFn (no need to use .call)',
      timeStamp: '2022-11-02T03:28:27.952Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-reduce',
    },
  ],
  [
    'Balanced Parentheses ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '21',
      name: 'Balanced Parentheses ',
      notes:
        "Create a helper Permutation class. Needs a string property, openCount property, and closedCount property.\n\nin main func, create an output arr and a queue. Loop while the queue.length > 0.\n\nEach loop, shift from the queue. \nIf the permutation.closeCount === num, push the perm.STRING into the output arr. \nif perm.openCount < num, push a new class into the queue while adding a '(' incrementing the openCount. \nDo the same for closeCount IF the openCount > closeCount on the individual perm.",
      timeStamp: '2022-10-12T23:49:00.277Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2',
    },
  ],
  [
    'Balanced binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '1',
      name: 'Balanced binary tree',
      notes:
        'Create a helper function to perform a depth-first search.\nThe helper always returns a tuple in the form of [isBalancedBoolean, heightOfNode].\n\nWhen `node` is falsey in the helper, just return `[true, 0]` since an empty tree is inherently balanced and has no height.\nRecursively call the helper on the left and right children and save the results into variables.\nDeclare a `balanced` boolean that is equal to `left[0] & right[0] & abs(leftHeight - rightHeight) < 2`.\nBasically, a node can only be considered balanced if both of its children are balanced AND the height difference between the two of them is no more than 1.\n\nFinally, return the tuple via `[balanced, 1 + max(leftHeight, rightHeight)]`.\n\nIn the main function, just call the helper and then return the boolean from the first slot in the tuple.',
      timeStamp: '2022-11-01T22:55:42.269Z',
      url: 'https://leetcode.com/problems/balanced-binary-tree/',
    },
  ],
  [
    'Binary Tree Path Sum ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '40',
      name: 'Binary Tree Path Sum ',
      notes:
        'SOLVE ITERATIVELY using a stack\n\nrecursive solution:\n- if there is no root, return false\n- subtract root.val from sum\n- if sum === 0 AND there is no left/right node, return true since we found a leaf node where the sum added up to the initial target\n- return recursively, ie `return myFunc(leftNode, sum) || myFunc(rightNode, sum)`',
      timeStamp: '2022-10-20T02:47:52.189Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY',
    },
  ],
  [
    'Binary tree level order traversal',
    {
      categories: ['bfs'],
      daysBeforeReminder: '70',
      name: 'Binary tree level order traversal',
      notes:
        'early return if there is no root node\nPush root node into a queue.\n`while queue.length`: store queue.length in variable `levelSize`. Create new array to hold values at this level of tree.\nNested loop while `i < levelSize`. Shift a node from queue, push the val into new array and push each left/right if theyre truthy.',
      timeStamp: '2022-10-26T22:53:31.001Z',
      url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    },
  ],
  [
    'Binary tree maximum path sum',
    {
      categories: ['dfs'],
      daysBeforeReminder: '16',
      name: 'Binary tree maximum path sum',
      notes:
        "declare a `result` variable and assign it to the root's value.\n\nDefine a nested `dfs` function that accepts a node.\nWithin that function, if node is falsey return 0.\nThen, calculate the `left` and `right` by recursively invoking dfs.\nNext, reassign left to the max of `left, 0`. \nDo the same for `right`.\nThis is done to ensure that if a node had a negative value, it doesnt get included in the remaining calculations.\nWe can calculate the maxPathSum for the CURRENT node via left + right + node.value.\nMake sure to update the original `result` via Math.max.\nFinally, return node.value + the max of `left` vs `right`.\nThis is the equivalent of returning our current node as a branch since we cant return a maxPathSum.\n\nDont forget to invoke the dfs function back in the main function.\n\nRuns in O(N) time, O(h) space where h is the height of the tree (generally translates to O(logN) if the tree is balanced.",
      timeStamp: '2022-11-01T06:18:15.368Z',
      url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    },
  ],
  [
    'Bitonic Array Maximum ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '25',
      name: 'Bitonic Array Maximum ',
      notes:
        'Normal binary search (while start < end), except there is no concrete target. \nYou perform the binary search by comparing arr[mid] < arr[mid + 1]. \nIf true, then we can only find a larger number by moving to the right. \nIf not, then we need to move left. \n\nEach iteration, reassign a `maxNum` variable if the current `arr[mid]` is larger.',
      timeStamp: '2022-10-22T05:41:41.654Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK',
    },
  ],
  [
    'Blog Post',
    {
      categories: [],
      daysBeforeReminder: '22',
      name: 'Blog Post',
      notes: 'DONT use a `main` tag around the sections',
      timeStamp: '2022-11-01T07:04:31.855Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/blog-post',
    },
  ],
  [
    'Branch Sums',
    {
      categories: ['dfs'],
      daysBeforeReminder: '14',
      name: 'Branch Sums',
      notes:
        "iterative version:\nuse a stack, and push {node: root, sum: 0} into it.\nLoop while the stack has length, and basically do the usual dfs logic.\nHOWEVER, rather than pushing the `.left` in first, push the `.right` in first.\nThis is because we'll be popping from the stack, so if we want to tackle the left side of the tree first, then we need the left side to always be the top-most item in our stack.\n\nrecursive main function accepts a node, a sum = 0, and results = [].\nAdd the current nodes value to the sum.\nIf were a leaf node, push the sum into the results array.\nRecursively call the main function on left side if it exists.\nDo the same on the right side.\nreturn the results array.",
      timeStamp: '2022-10-31T06:32:57.855Z',
      url: 'https://www.algoexpert.io/questions/branch-sums',
    },
  ],
  [
    'Breadth-first Search',
    {
      categories: ['bfs'],
      daysBeforeReminder: '20',
      name: 'Breadth-first Search',
      notes:
        "Same as BFS on a binary tree.\nCreate a queue that contains `this`.\nLoop while the queue has length.\nEach iteration, shift from the queue and push the shifted name into the output array.\nThen loop over the shifted node's children and push them into the queue.\n\nTime: O(V + E), where V is the max # of vertices (nodes) and E is the max # of edges on a node. Could maybe be worded as O(N) where N is the total # of nodes in the graph\nSpace: O(V) since we have to be able to store all of an individuals nodes children in the queue",
      timeStamp: '2022-10-13T23:10:45.356Z',
      url: 'https://www.algoexpert.io/questions/breadth-first-search',
    },
  ],
  [
    'Bubble Sort',
    {
      categories: [],
      daysBeforeReminder: '28',
      name: 'Bubble Sort',
      notes:
        'Outer for loop `i` over the entire input.\nNested for loop `j` from 0 to input.length - i;\nif j > j + 1, swap.\nreturn the now-sorted array.',
      timeStamp: '2022-10-16T20:24:35.553Z',
      url: 'https://www.algoexpert.io/questions/bubble-sort',
    },
  ],
  [
    'Climbing stairs',
    {
      categories: ['dp'],
      daysBeforeReminder: '2',
      name: 'Climbing stairs',
      notes:
        'True "bottoms up" DP problem.\nCreate an array of n + 1 length (we add the extra slot to represent `0`).\nThe array will represent the # of ways to reach `n` from the current number.\n\nFill the last two slots with `1`.\nThis works because there is only 1 way to reach `n` from the `nth` slot, which is to take 0 further steps.\nAdditionally, there is only 1 way to reach `n` from slot `n-1`, which is to take 1 step.\nThis trick works for all values of `n`.\n\nNext, loop backwards over the array, starting from n - 2 since the last 2 slots have been filled.\nEach loop, reassign ways[i] equal to ways[i + 1] + ways[i + 2].\nThis works because taking one step from `i` would give us 1 additional way on top of whatever was calculated for `i + 1`.\nObviously taking 2 steps from i also gives us 1 additional way on top of whatever was calculated for `i + 2`.\n\nAt the end, just return the first element in the array since it tells us the # of ways if we start with 0 steps previously taken.\nFun fact: this problem is just the dynamic programming version of the fibonacci sequence :)\n\nALTERNATIVE\nBecause this problem is actually just a fibonacci sequence in disguise, we can solve it without using an array.\nSimply initialize variables `oneStep` to `1` and `twoStep` to `1` to represent the last two digits.\nThen, loop from 0 up to n -1.\nEach loop, assign the value of `oneStep` to a temporary variable and then reassign oneStep to oneStep + twoStep.\nThen, reassign twoStep to the temporary variable.\nThis is basically the equivalent of our DP array where each time we are adding the 2 slots to the right of our current slot together.\nAt the end, return `one`',
      timeStamp: '2022-11-01T01:34:02.213Z',
      url: 'https://leetcode.com/problems/climbing-stairs/',
    },
  ],
  [
    'Coin change',
    {
      categories: ['dp'],
      daysBeforeReminder: '8',
      name: 'Coin change',
      notes:
        "Create a `coinSums` array equal to `n + 1` and then fill it with `Infinity`.\nThis array will represent the minimum # of coins to create each target amount from `0 ` to n.\nAssign a value of `0` to the first position of the array, to represent the 0 coins needed in order to create a sum of 0.\n\nLoop over each coin in the `input`.\nImmediately perform a nested loop from `1` to `n + 1` (since we need to populate the entire array).\nIF the current coin is <= the `targetAmount` in this loop, then assign `coinSums[targetAmount]` equal to the minimum of whatever is currently in that slot VERSUS `1 + coinSums[targetAmount - coin]`.\nBasically, we're adding 1 of our current coin PLUS the number of coins needed to make the targetSum minus the current coin we're adding.\n\nAt the end, if coinsSums[n] is still Infinity, return -1.\nOtherwise return coinSums[n]",
      timeStamp: '2022-11-01T01:42:02.135Z',
      url: 'https://leetcode.com/problems/coin-change/',
    },
  ],
  [
    'Comparing Strings containing Backspaces',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '20',
      name: 'Comparing Strings containing Backspaces',
      notes:
        "create a helper function that accepts a string and index. \nInitialize a count variable to 0. \nLoop while the input index >= 0. \nIn the while loop, if string[index] is a '#', increment count. \nelse if count is > 0, decrement count. \nElse, return the index. \nOutside of that if/else-if/else, decrement index by 1 each loop. \nMake sure to return the index after the while loop in case you didnt hit the early return.\n\nBack in the main function, create 1 pointer for each input string, and make it point to that input string's length - 1 (last index). \nLoop while either pointer is >= 0. \n\nIn each loop, reassign the pointer by passing them and their associated string to the helper function. \nThen, if both pointers are below 0 then return true. \nElse if one pointer is below 0 but not the other, return false. \nElse if str1[i] !== str2[j], also return false. Then, decrement each pointer by 1.\nIf the while loop finishes, return true.",
      timeStamp: '2022-10-14T23:06:06.718Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl',
    },
  ],
  [
    'Conflicting Appointments ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '45',
      name: 'Conflicting Appointments ',
      notes:
        'Deceptively easy. \nSort the intervals based on their start time, and then loop over the sorted array. If arr[i].end > arr[i + 1].start, we have a conflict so we return false. \nAfter the loop ends, return true since we didnt find any conflicts',
      timeStamp: '2022-10-16T20:28:15.266Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG',
    },
  ],
  [
    'Connect All Level Order Siblings',
    {
      categories: ['bfs'],
      daysBeforeReminder: '36',
      name: 'Connect All Level Order Siblings',
      notes:
        'the best way to solve this one is to "cheat" by adding a next pointer to each node.\n\nBasically, do a normal BFS, nothing special. While processing each node in the queue, mutate its `.next` pointer to store to a `prev` pointer that is scoped outside the while loop. Thats it',
      timeStamp: '2022-10-04T02:45:45.964Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v',
    },
  ],
  [
    'Connect Level Order Siblings ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '30',
      name: 'Connect Level Order Siblings ',
      notes:
        'In the node class, make sure `.next` is a property and is initialized to `null` for all nodes. \nThen, BFS using a queue. \nLoop while the queue has elements in it.\n\nEach while loop, declare a `len` to measure the nodes at a level and declare `prev = null`. \nThen, do a nested while loop if len > 0.\n\nIn the nested while loop, shift from the queue. \nIf prev is truthy, assign prev.next to the current node. \nThen, reassign `prev` to the current node for the next loop. \nThen just push the left/right nodes if they exist, and decrement the length to proceed.',
      timeStamp: '2022-10-07T20:34:53.178Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03',
    },
  ],
  [
    'Connect Ropes ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '24',
      name: 'Connect Ropes ',
      notes:
        'Confusing wording. You need to create a min heap based on the input array, and then loop while the heap has at least 2 elements in it.\n\nEach loop, remove the 2 smallest elements and then add them together. Then, add the sum to a `result` variable that exists outside the loop. Then, re-add the sum to the minHeap.\n\nAt the end, return the `result` variable.',
      timeStamp: '2022-10-09T23:39:07.012Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0',
    },
  ],
  [
    'Curry',
    {
      categories: [],
      daysBeforeReminder: '1',
      name: 'Curry',
      notes:
        'within the main function, create a new function called `curriedFunc` that takes in any number of args.\nIt can be a function declaration or arrow function, wont matter.\n\nWithin curriedFunc, if there are no args then just return the result of invoking the original callback.\nThe ONLY way to hit this case will be if the very first call to `curriedFunc` has no args, but it is a valid edge case we need to handle.\n\nPast that edge case, we need to return an anonymous function so that we can chain calls.\n\nThe anonymous function takes in any number of `other` args.\nWithin the anonymous function, if there are no `other` args then we have finally stopped chaining additional arguments and so we can just invoke the OG `callback` and pass in the `args` from curriedFunc before returning the result.\nOtherwise if `other` was truthy, then we need to recursively invoke `curriedFunc` and pass in both the `args` and `other`.\n\nThis works because we basically use `curriedFunc` to collect args over time, and use our anonymous function to actually group the original args with any chained `other` args. \nOnce the `other` finally becomes falsey, we can pass in all of the args collect by our main `curriedFunc` into the callback.',
      timeStamp: '2022-10-27T02:07:52.626Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/curry',
    },
  ],
  [
    'Cycle in a Circular Array',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '27',
      name: 'Cycle in a Circular Array',
      notes:
        "Make a helper function that gets the next index.\nIt accepts a currentIndex, an arr, and an `isForward` boolean that indicates whether we need to move forwards or backwards to be a valid cycle.\nIn the helper, create a `nextIndex` variable that is equal to (currentIndex + the value at the current index) MODULO the arr length to handle positively wrapping around. \n\nCheck if `arr[nextIndex] < 0` and compare against isForward boolean. \nIf isForward is true and arr[nextIndex < 0` is also true, then return -1 since we're going in opposite directions.\nif that check passes, check if `nextIndex < 0` due to negative values and add the arr.length to nextIndex to wrap around if so.\n\nLastly, if nextIndex equals the current index, then we have a one element cycle which doesnt satisfy our requirements so we return -1. Otherwise if all those other checks succeeded, we return the nextIndex.\n\nBack in the main function we perform a for loop over the entire input. \nIn each loop, we assign slow to `i` and fast to `helper(i)`. we pass our `isForward` variable based on whether the current array value is >=0. \n\nThen, do a nested while loop as long as slow !== fast.\nEach loop, reassign slow and fast to the getNextIndex return value. \nAfter the initial reassignment, check if either value is -1 and break if so.\nOtherwise, reassign fast again (recreating the fast.next.next pattern).\nAfter slow + fast are reassigned, if slow === fast return true.",
      timeStamp: '2022-10-22T18:43:38.452Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr',
    },
  ],
  [
    'Debounce',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Debounce',
      notes:
        'use a closure to declare a `timer` variable and then immediately return a function.\nThe returned function accepts any number of arguments.\n\nWithin the returned function, clear any pending `timeout` so it doesnt execute.\nThen, if `immediate` is true AND we dont have a defined `timer`, then we can invoke the callback and apply the `this` argument to it before passing it the other arguments.\nWe have to check if there is a timer because if `immediate` is truthy but a timer already exists, then it means we already executed the callback immediately once before, and we shouldnt continue to immediately call it.\n\nPast the `immediate` logic, assign `timer` to the return of `setTimeout`.\nThe setTimeout takes in an anonymous function, and that function invokes the callback with `.apply` IF immediate is falsey.\nThen it resets the timer to `null` no matter what.\nThis works because if `immediate` was true then it would already have executed, and our timeout is really just resetting the `timer` so that the next call will work (because of our earlier check for `!timer && immediate`).',
      timeStamp: '2022-11-02T03:50:01.805Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/debounce',
    },
  ],
  [
    'Depth-first Search',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '24',
      name: 'Depth-first Search',
      notes:
        "ensure the DFS function accepts a `node` argument with a default value of `this`.\nPush the node's name into the array of names, then loop over the children and invoke `this.DFS` recursively, ensuring you pass in the array and child.\nThen, return the array.",
      timeStamp: '2022-10-22T18:50:47.497Z',
      url: 'https://www.algoexpert.io/questions/depth-first-search',
    },
  ],
  [
    'Diameter of binary tree',
    {
      categories: [],
      daysBeforeReminder: '15',
      name: 'Diameter of binary tree',
      notes:
        'declare `diameter = 0`.\nThen declare a nested `dfs` function that accepts a node.\n\nThe nested function returns 0 if there is no node.\nElse, it sets `left` to `dfs(node.left)` and does the same for `right`.\nThen it does a Math.max on (diameter, left + right) since left + right === currDiameter.\nThen, it returns the `height` which is 1 + max(left, right).\n\nDont forget to invoke the nested function prior to returning `diameter` from the main func.',
      timeStamp: '2022-10-31T23:49:27.418Z',
      url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    },
  ],
  [
    'Dutch National Flag Problem ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '32',
      name: 'Dutch National Flag Problem ',
      notes:
        'create 3 variables, `low = 0`, `i = 0`, and `high = arr.length - 1`. The goal is to get all 0s BEFORE `low`, and all 2s AFTER `high`.\n\nwhile (i <= high), we need to handle 3 scenarios.\n\nThe first scenario is when arr[i] = 0. If we have 0, swap arr[i] and arr[low], then increment both low and i. \nThis helps us move all 0s before `low`.\n\nsecond if branch handles arr[i] = 2. In this branch, swap `i` and `high` elements and then decrement high.\nNotice that we dont increment `i` -- this is because we might now have a `0` at `i` which would need to be moved.\n\nlast `else` branch just increments `i`, since the 1s will naturally wind up in the middle of low and high.',
      timeStamp: '2022-10-19T02:12:23.614Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0',
    },
  ],
  [
    'Edit distance',
    {
      categories: ['dp'],
      daysBeforeReminder: '7',
      name: 'Edit distance',
      notes:
        'refer to https://youtu.be/XYi2-LPrwm4 for explanation. Note that he solves from bottom right, whereas I solve from top left.\n\nSIMPLE VERSION: solved by creating a 2D array and populating it top down or bottom up.\nThe top/left slot represents the `0th` element in each string, which is just an empty string.\nThe remaining columns represent each individual character in string1, while the rows represent each individual character in string 2.\nThe rows/cols together represent how many operations are needed to make that section of a string equal the other section of a string.\n\nCreate an `operations` array, and populate it by looping from 0 to str2.length + 1.\nEach loop, create a `row` array and then loop from 0 to str1.length + 1.\nWithin the nested for loop, just push `j` into the row.\nAfter the nested loop ends, assign `row[0]` equal to `i` since we need to populate our first column with the # of operations on `str2` that would be needed to make an empty string (the "0th" character in str1).\n\nOnce the `operations` are built, loop from `1` to str2.length + 1 again, using an iterator called `row`.\nImmediately perform a nested loop via `col` from 1 to str1.length + 1.\nIn the loop, if str2[row - 1] is equal to str1[col - 1], then the letters are the same.\nNote, we\'re doing `-1` because we have to account for the extra row/column we created.\n\nIf the letters are equal, then operations[row][col] gets assigned to `operations[row - 1][col - 1] because that slot contains the # of operations needed to deal with strings that DONT contain our current character.\nBasically, because the letters are even, we just reuse the calculations from strings that didnt even include the current letters.\n\nElse the letters are different, so we add `1` to whatever the minimum is of the 3 adjacent slots -- row -1, col - 1, and row -1 with col-1.\n\nIDEAL VERSION:\nThe approach is the same, but we conserve space by building out 2 smaller arrays instead of a full 2D array that holds every calculation.\nThis winds up working because we really only ever need the current slot and the 3 adjacent slots, and that winds up being enough for us to calculate everything.\n\nCreate a `small` constant equal to whichever string is smaller.\nCreate a `big` constant equal to whichever string is >= the other.\nCreate an `evenEdits` array, and then populate it by looping from 0 to `small.length + 1` and pushing `i` each loop.\n\n\nThen, create an oddEdits array equal to `small.length + 1` but dont populate it.\n\nAfter creating both arrays, loop from `1` to `big.length + 1` because thats how many "rows" our 2D array would have.\n\nDeclare a `currentEdits` and `prevEdits` variable.\nIf `i % 2 === 1`, then currentEdits = oddEdits and prevEdits = evenEdits.\nElse, reverse those assignments.\nBasically, sometimes our current row is an even numbered row, and othertimes its odd numbered.\n\nassign `currentEdits[0]` to `i`, because we need to create our imaginary columns in the form of [1, 2, 3, 4,...] to represent the number of deletions needed to make an empty string.\n\nThen, perform a nested loop from 1 to `small.length + 1`.\nif `big[i - 1] === small[j - 1]` then the letters in each string are equal, so we can assign currentEdits[j] equal to prevEdits[j - 1].\nOtherwise, the letters are different so we need to search our adjacent slots.\nIf prevEdits[j] is the equivalent of "the row above" in a full 2D array,\ncurrentEdits[j] = 1 + min(prevEdits[j], prevEdits[j - ]1, currEdits[j - 1].\n\nFinally, if big.length % 2 == 0, then we return the last item in our evenEdits.\nOtherwise, return the last item in our odd edits.\n\nTime : O(n * m) where n is `inputOne`, and m is `inputTwo`.\nSpace: O(Minimum(n vs m) )',
      timeStamp: '2022-10-28T04:24:35.341Z',
      url: 'https://leetcode.com/problems/edit-distance/',
    },
  ],
  [
    'Employee Free Time',
    {
      categories: ['heaps'],
      daysBeforeReminder: '18',
      name: 'Employee Free Time',
      notes:
        'create a helper class EmployeeInterval that accepts an interval, \nan employeeIndex (used to track which employee it is from the original array), and an intervalIndex (used to track which interval this is for the employee).\n\nIn the main function, create a MinHeap, where the compareFunc is based on `a.interval.start < b.interval.start`. \nLoop over the input schedule and insert a new EmployeeInterval(input[i][0], i, 0). \nThis will find gaps between any employees FIRST schedules \n(since one employee might have multiple schedules, we will process those later.\n\nThen, create a previousInterval variable that points to minHeap.peek().\n\nwhile the minHeap has length, remove from the minHeap and destructure the `currInterval`,\nthe `employeeIndex`, and `intervalIndex`. \nIF prevInterval.end < currInterval.start, then push a new interval into the results array based on `prev.end, popped.start`. \nOutside the `if` block, reassign prev to currInterval.\n\nStill within the while loop, look up the employeeSchedule via input[popped.employeeIndex] \nand save it to a variable. \nIf that employeeSchedule.length is greater than the popped intervalIndex + 1, then we\nstill have more intervals for the same employee to process so we insert another EmployeeInterval into the minHeap, \npassing in `employeeSchedule[intervalIndex + 1], employeeIndex, and intervalIndex + 1`.\n\nThat wraps up the while loop, so now you can return the result arr',
      timeStamp: '2022-11-02T01:34:06.164Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0',
    },
  ],
  [
    'Evaluate Expression',
    {
      categories: ['subsets'],
      daysBeforeReminder: '14',
      name: 'Evaluate Expression',
      notes:
        'Recursive approach that slowly breaks down each character to an individual number within an array, ie `[num]`.\n\nStart by declaring an output array.\nIF the current input is a number (isNaN(input) === false), then just push the string as a Number into the output.\n\nELSE, loop over each index in the string.\n\nIF the current character is not a number (isNaN(Number(input[i])) === true), then we have one of our symbols (+, -, *).\nrecursively call the main function on the left half of the string via str.substring(0, i) and the right half of the string (str.substring(i + 1).\nThis generates smaller `result` arrays.\n\nPerform a for loop over the left half, and a nested for loop over the right half.\nif the current character is a `+`, then push leftHalf[i] + rightHalf[j]. \nElse if ifs a `-`, do the same for subtraction.\nLastly, handle `*`.\n\nAt the end, return the result',
      timeStamp: '2022-11-01T01:48:57.429Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l',
    },
  ],
  [
    'Event Target',
    {
      categories: [],
      daysBeforeReminder: '9',
      name: 'Event Target',
      notes:
        'within a constructor, declare a `this.listeners` and assign it to an empty object.\n\nWithin addEventListener, check it this.listeners[name] is already a Set.\nif not, assign it to a new Set.\nAfter the if block, just add the `callback` into the set.\n\nfor removing, just delete from the Set and use optional chaining.\nFor dispatching, just loop over the Set and invoke each cabllack',
      timeStamp: '2022-11-01T07:07:09.112Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/event-target',
    },
  ],
  [
    'Find Closest Value In BST',
    {
      categories: ['dfs'],
      daysBeforeReminder: '2',
      name: 'Find Closest Value In BST',
      notes:
        'PREV REMINDER WAS 22 days, but I forgot how to solve without traversing entire tree.\n---\nCreate a `closest` variable.\nLoop while `tree` is truthy.\nRecalculate closest each loop using Math.abs(target - tree.val).\n\nIf the curr.value is less than the target, traverse left.\nElse, traverse right',
      timeStamp: '2022-11-01T01:56:55.620Z',
      url: 'https://www.algoexpert.io/questions/find-closest-value-in-bst',
    },
  ],
  [
    'Find minimum in rotated sorted array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '11',
      name: 'Find minimum in rotated sorted array',
      notes:
        "we're basically searching for the smallest element, since that will mark the pivot\n\nwithin the while loop (start < end), if the middle element is greater than the element to its right, then return the middle index + 1 since the next element is the pivot. \n\nIf the middle element is less than the element to the left return mid since we found the pivot.\n\nIf neither of the above cases were true, then we just check if the right of `mid` is smaller via `arr[mid] < ( arr[end] || arr[end - 1] )`. \nIf true, then move to the left since the right half cannot possibly contain the smallest element.\nElse, move to the right.\n\nAt the end, if `start` is greater than nums.length then return the first element.",
      timeStamp: '2022-11-02T01:39:05.763Z',
      url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
    },
  ],
  [
    'Find the First K Missing Positive Numbers',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '24',
      name: 'Find the First K Missing Positive Numbers',
      notes:
        'Start by doing a cyclic sort IF the current element is greater than 0, i <= input.length, and the correct slot (nums[i] -1) isnt already filled by \nnums[i]. \nElse, just increment `i`.\n\nThen, create a Set to track the missing numbers that we add. \nStarting from 0, loop while `j` < input.length AND missingNumbers.length < k. \nAny time the current element !== j + 1 AND `j + 1` is not already present in the Set, push the j + 1 into the ouput array AND add the input[j] value into a Set. \n\nAfter the loop ends, create a counter = 1 + input.length. \nLoop while output.length < k. \nIn each loop, if our Set doesnt have `counter`, then we can safely add that to our missing numbers array. \nNo matter what, increment count on each loop.\n\nFinally, return the output array',
      timeStamp: '2022-11-01T06:08:38.945Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0',
    },
  ],
  [
    'Find the Median of a Number Stream ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '35',
      name: 'Find the Median of a Number Stream ',
      notes:
        'Create a Heap class that can be used for Min/max heaps.\n\nWithin the primary "MedianStream" class, initialize a `lowers` MAX heap (so that we can always see the greatest number of the smaller half of the stream, since it will be closest to the middle) as well as a greaters MIN heap (to track the smallest number of the greater half of the stream).\n\nwrite a rebalanceHeaps method that checks if either heap is more than 1 element larger than the other heap, and then performs `.insert` and `.remove` accordingly.\n\nwrite an updateMedian method based on average of the two `peek()` methods if the heaps are equal in length, otherwise its based on the `peek()` of the LONGER of the two heaps.\n\nthe insertNum method checks if lowers.length === 0 OR the numToInsert < lowers.peek() and then inserts into lowers if either of those are true.\nElse, it inserts into greaters. \nAfter inserting, it invokes rebalanceHeaps and then updateMedian.',
      timeStamp: '2022-10-22T05:54:06.260Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4',
    },
  ],
  [
    'Find the Missing Number ',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '50',
      name: 'Find the Missing Number ',
      notes:
        'While `i < nums.length` loop to do an in place sort. let `target = nums[i]` -- swap each element that is in the wrong index IF the element is less than the array length. Else, just increment the iterator.\n\nOnce the array has been sorted, loop over it until the current element mismatches the index',
      timeStamp: '2022-10-04T02:38:31.358Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9',
    },
  ],
  [
    'Find the Smallest Missing Positive Number',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '35',
      name: 'Find the Smallest Missing Positive Number',
      notes:
        'poorly worded question. \nthe actual goal is to place each element in its "correct index" where the correctIndex is 1 less than the element. \nSo the correct index for the element 4 would be an index of 3. \nBasically, its the usual cyclic sort.\n\nWhen doing the actual in place sort, you skip swapping any number below 1 or >= input.length.\n\nOnce sorted based on the above criteria, loop and report the first number where the value !== index + 1',
      timeStamp: '2022-10-09T23:42:27.839Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jEXWgB5ZmM',
    },
  ],
  [
    'Frequency Stack',
    {
      categories: ['topElements'],
      daysBeforeReminder: '20',
      name: 'Frequency Stack',
      notes:
        "Build a helper `Element` class.\nThe constructor accepts a value, a frequency, and a sequenceNumber and saves each argument as `this.{arg}`.\n\nThe class also needs a compare function that accepts an `other` argument of type `Element`.\nIf `this.frequency !== other.frequency` then return `this.frequency > other.frequency`.\nOtherwise, return this.sequenceNumber > other.sequenceNumber since we need to return the later number if the frequencies are identical.\n\nIn the main Stack class constructor, initialize a maxHeap that uses `a.compare(b)` as its comparison function.\nAlso initialize a frequencyMap and a sequenceNumber set to 0.\n\nFor the push(), increment the number's frequency in this.frequencyMap.\nThen, insert a new `Element` class into the maxHeap and also increment this.sequenceNumber.\n\nThe pop() method of the Stack simply needs to remove from the heap and decrement the frequency of the removed number in the frequencyMap before returning it.\n\nThis whole process works because its okay to insert multiple copies of a number, such as `2` into the MaxHeap since we never REinsert an `Element` after removing it.\nBasically, if we insert `2 --> 3 --> 2` into the maxHeap, even though we now have 2 different `Elements` containing a `2`, their frequency and sequence number are different.\nSo when we first `pop()`, we'll get the Element with `2` and a frequency of `2`.\nNext time we pop, we'll get `3` because the only elements are 2 and 3, each with a frequency of `1` but with different sequenceNumbers.",
      timeStamp: '2022-11-02T02:05:31.696Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5zDWlVRz2p',
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
    'Function.prototype.bind',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Function.prototype.bind',
      notes:
        'declare a varialbe to hold the original `this`\nThrow a type error if the varaiable is not of type `function`.\nReturn a function that accepts arguments, and then returns using the `Reflect.apply` API to ensure you dont encounter any namespace collisions if an end user defined their own `.apply` method.\nReflect.apply takes 3 arguments, the last of which is an array of arguments.',
      timeStamp: '2022-11-02T06:17:29.671Z',
      url: 'https://www.greatfrontend.com/questions/javascript/function-bind',
    },
  ],
  [
    'Get',
    {
      categories: [],
      daysBeforeReminder: '12',
      name: 'Get',
      notes:
        'split the input string on `.` if its a string and not an array.\nLoop while `object` is truthy and `i < paths.length`.\nEach loop, reassign object to objet[paths[i]` and increment.\nAfter the loop ends, if object is NOT undefined then return it.\notherwise, return the default value.',
      timeStamp: '2022-11-02T03:10:02.490Z',
      url: 'https://www.greatfrontend.com/questions/javascript/get',
    },
  ],
  [
    'Happy Number ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '22',
      name: 'Happy Number ',
      notes:
        'All numbers eventually get stuck in a cycle. \nInitialize slow and fast pointers to `num`, and then loop while `true`.\nIncrement slow and fast using slow/fast pattern, and break the while loop if slow === fast or fast === 1.\nAfter the loop breaks, return fast === 1.\n\nCreate a helper function to actually do the squaring. \nThe helpers loops while (num >= 1). \nEach loop assign `digit = num % 10`, which will give you the LAST digit in the number. \nThen add digit * digit to `sum`. \nNext assign num to  `Math.floor(num /10)` to move "backwards" in the number.',
      timeStamp: '2022-10-12T23:54:05.493Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM',
    },
  ],
  [
    'Holy Grail',
    {
      categories: [],
      daysBeforeReminder: '8',
      name: 'Holy Grail',
      notes:
        'Use the `grid-template` to define the rows + columns.\nThe rows should be `auto 1fr auto` OR you can hardcode the height for the header/footer instead.\nThe columns should be `100px auto 100px` to account for the hard widths of the sidebars.\n\nTo make an element span the full width, assign a `grid-column` property and specify the starting + ending column. \nTo make something span 3 columns, that would be `grid-column: 1 / 4`.\n\nYou need to ensure the `html` or `body` take up the entire viewport height.',
      timeStamp: '2022-11-01T06:36:56.147Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/holy-grail',
    },
  ],
  [
    'House robber',
    {
      categories: ['dp'],
      daysBeforeReminder: '8',
      name: 'House robber',
      notes:
        'Loop from `1` up to the `inputArr` length.\nEach loop, assign `inputArr[i]` equal to the Math.max of the inputArr[i] OR inputArr[i - 1] OR  `inputArr[i] + inputArr[i - 2]`.\n\nAt the end, just return the last value in the sums array OR 0 if the last value is falsey.',
      timeStamp: '2022-10-26T23:31:48.369Z',
      url: 'https://leetcode.com/problems/house-robber/',
    },
  ],
  [
    'House robber ii',
    {
      categories: ['dp'],
      daysBeforeReminder: '2',
      name: 'House robber ii',
      notes:
        "Same as House Robber 1, but you have to perform the DP solution multiple times and compare the resulting values.\n----\nCreate a helper function that takes in an array and a `start` argument.\nDeclare two variables `one` and `two`.\nOne will basically represent the slot TWO steps previously, meaning it is NOT the adjacent slot to our current element.\nTwo will represent our adjacent slot, meaning we cannot add it to our current slot's value.\n\nDeclare a `stop` variable that is equal to nums.length -1 if `start` is 0 so that we exclude the last element when robbing the first house.\nOtherwise, `stop` is nums.length if `start` is 1, since we want to include the last element when skipping the first.\n\nLoop from start to stop.\nEach loop, declare a `max` variable that is equal to the max of `nums[i] + one` vs `two`.\nBasically, we're calculating a max based on `non-adjacent element + curr element vs adjacent element`.\nThen, reassign one to `two` (because it becomes non-adjacent to the upcoming element in the array) and reassign `two` to max.\nAfter the loop ends, return `two` since it will be the max.\n\nIn the main function, just return a Math.max of 3 numbers -- nums[0] (in case we have a single element array), helper(start = 0), and helper(start = 1).",
      timeStamp: '2022-11-02T02:08:50.751Z',
      url: 'https://leetcode.com/problems/house-robber-ii/',
    },
  ],
  [
    'Insert Interval ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '22',
      name: 'Insert Interval ',
      notes:
        'Requires 3 sequential loops. \nFirst loop to push things that dont overlap (i.end < new.start), 2nd loop to merge the overlapping intervals (i.start <= new.end), and 3rd loop to push remaining intervals.\n\ncreate an iterator variable. while arr[i] END time is less than the new interval START time, increment and push the current interval.\n\nThen, loop again while arr[i] START time is <= new interval end time AND i is less than the input length to build an overlapping interval. \nReassign `new interval.start` + `newInterval.end` based on a Math.min/max.\n\nOnce that 2nd while loop is done, push `newInterval` and then loop from `i` over the remaining input arr and push the remaining intervals.',
      timeStamp: '2022-10-18T02:34:07.150Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM',
    },
  ],
  [
    'Intervals Intersection ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '22',
      name: 'Intervals Intersection ',
      notes:
        "declare i=0, j = 0. \nWhile Loop over both arrays as long as i < a.length && j < b.length. \n\nEach loop, youre searching for an overlap. Overlap is when one intervals start time >= the other start time AND the start time is <= the other's end time.\n\nIf A overlaps B OR B overlaps A, push a new interval with start = Math.max(starts) and end = Math.min(ends).\n\nTo move forward, use ternary: A.end < b.end ? i += 1 : j += 1 at end of each loop.",
      timeStamp: '2022-11-01T05:50:24.008Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D',
    },
  ],
  [
    'Invert binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '37',
      name: 'Invert binary tree',
      notes:
        'Use a stack to process the tree.\nEach iteration, swap the left and right nodes and then process the next level.',
      timeStamp: '2022-10-26T22:22:01.915Z',
      url: 'https://leetcode.com/problems/invert-binary-tree/',
    },
  ],
  [
    'Item Cart',
    {
      categories: [],
      daysBeforeReminder: '19',
      name: 'Item Cart',
      notes: 'table --> caption --> thead --> tr -->td',
      timeStamp: '2022-10-25T02:43:02.222Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/item-cart',
    },
  ],
  [
    'K Pairs with Largest Sums',
    {
      categories: ['heaps'],
      daysBeforeReminder: '12',
      name: 'K Pairs with Largest Sums',
      notes:
        "UPDATED VERSION: use a maxHeap instead of a minHeap. simplifies all of the relevant code.\n\nInitialize a minHeap that we'll use to track\nthe top K sums.\n\nPerform a for loop from 0 to Math.min(k, arr1.length).\nImmediately do a nested for loop from 0 to Math.min(k, nums2.length).\n\nWithin the innermost loop, if the minHeap length is < k, just insert a tuple in the form of [nums1[i] + nums2[j], i , j].\nBasically, we're tracking the max sums we can create and the indices that made them.\n\nElse, we've maxed our minHeap length so we need to perform a nested if/else.\nIf nums1[i] + nums2[j] is less than the top of our minHeap[0], then we should break our loops.\nThis is because the arrays are sorted in descending order -- once we create a sum that is SMALLER than the top of the MINheap, then we cannot possibly generate any further sums that are larger than the top of our minheap.\n\nElse If that check fails, then we have a sum larger than the top of the minHeap so we remove() from the minHeap and then insert our next tuple.\n\nPast the nested for loops, loop over the minHeap and for each tuple, push an array in the form nums1[original `i`] , nums2[original `j`] into the result array..\nFinally, return the result.\n\nTime complexity: O(N∗M∗logK), where N and M are the length of arr1 and arr2 respetively.\nSpace complexity will be `K` since our minHeap only ever holds K elements.",
      timeStamp: '2022-10-27T06:37:46.415Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1JKxRB8EDJ',
    },
  ],
  [
    'Knapsack Problem',
    {
      categories: ['dp'],
      daysBeforeReminder: '8',
      name: 'Knapsack Problem',
      notes:
        'Initialize an array that will cache calculated sums.\nPopulate it by looping from 0 to `inputArr.length + 1`.\nFor each iteration, push a new Array with a length of `inputCapacity + 1` and filled with 0s.\nThe reason we add the `+1` to everything is so we can use a "0th" row/column to represent what our knapsack could look like with 0 items/0 capacity.\n\nAfter the 2D array is initialized and the prior loop ends, we do a new loop from 1 to `inputArr.length + 1`.\nEach loop, destructure [value, weight] out of `inputArr[i - 1]`.\nThe reason we need the `i - 1` is to account for out 0th row/column that we added.\n\nAfter destructuring, do a nested for loop from 0 to capacity + 1, using an iterator variable named `cap`.\nEach loop, if the destructured `weight` is > `cap`, then fill `knapsack[i][cap]` with the value from `knapsack[i - 1][cap]`.\nThis is basically saying we cannot fit the current items weight into our given capacity, so go to the previous item (previous row) and take whatever max we figured out from there.\n\nElse, we assign `knacpsack[i][cap]` to the Math.max of the previously calculated row at our current capacity VS the previously calculated row at our current capacity MINUS our current row (ie input[col-1][cap - weight]) plus our destructured value.\n\nAt the end, return the very last item in the table and use a helper function to return the items that created it.\n\nFor the helper function, it takes in the generated knapsack table and the original items array.\nInitialize an empty array, an iterator that starts from the last row and a `cap` variable that starts at the last column.\n\nLoop while `i` is greater than 0.\nEach loop, if `knapsack[i][weight]` is equal to the value in the row above it, then decrement `i` to skip the current row.\nThis works because we know that if the current row[weight] included our item, then it would have a different value from the row above it.\n\nElse, we found and item that was included.\nunshift `i - 1` to account for the extra row/col we added and then decrement `weight` by `items[i - 1][1] to remove the original weight.\nAlso, decrement i to skip the remainder of the row.\nif `weight` === 0 at the end, break the while loop.\n---\nExplanation of main logic\nBecause we work "bottoms up", our base case is 0 items at 0 capacity, which is why we added our extra row + column.\nThen once we get to the next row with our first real item, we\'ll start filling in values pretty quickly, \nWe basically build up the table row by row, similar to recursion.',
      timeStamp: '2022-10-28T20:06:09.560Z',
      url: 'https://www.algoexpert.io/questions/knapsack-problem',
    },
  ],
  [
    'Kth Largest Number in a Stream ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '25',
      name: 'Kth Largest Number in a Stream ',
      notes:
        'within the class constructor, initialize a minHeap with an empty array. \nThen, invoke a .forEach on the input within the constructor and call the `this.add()` function.\nWithin this.add, always insert the number being added. \nThen after inserting, invoke .remove() on the minHeap if the length is greater than our `k`. Then, return minHeap.peek().',
      timeStamp: '2022-10-13T01:49:39.311Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX',
    },
  ],
  [
    'Kth smallest element in a sorted matrix',
    {
      categories: ['heaps'],
      daysBeforeReminder: '15',
      name: 'Kth smallest element in a sorted matrix',
      notes:
        "TODO: learn how to solve this with binary search.\n\nCreate a minHeap.\nLoop over the matrix, and for each row insert a tuple in the format of [value, row, indexInRow].\nBasically, minheap.insert(row[0], row, 0).\n\nAfter populating the heap, loop while the heap has length AND k > 1.\nEach loop, remove from the minHeap.\nIncrement the removed `indexInRow`.\nIf the removed index is still less than the removed row's length then reinsert an updated tuple into the minHeap.\nDont forget to decrement `k` on each loop.\n\nAfter the loop ends, just return the first element of minHeap.peek()",
      timeStamp: '2022-10-26T02:56:59.572Z',
      url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
    },
  ],
  [
    'Laptop Rentals',
    {
      categories: ['heaps'],
      daysBeforeReminder: '19',
      name: 'Laptop Rentals',
      notes:
        'Easier Array solution: create one array to hold the start times, another to hold the end times. \nLoop over the input and push the start/end for each interval into the appropriate array. \nOnce that loop ends, sort both the arrays in ascending order.\n\nOnce both arrays are sorted, create a pointer index for the ends array and another for the starts array. \n\nPerform a while loop, `i < inputArr.length`. If `starts[i] >= ends[j]` increment j (this is metaphorically "freeing up" a laptop that was previously occupied). \nNo matter what, increment i on each loop.\n\nAfter the while loop ends, simply return i - j.\n\n---\nAlternative approach using a minheap:\n\nSort the input arr by start time in ascending order. \nCreate a new minheap where the comparison function relies on `a[1] - b[1]`, and make sure to pass in `inputArr[0]` during construction. \nMake sure the heap tracks a `.length` property\n\nThen, loop over the sorted input starting at index 1 (since we already passed in the first input to the minheap). \nEach loop, insert the current interval into the minheap. \nThen, if the current interval start time is greater or equal to the minHeap.peek end time, we can run `minHeap.remove()` since that means the laptop is no longer occupied.\n\nat the end, return the minheap.length. \nBasically, because we remove intervals as they free up, the # of elements in the heap represents the max # of laptops that are occupied',
      timeStamp: '2022-10-28T04:55:23.492Z',
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
    'Longest palindromic substring',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '4',
      name: 'Longest palindromic substring',
      notes:
        "Brute force solution would involve checking every possible substring to see if its a palindrome, but we can do better by only checking palindromes and exiting early when possible.\n\nCreate an empty string and save it to a `str` variable that we'll return at the end.\nLoop over the entire input string.\n\nWithin our main `for` loop, we need to check for odd length palindromes AND even length palindromes.\nEach iteration, start by declaring a `left` and `right` that are both initialized to `i`.\n\nPerform a nested while loop as long as `left` and `right` are in bounds AND they are matching characters.\nWithin the while loop, if `right - left + 1` is greater than `str` length, then update `str` using string.slice.\nThen, move both the left and right pointer outwards by 1 index.\n\nThe previous loop handles odd-length palindromes, so now repeat the logic for even length palindromes.\nAll logic is the same except `left` will be initialized to `i` and `right` will be initialized to `i + 1`.",
      timeStamp: '2022-11-01T05:53:44.713Z',
      url: 'https://leetcode.com/problems/longest-palindromic-substring/',
    },
  ],
  [
    'Longest repeating character replacement',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '19',
      name: 'Longest repeating character replacement',
      notes:
        'Use for loop + sliding window + frequency Map. \n\nTrack max repeating letter count in a variable, recalculate via Math.max in each loop. \nThen, IF the current window is bigger than maxRepeatingCharCount + k, slide the window. \nAt end of each for loop, Math.max `maxLengthSeen`',
      timeStamp: '2022-10-19T08:12:53.994Z',
      url: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    },
  ],
  [
    'Longest substring without repeating characters',
    {
      categories: [],
      daysBeforeReminder: '42',
      name: 'Longest substring without repeating characters',
      notes:
        'use a Set within a typical sliding window start/end loop. \nEach loop, start by removing elements from the Set while the current element is present in it. \nThen, add the current element after the while loop. \nThen use math.max to determine the longest length',
      timeStamp: '2022-10-19T08:04:28.497Z',
      url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    },
  ],
  [
    'Maximize Capital ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '17',
      name: 'Maximize Capital ',
      notes:
        "Create a minHeap `minCapitals` and a maxHeap `maxProfits`.\nLoop over the input `capital` array and insert the capital and index: minCapitals.insert(capital[i], i).\nThis allows us to populate a minHeap with the LEAST costly projects we can begin.\n\nDeclare an `availableCapital` variable and initialize it to the value of `initialCapital`.\nThen, perform a for loop from 0 to `numberOfProjects`.\n\nWithin each loop, perform a nested loop while `minCapitals` has length AND minCapitals.peek()[0] is <= availableCapital.\nEach while loop, remove from `minCapitals` and find the corresponding profit for the job and insert it into the maxProfits heap:\nmaxProfits.insert([profitsArr[removedIndex], removedIndex].\n\nOnce weve removed all possible jobs from minCapitals, the maxHeap will now have all possible profits based on our availableCapital.\n\npast that while loop, if there is no maxProfits length then break the loop.\nOtherwise, remove from the maxProfits heap and add the profit to availableCapital.\n\nThen, outside of that for loop just return `availableCapital`.\n\nTo understand the above flow:\nSince we are limited by the # of jobs, we're basically just constantly inserting all possible jobs we can begin based on our availableCapital.\nThen, we select the most profitable possible job -- since we dont empty the entire maxHeap on each for loop, we're always guaranteed to pull the most profitable job and we're guaranteed that it is within our budget.\n\nTime complexity is N *logN, since we need to loop over each input but we also have multiple inserts to perform. \nSpace complexity is O(N) since we need to store each interval in the 2 heaps and our output scales related to the input as well.",
      timeStamp: '2022-11-01T06:00:47.981Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B6x69OLX4jY',
    },
  ],
  [
    'Maximum CPU Load',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '15',
      name: 'Maximum CPU Load',
      notes:
        "Fastest space time approach relies on a MinHeap:\n\nSort the input on start time. \ndeclare a maxLoad and currentLoad variable = 0. Create a new MinHeap.\n\nFor loop over the entire input array. \nWithin that, do a nested while loop. \nWhile the minHeap length > 0 AND the current array element start time is greater or equal to the minHeap end time, pop the minHeap element and subtract the cpuLoad from `currentLoad`. \nOutside that while loop, push the current array element into the minHeap and increment currentLoad by the element's cpuLoad.\nFinally, reassign maxLoad based on math.max",
      timeStamp: '2022-10-20T05:18:52.730Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93',
    },
  ],
  [
    'Maximum Distinct Elements ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '28',
      name: 'Maximum Distinct Elements ',
      notes:
        'Goal is to output the # of distinct elements after deleting stuff.\n\nStart by setting the character frequencies in a Map by looping over the input. \nThen, create a minHeap that will be used to hold the non-distinct numbers in a `[freq, key]` tuple.\n\nCreate a `distinct` variable and set it to 0.\nLoop over the Map and if the frequency for a number is 1, increment `distinct`.\nElse, push the `[freq, int]` tuple into the minHeap.\n\nLoop while the minHeap has length and the input `k` elements to remove is > 0.\nEach loop, remove the top element from the heap and then decrement `k` by the frequency - 1.\nWe dont subtract the full frequency because an element is distinct if it has a count of 1, not a count of 0 (meaning we need to leave 1 element of it).\nif `k` is >= 0 after subtracting the frequency - 1, increment `distinct`.\n\nAfter the while loop ends, run another `if` block since we might have elements to remove still.\nSince each element is distinct at this point, just decrement `distinct` by `k` since that is the number of elements to remove still.\n\nFinally, return `distinct`',
      timeStamp: '2022-11-02T02:14:20.863Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY',
    },
  ],
  [
    'Merge Intervals ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '27',
      name: 'Merge Intervals ',
      notes:
        'Sort the array based on `interval.start`. Create a new start + end variables and initialize them based on `inputArr[0]`. \n\nLoop, and overwrite `end` IF intervals[i].start is lesser or equal to end. Else, push the existing start+end and reset them to intervals[i].\n\nAfter the loop ends, youll still have a `start` and `end` that needs to be pushed, so dont forget that.',
      timeStamp: '2022-11-02T02:17:54.615Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx',
    },
  ],
  [
    'Merge K Sorted Lists ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '20',
      name: 'Merge K Sorted Lists ',
      notes:
        'Create a minHeap. \nLoop over each list in the input array and insert the head of the linked list into the minHeap.\n\nCreate a `head` that points to minheap.peek() and `prev` variable that starts at `null`.\nLoop while the minHeap has length.\nEach loop, remove a node and store it in a variable.\nif `prev` is defined, point prev.next to the node from the minHeap.\nThen, reassign prev to the removed node.\n\nOutside the if/else but within the loop, if the `removed` has a truthy `next` value, push that next value back into the minHeap. \nThis is how we wind up processing every node in each list.\n\nAfter the loop, return the `head`',
      timeStamp: '2022-10-14T23:52:22.052Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK',
    },
  ],
  [
    'Merge two sorted lists',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '15',
      name: 'Merge two sorted lists',
      notes:
        'create a dummy node via `new ListNode()`.\nCreate a `tail` pointer that points to the dummy node.\n\nLoop while list1 AND list2 are truthy.\neach loop, reassign tail.next to whichever list node has the lower val.\nThen, move the tail to tail.next.\nAfter the while loop ends, if `list1` is truthy then assign tail.next to list1 to make sure we capture all remaining nodes.\nDo the same logic for `list2`.\nLastly, return `dummy.next` since it will point to the head of our linked list',
      timeStamp: '2022-10-26T22:48:26.002Z',
      url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    },
  ],
  [
    'Min Heap Construction',
    {
      categories: ['heaps'],
      daysBeforeReminder: '55',
      name: 'Min Heap Construction',
      notes: '',
      timeStamp: '2022-10-21T01:45:47.245Z',
      url: 'https://www.algoexpert.io/questions/min-heap-construction',
    },
  ],
  [
    'Min cost climbing stairs',
    {
      categories: ['dp'],
      daysBeforeReminder: '2',
      name: 'Min cost climbing stairs',
      notes:
        'Question is unclear: when it asks us to "reach the top floor" it means reach the array length (NOT the last element in the array).\nStarting from index 0 or 1, you have to add either cost[i + 1] if you take 1 step or add cost[i + 2] if you take 2 steps.\n\nWith that in mind, the solution is bottoms up 1D DP.\nStart by pushing a `0` into the end of the array. This `0` will represent the cost of reaching our array length.\n\nFrom there, loop BACKWARDS over the array (skipping the `0` you just pushed).\nEach iteration, reassign cost[i] to the minimum of cost[i] + cost[i + 1] vs cost[i] + cost[i + 2].\n\nAt the end, return the MINIMUM of cost[0] vs cost[1] since we MUST start from one of those two indices.',
      timeStamp: '2022-11-02T02:22:36.754Z',
      url: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
    },
  ],
  [
    'Minimum Difference Element ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '21',
      name: 'Minimum Difference Element ',
      notes:
        'Perform a typical binary (while l <= r) search and return if `arr[mid] === target`.\nElse, if arr[mid] < key, increment start.\nElse, decrement end.\nEach loop, recalculate a `min` variable based on the Math.abs of target - currEl vs target - min.\nAt the end, return `min`.\n\nALTERNATIVE APPROACH:\nIf the while loop finishes with no match, write an `if` statement to return the smaller of two expressions, arr[start] - key vs key - arr[end]. This works because start will === end + 1 after the while loop is done, so we know arr[start] is greater than arr[end], and so the one with the smaller difference is closer to key.',
      timeStamp: '2022-10-22T05:58:31.578Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9',
    },
  ],
  [
    'Minimum Window Sort',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '15',
      name: 'Minimum Window Sort',
      notes:
        'do a typical two pointer while loop using left and right pointers. \nIn the while loop, increment left if arr[left + 1] is > arr[left]. \nImmediately check if left >= arr.length and return 0 if true since the array is already sorted.\n\nDecrement right using the same logic. \nThis is used to find the MINIMUM subarray that needs to be sorted, but we then need to check if it needs to be expanded. \n\nNext, create a min and max variable to track the min/max in our subarray. \nLoop from left up to and including right, and recalculate min/max at each step.\n\nAfter looping to establish the min/max in the subarray, do a while loop as long as left > 1 and arr[left - 1] > min and decrement left each time.\nDo basically the same thing for right (right < arr.length - 1), except incrementing and checking against max.\n\nfinally, return right - left + 1 since thats the length of our subarray that needs to be sorted.',
      timeStamp: '2022-11-01T02:25:22.090Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6',
    },
  ],
  [
    'Minimum window substring',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '35',
      name: 'Minimum window substring',
      notes:
        'populate a map based on the pattern, then perform a typical sliding window.\n\nDuring sliding window using a for loop, mark a `charsMatched` variable anytime you decrement a count to 0 (never delete any of the characters, only adjust their counts). \n\nPerform a while loop within the main for loop, while (charsMatched === map.size). \nAttempt to reassign a `smallestStr` variable IF the variable is an empty string or the current window has a smaller length than the string stored in that variable. \nThen shorten the window and increment any necessary counts.\n\nReturn the `smallestStr` variable at the end.',
      timeStamp: '2022-10-24T05:07:22.426Z',
      url: 'https://leetcode.com/problems/minimum-window-substring/',
    },
  ],
  [
    'Next Interval',
    {
      categories: ['heaps'],
      daysBeforeReminder: '10',
      name: 'Next Interval',
      notes:
        'Utilizes two max heaps, one for the start times and one for the end times.\nLoop over the input intervals and for each interval push a tuple in the form of [start OR end, index] into the two maxheaps.\n\nAfter both heaps are populated with starts/ends, loop over the input again.\nEach loop, remove from the `ends` heap and destructure the end time + original index.\nAssign output[originalIndex] to -1 as a default value.\n\nThen, if the maxStartheap.peek() start time is >= the current end time, destructure the start+index from the `starts` heap.\nPerform a nested loop while maxStarts.length && maxStart.peek is >= topEnd and just reassign the [start, startIndex] that you originally destructured from the `starts` heap at the beginning of the `if` block.\nThis is done to ensure we find the CLOSEST start time after a given end time, since that is what the problem asks of us.\n\nAfter the while loop ends, we can reassign output[endIndex] to point to startIndex.\nThen, push the current [start, startIndex] tuple back into the starts array because it could be the next interval for other intervals as well.\n\nThe above flow works because each heap is sorted on MAX.\nSo even though our while loop could discard multiple start times, we know we wont need them again because the end heap is ALSO sorted on max.',
      timeStamp: '2022-11-01T02:37:03.983Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gkkmqXO6zrY',
    },
  ],
  [
    'Next Letter ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '21',
      name: 'Next Letter ',
      notes:
        'typical binary search (start = 0, end = arr.length). \n\nWhile start < end, calculate middle (Math.floor(start + (end - start) / 2)). \nIf arr[mid] > key are greater, reassign end to mid. Otherwise, reassign start.\n\nAt the end, return letters[start % len] to handle cases where the key wasnt available and start went past the end.',
      timeStamp: '2022-10-13T00:44:25.589Z',
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
      daysBeforeReminder: '12',
      name: 'Number Of Binary Tree Topologies',
      notes:
        "main function accepts `n` but also a `cache` that defaults to a value of `{0: 1}`.\nWe'll use the cache to avoid recalculating the different subtrees as we recurse.\n\nTo begin the function, check if our cache has a value for `n` and return it if present.\n\nDeclare a `numberOfTrees` variable = 0.\nLoop from 0 to n, and name the iterator `leftTreeSize`.\nWithin the loop, declare a `rightTreeSize` = n - 1 - leftTreeSize.\nThese 2 values dictate how we split our binary tree topology between left/right sides for any given value of n.\n\nDeclare numOfLeftTrees = recursiveFunction(leftTreeSize, cache).\nDo the same for numberOfRightTrees but use rightTreeSize.\nThen, multiply the return value of those two variables (left * right) and add it to the numberOfTrees.\nWe use multiplication to handle all possible variations of the topologies.\n\nFinally, store the numberOfTrees in our cache and then return it.",
      timeStamp: '2022-11-02T02:34:02.905Z',
      url: 'https://www.algoexpert.io/questions/number-of-binary-tree-topologies',
    },
  ],
  [
    'Number Of Ways To Make Change',
    {
      categories: ['dp'],
      daysBeforeReminder: '7',
      name: 'Number Of Ways To Make Change',
      notes:
        'initialize a `ways` array with n + 1 length, and then fill it with 0s.\nAssign a value of `1` to the first element in the ways array.\nThis value represents the 1 way we have of creating 0 change, which is to use 0 coins.\n\nLoop over every element in the `inputArr`.\nDeclare `coin = denoms[i]`.\n\nNested for loop from 1 to n + 1 using an iterator named `amount`.\nEach loop, if `coin` is less than OR equal to `amount`, then we increment `ways[amount]` by `ways[amount - coin]`.\n\nAt the end, return the last element in the `ways` array.',
      timeStamp: '2022-11-01T02:40:45.257Z',
      url: 'https://www.algoexpert.io/questions/number-of-ways-to-make-change',
    },
  ],
  [
    'Number Range ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '31',
      name: 'Number Range ',
      notes:
        'create a helper function that will do the binarysearch. it take `arr, target, findMaxIndex` as args.\n\nThe helper uses the typical start/end variables, but also creates a `keyIndex = -1` variable which will be used to return the desired index. \nUnlike normal binary search once `arr[mid] === target` you reassign `keyIndex = mid` AND CONTINUE SEARCHING. \nif `findMaxIndex === true`, you search the greater part of the ascending array to try and find the LAST valid index (start = mid + 1). Otheriwse, you try to find the FIRST valid index (end = mid - 1). \nBasically, youre continuing your binary search past the first match in order to find the first or last index, based on findMaxIndex. \n\nWithin the main function, call your binary search helper with `findMaxIndex = false` in order to find the index to insert as `result[0]`. \nThen, repeat the call with `findMaxIndex = true` to find `result[1]` ONLY IF the initial function did not return an index of `-1` since -1 means there are no matches.',
      timeStamp: '2022-11-02T02:49:17.741Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz',
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
      daysBeforeReminder: '16',
      name: 'Palindrome LinkedList',
      notes:
        'use fast/slow pointers to find the middle pointer (slow = middle).\n\nCreate a helper function that reverses a linked list and returns the head of the newly reversed list (should be the `prev` value of the reverse function). \nPass in the middle node (slow), and store the returned node in a variable.\nCreate another variable to copy that returned head so that we can reverse it again at the end.\nReset `slow` back to the original head. \n\nWhile `slow && reversed`, check if `slow.val !== reversed.val`. \nIf they mismatch, return false, otherwise increment both nodes to the `next` property.\n\nAfter the while loop, unreverse the list and return `true`.\nThere is no need to reconnect anything',
      timeStamp: '2022-10-22T21:26:38.266Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ',
    },
  ],
  [
    'Partition equal subset sum',
    {
      categories: ['dp'],
      daysBeforeReminder: '8',
      name: 'Partition equal subset sum',
      notes:
        'DRAW THIS OUT TO VERIFY UNDERSTANDING.\n\nFigure out the sum of all numbers in the input array.\nIf `sum % 2 !== 0` then we have an odd number and cannot create an equal partition using strictly integers, so return false.\nThen, divide `sum` by 2 since were actually trying to figure out if we can create HALF of the total sum, since we need 2 halves.\n\nCreate a new Set, and then add the number 0.\nThis represents the sum `0` that we know we can create by just not using any elements from our input.\n\nNext, loop over the entire input array.\neach loop, create a new Set.\nThen, do a nested forEach over the original Set and add each value to the new set.\nWithin the same forEach loop, also add `currNum + value` to the new Set.\nbasically, just add all existing values + the newly calculated ones into a new set.\nAfter the forEach, if the new set has our target `sum` then return true.\nOtherwise, reassign the original Set to our newly populated one so that we can go over it in the next loop.\n\nAt the end of the main function, return `set.has(sum)`.\n\nThis logic works because we know that if our total sum is divided by 2, then if we ever encounter half of that sum then some combination of the array creates half our target sum and some other combination creates the remaining half otherwise we broke the laws of physics. ',
      timeStamp: '2022-10-28T19:55:12.605Z',
      url: 'https://leetcode.com/problems/partition-equal-subset-sum/',
    },
  ],
  [
    'Path With Given Sequence ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '40',
      name: 'Path With Given Sequence ',
      notes:
        'recurse, but make sure you include a 3rd argument to track an index (default val = 0).\n\nif !root, return sequence.length === 0.\nif index >= sequence.length OR root.val !== sequence[index], return false.\nif its a leaf node AND index === sequence.length - 1, return true. Otherwise return func(left) || func(right).',
      timeStamp: '2022-10-13T23:30:29.778Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn',
    },
  ],
  [
    'Permutation in string',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '35',
      name: 'Permutation in string',
      notes:
        'Build a map from pattern. \nLoop over input string and decrement the counts anytime map[char] === 0. \nEach iteration where the window === length of pattern, drop the char at the windowStat and increment. \nreturn `true` if the `matched === patternMap.size` <-- NOTE that you compare the charsMatched against the map size, NOT against the pattern.length!',
      timeStamp: '2022-10-19T23:44:44.729Z',
      url: 'https://leetcode.com/problems/permutation-in-string/',
    },
  ],
  [
    'Permutations',
    {
      categories: ['subsets'],
      daysBeforeReminder: '17',
      name: 'Permutations',
      notes:
        "General idea is to add `input[i]` into EACH position of the queued subArrays, allowing us to build up each loop.\nfor input [1,3,5] it is basically doing this:\n[] --> [1] --> [1,3], [3,1] --> insert 5 into each slot from there...\nLook at the graphic in the solution to understand more\n\ncreate an output array, and a permutations array. \npermutations starts with an empty array at index 0.\n\nfor loop over nums -- this loop will determine which num to insert into the permutation. \nEach loop, declare a `len` variable to store `permutations.length`.\n\nnested for loop starting from 0, where `(j < len)`, which will ensure that we dont try to shift\ntoo many elements per iteration of `i`. \nAll we do is shift() from permutations and save to a variable.\n\nAnother nested for loop (so we have 3 for loops total) starting from 0, where `k < shiftedPermutation.length + 1`.\nStart by copying the shifted permutation from the 2nd for loop -- can be done via array spread. \nThen, splice nums[i] into the permutation at the kth index. `splice(k, 0, nums[i]`.\n \nThis loop builds the next permutation by splicing `nums[i]` into the `k`th index of the permutation + 1. \nBasically, if the `perm` is [1], the `k` loop will create `[1,3]` and `[3, 1]`. \n\nIn the most nested loop, if the copied array length === nums.length, push it into the output array. \notherwise we're not done filling up the permutation, so push it into the pending permutations array.\n\n--- ALTERNATIVE recursive approach\ncreate a helper that accept an input array, an index, a currentPermutation, and an output array.\nif `index === input.length` then push the currentPermutation into the output array.\n\nOtherwise, loop from 0 to the currentPermutation length + 1.\ncreate a copy of the current permutation, then splice `i, 0, nums[index]`.\nThen recursively call the helper while passing the original input, incrementing the index, the new permutation, and the original output.\n\nIn the main function, declare an output array.\nCall the recursive helper while passing in the output, and then return the output array\n\nPermutations always have a time complexity of factorial N aka (N!).\nSince we also need to loop over the permutations themselves, this makes the runtime O(N * N!).\nThe same math applies to the space complexity.",
      timeStamp: '2022-10-25T02:35:49.571Z',
      url: 'https://leetcode.com/problems/permutations/',
    },
  ],
  [
    'Pig Emoji',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Pig Emoji',
      notes:
        'Uses lots of flexbox + position relative. Dont forget about the different `justify-content` properties -- you want space-around!',
      timeStamp: '2022-11-02T06:04:26.496Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/pig-emoji',
    },
  ],
  [
    'Progress Bar',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Progress Bar',
      notes:
        'Create a `range` input in the HTML that you can use to easily adjust the progressbar value.\nEnsure it has a `min=0` and `max=0`.\n\nBefore building out the JS, update the css file so that the main div has `overflow:hidden` that way the interior progress bar doesnt poke outside its container.\nFor the nested progressbar, make a new class and ensure it takes up the full height of its container.\nAlso align the text to the center, and give it `overflow:hidden` so that the interior text does bleed out of the colored progress bar when dealing with #s that are very small such as 2%.\n\nWithin the JS file, write some JS to grab the initial `progress` div and the range input.\n\nThen, write some code to create a new div that will go inside of the primary div as a child.\nAdd a unique class name to it, set the `role` attribute to `progressbar`, and set the `aria-valuemin` to 0 and the `aria-valuemax` to 100.\nThen, append the created progressbar div to the primary div.\n\nStill within the JS file, write an `updateBar` function.\nThis function grabs the interior progress bar element via its class name, then updates the text content and the width so that they match the current value of the range input.\nIt also sets an `aria-valuenow` attribute.\nInvoke this function immediately, but also assign it to the `oninput` handler of the range input so that it updates as a user slides.',
      timeStamp: '2022-10-28T05:06:37.128Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/progress-bar',
    },
  ],
  [
    'Promise.race',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Promise.race',
      notes:
        'The code needs to work with .then and .catch, so we need to return a new Promise.\n\nThe new promise takes the usual executor format (resolve, reject) and if there is no iterable length it returns immediately.\nOtherwise, it loops over the iterable via forEach.\nThe forEach uses as async function, ie `forEach(async item => {})`.\nWithin each async function, use a try catch block to try and await each item and then resolve the value, and then catch + reject if needed.\nAwaiting each item before resolving works because each of the async forEach calls will get put into the microtask queue, rather than waiting before moving on to the next item in the iterable.',
      timeStamp: '2022-11-02T03:16:34.386Z',
      url: 'https://www.greatfrontend.com/questions/javascript/promise-race',
    },
  ],
  [
    'Promisify',
    {
      categories: [],
      daysBeforeReminder: '2',
      name: 'Promisify',
      notes:
        'The `promisify` function returns a function that accepts any number of arguments.\nThe anonymous function that is returned will immediately return a new Promise.\n\nAs with any promise, the executor function accepts a resolve and reject argument.\n\nWithin the executor function, define a `handleErrorAndValue` function that receives an error argument FIRST and a value argument 2nd.\nIF error is truthy, then we invoke the `reject` function and pass in the error.\nOtherwise, we invoke the resolve function and pass in the value.\n\nAfter defining the handleError func, we just need to invoke the callback with `.call` and pass in `this`, all of the arguments, and the `handleError` function as the last argument.',
      timeStamp: '2022-10-26T03:44:52.565Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/promisify',
    },
  ],
  [
    'Purchase Form',
    {
      categories: [],
      daysBeforeReminder: '2',
      name: 'Purchase Form',
      notes:
        'The ordered list uses a `counter-rest` with a property of `list-items`.\nIt also is a flexbox\nthe `ol li`  have a flex-basis of 100% and are positioned relatively.\n\nThen, on the `li::before` pseudoelement use `counter-increment` with `list-items` as a property.\nTo create the content, just use `content: counter(list-items)`.\nEach pseudoelement will be a flex container to be able to position the content, and you can generate the content itself via `counter-increment` and then `content: counter()`.\n\nto create the horizontal lines, use the ::after element. \nTheir width should be 100% MINUS the circle width. \nAlso give them a height and make them `display: block`. \nLast, position them absolutely.\nTo get the right horizontal position, use `right: calc(-50% + circle radius).\nTo get the vertical position, use a complex `calc((circle radius + circle border width - divider line height) / 2).\n\nTo move the `button`, you need to give it `display: block` for margins to work as expected.',
      timeStamp: '2022-10-28T05:57:21.237Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/purchase-form',
    },
  ],
  [
    'Rainbow Circles',
    {
      categories: [],
      daysBeforeReminder: '25',
      name: 'Rainbow Circles',
      notes: 'borders + padding + basic math',
      timeStamp: '2022-10-19T01:50:23.914Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/rainbow-circles',
    },
  ],
  [
    'Rearrange String ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '32',
      name: 'Rearrange String ',
      notes:
        "First, populate a Map with the character frequencies.\nThen, create a maxHeap.\nLoop over the map and insert each value/key combo into the maxHeap.\n\nDeclare 3 variables -- previousChar = '', previousFreq = 0, and an outputStr = ''.\nDo a while loop as long as the maxHeap has elements in it.\nIn each loop, remove the top element and store it in a variable within the loop.\nThen, if the previousChar (not the element you just removed in this loop) is defined and the previousFreq is greater than 0, push them back into the maxHeap.\nThe idea here is that we avoid removing/inserting the elements during a single loop, otherwise our output string will wind up with neighboring characters.\n\nAfter pushing the previous stuff back into the heap (if applicable), append the current character to the output string.\nThen, reassign previousChar to the current character, and the previousFreq to the current freq - 1.\n\n(idk if this step is needed) At the end, loop over the output string and check if the next character ever equals the current character.\nif so, return ''.\nOtherwise, after the loop ends just return the result string.",
      timeStamp: '2022-10-15T20:21:53.825Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xV7wx4o8ymB',
    },
  ],
  [
    'Rearrange String K Distance Apart',
    {
      categories: ['heaps'],
      daysBeforeReminder: '16',
      name: 'Rearrange String K Distance Apart',
      notes:
        "IMPORTANT: previous reminder was set for 21 days, not 2!\nSo if you nail it, set the reminder for something like 35 days.\n\nstart by creating a Map and populating the character counts in it.\nThen, loop over the map and push a [frequency, char] tuple into a maxHeap.\n\nAfter populating the heap, create an output string and a queue.\nLoop while the maxHeap has length.\nEach loop, remove the top tuple and append the character to the output string.\nThen, push the tuple into the queue WHILE decrementing the frequency by 1.\nAny time the queue.length === k, shift from the queue. \nIf the shifted frequency is > 0, push the tuple back into the maxHeap.\n\nThe above logic is crucial -- because we WONT push elements back into the maxHeap if their frequency becomes 0, other elements may get stuck waiting in the queue. \nThats what we want!\n\nThis helps ensure that if we cant place elements `k` distance from each other, then we will run out of elements in our maxHeap (because some of the elements are stuck in the queue) and our while loop will break.\n\nAfter the while loop, check if the output.length === inputStr.length.\nIf not, return ''.\nAgain, this will happen if elements get stuck in the queue rather than fully emptying both the queue and maxHeap.\n\nAfter the length check, return the output string.",
      timeStamp: '2022-10-18T02:54:41.274Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE',
    },
  ],
  [
    'Remove Duplicates ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '45',
      name: 'Remove Duplicates ',
      notes:
        'declare `nextNonDuplicateSlot = 0. For loop -- each iteration, if arr[i] === arr[i + 1] then `continue`. \nOtherwise, reassign arr[nextNonDuplicateSlot] = arr[i] and increment nextNonDuplicateSlot. \n\nAt the end, return nextNonDuplicateSlot since it will be equal to the LENGTH of the non duplicate array.',
      timeStamp: '2022-10-22T19:25:06.826Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA',
    },
  ],
  [
    'Remove Duplicates From Linked List',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '24',
      name: 'Remove Duplicates From Linked List',
      notes:
        'Initialize a `curr` value equal to the head.\nLoop while curr is truthy.\nNested loop while curr.value === curr.next?.value.\nReassign curr.next to curr.next.next.\n\nAfter that nested loop breaks, reassign curr to curr.next.\nReturn the original head at the end of everything',
      timeStamp: '2022-11-01T06:02:56.388Z',
      url: 'https://www.algoexpert.io/questions/remove-duplicates-from-linked-list',
    },
  ],
  [
    'Reorder list',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '17',
      name: 'Reorder list',
      notes:
        "Start by creating a `reverse` helper function that reverses a list by taking in a single node as the argument.\n\nIn the main function, use fast/slow pointers to find the middle node. \nThen, use the `reverse` helper and store the returned value as something like `reversedHead`.\nDeclare another variable to clone `head`, and a `temp variable.\n\nLoop while `reversedHead && headClone`. \nin the loop, you're just pointing the node in `headFirstHalf.next` to the node at `reversedHead`, then reassigning `headFirstHalf` to its ORIGINAL .next value (which you needed to store in a `temp` variable before overriding the .next pointer). \nThen, do the same thing for the `reversedHead.next` pointers, where you reassign them to point to the node at `headFirstHalf` before reassigning `reversedHead` to its ORIGINAL .next value in the reversed list.\n\nAfter the while loop is over, if `headFirstHalf.next` is truthy make sure to reassign it to `null` since it is now the tail node of the modified list.\nFinally, return the original `head` input.",
      timeStamp: '2022-10-28T04:45:23.061Z',
      url: 'https://leetcode.com/problems/reorder-list/',
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
    'Reverse a Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '15',
      name: 'Reverse a Sub-list ',
      notes:
        'Do a while loop where `i = 1`, as long as `curr` is truthy and `i < p`. \nEach loop, point `tailFirstHalf` to `curr` and then point `curr` to `curr.next` before incrementing `i`\nAfter the final iteration, `curr` will point to `p` .\n\nCreate a `reversedTail` to store `curr` since it will become the tail of our reversed list. \n\nNext, reverse the nodes via while loop, `curr !== null && i <= q`. \n\nafter reversing, update `reversedTail` to point to `curr` so that it reconnects with whatever remaining nodes are in the last part of the linked list. \n\nAlso, if tailOfFirstHalf !== null then reassign its `.next` value to `prev`. \nOtherwise, if it IS null then `head` is the first node in the reversed sublist, so we point the .next to head.next. \n\nreturn head.',
      timeStamp: '2022-10-28T02:16:49.128Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2',
    },
  ],
  [
    'Reverse alternating K-element Sub-list',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '13',
      name: 'Reverse alternating K-element Sub-list',
      notes:
        'DRAW THIS OUT FOR PRACTICE/LEARNING!\nlet curr = head, prev = null.\nLoop while curr is truthy.\ndeclare tailOfPrevList = prev, tailOfCurrList = curr, i = 0, next.\n\nnested loop while curr is truthy and i < k where you reverse the nodes as usual.\n\nAfter the nested loop ends, if tailOfPrevList is truthy, point its `next` to prev.\nElse, point `head` to prev.\n\nPast the if/else, assign tailOfCurrList.next to curr.\n\nThen, reassign `i` back to 0 so we can skip `k` nodes.\nLoop while curr is truthy and i < k.\nJust reassign prev/curr each loop.\n\nAt the end of the main while loop, just return `head`.',
      timeStamp: '2022-10-22T06:29:13.811Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG',
    },
  ],
  [
    'Reverse every K-element Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '10',
      name: 'Reverse every K-element Sub-list ',
      notes:
        'let `curr = head` and `prev = null`.\nloop `while(curr)`. \nWithin loop, create variable "tailOfPrevSubArr = prev" to store the node we need to connect after reversing the next subArr. \nAlso, create variables for `lastNodeOfSublist = curr`, `next = null`, and `i = 0`.\n\nnested while loop, curr !== null && i < k. \nreverse the nodes here: next = curr.next, curr.next = prev, prev = curr, curr = next, i + 1.\nafter the nested while loop, connect the PREVIOUS subarray with the new `prev` -- if tailOfPrevSubArr !== null, tailOfPrevSubArr.next = prev. \nOtherwise, head = prev.\n\nAfter above if/else, assign `lastNodeOfSublist.next = curr` to connect the end of the current sub array with the upcoming one.\n\nAt any point within larger `while` loop, if !curr then we break the loop. \nOtherwise, we end the while loop by assigning `prev` to `lastNodeOfSublist`.\n\nNOTE: drawing this out on paper will help it make more sense :)',
      timeStamp: '2022-11-02T01:18:40.509Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR',
    },
  ],
  [
    'Robot Emoji',
    {
      categories: [],
      daysBeforeReminder: '14',
      name: 'Robot Emoji',
      notes:
        'By putting `display:flex` on the `.light`, you can create a new stacking context that allows you to put a z-index on the `.bulb`\n\nTo position the `.light` above the head, you need to calculate the total height of the .stick (15px) , .bulb (30px) and then account for any margins.\nThe .bulb has a -5px margin, but the head itself has a positive 5px margin so the two of them cancel out. \nTherefore we can put `top: -45px` on the `.light` to position it properly.\n\nThe triangle nose can be created by using borders exclusively.\nThe bottom border will control the height (30px), and the left + right borders control the width (15px each).\nThe left/right borders need a transparent color to create the triangle shape.',
      timeStamp: '2022-11-01T07:25:02.355Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/robot-emoji',
    },
  ],
  [
    'Rotate a LinkedList',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '11',
      name: 'Rotate a LinkedList',
      notes:
        'declare a `curr` variable that = head, and a `len` = 1.\nloop while (curr.next) and just move curr and increment len by 1.\n\nAfter the loop, reassign curr.next to head. \nThis makes the list circular by linking the last node to the beginning node.\n\nNext, modulo the rotations by the `len`.\nThis ensures that if `rotations` was larger than the actual list itself, we dont go out of bounds.\n\nReset `curr` variable to `head`.\n\nFor loop from 0 to rotations - 1 where we reassign curr to curr.next.\nThis allows us to skip to the correct node that will become the new tail of the list.\n\nAfter the for loop, reassign `head` to `curr.next`.\nThen, assign curr.next to null.\nFinally, return head.',
      timeStamp: '2022-10-22T20:31:12.979Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R',
    },
  ],
  [
    'Scheduling Tasks',
    {
      categories: ['topElements'],
      daysBeforeReminder: '11',
      name: 'Scheduling Tasks',
      notes:
        'Create a Map and loop over the input array to populate the map with the frequency of each task.\nCreate a maxHeap, and insert each [frequency, value] tuple into the maxHeap by looping over the Map.\n\nDeclare a `result` variable initialized to 0.\nLoop while the maxHeap has length.\nEach loop, create a `waitList` array that will hold our cooling tasks.\nAlso declare a counter = k + 1.\n\nThen, do a nested loop while `counter > 0` AND the maxHeap.length is truthy.\nWithin the nested loop, increment the main `result` variable by 1.\nThen, destructure a tuple from the maxHeap.\nIf the frequency in the tuple is > 1, insert the tuple into the waitList.\nThen, decrement `counter`.\n\nAfter the nested while loop, if `counter` is greater than 0 AND we have items in our waitlist, then increment `result` by `counter`.\nThen push each element in the waitlist back into the heap.',
      timeStamp: '2022-10-26T03:08:32.311Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JYB20zgR32o',
    },
  ],
  [
    'Search Bitonic Array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '17',
      name: 'Search Bitonic Array',
      notes:
        "Make a helper function that uses Binary Search to find the max number's index in the bitonic array. \nThis can be done via normal binary search and looping while `start < end`. \nRather than checking for a target value, you just check if arr[mid] > arr[mid + 1].\nIf true, then reassign `end` to `mid. \nOtherwise reassign start to mid + 1.\nAt the end, return start.\n\nNext, create a helper function that can do an order agnostic binary search, and it accepts `arr, key, start, end` args. \nThe core logic is the same, but you have to determine if the input isAscending via arr[start] < arr[end - 1]. \nOnce thats determined, you do a typical binary search and move the start/end based on the usual check and then a nested check based on isAscending. \nIf at any point you find the target, return it, otherwise return -1 at the end.\n\nIn the main function, you can call the first helper to find the max index in the array. \nThen, you can call the order agnostic binary search on the first half below the maxIndex and then conditionally call the 2nd half above/including that max index if the first search returned -1.",
      timeStamp: '2022-10-18T03:04:50.020Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE',
    },
  ],
  [
    'Search in a Sorted Infinite Array ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '23',
      name: 'Search in a Sorted Infinite Array ',
      notes:
        'IGNORE ANY CHECKS AGAINST MAX_SAFE_INTEGER.\nProceed as if its not part of the problem, and youll solve it easily.\n\nThis one uses a normal binary search EXCEPT you first need to find the right range to search through.\n\nDeclare start = 0, end = 1. while `(reader[end] <= target)` reassign start to `end` to keep the search range small. \nThen just double `end` to bring in more numbers `end *= 2`. \n\nOnce the while loop ends, do a normal binary search.\nif `reader.get(mid)` ever goes out of bounds, just return -1.',
      timeStamp: '2022-10-13T01:41:35.908Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2',
    },
  ],
  [
    'Shifted Binary Search',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '13',
      name: 'Shifted Binary Search',
      notes:
        'modified binary search using `while start < end` loop.\n\nCalculate middle and return it if it contains the target element.\nnext we need to determine if arr[start] < arr[mid], which would indicate that everything left of mid is sorted in ascending order. \nIf so, then we check if the `target` is >= `start` and <= `mid`. \nIf true, we reassign end to mid. \nIf false, we need to move to the right of mid.\n\nIf arr[start] was NOT <= arr[mid], then the right half of the array after `mid` will be in ascending order. \nSo we first check if the target is > `mid` and <= `end - 1` and if it is, we move the `start` to mid + 1. \nOtherwise, we move leftwards.\n\nAt the end, if array[start] === target then return start, otherwise return -1.',
      timeStamp: '2022-10-26T03:13:31.407Z',
      url: 'https://www.algoexpert.io/questions/shifted-binary-search',
    },
  ],
  [
    'Single Cycle Check',
    {
      categories: [],
      daysBeforeReminder: '17',
      name: 'Single Cycle Check',
      notes:
        'Poorly worded.\nQuestion is only asking us to check the first element for a cycle, not every single index in the array.\n\nNaive solution involves creating an array or map and marking the indices you visit. \nThis costs space.\nAnother naive solution involves mutating the array as you visit each index, setting it to `null`.\nThis is mutative, so still not ideal.\n\nideal solution involves tracking how many indices weve visited, a `currIndex`, and the original index (0).\nLoop while `visited` < input.length.\nEach loop, check is visited > 1 AND `currIndex === originalIndex`. \nIf true, return false since we hit our starting index but didnt visit all other indices.\nOtherwise, increment `visited` and then reassign curr.\n(curr + input[curr]) % input.length;\nDo a nested while loop as long as curr <0 and add the input.length to curr each time so that we are positive.\nAfter the main while loop ends, return curr === 0 which will indicate that we made it back to our starting point.',
      timeStamp: '2022-10-22T06:34:19.866Z',
      url: 'https://www.algoexpert.io/questions/single-cycle-check',
    },
  ],
  [
    'Single Number ',
    {
      categories: ['xor'],
      daysBeforeReminder: '30',
      name: 'Single Number ',
      notes:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR\n\nWhen you XOR 0 against a number, youll always return the original number. And when you XOR a number against itself, the 32 bit representation will cancel out, returning 0. \n\nWith this in mind, you can initialize `result = 0` and then just loop over the arr, performing `result ^= arr[i]`. The end will result will be the only non-duplicate number, because all other numbers will have cancelled their bits out.',
      timeStamp: '2022-10-04T02:39:47.006Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG',
    },
  ],
  [
    'Sliding Window Median ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '8',
      name: 'Sliding Window Median ',
      notes:
        'Things to watch out for:\n- using `<` instead of `<=` when removing.\n- Not incrementing `start` when removing\n- Not rebalancing BEFORE + AFTER removing\n- not using `end - start + 1 >= k` for the median check.\n- not pushing the median prior to removing the `start`\n\ncreate a `lowers` maxHeap and a `greaters` minHeap within the constructor.\n\nCreate the same methods that you would for the normal median of a number stream problem; insert, updateMedian, rebalanceHeaps.\n\nWithin the predefined `find_median` method that accepts an array and a window size, create an output array and perform a sliding window via `end` and `start` pointers.\nEach loop, starting by inserting input[end].\n\nThen, if our window is === k (end - start + 1), push this.median into the result array.\nThen, determine which number needs to be removed via `input[start]`.\nIf the numToRemove is <= this.lowers.peek, it has to be within that heap.\nSince our heap class doesnt allow targeted removal, just splice the desired element out of the lowers.heap via `splice(indexOf(numToRemove), 1)`.\nMANUALLY decrement the length of the heap, since the heap class wont handle this automatically.\nIf the numToRemove was greater than lowers.peek, then perform the above logic on the `greaters` heap instead.\nThen, increment `start` to slide the window.',
      timeStamp: '2022-11-01T01:31:33.766Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO',
    },
  ],
  [
    'Smallest Number Range ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '11',
      name: 'Smallest Number Range ',
      notes:
        'Initialize a minHeap, a `currentMax = - Infinity`, a `rangeStart = 0` and `rangeEnd = Infinity`. \nLoop over the input array and insert a tuple in the form of [int, sourceArray, index].\nDuring each iteration, also update currMax by comparing it against the element at the front of each sourceArr.\n\nAfter populating the minHeap, loop while the minHeap length is === inputArr.length (since we need to have at least one element from each array).\nEach iteration, remove the tuple from the top of the heap.\nIf the `currMax` minus the removedInt is SMALLER than the rangeEnd - rangeStart then we have a smaller range, so we update rangeStart to point to the int and updated rangeEnd to point to currMax.\n\nincrement the removed index by 1, and then if the index is less than the sourceArr length, reinsert an updated tuple into the minHeap.\nAlso in that `if` block, updated the currMax based on currMax vs sourceArr[index].\n\nAt the end return [rangeStart, rangeEnd].\n\ntime: O(N * logM) where N is the total # of elements and M is the # of input arrays.\nspace: O(M) since we hold 1 tuple for each source array.\n\nExplanation:\nBecause each list is sorted, we know that the top element in our minHeap is the smallest number out of all the lists.\nSo we know that as long as our minHeap.length == input.length, then the element we remove from the heap inherently is the lowest possible # our range can start at.\nWe also attempt to update `currMax` on each iteration so that currMax always represents the largest number still in the heap.\nIt also ensures that the possible range is always accurate, otherwise is `currMax` was stale than wed have an impossible range such as `[10, 8]`',
      timeStamp: '2022-10-28T02:23:04.420Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPGWDNRx3w2',
    },
  ],
  [
    'Smallest Subarray With a Greater Sum ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '55',
      name: 'Smallest Subarray With a Greater Sum ',
      notes:
        'typical sliding window, just add the current value to a running sum. `while sum >= target` recalculate a `minLength` BEFORE trying to shrink the window.',
      timeStamp: '2022-10-08T18:40:25.104Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ',
    },
  ],
  [
    'Sort K-Sorted Array',
    {
      categories: ['heaps'],
      daysBeforeReminder: '45',
      name: 'Sort K-Sorted Array',
      notes:
        'Solution involves a single MinHeap, so start by building that out as a Class.\n\nWithin the main function, create a new MinHeap and pass in the input array UP TO the `k + 1` index (but not including it). \nThis can be done using array.slice(0, k + 1).\n\nDeclare an indexToInsertAt counter = 0. \nPerform a for loop, starting from k + 1. \nDuring each loop, remove an element from the minheap and insert it at `indexToInsertAt`. \nThen, increment indexToInsertAt. \nLastly, insert array[i] into the minHeap.\n\nOnce the first for loop ends, there will still be elements in the minHeap and the array will only be partially sorted. \nSo, do a while loop that ends when minHeap.peek() === null. \nDuring each loop, repeat the same steps you did in the first for loop but without inserting any new elements into the minHeap.\n\nOnce the while loop ends, the array should be sorted-in-place so just return it.',
      timeStamp: '2022-10-19T03:05:31.879Z',
      url: 'https://www.algoexpert.io/questions/sort-k-sorted-array',
    },
  ],
  [
    'Spaghetti Recipe',
    {
      categories: [],
      daysBeforeReminder: '25',
      name: 'Spaghetti Recipe',
      notes:
        'Dont forget `article` semantics.\narticle wraps all content, and is then further broken down into `header` and `section` elements.',
      timeStamp: '2022-10-28T05:30:47.735Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/spaghetti-recipe',
    },
  ],
  [
    'Squaring a Sorted Array ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '60',
      name: 'Squaring a Sorted Array ',
      notes:
        'Create a new array via `Array(input.length)` and create an `indexToInsertAt` variable that points to the end of the array.\n\nuse two pointers left + right and then populate the array backwards by looping `while left <= right`. Since a squared number is always positive, you can just compare via `arr[left] * arr[left]` vs the same thing on the right',
      timeStamp: '2022-10-07T20:40:44.035Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R',
    },
  ],
  [
    'Start of LinkedList Cycle ',
    {
      categories: ['fastAndSlowPointers'],
      daysBeforeReminder: '28',
      name: 'Start of LinkedList Cycle ',
      notes:
        'Create fast + slow pointer. \nLoop while `fast && fast.next` and break when fast and slow meet. \nThis lets us find a node in the cycle.\n\nCreate a cycleLength variable = 1.\nIncrement `fast` to `fast.next`.\nLoop while (slow !== fast) and increment cycleLength each time.\n\nFinally, point slow and fast back to `head`. \nIterate `fast`  by the length of the cycle. \n\nThen iterate both pointers 1 step at a time until they meet. \nReturn `slow`',
      timeStamp: '2022-10-22T19:42:20.365Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN',
    },
  ],
  [
    'String Anagrams',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '60',
      name: 'String Anagrams',
      notes:
        'create a Map to hold the count of each letter in the input pattern.\n\nAfter populating the Map, create a `charsMatched = 0` variable and then loop using a sliding window.\nEach loop, if the current character is not undefined in our Map, decrement the count of that character.\nWithin that same `if` block, if the current characters count drops to `0` then increment the `charsMatched` variable.\n\nThen, if our current window is larger than the pattern, we need to slide our window and decrement that count of the character we dropped IF it was present in our Map.\n\nAfter sliding the window, if `charsMatched` is equal to the size of our Map still then we push the `start` index into an output array.',
      timeStamp: '2022-10-13T00:09:26.044Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM',
    },
  ],
  [
    'String Permutations by changing case ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '19',
      name: 'String Permutations by changing case ',
      notes:
        "CHECK THE GRAPHIC to understand the solution.\n\nDeclare an output array, and put the input string as the first element of the array.\n\nFor loop over the input string -- we'll use this to ensure we handle permutations at each index. \nIn each loop, use isNaN on input[i] and `continue` (skip current iteration) if isNaN returns false so that we dont try to lowercase a number.\n\nWithin the loop, declare a `len = output.length` variable. \nThen, do a for loop starting from `0` while `j < len`. \nWhat we are doing here is creating new permutations based on existing permutations. \n\nIn the nested for loop, use `.split('')` on `output[j]` to copy the existing permutation as an array (because strings are immutable in JS). \nThen, just test if the splitStr[i] is lowercase -- if it is, reassign copy[i] to uppercase, else reassign to lowercase. \n`.join('')` the array and push the permutation back into the output array.",
      timeStamp: '2022-10-14T23:55:28.890Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P',
    },
  ],
  [
    'Structurally Unique Binary Search Trees',
    {
      categories: ['subsets'],
      daysBeforeReminder: '10',
      name: 'Structurally Unique Binary Search Trees',
      notes:
        'in the main function, if the `input` is <= 0, return [].\nOtherwise, call a recursive helper, passing in `1` for the start and `input` as the `end`.\nReturn the `length` of the array returned by the helper.\n\nThe recursive helper accepts a `start` and `end` argument, which it will use to generate valid binary trees.\n\nfor the base case, if `start > end` return [null].\n\nPast the base case, for loop from start to `end + 1`.\nCreate the leftSubtree by calling the recursive function on (start, `i - 1`).\nCreate the rightSubtree by calling the recursive function on (`i + 1`, end).\nWhat this does is create all possible valid binary trees below the current node with a value of `i`. start to `i - 1` creates all combinations of nodes on the left, and `i + 1 to end` does the same for the right.\n\nAfter generating the subtrees, loop from `0` over the leftSubtrees and then nested loop from 0 over the rightSubtrees.\nIn the most nested loop, push a new TreeNode into the output array, in the form of:\n{value: i, leftChild: leftSubtrees[l], rightChild: rightSubtrees[r]}.\nThis output array now contains all possible binary trees where `i` is the root node, and then we have our various tree shapes on the left and right.\n\nReturn `result` from the recursive function, since the output array contains all possible trees and so the length will equal all possible topologies.',
      timeStamp: '2022-11-02T01:16:19.868Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9',
    },
  ],
  [
    'Subset Sum ',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Subset Sum ',
      notes:
        'TRY TO LEARN THE BOTTOMS UP DP APPROACH!\n\nRecursive solution:\nCreate a Set and insert the number 0, representing the sum 0 which we can always create by just not using any elements.\n\nLoop over each element in the input array.\nEach loop, create a `nextSet` Set.\nDo a nested loop over the primary set that exists outside the for loop.\nFor each element in the main set, push the element into the nextSet AND do another push of the element + currNum.\nThis is the equivalent of a branching strategy, where we create 2 branches representing excluding the current number and including the current number.\nAt the end of the forEach over the original Set, if the nextSet has our target then return true.\nOtherwise, reassign the main Set to the nextSet.',
      timeStamp: '2022-10-28T04:58:25.095Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk',
    },
  ],
  [
    'Subsets',
    {
      categories: ['subsets'],
      daysBeforeReminder: '21',
      name: 'Subsets',
      notes:
        'DOESNT USE A QUEUE. Just create an output array that contains an empty array, ie `[ [ ] ]`.\n\nPerform a for loop over the input. This loop will be responsible for pushing the current number to the end of each copied array.\nThen, do a nested while loop starting from 0, `while (j < n)` where n = output.length.\nWe start the nested loop from 0 each time so we can generate subsets that are copies of the empty array + each input number.\nWithin each while loop, copy the array @ `output[j]` and then push `input[i]` into the copy. then push the copied array back into the subsets.',
      timeStamp: '2022-10-24T02:06:42.302Z',
      url: 'https://leetcode.com/problems/subsets/',
    },
  ],
  [
    'Sum',
    {
      categories: [],
      daysBeforeReminder: '5',
      name: 'Sum',
      notes:
        'Immediately return a new function that accepts an `otherNum` argument.\nThis nested function uses a ternary to return:\nIF otherNum is undefined, then it just returns the original `number` passed into the `sum` function.\nElse, it returns `sum(number + otherNum)`.\n\nThis allows function calls to be chained since we are recursively invoking `sum` as many times as needed until it is invoked without an argument, at which point we return a total.',
      timeStamp: '2022-11-02T03:20:09.019Z',
      url: 'https://www.greatfrontend.com/questions/javascript/sum',
    },
  ],
  [
    'Sum of Elements ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '9',
      name: 'Sum of Elements ',
      notes:
        'minHeap version:\nset i = 1.\nLoop while i < k2.\nRemove each loop, and if i is > k1, add the number to a sum.\n---\n\nCreate a maxHeap and pass in the input array.\nCreate an iterator variable = `input.length`, as well as a `sum`.\nLoop while the maxHeap has length and iterator >= k2.\neach loop, remove from the heap.\nDo a follow up loop while `i` is > k1, then add the popped number to the running sum.\nreturn `sum` at the end\n\nALTERNATIVE:\nInsert all the numbers into a minHeap, then remove the first `k1` numbers by looping while k1 > 0.\nEach loop decrement both k2 and k1.\n\nThen, initialize a `sum` to 0 and loop while `k2 - 1 > 0`. \nEach loop, remove from the heap and add it to the sum while decrementing k2.\nReturn the sum',
      timeStamp: '2022-10-28T05:40:22.933Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67',
    },
  ],
  [
    'Sum of Path Numbers ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '30',
      name: 'Sum of Path Numbers ',
      notes:
        'function should take in a node and a sum arg, where sum defaults to `0`. \nIf there is no node, return 0. \nOtherwise, reassign sum to (sum * 10) + node.value to achieve a "concatenating number".\n\nIf its a leaf node, return sum. Otherwise, recursively return func(left, sum) + func(right, sum)',
      timeStamp: '2022-10-16T21:06:27.409Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69',
    },
  ],
  [
    'Temperature Converter',
    {
      categories: [],
      daysBeforeReminder: '11',
      name: 'Temperature Converter',
      notes:
        'Add two text inputs to the page and make them accessible.\n\nIn the JS file, grab each input and save it to a variabe.\nTry to make a single function that can be used as the `oninput` for each input.\nBecause celsius and fahrenheit are calculated differently, the function needs to take in a `calculate` argument.\nMake sure to add the function as an event listener to each input.',
      timeStamp: '2022-11-02T04:39:07.407Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/temperature-converter',
    },
  ],
  [
    'Testing Framework',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'Testing Framework',
      notes:
        'start "bottoms up" by completing `expect`, then `it`, and `describe` last.\n\n`expect` should return an object with the methods on it.\nMake sure to JSON.stringify any reference to `actual` or `expected`\n`Expect.toExist` checks if actual is === null OR === undefined and throws a template literal if true.\nITS IMPORTANT to throw the string/literal rather than an actual Error object.\ntoBe just checks if actual !== expected and throws if so.\nLastly, toBeType follows the same general logic.\n\n`it` use a try+catch block to invoke the function it receives and then print a success message if no errors, otherwise it throws if we enter the catch block.\nTo ensure the `describe` block can catch the `it` throw properly, make sure to throw an object in the shape of `{testCaseName, err}` so that they can be destructured by `describe`.\n\nThe describe block is basically identical to the `it` block, except the catch block receives an object  and then finally prints via `console.error` .',
      timeStamp: '2022-11-02T04:29:02.136Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/testing-framework',
    },
  ],
  [
    'This Binding',
    {
      categories: [],
      daysBeforeReminder: '3',
      name: 'This Binding',
      notes:
        'For the `myCall` function, start by generating a Symbol() and storing it in a value.\nSymbols are guaranteed to be unique, and repeated calls to `Symbol()` will never return the same result.\nAdditionally, adding Symbols do not appear when using a `for ... in` loop, so if the function that is used with myCall happens to use a for in loop, we dont have worry about that loop accidentally iterating over our Symbol key like we would if we just assigned a string as the key.\n\nAfter creating the symbol, assign it as a property on `thisContext` like you would any other key on an object, and the value it equals will be `this` ( which is the original function).\nThen, invoke the method @ thisContext[symbol], passing in the original arguments, and save the return value.\nNext, delete the key from the thisContext object so that we dont permanently pollute it.\nFinally, return the value you stored.\n\nFor myApply, you can just invoke `myCall` since apply has identical functionality besides receiving arguments as an array.\n\nA same thing applies to myBind, except that bind returns an actual function.\nSo just return an ARROW function that accepts arguments and returns `this.myApply` with the arguments passed in.\nWe use myApply instead of myCall simply because myApply accepts an array, so we can pass in [...oldArgs, ...newArgs] easily.',
      timeStamp: '2022-10-26T03:54:38.420Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/this-binding',
    },
  ],
  [
    'Throttle',
    {
      categories: [],
      daysBeforeReminder: '1',
      name: 'Throttle',
      notes:
        "create two closed-over variables, `lastCalledTime = 0` and a `timer`.\n\nDeclare a new function that will be returned at the end.\nThis function takes in any number of arguments.\n\nWithin the nested function, declare a `currTime = Date.now()` and a `delayRemaining` that is equal to `delay` - currTime - lastCalledTime.\nIF delayRemaining is <= 0 then assign `lastCalledTime` to currTime and invoke the callback via `.apply` so we can pass in `this`.\n\nELSE clear any running timers and then reassign `timer` to a returned setTimeout.\nThe setTimeout's anonymous function reassigns `lastCalledTime` to Date.now() and then invokes the callback with.apply.\nThe delay on setTimeout should be `delayRemaining` rather than the original delay.\n\nWe also need to attach a .cancel method to our return function.\nSince functions are just objects in JS, we can do `func.cancel = () => {}`.\nWithin the .cancel function, just clear the timer and reset it to null.",
      timeStamp: '2022-10-26T00:45:31.755Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/throttle',
    },
  ],
  [
    'Top k frequent elements',
    {
      categories: ['heaps'],
      daysBeforeReminder: '25',
      name: 'Top k frequent elements',
      notes:
        'NOTE: previous reminder was set for 35 days -- take into account when setting next reminder.\n\nCreate a Heap class.\n\nIn the main function create a Map. \nLoop over the input array and set the counts of each number in the Map.\n\nThen, create a maxHeap. Loop over the Map itself using `forEach`, and push a tuple containing [frequency, integer] into the minHeap. \nIf the minHeap length becomes > k just break the while loop to avoid adding unnecessary tuples.\n\nAfter the while loop, create an output array. \n\nWhile the minHeap has length and k > 0, remove from it and insert the 2nd value of each tuple so we have a list of the most frequent integers. decrement k on each loop',
      timeStamp: '2022-10-19T06:27:52.121Z',
      url: 'https://leetcode.com/problems/top-k-frequent-elements/',
    },
  ],
  [
    'Triplet Sum Close to Target ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '50',
      name: 'Triplet Sum Close to Target ',
      notes:
        'sort input array.\n\nlet `closestSum = Infinity`. For loop, and skip any duplicates.\n\nwhile loop, if `curr === target` return curr. Otherwise, recalculate closestSum by using Math.abs to compare `targetSum - currSum vs targetSum - closestSum.` \ndont forget to conditionally choose the smaller. sum of the two if the diff is identical.\n\nreturn closestSum',
      timeStamp: '2022-10-16T20:31:48.902Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA',
    },
  ],
  [
    'Triplets with Smaller Sum ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '30',
      name: 'Triplets with Smaller Sum ',
      notes:
        'similar to 3sum, except if `currSum < target` you increment `matches` by `right - left` and THEN increment left ONLY.\nThis works because any numbers BETWEEN left and right after sorting MUST also create a sum that is less than the target.\nWe can simplify the act of decrementing "right" for all those numbers since we already know they match. \nHowever, we still need to increment `left` in order to generate `(left +1) + [all potential rights]` since this problem isnt concerned with unique sums, only unique index combinations. ',
      timeStamp: '2022-10-28T02:26:38.111Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO',
    },
  ],
  [
    'Tweet',
    {
      categories: [],
      daysBeforeReminder: '8',
      name: 'Tweet',
      notes:
        'Easily solved with flexbox.\n\nMake the primary `div` wrapper into a flexbox and give it a column gap of 12px to separate the <image> and the <div class="content" /> to its right.\n\nWithin the right-side content div, wrap the name + metadata in their own "top-row" div.\nThe top row div basically just needs to assign some margins to ensure the proper gaps vertically and horizontally -- very straightforward.\n\nEqual spacing between tweet actions can be achieved using `display: flex` and `justify-content: space-between` on the footer container.\n\nedge cases:\n- long author names/handles that require truncating\n- Resizing the browser to ensure it looks good across viewports\n- add `aria-hidden` to each svg so that theyre not announced to screen readers',
      timeStamp: '2022-11-02T03:46:39.099Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/tweet',
    },
  ],
  [
    'Two sum',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Two sum',
      notes:
        'create a hashmap to store the sums we find.\nLoop over the input.\nEach loop, define a `match` that is equal to the target minus our current number.\nif the hashmap[match] is not undefined, return the current index and hashmap[match].\nOtherwise, store the current number and the index in our sums, ie hashmap[currNum] = i.',
      timeStamp: '2022-10-15T20:50:36.216Z',
      url: 'https://leetcode.com/problems/two-sum/',
    },
  ],
  [
    'Two sum ii input array is sorted',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '53',
      name: 'Two sum ii input array is sorted',
      notes:
        'uses a two-pointer solution to work from the outsides inwards since the input array is already sorted.',
      timeStamp: '2022-10-02T01:52:58.099Z',
      url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    },
  ],
  [
    'Unique Generalized Abbreviations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '20',
      name: 'Unique Generalized Abbreviations ',
      notes:
        'Create an AbbreviatedWord class that will be a helper. \nIt accepts a string, `nextIndex`, and `replacedLetters` to track how many letters have been replaced.\n\nIn the main function, create an output array and a queue. \nThe queue should contain one element, a new AbbreviatedWord that receives an empty string, 0, and 0.\n\nLoop while there are elements still in the queue. \nEach while loop, shift an element from the queue. \nIF that elements `nextIndex` is equal to input.length, do a nested if checl:\nif the elements `replacedLetters` is greater than 0, \nappend the `replacedLetters` to the current string without pushing the result. \nThen, regardless of whether the replacedLetters was appended or not, push the string into the output array.\n\nELSE, if the nextIndex didnt equal the input length, push a new abbreviation into the queue that passes the existing string but increments `nextIndex` AND `replacedLetters`, indicating that we have replaced a letter. \n\nStill within the else block, if the replacedLetters is greater than 0, add the replacedLetters to the current string. \n(This is how we get strings like `c2e` from the string `code`.)\nThen, append the character from the input string @ nextIndex, so `str += word[abrev.nextIndex]`. \nFinally, push a new abbreviation by passing in the current string, incrementing nextIndex, and resetting count to 0.\n\nAfter processing queue, return the results',
      timeStamp: '2022-10-28T04:14:26.187Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN',
    },
  ],
  [
    'Valid anagram',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Valid anagram',
      notes: '',
      timeStamp: '2022-10-26T22:29:53.718Z',
      url: 'https://leetcode.com/problems/valid-anagram/',
    },
  ],
  [
    'Valid palindrome',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '10',
      name: 'Valid palindrome',
      notes:
        'Lowercase the string, and replace all non-word characters with a regex -- /[^a-z0-9]/g.',
      timeStamp: '2022-10-28T20:00:59.145Z',
      url: 'https://leetcode.com/problems/valid-palindrome/',
    },
  ],
  [
    'Valid parentheses',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Valid parentheses',
      notes: 'Use a stack',
      timeStamp: '2022-10-26T23:21:02.867Z',
      url: 'https://leetcode.com/problems/valid-parentheses/',
    },
  ],
  [
    'Validate Subsequence',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '35',
      name: 'Validate Subsequence',
      notes:
        'Create an `indexToMatchAgainst` variable initialized to 0.\nLoop over the main array and compare each letters against the subsequenceArray[indexToMatchAgainst].',
      timeStamp: '2022-11-02T02:51:39.841Z',
      url: 'https://www.algoexpert.io/questions/validate-subsequence',
    },
  ],
  [
    'Words Concatenation',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '16',
      name: 'Words Concatenation',
      notes:
        'create a Map to record the frequency of each WORD (not letter) in the input array.\nThen, loop over the input array to populate the map with word counts.\n\ncreate an output array that will contain the valid indices we find.\n\nPerform a for loop that ends when i < str.length - words.length * words[0].length + 1. \nThis helps us avoid iterating over the part of the input string where the substrings we\'ll create cannot possibly fit the full length of a string necessary to match the input array.\n\nDuring each iteration of the for loop, create a new Map that will hold the frequency of each substring we create. \nThen, do another for loop where `j` starts at 0 and ends when `j < inputArr.length`. \n\nWithin the nested for loop, create a `nextWordIndex` variable that is equal to `i + j * inputArr[0].length`. \nThis tells us the index for our next substring since each word is equal in length.\n\nOnce nextWordIndex is set, create a new variable to hold `inputString.subString(nextWordIndex, nextWordIndex + inputArr[0].length` to create the next substring.\n\nOnce we have the next substring, try to retrieve it from the "wordCounts" Map based on the input arr. \nif the substring isnt present, break the nested loop. \n\nAssuming it is present, set the substring into the substringCounts Map created during the main for loop. \nThen, compare the count at that map versus the count in the main map to see if we have seen the word too many times during this nested loop. \nIf we have too high of a frequency, break the loop.\n\nFinally, within the nested loop we can push `i` (the start of a valid substring) IF j + 1 === words.length because we reached the end of the j loop and didnt have to break for any reason.\n\nIn the main function, just return the results once the main for loop ends.\n---\nConsider this case\na) s.length = 10 -->(0-9 indexes) and\nb) given words[] = {"aa", "aa", "aa"}....\nc) The total length of substring is (3 words * 2 char len each) = 6.\n\nSo when searching for subString in \'s\' the window should contain at least 6 chars.\nSo possible start positions of subString in \'s\' are 0,1,2,3,4 only. From 5th position, there are only 5 chars or less to search...\nSo no point searching sections of \'s\' which have insufficient number of chars to required to find the subString\n+1 is required because array indexes start from 0 and not 1... an array of length 5 has index 0-4',
      timeStamp: '2022-10-19T01:55:56.995Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O',
    },
  ],
  [
    'Zigzag Traversal ',
    {
      categories: ['bfs'],
      daysBeforeReminder: '35',
      name: 'Zigzag Traversal ',
      notes:
        'Typical BFS except you track a boolean to determine if youre going left or right. \n\nBased on that boolean, you either PUSH (truthy) `curr.value` into the `currLevel` array, or you UNSHIFT (falsey) into it. Flip the boolean on each level',
      timeStamp: '2022-10-04T02:42:38.201Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0',
    },
  ],
  [
    'jQuery.css',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'jQuery.css',
      notes:
        'Relies on closures.\n\nSelect the element from the DOM and save it to a constant.\nReturn an object that has a `css` method on it.\nThe css method accepts obvious arguments.\nWithin the method, if the `assignment` argument is undefined, then if there is no element return `undefined`.\nOtherwise, return the element.style[property] OR undefined (since the property may not be set).\n\nPast those cases, if `assignment` is truthy and the element is truthy, then assign the elements style to the new assignment before finally returning `this` no matter what.\nReturning `this` is important to allow chaining of the `.css` method\n\nAdditional note: because arrow functions lexically scope `this`, the `css` method needs to be defined as a function declaration otherwise `this` will not refer to the returned object but to the original `$` function, which would break things.',
      timeStamp: '2022-11-01T06:58:41.260Z',
      url: 'https://www.greatfrontend.com/questions/javascript/jquery-css',
    },
  ],
];

export default {
  questionMocks,
  questionMocksLarge,
};
