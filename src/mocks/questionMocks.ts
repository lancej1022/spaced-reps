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
    '3sum',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '37',
      name: '3sum',
      notes:
        'common mistakes:\n- using `input[i] === input[i + 1]` to `continue`, when you need to use `i - 1`\n\nsort the input array so we can use a 2 pointer solution.\n\nLoop over the sorted input, and always `continue` if `input[i] === input[i - 1]` so that we dont get duplicates.\nUse a typical 2 pointer left/right approach, and any time the sum is 0 push each number into the output.\nThen, increment `left` and continue incrementing as long as `input[left] === input[left - 1]`.\nDo the same for `right` but in reverse (right == right + 1).',
      timeStamp: '2023-05-09T22:30:15.207Z',
      url: 'https://leetcode.com/problems/3sum/',
    },
  ],
  [
    '3sum closest',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '68',
      name: '3sum closest',
      notes:
        'sort input array.\n\nlet `closestSum = Infinity`. For loop, and skip any duplicates.\n\nwhile loop, if `curr === target` return curr. Otherwise, recalculate closestSum by using Math.abs to compare `targetSum - currSum vs targetSum - closestSum.` \ndont forget to conditionally choose the smaller. sum of the two if the diff is identical.\n\nreturn closestSum',
      timeStamp: '2023-04-08T06:35:05.369Z',
      url: 'https://leetcode.com/problems/3sum-closest/855942971/',
    },
  ],
  [
    'Accordion II in React',
    {
      categories: [],
      daysBeforeReminder: '23',
      name: 'Accordion II in React',
      notes:
        'Make sure to import `usedId` from React so that you can ensure each Accordion instance has unique ids.\nWithin the accordion component itself, immediately invoke `useId` and save the result to a constant.\n\nWithin the JSX return, when mapping over the `sections`, create a `headerId` constant equal\nto `${accordionIdFromUseIdHook}-header-${section.value}`.\nDo the same thing for a `panelId` except replace the "-header-" string with "-panel-".\n\nThen, within the JSX returned inside the mapping function, add `aria-controls={panelId}` to the button.\nThis will indicate that the button controls the visibility of the content panel.\nTo that same button, add `aria-expanded={openSections.has(section.value)}` and `id={headerId}`\n\nAfter that button, the JSX includes a div that renders the section contents.\nAdd `role="region"` to that div, as well as `id={panelId}` so that its clear to screen readers that the section is controlled by the button.\nLastly, add `aria-labelledby={headerId}` to that div, so that screen readers know the section is labeled by the button.',
      timeStamp: '2023-06-09T02:01:22.167Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/accordion-ii',
    },
  ],
  [
    'Accordion III in React',
    {
      categories: [],
      daysBeforeReminder: '18',
      name: 'Accordion III in React',
      notes:
        "common mistakes:\n- trying to solve using idiomatic react (such as refs) when document.getElemenyById is a perfectly suitable fit\n\nCreate a `getAccordionHeader` helper function that accepts an `id` and `value`.\nThe function simply returns id + '-header-' + value.\n\nCreate an identical helper `getAccordionPanel` except this function concatenates `-panel-` instead of `-header-`.\n\nIn the main accordion, add a `focusOnSection` function that takes an index as its parameter.\nThis function gets the id via `getAccordionHeader(accordionId, sections[index].value` and then focuses the section via `document.getElementById(accordionHeaderYouJustMade).focus()`.\nWhile this technically isnt idiomatic react, its performant and good enough for an interview.\n\nCreate another helper function `handleKeyDown` that accepts an `event`.\nStore the `event.key` as a `key` constant.\nFirst, save the actionItem to a constant via `document.activeElement.getAttribute('data-accordion-value')`.\nThis ensures we only grab the active element if its one of the accordion sections.\nIf that `activeItemValue` winds up being `== null`, then we can return early since some other element has focus.\n\nThen, switch based on the `key`.\nFor the 'ArrowUp' case, grab the index via `sections.findIndex(section => section.value === activeItemValue`.\nThen invoke `focusOnSection( (index - 1 + sections.length) % section.length)`.  \nThe modulo ensures that we \"wrap around\" if we go out of bounds.\n\nThe `ArrowDown` case is identical, except we use `index + 1` within the focusOnSection logic instead of `index - 1`.\n\nFor the `Home` case (home key), just invoke `focusOnSection(0)`.\nThe end case is the same, except with `sections.length - 1`\n\nEnsure that each of the accordion header buttons has the data-accordion-value={value} and you're g2g",
      timeStamp: '2023-06-01T00:10:12.010Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/accordion-iii',
    },
  ],
  [
    'Accordion in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Accordion in Vanilla JS',
      notes:
        'Problem wants you to build the accordion using a JS function, ie a vanilla JS “component”\nThe function should accept a `rootElement` argument which will be used to create the accordion.\nIt should also accept an `options` object as the second argument.\nOne of the keys in the `options` object is `items`, which is an array containing objects with `id` (so we can determine which section to open/close), `title` (the section header), and `contents` (the children that are shown/hidden).\n\nWithin the `accordion` function (component), declare a nested `init` function.\nThe `init` function adds an ‘accordion’ class to the rootElement.\nCreate a documentFragment and save it to an `accordionSections` constant.\n\nLoop over each object in the `items` array.\nEach iteration, create a `div` and save it to an `accordionSection` constant.\nAdd an ‘accordion-item’ class to the div’s classList.\nNext, create a `button` and save it to an `accordionTitleButton` constant.\nAdd ‘accordion-item-title’ to its class list.\nAdditionally, set the button’s `.type` equal to ‘button’ (so that its not a submit button).\n\n(Still within the loop), create a `span` and save it to an `accordionIcon` constant.\nGive it an ‘accordion-icon’ class and use `setAttribute` to set ‘aria-hidden’ to ‘true’ for a11y.\n\nUse `append` to append the current item’s `title` AND the accordionIcon to the `accordionTitleButton` – append allows you to pass multiple arguments, so you can append both of them at the same time.\n\nCreate another `div` and save it to an `accordionSectionContents` constant.\nGive it a class of ‘accordion-item-contents’.\nSet it’s `.hidden` property to `true`, and set its `textContent` to the current item’s `contents`.\n\nAppend the `accordionTitlteButton` and the `accordionSectionContents` to the `accordionSection` div.\nThen append the `accordionSection` to the containing `accordionSections` div (notice its plural).\n\nWith that loop to create all the HTML completed, the `init` function is done.\nNext, we need to declare a nested `attachEvents` function.\n\nWithin `attachEvents`, we’ll leverage Event Delegation to listen to clicks on the rootElement so that we dont need to have click listeners on all the nested sections which could theoretically become expensive.\nSo basically, `rootElement.addEventListener(‘click’, (event) => {}`.\nWithin the `click` callback function, assign the `event.target` to a `target` constant for simplicity.\nImmediately check if the `target.tagName !== “BUTTON”` or `target.classList.contains(‘accordion-item-title’` is falsey and return early if so.\n\nPast that check, use `target.querySelector(‘accordion-icon’)` and save the result to an `icon` constant.\nInvoke `icon.classList.toggle(‘accordion-icon–rotated’)` to toggle the icon’s direction.\n\nThen, save `target.nextSibling` to an `accordionContents` constant and flip the `.hidden` attribute – `accordionContents.hidden = !accordionContents.hidden`.\n\nThe above logic ends the `attachEvents` function.\nBack in the main `accordion` function body, just invoke `init` and then invoke `attachEvents`.\n\nFor the CSS, declare a `.accordion` class (this will be attached to the root element.\nThis class uses flex-direction: column and also has 100% width.\n\nThe `.accordion-item` class also uses flex-direction column, but leverages a 4px row-gap and has 4px vertical padding (0 horizontal).\n\nYou can also add a 1px solid border to the .accordion-items using an addition `:not(:first-child)` selector.\n\nFor the .accordion-item-title class, align-items are center, there is no border or background, the cursor is a pointer, and the justify-content is space-between with the text-align:start.\nYou can optionally give it a hover background color.\n\nFor the .accordion-icon, use:\nborder: solid currentcolor;\n border-width: 0 2px 2px 0;\n display: inline-block;\n height: 8px;\n pointer-events: none;\n transform: translateY(-2px) rotate(45deg);\n width: 8px;\n\nFor the .accordion-icon–rotated, use `transform: translateY(2px) rotate(-135deg)`.\n\nFor the accordion-item-contents, just give it 4px padding.\n',
      timeStamp: '2023-05-11T05:22:16.135Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/accordion/vanilla',
    },
  ],
  [
    'Add two numbers',
    {
      categories: [],
      daysBeforeReminder: '9',
      name: 'Add two numbers',
      notes:
        'The prompt seems confusing, because it implies you should turn the linkedlists into numbers --> add the numbers --> convert the number into a linked list.\nHowever, the linkedlists being in "reverse" order actually makes the problem easier to solve, rather than harder.\nThis is because we can create the new linked list as we iterate, and just need to track a `carry` value so that when do `7 + 5`, we know to carry a `1` while making a new node of value `2` (since the total was 12).\nBasically, even though the linkedlists appear "backwards" since the "ones place" preceeds the "tens place" by being first in the list, this actually matches the way we normally do math since we do math from right to left (ones place --> tens place --> hundreds place --> etc)\n---\nDeclare a `dummy` node with no value/next.\nThen, declare `curr = dummy` and `carry = 0`.\nLoop while either of the linkedlists are truthy.\n\nEach iteration, declare `val1 = l1 ? l1.val : 0` and so the same for `l2`.\nWe do this because the linked lists could be different lengths, and so we default an empty list to a value of `0` so that adding to it doesnt break our code.\n\nThen declare `currVal = val1 + val2 + carry`, to represent the current total of adding the numbers.\nSince `currVal` could be double digits, we reassign `carry = Math.floor(currVal / 10)` and then `currVal %= 10`.\n\nAt this point, `currVal` is a single digit so we assign `curr.next = new ListNode(currVal)`.\nThen we move `curr = curr.next`.\n\nLastly, we need to move l1 via `l1 = l1?.next` and then do the same thing for `l2`.\n\nAfter we\'re done iterating, its possible that `carry` still has a value that was carried over, so `if (carry) curr.next = new ListNode(carry)`.\n\nFinally, return `dummy.next`',
      timeStamp: '2023-06-06T03:07:13.317Z',
      url: 'https://leetcode.com/problems/add-two-numbers/description/',
    },
  ],
  [
    'AlgoExpert Logo',
    {
      categories: [],
      daysBeforeReminder: '51',
      name: 'AlgoExpert Logo',
      notes:
        'You can most of the spacing necessary by making the wrapper flex and using gap + padding left.\nYou can make the logo a flex container as well to vertically + horizontally align the pseudo ::before + ::after elements.\nYou can control the positioning of the "rings" by positioning them absolutely so they dont get laid out by the usual layout algorithm.',
      timeStamp: '2023-04-23T18:49:22.378Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/algoexpert-logo',
    },
  ],
  [
    'AlgoExpert Products',
    {
      categories: [],
      daysBeforeReminder: '60',
      name: 'AlgoExpert Products',
      notes: 'Use flexbox + margin. Doesnt rely on any obscure properties besides `order`',
      timeStamp: '2023-05-17T22:05:31.031Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/algoexpert-products',
    },
  ],
  [
    'Analog Clock in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '15',
      name: 'Analog Clock in Vanilla JS',
      notes:
        "common mistakes:\n- not converting `seconds` into `secondsPercentage` via seconds / 60 --> determining the angle via `secondsPercentage * FULL_ROTATION`\n\ndeclare `FULL_ROTATION` = 360, which represents the angles for the clock.\n\nDeclare a `padTwoDigit` helper that accepts an integer.\nIf the integer is >= 10, return the integer as a String.\nOtherwise, return `0${number}`.\n\nDeclare a `hand` function that accepts a height (defaults to 1), width (defaults to 1) and and angle.\nIn the function, create a `hand` div.\nAdd the 'clock-hand' className to the div and set 'aria-hidden' to true.\nupdate the div's `style.transform` to equal `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`.\nThen return the div!\n\nDeclare a `render` function that accepts rootElement, date, and size parameters.\nAssign `hours = date.getHours()`, and do the same for minutes and seconds.\n\nSince we're going to use the HTML `time` element for a11y, we need to first calculate the time to display.\nWe can do this via `dateTimeDisplay = ${padTwoDigit(hours)}:${padTwoDigit(minutes)}:${padTwoDigit(seconds)}\n\nCalculate `secondsPercentage` via seconds / 60.\nCalculate minutesPercentage via `(minutes + secondsPercentage) / 60`.\nAnd calculate `hoursPercentage` via ((hours % 12) + minutesPercentage) / 12`\n\nNow calculate the angles like so: `hourAngle = hoursPercentage * FULL_ROTATION`.\nDo the same for minutes and seconds.\n\nFinally, create a `time` element and save it to a timeEl constant.\nAdd a 'clock' class to the element and set the `dateTime` attribute equal to `dateTimeDisplay`.\nAlso, use setAttribute to set `'style', `--size: ${size}px`.\nThis will create a css variable on the element that can be accessed in our stylesheet.\n\nNow invoke `.append` on the `timeEl` and pass in 3 args:\nhand({angle: hourAngle, height: 0.5, width: 3}),\nhand({angle: minutesAngle, height: 0.9, width: 2}),\nhand({angle: secondsAngle, height: 0.8})`\n\nFinally, update the time on screen via rootEl.replaceChildren(timeEl).\n\nBack in the main module, declare one final `clock` function that accepts a rootElement and a size.\nImmediately invoke setInterval(() => { render(rootEl, new Date(), size)\n}, 100`\nWhile we could run the update frequency every 1000ms, this does mean that we can be behind by up to 999ms, in the case where we began the clock very late into a second. To avoid this, we actually run the clock every 100ms, since being behind by this amount wont be perceptible to humans.\nAdditionally, executing the interval may be delayed if the main thread is occupied, so we need to get the current date/time within the interval itself, rather than grabbing them once and then reusing them each tick.\n\nSince the first render wont occur until the interval ticks, invoke render again within the clock function after creating the interval so that we immediately paint the UI.\n\nFor the CSS:\n.clock {\n  display: block;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 100%;\n  border: 2px solid #ccc;\n  transform: rotate(180deg);\n}\nWe need the transform 180 because otherwise the clock hands will be upside down :)\n\n.clock-hand {\n  background-color: #ccc;\n  position: absolute;\n  width: 1px;\n  height: calc(var(--size) / 2);\n  left: calc(var(--size) / 2);\n  top: calc(var(--size) / 2);\n  transform-origin: top center;\n}",
      timeStamp: '2023-05-21T00:54:56.426Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/analog-clock',
    },
  ],
  [
    'Array.prototype.filter',
    {
      categories: [],
      daysBeforeReminder: '42',
      name: 'Array.prototype.filter',
      notes:
        'common mistake:\n- assigning `output[i]` instead of `output.push`. There should never be a sparse output for a `filter` function\n\nLoop from 0 to this.length.\nEach loop, if `Object.hasOwn(this, i)` is truthy AND callbackFn.call(thisArg, currEl, index, this) is truthy, then push the current element into an output array.\nREVIEW `.call` and `.hasOwn`',
      timeStamp: '2023-05-27T18:14:38.023Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-filter',
    },
  ],
  [
    'Array.prototype.map',
    {
      categories: [],
      daysBeforeReminder: '42',
      name: 'Array.prototype.map',
      notes:
        'Similar to the `.filter` problem, but instead of pushing into an output you assign output[i].\nThis ensures that sparse arrays dont get populated.',
      timeStamp: '2023-05-05T03:41:30.782Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-map',
    },
  ],
  [
    'Array.prototype.reduce',
    {
      categories: [],
      daysBeforeReminder: '37',
      name: 'Array.prototype.reduce',
      notes:
        'common mistake:\n- you dont need to use `.call` or `.apply`\n- forgetting to pass in the accumulator --`callbackFn(initialValue, this[i], i, this)`\n\nIf there is no length AND no initial value, throw.\nIf initialValue is undefined, then use `this[0]` as the initial value and start the loop from `1` instead of `0`.\nEach loop, reassign the value to the result of invoking the callbackFn (no need to use .call)',
      timeStamp: '2023-06-02T20:22:34.446Z',
      url: 'https://www.greatfrontend.com/questions/javascript/array-reduce',
    },
  ],
  [
    'Backspace string compare',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Backspace string compare',
      notes:
        "common mistakes:\n- not looping while EITHER index is >= 0 in main function\n- not looping while `str[i] === \"#\" || backspaces` in helper function\n\n\n\ncreate a helper function that accepts a string and index. \nInitialize a count variable to 0. \nLoop while the input index >= 0. \nIn the while loop, if string[index] is a '#', increment count. \nelse if count is > 0, decrement count. \nElse, return the index. \nOutside of that if/else-if/else, decrement index by 1 each loop. \nMake sure to return the index after the while loop in case you didnt hit the early return.\n\nBack in the main function, create 1 pointer for each input string, and make it point to that input string's length - 1 (last index). \nLoop while either pointer is >= 0. \n\nIn each loop, reassign the pointer by passing them and their associated string to the helper function. \nThen, if both pointers are below 0 then return true. \nElse if one pointer is below 0 but not the other, return false. \nElse if str1[i] !== str2[j], also return false. Then, decrement each pointer by 1.\nIf the while loop finishes, return true.",
      timeStamp: '2023-05-25T17:55:46.869Z',
      url: 'https://leetcode.com/problems/backspace-string-compare/',
    },
  ],
  [
    'Balanced binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '34',
      name: 'Balanced binary tree',
      notes:
        'Common mistake:\n- forgetting to increment height by `1` when returning at the end of the helper\n\nCreate a helper function to perform a depth-first search.\nThe helper always returns a tuple in the form of [isBalancedBoolean, heightOfNode].\n\nWhen `node` is falsey in the helper, just return `[true, 0]` since an empty tree is inherently balanced and has no height.\nRecursively call the helper on the left and right children and save the results into variables.\nDeclare a `balanced` boolean that is equal to `left[0] & right[0] & abs(leftHeight - rightHeight) < 2`.\nBasically, a node can only be considered balanced if both of its children are balanced AND the height difference between the two of them is no more than 1.\n\nFinally, return the tuple via `[balanced, 1 + max(leftHeight, rightHeight)]`.\n\nIn the main function, just call the helper and then return the boolean from the first slot in the tuple.',
      timeStamp: '2023-05-19T16:56:25.413Z',
      url: 'https://leetcode.com/problems/balanced-binary-tree/',
    },
  ],
  [
    'Best time to buy and sell stock',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '38',
      name: 'Best time to buy and sell stock',
      notes:
        'Uses the usual `start` and `end` window approach with a `max` variable that gets returned at the end.\n\nWithin the for loop, always update `buy` based on `Math.min(buy, prices[i])` and then update max based on `Math.max(max, prices[i] - buy)`\n\nThen just return `max` once the sliding is done.',
      timeStamp: '2023-05-10T17:44:57.855Z',
      url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    },
  ],
  [
    'Binary tree level order traversal',
    {
      categories: ['bfs'],
      daysBeforeReminder: '85',
      name: 'Binary tree level order traversal',
      notes:
        'early return if there is no root node\nPush root node into a queue.\n`while queue.length`: store queue.length in variable `levelSize`. Create new array to hold values at this level of tree.\nNested loop while `i < levelSize`. Shift a node from queue, push the val into new array and push each left/right if theyre truthy.',
      timeStamp: '2023-03-25T16:39:38.465Z',
      url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    },
  ],
  [
    'Binary tree maximum path sum',
    {
      categories: ['dfs'],
      daysBeforeReminder: '39',
      name: 'Binary tree maximum path sum',
      notes:
        "declare a `result` variable and assign it to the root's value.\n\nDefine a nested `dfs` function that accepts a node.\nWithin that function, if node is falsey return 0.\nThen, calculate the `left` and `right` by recursively invoking dfs.\nNext, reassign left to the max of `left, 0`. \nDo the same for `right`.\nThis is done to ensure that if a node had a negative value, it doesnt get included in the remaining calculations.\nWe can calculate the maxPathSum for the CURRENT node via left + right + node.value.\nMake sure to update the original `result` via Math.max.\nFinally, return node.value + the max of `left` vs `right`.\nThis is the equivalent of returning our current node as a branch since we cant return a maxPathSum.\n\nDont forget to invoke the dfs function back in the main function.\n\nRuns in O(N) time, O(h) space where h is the height of the tree (generally translates to O(logN) if the tree is balanced.",
      timeStamp: '2023-05-25T17:58:29.914Z',
      url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    },
  ],
  [
    'Binary tree zigzag level order traversal',
    {
      categories: ['bfs'],
      daysBeforeReminder: '62',
      name: 'Binary tree zigzag level order traversal',
      notes:
        'Typical BFS except you track a boolean to determine if youre going left or right. \n\nBased on that boolean, you either PUSH (truthy) `curr.value` into the `currLevel` array, or you UNSHIFT (falsey) into it. Flip the boolean on each level',
      timeStamp: '2023-05-23T00:26:07.434Z',
      url: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
    },
  ],
  [
    'Bitonic Array Maximum ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '53',
      name: 'Bitonic Array Maximum ',
      notes:
        'Normal binary search (while start < end), except there is no concrete target. \nYou perform the binary search by comparing arr[mid] < arr[mid + 1]. \nIf true, then we can only find a larger number by moving to the right. \nIf not, then we need to move left. \n\nEach iteration, reassign a `maxNum` variable if the current `arr[mid]` is larger.',
      timeStamp: '2023-05-05T06:34:42.407Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK',
    },
  ],
  [
    'Blog Post',
    {
      categories: [],
      daysBeforeReminder: '55',
      name: 'Blog Post',
      notes: 'DONT use a `main` tag around the sections',
      timeStamp: '2023-04-20T07:08:54.995Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/blog-post',
    },
  ],
  [
    'Branch Sums',
    {
      categories: ['dfs'],
      daysBeforeReminder: '41',
      name: 'Branch Sums',
      notes:
        "iterative version:\nuse a stack, and push {node: root, sum: 0} into it.\nLoop while the stack has length, and basically do the usual dfs logic.\nHOWEVER, rather than pushing the `.left` in first, push the `.right` in first.\nThis is because we'll be popping from the stack, so if we want to tackle the left side of the tree first, then we need the left side to always be the top-most item in our stack.\n\nrecursive main function accepts a node, a sum = 0, and results = [].\nAdd the current nodes value to the sum.\nIf were a leaf node, push the sum into the results array.\nRecursively call the main function on left side if it exists.\nDo the same on the right side.\nreturn the results array.",
      timeStamp: '2023-05-31T01:59:40.559Z',
      url: 'https://www.algoexpert.io/questions/branch-sums',
    },
  ],
  [
    'Breadth-First Search',
    {
      categories: [],
      daysBeforeReminder: '20',
      name: 'Breadth-First Search',
      notes:
        'common mistakes\n- not checking for a falsey graph or nullish source at the beginning -- if either is true, then just return an empty array\n- not using the provided Queue class\n\nMake sure to use the Queue data structure provided to you, and initialize a Set to hold the output (will convert to an Array at the end).\n\nLoop while the q has length, and when looping over the neighbors dont add the neighbor to the queue if it is already present in the Set.',
      timeStamp: '2023-06-02T20:28:41.102Z',
      url: 'https://www.greatfrontend.com/questions/javascript/breadth-first-search',
    },
  ],
  [
    'Breadth-first Search',
    {
      categories: ['bfs'],
      daysBeforeReminder: '59',
      name: 'Breadth-first Search',
      notes:
        "Same as BFS on a binary tree.\nCreate a queue that contains `this`.\nLoop while the queue has length.\nEach iteration, shift from the queue and push the shifted name into the output array.\nThen loop over the shifted node's children and push them into the queue.\n\nTime: O(V + E), where V is the max # of vertices (nodes) and E is the max # of edges on a node. Could maybe be worded as O(N) where N is the total # of nodes in the graph\nSpace: O(V) since we have to be able to store all of an individuals nodes children in the queue",
      timeStamp: '2023-05-25T00:32:00.326Z',
      url: 'https://www.algoexpert.io/questions/breadth-first-search',
    },
  ],
  [
    'Bubble Sort',
    {
      categories: [],
      daysBeforeReminder: '60',
      name: 'Bubble Sort',
      notes:
        'Outer for loop `i` over the entire input.\nNested for loop `j` from 0 to input.length - i;\nif j > j + 1, swap.\nreturn the now-sorted array.',
      timeStamp: '2023-05-11T21:27:52.868Z',
      url: 'https://www.algoexpert.io/questions/bubble-sort',
    },
  ],
  [
    'Camel Case Keys',
    {
      categories: [],
      daysBeforeReminder: '28',
      name: 'Camel Case Keys',
      notes:
        'Make a helper function that accepts a string.\nif `!/_/.test(str)` then just return str since it does not have any underscores.\nOtherwise return str.lowercase.`replace(/(_)([a-z])/g, (_match, _p1, p2) => p2.toUpperCase())`.\nthe _match is the matched string, _p1 is the first matched group and p2 is the 2nd. \nThis is effectively lowercasing the entire string and then replacing a letter preceded by an underscore with its uppercase version.\n\nIn the main function, if the input is an array they return `input.map(el => recurse(el)`.\nIf the input is NOT an object or IS null, then return input.\n\nIf both prior checks passed, then just return Object.fromEntries with an argument of `Object.entries(input).map( ([key, val]) => [camelCase(key), recurse(val)] )`.',
      timeStamp: '2023-05-16T20:21:30.757Z',
      url: 'https://www.greatfrontend.com/questions/javascript/camel-case-keys',
    },
  ],
  [
    'Car fleet',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Car fleet',
      notes:
        'sounds more complicated than it is, when really its basic math.\nPretend you have a target distance of `10`.\nIf you take a car that starts at position `7` and moves at a speed of `1`mph, then it will take 3 miles before it reaches the target.\nBasically, `(target - startingPosition) / speed` gives us the arrival time.\nNow lets say you have a 2nd car starting from position `3` and moving at `3`mph.\nWith a target of 10, wed do `(10 - 3) / 3` which gives us ~2.33.\nThis means that the vehicle starting from position 3 would become "blocked" by the vehicle starting from position 7, because vehicle 3 WOULD have arrived after 2.33hours except it gets stuck waiting behind the vehicle that starts from position 7 since vehicle 7 will not arrive until after 3 hours.\nThis is what creates the "fleet".\n\nWith this clarification in mind, start by merging the `positions` and `speeds` into a single array.\nThen, sort the merged array based on starting position, so that vehicles starting at the lowest position appear earlier in the array than those starting at later positions.\n\nNext, create an empty stack that will hold our arrival times.\nLoop over the merged array from the END to the beginning, since we need to calculate the vehicles starting from larger positions to see if they block other vehicles starting from lower positions.\n\nEach loop, calculate the arrival time via `(target - merged[position] ) / speed` and push it into the stack.\nThen, if the stack has at least 2 elements AND the last arrival time in the stack is LESS than the time prior to it in the stack, just pop the time.\n\nBasically, we\'re just keeping a list of the slowest times in our stack, since we know that each index will be a vehicle that potentially blocks other vehicles.\n\nAt the end, return the length of the stack since it represents the # of distinct fleets/grouped vehicles',
      timeStamp: '2023-05-20T17:44:54.362Z',
      url: 'https://leetcode.com/problems/car-fleet/',
    },
  ],
  [
    'Chunk',
    {
      categories: [],
      daysBeforeReminder: '19',
      name: 'Chunk',
      notes:
        'Create an `output` array and an `i` iterator starting at 0.\nLoop while `i` is less than the input array length.\nEach iteration, slice from `i, i + size` and push it into the output array.\nThen increment `i` by `size`\n\nReturn the output array once the iterating is done',
      timeStamp: '2023-05-31T01:53:26.817Z',
      url: 'https://www.greatfrontend.com/questions/javascript/chunk',
    },
  ],
  [
    'Classnames',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Classnames',
      notes:
        'common mistakes:\n- not handling both `typeof arg === string || typeof arg === number`\n\ncreate an output array OR set -- the `set` is if you want to prevent duplicate class names or if you want to be able to delete class names (such as if the arguments include `foo, {bar: true}, {bar: false}` where the 2nd `bar` object should result in deleting the first one.\n\nLoop over each argument in the `args`.\nif the current arg is falsey then continue.\nIf the current arg is a primitive then just push it into the output.\nif the current arg is an array, recursively invoke the `classnames` function and SPREAD the array into it, then push the returned value into output.\n\nLastly, if the argument is an object, loop over each key in the object and if the `obj[key]` is truthy then push the key into the output.\n\nJoin the output array before returning it, or if using a set then loop over each element and append them to a string.',
      timeStamp: '2023-05-21T21:36:08.725Z',
      url: 'https://www.greatfrontend.com/questions/javascript/classnames',
    },
  ],
  [
    'Climbing stairs',
    {
      categories: ['dp'],
      daysBeforeReminder: '31',
      name: 'Climbing stairs',
      notes:
        'True "bottoms up" DP problem.\nCreate an array of n + 1 length (we add the extra slot to represent `0`).\nThe array will represent the # of ways to reach `n` from the current number.\n\nFill the last two slots with `1`.\nThis works because there is only 1 way to reach `n` from the `nth` slot, which is to take 0 further steps.\nAdditionally, there is only 1 way to reach `n` from slot `n-1`, which is to take 1 step.\nThis trick works for all values of `n`.\n\nNext, loop backwards over the array, starting from n - 2 since the last 2 slots have been filled.\nEach loop, reassign ways[i] equal to ways[i + 1] + ways[i + 2].\nThis works because taking one step from `i` would give us 1 additional way on top of whatever was calculated for `i + 1`.\nObviously taking 2 steps from i also gives us 1 additional way on top of whatever was calculated for `i + 2`.\n\nAt the end, just return the first element in the array since it tells us the # of ways if we start with 0 steps previously taken.\nFun fact: this problem is just the dynamic programming version of the fibonacci sequence :)\n\nALTERNATIVE\nBecause this problem is actually just a fibonacci sequence in disguise, we can solve it without using an array.\nSimply initialize variables `oneStep` to `1` and `twoStep` to `1` to represent the last two digits.\nThen, loop from 0 up to n -1.\nEach loop, assign the value of `oneStep` to a temporary variable and then reassign oneStep to oneStep + twoStep.\nThen, reassign twoStep to the temporary variable.\nThis is basically the equivalent of our DP array where each time we are adding the 2 slots to the right of our current slot together.\nAt the end, return `one`',
      timeStamp: '2023-05-19T05:09:17.344Z',
      url: 'https://leetcode.com/problems/climbing-stairs/',
    },
  ],
  [
    'Clone graph',
    {
      categories: [],
      daysBeforeReminder: '32',
      name: 'Clone graph',
      notes:
        "Start with a base case -- if the input is not truthy, then just return `null`.\n\nPast that, define a `clones` Map() that will be used to map the original node to its cloned node.\n\nDefine a nested `dfs` function that takes in a node.\nWithin `dfs`, IF our `clones` Map already has the current node, then just return `clones.get(node)`.\n\nOtherwise, declare a `copy` of the current `node` by creating a new `Node(node.val)` instance.\nImmediately add the copy into the `clones` Map -- `clones.set(originalNode, copy)`.\n\nNext, loop over each of the original node's neighbors.\nEach iteration, pass the neighbor into the `dfs` function to recursively create the next node, and then push the returned value from `dfs` into the clone's neighbors.\nFinally, return the clone from the `dfs` function.\n\nBack in the main function, just invoke the `dfs` helper and return the result",
      timeStamp: '2023-05-19T16:59:59.126Z',
      url: 'https://leetcode.com/problems/clone-graph/',
    },
  ],
  [
    'Coin change',
    {
      categories: ['dp'],
      daysBeforeReminder: '32',
      name: 'Coin change',
      notes:
        "common mistakes:\n- filling 1st slot with `1` instead of `0`\n\nCreate a `coinSums` array equal to `n + 1` and then fill it with `Infinity`.\nThis array will represent the minimum # of coins to create each target amount from `0 ` to n.\nAssign a value of `0` to the first position of the array, to represent the 0 coins needed in order to create a sum of 0.\n\nLoop over each coin in the `input`.\nImmediately perform a nested loop from `1` to `n + 1` (since we need to populate the entire array).\nIF the current coin is <= the `targetAmount` in this loop, then assign `coinSums[targetAmount]` equal to the minimum of whatever is currently in that slot VERSUS `1 + coinSums[targetAmount - coin]`.\nBasically, we're adding 1 of our current coin PLUS the number of coins needed to make the targetSum minus the current coin we're adding.\n\nAt the end, if coinsSums[n] is still Infinity, return -1.\nOtherwise return coinSums[n]",
      timeStamp: '2023-05-23T00:34:34.780Z',
      url: 'https://leetcode.com/problems/coin-change/',
    },
  ],
  [
    'Combination sum',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '28',
      name: 'Combination sum',
      notes:
        'common mistakes:\n- attempting to return if `i > candidates.length` when it needs to be `i === candidates.length`\n\nDeclare an `output` array and an `arr` array.\n\nCreate a nested `dfs` function that accepts an `index` and `sum` argument.\nWithin `dfs`, if sum === `target` then copy the `arr` and insert it into the `output` before returning.\nOtherwise, if the `sum` is greater than our target OR the `index` is >= our input.length, then we return.\n\nPast those conditionals, push `inputArr[index]` into our `arr`.\nThen, invoke `dfs` and pass in the same `index` as well as `sum + inputArr[index]` -- we do this since the prompt says we can reuse numbers multiple times.\nNext, `pop()` from the array, then invoke `dfs(index + 1, sum)`.\n\nBasically, what this logic is doing is branching between reusing the number within our sum OR skipping the current number and moving on to the next one.\n\nOutside `dfs`, just invoke it and pass in `0` for the first 2 arguments.\nFinally, return the `output`.',
      timeStamp: '2023-05-27T18:21:19.275Z',
      url: 'https://leetcode.com/problems/combination-sum/',
    },
  ],
  [
    'Connect Four',
    {
      categories: [],
      daysBeforeReminder: '27',
      name: 'Connect Four',
      notes:
        "common mistakes:\n- rendering the `player` square even if the square is currently null (just render an empty tile div instead)\n- rendering the restart button based on `winner` rather than `gameOver`\n\nSave `rows = 6`, `cols = 7`, and `win = 4` as constants.\n\nDeclare a `reducer` that accepts state and destructures the `type` and `col Index` off the dispatched action.\nSwitch on the type.\nfor the 'restart' case, just return `buildEmptyState()`.\n\nfor the 'move' case, declare `relevantColumn = state.board[colIndex]`.\nThen declare `columnFull = relevantColumn[0] != null`.\nWe check the 0th index since we columns fill from bottom to top.\n\nif `state.isGameOver || columnFull` then just return `state` since the move is invalid.\nPast that if check, clone the state.board into a new array and clone the relevantColumn into a new array.\n\ndeclare `rowIndex = columnClone.lastIndexOf(null)` so that we know which slot to insert at.\nFrom there, set `columnClone[rowIndex] = player`.\nThen set `boardClone[colIndex] = columnClone` to finalize the board updates.\n\nNext, we need to check for wins.\nDeclare `didWinVertical = checkForWin(rowIndex, colIndex, 1, 0, boardClone, player)`.\nThen declare `didWinHorizontal` and swap the 1 and 0 args.\nNext, declare `didWinDiagonal` which is actually equal to EITHER `checkForWin(rowIndex, colIndex, 1, 1, boardClone, player)` OR `checkForWin(rowIndex, colIndex, -1, 1, boardClone, player)`.\n\nDeclare `winner = didWinVertical || didWinHorizontal || didWinDiagonal ? player : null`.\nThen declare `boardFull = boardClone.every(col => col.every(val => val !== null))`.\n\nFinally, return the updated state `{isGameOver: !!winner || boardFull,\nwinner,\nboard: boardClone,\nplayer: player === 1 ? 2 : 1}`\n\nYou can also declare a default case in the reducer that throws an Error if the `type` is unrecognized.\n\nWith the reducer completed, declare a `buildEmptyState` function.\nThis function simply returns an object with the following shape: `{\nboard: Array.from({length: COLS}, () => Array(ROWS).fill(null)),\nplayer: 1,\nwinner: null,\nisGameOver: false\n}`.\n\nDeclare a `checkForWin` function that accepts startingRow, startingCol, rowIncrement, colIncrement, board, and player args.\nDeclare `consecutive = 0, currRow = startingRow, currCol = startingCol` variables.\n\nloop while currCol < COLS && currRow < ROWS && board[currCol][currRow] === player.\nEach loop, increment `consecutive` and reassign `currRow += rowIncrement`.\nDo the same basic thing for currCol.\n\nAfter that loop ends, we need to check the other direction.\nTo avoid recounting the startingRow/col, assign `currRow = startingRow - rowIncrement` and `currCol = startingCol - colIncrement.`\n\nDo another loop while `currCol >= 0 && currRow >= 0 && board[currCol][currRow] === player`.\nAgain, increment consecutive each loop but this time, reassign currRow/col based on the `-=` operator rather than the `+=` used during the first loop.\n\nFinally, return `consecutive >= WIN`\n\nFor the primary ConnectFour component, immediately create a reducer via `useReducer` and pass in the reducer as well as buildEmptyState().\nMake sure to destructure the `board`, `winner`, and `isGameOver` from the reducer state.\n\nIn the JSX, conditionally render an h1 with winning player text via `winner &&`.\n\nNext, make sure the `div` with `board` className is rendered.\nInside that div, map over the `board` state.\nEach iteration, declare an `onClick` function that simply dispatches `{type: 'move', colIndex: indexDuringIteration}`.\nThen, return a `Column` component that accepts `col` prop (the current array during our iteration`, a `key`, and pass the `onClick`.\n\nPast that map block, we also need to include a restart button so conditionally render one based on `isGameOver &&` and make sure the button just dispatches a `'restart'` type.\n\nFor the `Column` component, make sure to destructure the `col` and `onClick` in the props.\nThen, return a `div className=\"column\"`.\nInside of that div, map over the `col` and assign the iteration args to `entry` and `rowIndex`.\n\nFor the return statement in the map, create a `div` with className of 'tile', assign it a `key`, and pass in the `onClick` (yes, terrible a11y).\n\nInside that `div`, include the following JSX `            {entry != null && <div className={`player player-${entry}`} />}`",
      timeStamp: '2023-05-18T00:22:58.563Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/connect-four',
    },
  ],
  [
    'Connect Ropes ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '57',
      name: 'Connect Ropes ',
      notes:
        'Confusing wording. You need to create a min heap based on the input array, and then loop while the heap has at least 2 elements in it.\n\nEach loop, remove the 2 smallest elements and then add them together. Then, add the sum to a `result` variable that exists outside the loop. Then, re-add the sum to the minHeap.\n\nAt the end, return the `result` variable.',
      timeStamp: '2023-04-22T04:15:58.776Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0',
    },
  ],
  [
    'Construct binary tree from preorder and inorder traversal',
    {
      categories: [],
      daysBeforeReminder: '24',
      name: 'Construct binary tree from preorder and inorder traversal',
      notes:
        'might make more sense to rename `mid` to `rootIndex`\ncommon mistakes:\n- not setting `el, i` as the mapping in Map()\n- not using `mid - inStart` to determine leftNodeCount\n- using `start >= end` instead of `start > end` when returning `null`\n\npreorder: process root --> process left subtree --> process right subtree\ninorder: left subtree --> root --> right subtree.\n\nsuboptimal recursive solution:\nif there is no preorder/postorder length, return `null`.\nWe know that the root of a tree is always the first node in a preorder traversal, so we can create a new `root = new TreeNode(preorder[0]`.\nWe also know that the root node is in the middle of an inorder traversal, so we can divide the left subtree + right subtree based on the index of the root node in the inorder array.\nIE, `mid = inOrder.indexOf(preorder[0])`.\n\nto create the left subtree of the current node, we need to remove the first node of the preorder array and anything after the `mid` element.\nWe also need to include everything from `inorder` UP TO the mid point.\n`root.left = recurse(preorder.slice(1, mid + 1), inorder.slice(0, mid).\n\nThe right node is the same, but processing the other halfs of the array.\n`root.right = recurse(preorder.slice(mid + 1), inorder.slice(mid + 1)` <-- we dont include mid in the inorder slice because we already used it.\n\nThen just return the root.\n\nOPTIMAL solution w/ cache.\nin the suboptimal solution, there are a lot of repeated `indexOf` calls to find the mid point based on whatever is in `preorder[0]`.\nSince traversing an array is ineffecient, the optimal solution starts by creating a Map and then looping over each `inorder` element NOT preorder.\nFor each element, we store the element as the key and the index as the value, so that we can immediately find the index of each element when we recurse.\n\nAfter building our map, we create a recursive `helper` function WITHIN the main function.\nThe recursive func accepts `preStart, preEnd, inStart, inEnd` arguments.\nThis will allow us to continuously shrink the parts of the area we include WITHOUT having to continuously make copies of it.\n\nWithin the helper, if preStart > preEnd OR inStart > inEnd, return null.\ndeclare a `mid` value equal to `inorderMap.get(preorder[preStart])`.\n\nWe create the root via new TreeNode(preorder[preStart]).\nThe number of nodes that belong in the left subtree is = `mid` - `inStart`.\nWith that in mind, we can recursively create root.left by invoking the helper with the arguments `preStart + 1, preStart + leftNodeCount, inStart, mid - 1`.\n\nThe right tree is basically the same in reverse: `preStart + leftNodeCount + 1, preEnd, mid + 1, inEnd).\nMake sure to return `root` from each recursive call.\n\nBack in the main function, just invoke `recurse(0, preorder.length - 1, 0, inorder.length - 1`.',
      timeStamp: '2023-05-17T17:12:23.783Z',
      url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
    },
  ],
  [
    'Container with most water',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '37',
      name: 'Container with most water',
      notes:
        'common mistake:\n- not grouping math properly -- `smaller * (r - l)`\n\ncreate a `left` and `right` pointer that point to the ends of the input array.\nAlso create a `max` variable.\n\nLoop while `left` is less than `right`.\nEach loop, declare a `smaller` variable that is equal to the smaller of the left vs right element.\nThis is because when we are creating our container, the amount of water we can trap is limited by the SMALLER of the two ends.\n\nUpdate the `max` variable via Math.max.\nYou compare `max` against `smaller * (r - l)` in order to calculate the area of water.\n\nTo move your pointers, move whichever pointer is currently on a smaller element.\nSo if `input[l]` = 10 and input[r] = 6, you would move the right pointer.',
      timeStamp: '2023-05-25T00:34:00.627Z',
      url: 'https://leetcode.com/problems/container-with-most-water/',
    },
  ],
  [
    'Copy list with random pointer',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'Copy list with random pointer',
      notes:
        "The trick is to loop twice: the first time, you just create nodes with values and no next/random pointers.\nThen on the 2nd pass you properly wire up the pointers.\n---\nStarting by creating `map = new Map()` and declaring `curr = head`.\nImmediately set `null` into the map, so that if `.random` or `.next` ever points to a null value, when we try to retrieve that value from the map we correctly return `null` instead of `undefined`.\n\nNext, loop while `curr` is truthy.\nEach iteration, create `node = new Node(curr.val)` to create a copy of the current node.\nThen, invoke `map.set(curr, node)` so that we can retrieve this copy.\nLastly, update curr to point to curr.next.\n\nAfter that initial loop is over, we've created basic copies of each and given ourselves a way to immediately retrieve them via the Map.\nReset `curr` back to `head` and do another loop while `curr` is truthy.\n\nEach iteration, declare `copy = map.get(curr)`.\nThen, assign `copy.next = map.get(curr.next).`\nDo the same for random: `copy.random = map.get(curr.random)`.\nLastly, move curr to its next pointer.\n\nAfter that 2nd while loop is done, you can just return `map.get(head)`.",
      timeStamp: '2023-06-06T16:40:29.692Z',
      url: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
    },
  ],
  [
    'Count good nodes in binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '40',
      name: 'Count good nodes in binary tree',
      notes:
        'Can be done with a NESTED recursive function (meaning not recursing with the main function), or just iteratively.\n\nIterative approach:\nCreate a `good` variable that starts at `0`.\nCreate a stack containing an object in the shape of `node: root, max: root.val`.\nLoop while the stack has length.\n\neach loop, destructure the `node` and max from the top of the stack.\nif the node value is greater than or equal to the `max` then increment `good`.\nReassign `max` via Math.max, and then push new objects into the stack for the left and right children IF they exist.\n\nReturn `good` when the while loop ends.',
      timeStamp: '2023-06-04T17:48:25.254Z',
      url: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
    },
  ],
  [
    'Course schedule',
    {
      categories: [],
      daysBeforeReminder: '27',
      name: 'Course schedule',
      notes:
        'common mistakes:\n- using forEach, which prevents you from returning `false` properly\n- not reassigning `map[course]` to an empty array after looping over it\n\nStart by creating a `map` that will represent an adjacency list mapping each course to the prereqs.\nTo do this, `reduce` the input preReq array with an initial value of an empty object `{}`.\nEach iteration, if `acc[curr[0]]` is falsey, then assign it to an empty array.\nPast the `if`, push the current prereq (`curr[1]`) into the array (`acc[curr[0]]`) before returning the accumulator.\n\nAfter building our map/adjacency list, declare a `visited` Set that we\'ll use to ensure we dont get stuck in a cyclic graph.\n\nDeclare a nested `dfs` function that takes in a `course` integer argument.\nIn `dfs`, immediately check if `visited` has the `course` and return `false` if so because we have a cylic graph.\n\nPast that check, if our `map[course].length` is falsey and immediately return `true` if so -- an empty prereq array means there are no prereqs OR weve already processed those prereqs.\n\nPast both if checks, add the `course` to our `visited` set.\nThen, loop over every element in the `map[course]` prereq array.\nEach iteration, if recursively invoking dfs on that course (`dfs(map[course][i]`) returns false, then immediately return false to end the loop.\nAfter that for loop, delete the `course` from our `visited` set.\nThen, assign `map[course]` to an empty array, which will ensure we dont try to "reprocess" the course during a future recursive call.\nFinally, return `true`.\n\nOutside the `dfs` function, loop from `0` up to the input `numCourses` and invoke our `dfs` function on each value of `i`.\nif `dfs` ever returns false, then immediately return false.\nOtherwise, once that loop ends we can just return `true`.',
      timeStamp: '2023-05-17T01:20:44.523Z',
      url: 'https://leetcode.com/problems/course-schedule/description/',
    },
  ],
  [
    'Course schedule ii',
    {
      categories: [],
      daysBeforeReminder: '23',
      name: 'Course schedule ii',
      notes:
        'common mistakes:\n- adding the `course` into `output` BEFORE looping over all of the `neighbors` -- it needs to be one of the last steps in the dfs function\n- not returning `true` if `output.has(course)`\n- attempting to return early if `!map[course]` has no length\n- accidentally using `acc[pre[1]]` instead of building the array at `acc[pre[0]]`\n\nCreate an adjacency list/map by `reducing` the prereqs and initialize the accumulator to an empty object.\nEach iteration, if `acc[preReq[0]` is falsey then assign it to an empty array.\nPast that, push `preReq[1]` into the array before returning the accumulator.\n\nAfter reducing, declare a `visited` Set and a `cycle` Set.\nNext, declare a `dfs` function that accepts a `course` argument.\n\nWithin `dfs`, if the `course` is already present in `cycle` then immediately return false since weve discovered a cyclic graph.\nElse if `visited` has the current `course` then return `true` since weve already processed the current course.\n\nPast those checks, add the `course` into the `cycle` Set.\nThen, loop over each element in the `map[course]` array.\nEach loop, if `dfs(map[course][i]` is false then immediately return false.\nAfter those loops end, delete the `course` from the `cycle` Set and add it to the `visited` set.\nLastly, return `true`.\n\nBack in the main function, loop from 0 up to `inputNum`.\nEach loop, if `dfs(i)` is false then immediately return an empty array since the graph must by cyclic.\nAfter looping, just return `Array.from(visited)`.\n\nThis works because the `dfs` function recurses all the way until it gets to the first course we can take (if the graph is a Directed Acyclic Graph, aka DAG) and then adds that course to the `visited` Set.\nAs we begin "popping" dfs calls off of the call stack, that will wind up adding each subsequent course to the `visited` set until we reach the last course to take.',
      timeStamp: '2023-05-31T05:01:48.706Z',
      url: 'https://leetcode.com/problems/course-schedule-ii/',
    },
  ],
  [
    'Create DOM',
    {
      categories: [],
      daysBeforeReminder: '36',
      name: 'Create DOM',
      notes:
        'common mistakes:\n- not checking if the child is a `string` and appending it as such rather than passing it to `createDom`\n\nstart by creating a new element via `document.createElement(input.type)` and save it as a `node`.\n\nThen if the input has an `attributes` key, loop over the attributes via Object.entries.\nWithin that loop, use `node.setAttribute` to assign each attribute/value.\n\nNext, loop over the `children` array if it exists.\nBecause each child can be either an object OR a string, we use `node.append` because it can handle appending elements and strings, whereas `appendChild` can only append elements.\n\nWhen appending, if the child is a string then just append it directly but if the child is an object then recursively call `createDom` and then append the returned node.\n\nWorth noting, we could theoretically use `appendChild` instead of `append` if we wrapped the string within a text node such as a `p` tag, but thats not needed for this particular prompt.',
      timeStamp: '2023-06-06T03:19:44.947Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/create-dom',
    },
  ],
  [
    'Crypto Prices',
    {
      categories: [],
      daysBeforeReminder: '40',
      name: 'Crypto Prices',
      notes:
        'use 3 pieces of state to store the `coins`, the `hasNext` boolean, and the `page` (starts at `0`).\n\nThe useEffect to fetch data fires any time the `page` changes.\n\nTable itself is straightforward -- dont forget to specify `scope="col"` (or row) for the `th` elements.\nThe buttons are disabled if page === 0 or hasNext is false.\nClicking the buttons updates the `page`',
      timeStamp: '2023-05-24T00:41:12.676Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/crypto-prices',
    },
  ],
  [
    'Curry',
    {
      categories: [],
      daysBeforeReminder: '40',
      name: 'Curry',
      notes:
        'within the main function, create a new function called `curriedFunc` that takes in any number of args.\nIt can be a function declaration or arrow function, wont matter.\n\nWithin curriedFunc, if there are no args then just return the result of invoking the original callback.\nThe ONLY way to hit this case will be if the very first call to `curriedFunc` has no args.length, but it is a valid edge case we need to handle.\n\nPast that edge case, we need to return an anonymous function so that we can chain calls.\n\nThe anonymous function takes in any number of `other` args.\nWithin the anonymous function, if there is no `other` args.length then we have finally stopped chaining additional arguments and so we can just invoke the OG `callback` and pass in the `args` from curriedFunc before returning the result.\nOtherwise if `other` length was truthy, then we need to recursively invoke `curriedFunc` and pass in both the `args` and `other`.\n\nThis works because we basically use `curriedFunc` to collect args over time, and use our anonymous function to actually group the original args with any chained `other` args. \nOnce the `other` finally becomes falsey, we can pass in all of the args collect by our main `curriedFunc` into the callback.',
      timeStamp: '2023-05-31T01:27:14.700Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/curry',
    },
  ],
  [
    'Curry II',
    {
      categories: [],
      daysBeforeReminder: '39',
      name: 'Curry II',
      notes:
        "common mistakes:\n- forgetting to `return` the result\n\nimmediately return a function `curried` (non-arrow) that accepts any number of args.\nIf the args.length is equal to the callback's arity (number of arguments expected by the callback, aka callback.length) the invoke the callback with `.apply`.\n\nOtherwise, if the args.length was insufficient then return a nested function that also accepts any number of arguments.\nThe nested function just returns the result of calling the parent `curried` function with `.apply` and passing in the collected args",
      timeStamp: '2023-06-08T03:06:31.581Z',
      url: 'https://www.greatfrontend.com/questions/javascript/curry-ii',
    },
  ],
  [
    'Curry III',
    {
      categories: [],
      daysBeforeReminder: '8',
      name: 'Curry III',
      notes:
        "TODO: try this out with a variety of inputs and console.log/debug statements to understand why the `Symbol.toPrimitive` trick makes this work\n\ncommon mistakes:\n- invoking Symbol.toPrimitive instead of just overwriting it\n\nTODO: understand how the hell this actually winds up working for unlimited arguments?\n\nSimilar to Curry II, but we accept an unlimited number of arguments and avoid improperly converting types.\n\nInside the `curry` function, immediately return a named function `curried` that accepts an unlimited number of arguments.\nInside `curried`, declare a function `fn` that also accepts an unlimited number of arguments.\nThe `fn` function simply returns `curried.call(this, ...args1, ...args2)`.\n\nBack in the `curried` body, assign `fn[Symbol.toPrimitive]` to an anonymous arrow function that RETURNS `inputFunc.apply(this, args)`\nWe use an arrow function here to avoid overriding  `this` on the `inputFunc`.\nThe purpose of overriding Symbol.toPrimitive SEEMS to be handling `undefined`, so that when we eventually pass `undefined` and Symbol.toPrimitive is invoked under the hood (since its something JS invokes automatically), we'll trigger the `func.apply` line\n\nFinally return `fn`.",
      timeStamp: '2023-06-02T20:50:12.292Z',
      url: 'https://www.greatfrontend.com/questions/javascript/curry-iii',
    },
  ],
  [
    'Cycle in a Circular Array',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '33',
      name: 'Cycle in a Circular Array',
      notes:
        "Common mistakes: \n- within the helper, you compare `isForward` against `arr[next]`, not against `next` itself since `next` will ALWAYS be in bounds due to wrap-around array.\n- you need to determine `isForward` based on arr[i] being >= 0, NOT whether the `slow` or `fast` variable was greater than 0. This means you need to determine it within the main function, not the helper.\n\nMake a helper function that gets the next index.\nIt accepts a currentIndex, an arr, and an `isForward` boolean that indicates whether we need to move forwards or backwards to be a valid cycle.\nIn the helper, create a `nextIndex` variable that is equal to (currentIndex + the value at the current index) MODULO the arr length to handle positively wrapping around. \n\nCheck if `arr[nextIndex] < 0` and compare against isForward boolean. \nIf isForward is true and arr[nextIndex < 0` is also true, then return -1 since we're going in opposite directions.\nif that check passes, check if `nextIndex < 0` due to negative values and add the arr.length to nextIndex to wrap around if so.\n\nLastly, if nextIndex equals the current index, then we have a one element cycle which doesnt satisfy our requirements so we return -1. Otherwise if all those other checks succeeded, we return the nextIndex.\n\nBack in the main function we perform a for loop over the entire input. \nIn each loop, we assign slow to `i` and fast to `helper(i)`. we pass our `isForward` variable based on whether the current array value is >=0. \n\nThen, do a nested while loop as long as slow !== -1 && fast !== -1.\nimmediately check if slow === fast and return true if so.\nOtherwise, reassign slow and fast to the getNextIndex return value. \nif fast !== -1, reassign fast again (recreating the fast.next.next pattern).",
      timeStamp: '2023-05-12T01:21:35.734Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr',
    },
  ],
  [
    'Daily temperatures',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Daily temperatures',
      notes:
        'Create an output array equal to the input array\'s length and fill it with `0`.\nAlso, create an empty stack that will hold an index that lets us look up a previous temperature.\nThis stack will basically be a "monotonically decreasing" stack, which is a common algo pattern.\n\nLoop over each element in the input array.\nImmediately do a nested `while` loop as long as the stack has length and the current temperature is GREATER than the temperature at the end of our stack -- `input[stack[-1]]`.\n\nWithin the while loop, pop from the stack and save the popped `originalIndex`.\nThen, assign `output[originalIndex]` to the value of `currentIndex - originalIndex`.\n\nPast the while loop, just push the current index into the stack.',
      timeStamp: '2023-05-09T22:33:04.173Z',
      url: 'https://leetcode.com/problems/daily-temperatures/',
    },
  ],
  [
    'Debounce',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Debounce',
      notes:
        'common mistake:\n- do not use an if/else block.\n- forgetting to check `if immediate && !timer` \n\nuse a closure to declare a `timer` variable and then immediately return a function.\nThe returned function accepts any number of arguments.\n\nWithin the returned function, clear any pending `timeout` so it doesnt execute.\nThen, if `immediate` is true AND we dont have a defined `timer`, then we can invoke the callback and apply the `this` argument to it before passing it the other arguments.\nWe have to check if there is a timer because if `immediate` is truthy but a timer already exists, then it means we already executed the callback immediately once before, and we shouldnt continue to immediately call it.\n\nPast the `immediate` logic, assign `timer` to the return of `setTimeout`.\nThe setTimeout takes in an anonymous function, and that function invokes the callback with `.apply` IF immediate is falsey.\nThen it resets the timer to `null` no matter what.\nThis works because if `immediate` was true then it would already have executed, and our timeout is really just resetting the `timer` so that the next call will work (because of our earlier check for `!timer && immediate`).',
      timeStamp: '2023-06-04T17:55:09.262Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/debounce',
    },
  ],
  [
    'Debounce II',
    {
      categories: [],
      daysBeforeReminder: '18',
      name: 'Debounce II',
      notes:
        'common mistakes:\n- forgetting to invoke `cancel` within `flush` method so that if a caller invokes `flush` directly we properly clean up the timer.\n\ndeclare `timer = null`, `thisContext`, and `argsToInvoke`.\n\nCreate a `cancel` function.\nThis function simply invokes clearTimeout(timer) and resets the timer back to `null`.\n\nCreate an `invoke` function.\nThis function immediately returns if the `timer` is null, since that implies that weve already cancelled the invocation.\nOtherwise, the function calls `cancel` and then calls `inputFunc.apply(thisContext, argsToInvoke`.\n\nDeclare a `bounced` function that accepts any number of args.\nThis function immediately calls `cancel` to clear any pending timers.\nThen, it sets `argsToInvoke = args` and sets `context = this`.\nLastly, it creates a setTimeout that calls `invoke` based on the `inputWait` and then saves the timerId to `timer.`\n\nAssign `bounced.cancel` and `bounced.flush` to the relevant functions before returning bounced.',
      timeStamp: '2023-06-04T18:20:21.158Z',
      url: 'https://www.greatfrontend.com/questions/javascript/debounce-ii',
    },
  ],
  [
    'Deep Clone II',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Deep Clone II',
      notes:
        'common mistakes:\n- using the `lowerCaseFirst` helper -- its unnecessary, just use the capitalized version of the type :)\n- forgetting the `isPrimitiveTypeOrFunction` and `getType` helpers.\n- Not looping over the object using `Reflect.ownKeys` and using some other Object iterator instead\n- not passing `cache` into the `deepClone` function call when looping over Reflect.ownKeys\nCreate a helper function `isPrimitiveTypeOrFunction` that accepts an `input` parameter.\nReturn `typeof input !== "object" || typeof input === "function" || input === null`.\n\nCreate another helper `getType` that accepts an `input`.\nIf `typeof input !== "object"` then just return `typeof input`.\nOtherwise, return `Object.prototype.toString.call(input).replace( /^\\[object (\\S+)\\]$/, \'$1\')`\nThe funky regex captures both `[object Object]` as well as `[object Array]`.\nFor more info: https://www.zhenghao.io/posts/js-data-type\n\nMoving on to the main `deepClone` function, add a 2nd parameter of `cache = new Map()`.\nIn the function body, pass the input `value` into `isPrimitiveTypeOrFunction` and if it return true, we can just return `value` since there is no cloning necessary.\n\nNext, declare `type = getType(value)`.\nif `type === "Set"`, declare `cloned = new Set()`.\nLoop over each element in `value` and perform `cloned.add(deepClone(element))`.\nAfter looping over the set, return `cloned`.\n\nNext, if `type === "Map"`, then declare `cloned = new Map()`.\nLoop over the `value` Map (remember that maps iterate in the form of value/key, rather than key/value) and each iteration invoke `cloned.set(deepClone(key), deepClone(value)`.\nAfter iterating, return `cloned`.\n\nNext, if `type === "Array"`, we can just return `value.map(el => deepClone(el))`\n\nNext, if `type === "Date"`, we can return `new Date(value)`.\n\nIf `type === "RegExp"` then its similar to a Date: just return `new RegExp(value)`.\n\nNext, if `cache.has(value)` then just return cache.get(value).\nThis ensures that we handle circular references.\n\nOtherwise, declare `cloned = Object.create(Object.getPrototypeOf(value))`.\nThis ensures the cloned object preserves the prototype chain.\nThen, invoke `cache.set(value, cloned)`.\n\nNext, loop over each `key` of the object via `const key of Reflect.ownKeys(value))`.\nWe need to use the `Reflect.ownKeys` API because its the only way for us to get both enumerable AND nonenumerable keys.\n\nEach iteration, set `cloned[key]` using a ternary: `isPrimitiveTypeOrFunction(value[key]) ? value[key] : deepClone(value[key], cache)`.\n\nFinally, return `cloned`.',
      timeStamp: '2023-06-06T05:25:44.962Z',
      url: 'https://www.greatfrontend.com/questions/javascript/deep-clone-ii',
    },
  ],
  [
    'Deep Equal',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Deep Equal',
      notes:
        "common mistakes:\n- checking `typeof val === \"object\"` instead of `type1 === type2`\n- not creating a `shouldCompare(type)` helper\n- returning `valueA === valueB` at the end instead of using `Object.is(valueA, valueB)\n\nThe easiest way to check for whether something is an object literal is to check the prototype as a string.\nSo declare a `shouldCompare` function that accepts a `type` parameter.\nReturn type === '[object Object]' || type === '[object Array]'\n\nIn the main deepEqual function, grab the prototype of each input via `Object.prototype.toString.call(input)` and save each result to a constant.\n\nThen, if `type1 === type2 && shouldCompare(type1) && shouldCompare(type2)`, we know each type is the same and each one is either an object literal or an array.\nInside that if block, create two arrays via Object.entries on each input.\nIf the array lengths are not equal, return false.\nOtherwise, return `arr1.every( ([key, val]) => Object.hasOwn(input2, key) && deepEqual(val, input2[key]) )`\n\nPast that if block, we can be confident that we have two primitives or some object-ish elements like a Set, and we can just return Object.is(input1, input2) to compare them while handling NaN.",
      timeStamp: '2023-05-27T19:47:01.881Z',
      url: 'https://www.greatfrontend.com/questions/javascript/deep-equal',
    },
  ],
  [
    'Depth-First Search',
    {
      categories: [],
      daysBeforeReminder: '32',
      name: 'Depth-First Search',
      notes:
        'common mistakes:\n- using an output array instead of output Set\n- trying to use optional chaining (not supported by Great FE)\n\nCheck if the graph has length and return early if not.\n\nDeclare a `stack` and a `visited` Set.\nPush the source onto the stack.\n\nLoop while the stack has length.\nEach loop, remove a node (string/number) from the stack and add it to the `visited` Set.\nNext, declare a `neighbors` constant equal to the `graph[node]` to grab the array of neighbors.\n\nLoop BACKWARDS over the neighbors array, and if the `visited` Set does not have the current neighbor then add the neighbor to the stack.\nWe need to loop backwards over the array so that we traverse the elements in the right order when we pop from our stack.\n\nFinally, convert the `visited` Set into an array and return it.',
      timeStamp: '2023-05-19T05:10:44.272Z',
      url: 'https://www.greatfrontend.com/questions/javascript/depth-first-search',
    },
  ],
  [
    'Depth-first Search',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '50',
      name: 'Depth-first Search',
      notes:
        'if (!this.name) then return;\nPush `this.name` into the array of names, then loop over the children and invoke `child.DFS`, ensuring you pass in the array.\nThen, return the array.',
      timeStamp: '2023-05-19T17:47:31.283Z',
      url: 'https://www.algoexpert.io/questions/depth-first-search',
    },
  ],
  [
    'Design add and search words data structure',
    {
      categories: [],
      daysBeforeReminder: '32',
      name: 'Design add and search words data structure',
      notes:
        "common mistake:\n- returning the string, rather than returning a boolean indicating if a match was found\n\nwithin the WordDictionary constructor, initialize `this.root` to an empty object.\n\nthe `addWord` method is similar to any other Trie.\nDeclare `curr = this.root` and then loop over the input string.\nEach loop, if `curr[char]` is falsey then assign it to an empty object.\nThen reassign curr to `curr[char]` to traverse to the next level of the trie.\nAfter the loop ends, assign `curr['*']` to true to indicate that a word ended.\n\nFor the `search` method, immediately declare a nested `dfs` function that accepts a `startIndex` and `curr` parameters.\nWithin `dfs`, loop over the input string that was passed to `search`.\nIf the current character is a `.` then declare a `children` variable that is equal to `Object.values(curr)` so that we can loop over each of the subsequent nodes.\nPerform a FOR loop over the children and recursively invoke `dfs` each time, making sure to pass in `currentCharIndex + 1` as the `startindex` argument so that we skip past the current `.` character.\nIf any of the recursive calls return true, then immediately return true to break the loop.\nOtherwise, if the entire loop completes then just return `false`\n\nELSE if the current `char` was not `.`, then do a normal Trie traversal.\nif `!curr[char]` then return false, otherwise reassign curr to `curr[char]`.\nAfter the main loop in `dfs` return `curr['*'] || false`.\n\nPast the dfs declaration, just return `dfs(0, this.root)`",
      timeStamp: '2023-05-21T17:00:17.191Z',
      url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
    },
  ],
  [
    'Design twitter',
    {
      categories: ['heaps'],
      daysBeforeReminder: '38',
      name: 'Design twitter',
      notes:
        "within the `Twitter` constructor, initialize a `count = 0`, and a `tweetMap` and `followMap` that are both empty objects.\nCount will be used to track which tweets are most recent, and the two objects will be used to store an array (tweetMap) and a Set(followMap).\n\nThe follow/unfollow methods are simplest, so start there.\nWithin `follow`, check if `this.followMap[followerId]` is truthy and assign it to a new Set() if not.\nAfter guaranteeing that a Set exists, we then `.add(followeeId)` to the set.\n\nthe `unfollow` method is EXACTLY the same except you invoke `.delete()` on the set to remove the followeeId.\n\nfor the `postTweet` method we first need to ensure the user is following themselves because of the prompt.\nSo simply check `followMap[userId]` and initialize it to a new Set if it doesnt already exist, then add the users own ID into the set.\n\nNext, make sure `tweetMap[userId` is initialized to an array, and then push a tuple into the array.\nthe tuple will be in the shape of `[this.count, tweetId]` so that when we build our maxHeap later we can destructure the `count` from each tweet and then sort the heap so more recent `counts` are at the top.\nLastly, make sure to increment `this.count` so that the next tweet has a more higher count.\n\nfor `getNewsFeed`, initialize an output array as well as a maxHeap that will hold the most recent tweets and compares based on the first element -- `a[0] > b[0]`.\n\nLoop over each element in the Set @ `this.followMap[userId]`.\nFor each `followee` we loop over, first check if the `followee` has no tweets (`tweetMap[followee] == undefined) and `return` early from the iteration if so.\n\nOtherwise, assign an `index` variable equal to `tweetMap[followee].length - 1` so that we can grab the last element in the followee's tweet array.\nTo keep code obvious, destructure the `count` and `tweetId` from `tweetMap[followee][index]`.\nThen, insert a new array into the maxHeap in the shape of `count, tweetId, followee, index`.\n\nAfter we've looped through each element in the user's follow Set, we need to populate the results.\nSo, loop while `result.length < 10` (because the feed only shows 10 tweets) AND the maxHeap.length is truthy.\nEach iteration, destructure the count, tweetId, followee, and index by removing from the heap.\nPush the `tweetId` into the result array, and then decrement `index`.\n\nIf the `tweetMap[followee][index]` is truthy then destructure the next `[count, tweetId]` tuple from the tweetMap and insert a new tuple into the maxHeap using the same shape that you destructured.\n\nWhen the while loop ends, just return the `result` array.",
      timeStamp: '2023-05-09T05:31:24.612Z',
      url: 'https://leetcode.com/problems/design-twitter/',
    },
  ],
  [
    'Diameter of binary tree',
    {
      categories: [],
      daysBeforeReminder: '43',
      name: 'Diameter of binary tree',
      notes:
        'declare `diameter = 0`.\nThen declare a nested `dfs` function that accepts a node.\n\nThe nested function returns 0 if there is no node.\nElse, it sets `left` to `dfs(node.left)` and does the same for `right`.\nThen it does a Math.max on (diameter, left + right) since left + right === currDiameter.\nThen, it returns the `height` which is 1 + max(left, right).\n\nDont forget to invoke the nested function prior to returning `diameter` from the main func.',
      timeStamp: '2023-06-08T03:08:07.600Z',
      url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    },
  ],
  [
    'Edit distance',
    {
      categories: ['dp'],
      daysBeforeReminder: '31',
      name: 'Edit distance',
      notes:
        'common mistake:\n- looping up to `word.length` instead of `word.length + 1. This also applies when creating the matrix\n- forgetting to populate the first element in each row AND each column in the first row after initializing the `edits` array\n\nrefer to https://youtu.be/XYi2-LPrwm4 for explanation. Note that he solves from bottom right, whereas I solve from top left.\n\nSIMPLE VERSION: solved by creating a 2D array and populating it top down or bottom up.\nThe top/left slot represents the `0th` element in each string, which is just an empty string.\nThe remaining columns represent each individual character in string1, while the rows represent each individual character in string 2.\nThe rows/cols together represent how many operations are needed to make that section of a string equal the other section of a string.\n\nCreate an `operations` array, and populate it by looping from 0 to str2.length + 1.\nEach loop, create a `row` array and then loop from 0 to str1.length + 1.\nWithin the nested for loop, just push `j` into the row.\nAfter the nested loop ends, assign `row[0]` equal to `i` since we need to populate our first column with the # of operations on `str2` that would be needed to make an empty string (the "0th" character in str1).\n\nOnce the `operations` are built, loop from `1` to str2.length + 1 again, using an iterator called `row`.\nImmediately perform a nested loop via `col` from 1 to str1.length + 1.\nIn the loop, if str2[row - 1] is equal to str1[col - 1], then the letters are the same.\nNote, we\'re doing `-1` because we have to account for the extra row/column we created.\n\nIf the letters are equal, then operations[row][col] gets assigned to `operations[row - 1][col - 1] because that slot contains the # of operations needed to deal with strings that DONT contain our current character.\nBasically, because the letters are even, we just reuse the calculations from strings that didnt even include the current letters.\n\nElse the letters are different, so we add `1` to whatever the minimum is of the 3 adjacent slots -- row -1, col - 1, and row -1 with col-1.\n\nIDEAL VERSION:\nThe approach is the same, but we conserve space by building out 2 smaller arrays instead of a full 2D array that holds every calculation.\nThis winds up working because we really only ever need the current slot and the 3 adjacent slots, and that winds up being enough for us to calculate everything.\n\nCreate a `small` constant equal to whichever string is smaller.\nCreate a `big` constant equal to whichever string is >= the other.\nCreate an `evenEdits` array, and then populate it by looping from 0 to `small.length + 1` and pushing `i` each loop.\n\n\nThen, create an oddEdits array equal to `small.length + 1` but dont populate it.\n\nAfter creating both arrays, loop from `1` to `big.length + 1` because thats how many "rows" our 2D array would have.\n\nDeclare a `currentEdits` and `prevEdits` variable.\nIf `i % 2 === 1`, then currentEdits = oddEdits and prevEdits = evenEdits.\nElse, reverse those assignments.\nBasically, sometimes our current row is an even numbered row, and othertimes its odd numbered.\n\nassign `currentEdits[0]` to `i`, because we need to create our imaginary columns in the form of [1, 2, 3, 4,...] to represent the number of deletions needed to make an empty string.\n\nThen, perform a nested loop from 1 to `small.length + 1`.\nif `big[i - 1] === small[j - 1]` then the letters in each string are equal, so we can assign currentEdits[j] equal to prevEdits[j - 1].\nOtherwise, the letters are different so we need to search our adjacent slots.\nIf prevEdits[j] is the equivalent of "the row above" in a full 2D array,\ncurrentEdits[j] = 1 + min(prevEdits[j], prevEdits[j - ]1, currEdits[j - 1].\n\nFinally, if big.length % 2 == 0, then we return the last item in our evenEdits.\nOtherwise, return the last item in our odd edits.\n\nTime : O(n * m) where n is `inputOne`, and m is `inputTwo`.\nSpace: O(Minimum(n vs m) )',
      timeStamp: '2023-05-20T23:29:09.166Z',
      url: 'https://leetcode.com/problems/edit-distance/',
    },
  ],
  [
    'Employee Free Time',
    {
      categories: ['heaps'],
      daysBeforeReminder: '35',
      name: 'Employee Free Time',
      notes:
        'common mistake:\n- looping while minHeap.length === input.length, rather than just looping while minHeap.length\n\ncreate a helper class EmployeeInterval that accepts an interval, \nan employeeIndex (used to track which employee it is from the original array), and an intervalIndex (used to track which interval this is for the employee).\n\nIn the main function, create a MinHeap, where the compareFunc is based on `a.interval.start < b.interval.start`. \nLoop over the input schedule and insert a new EmployeeInterval(input[i][0], i, 0). \nThis will find gaps between any employees FIRST schedules \n(since one employee might have multiple schedules, we will process those later.\n\nThen, create a previousInterval variable that points to minHeap.peek().\n\nwhile the minHeap has length, remove from the minHeap and destructure the `currInterval`,\nthe `employeeIndex`, and `intervalIndex`. \nIF prevInterval.end < currInterval.start, then push a new interval into the results array based on `prev.end, popped.start`. \nOutside the `if` block, reassign prev to currInterval.\n\nStill within the while loop, look up the employeeSchedule via input[popped.employeeIndex] \nand save it to a variable. \nIf that employeeSchedule.length is greater than the popped intervalIndex + 1, then we\nstill have more intervals for the same employee to process so we insert another EmployeeInterval into the minHeap, \npassing in `employeeSchedule[intervalIndex + 1], employeeIndex, and intervalIndex + 1`.\n\nThat wraps up the while loop, so now you can return the result arr',
      timeStamp: '2023-06-08T03:22:36.184Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0',
    },
  ],
  [
    'Evaluate Expression',
    {
      categories: ['subsets'],
      daysBeforeReminder: '34',
      name: 'Evaluate Expression',
      notes:
        'Recursive approach that slowly breaks down each character to an individual number within an array, ie `[num]`.\n\nStart by declaring an output array.\nIF the current input is a number (isNaN(input) === false), then just push the string as a Number into the output.\n\nELSE, loop over each index in the string.\n\nIF the current character is not a number (isNaN(Number(input[i])) === true), then we have one of our symbols (+, -, *).\nrecursively call the main function on the left half of the string via str.substring(0, i) and the right half of the string (str.substring(i + 1).\nThis generates smaller `result` arrays.\n\nPerform a for loop over the left half, and a nested for loop over the right half.\nif the current character is a `+`, then push leftHalf[i] + rightHalf[j]. \nElse if ifs a `-`, do the same for subtraction.\nLastly, handle `*`.\n\nAt the end, return the result',
      timeStamp: '2023-04-29T23:59:37.640Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx7O7nO0R8l',
    },
  ],
  [
    'Evaluate reverse polish notation',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Evaluate reverse polish notation',
      notes:
        'Relies on a stack.\n\nAfter initializing an empty stack, loop over each element in the input array.\nif the current element is `+`, then pop 2 values from our stack and then push the resulting value back into the stack.\nDo the same basic thing if the current element is `*` for multiplication.\n\nIf the element is a `-` then things get a bit trickier due to the order of operations the problem expects.\nPop one value from the stack and save to `val2`.\nThen, pop another and save to `val1`.\nSubtract `val2` from `val1` and then push the result back into the stack.\n\nDivision is similar in that we need to pop twice and save into variables and then do the division in "reverse order" (poppedSecond - poppedFirst) just like when we handled subtraction.\nHowever the question also wants us to round all division towards 0.\nThe best way to do this in JS is to take the result of dividing in reverse order and then check if it is less than 0 or not.\nIf it is less than 0, then use Math.ceil to round up towards 0.\nOtherwise, use math.floor to round down towards  0.\n\nPast all those `if/else` checks for operands, we use one final `else` block to handle numbers -- simply push the current element into the stack after casting it to a number via the `Number()` constructor.\n\nAt the end, return the last element in the stack since it will be our total',
      timeStamp: '2023-06-01T21:45:12.148Z',
      url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
    },
  ],
  [
    'Event Emitter',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Event Emitter',
      notes:
        "common mistakes:\n- not checking `!events[eventName]` AND `!events[eventName].length` within the `emit` function\n\nWithin the constructor, assign `this.events = new Object(null)`.\nWe do this to avoid any potential collisions with the listeners and the built-in prototype of `{}`, such as `isString`.\n\nFor the `on` method, if `eventName in this.events === false` then assign `this.events[eventName]` to an empty array.\nThen, just push the listener into the array and return `this` so the method can be chained.\n\nFor the `off` method, if `eventName in this.events === false` then just return `this`.\nOtherwise, we'll find the first instance of the listener using `this.events[eventName].findIndex(item => item === listener`.\nIf index was < 0, then just return `this` since the listener was not present.\nElse, splice the listener using `.splice(index, 1)` before returning `this`.\n\nFor the emit method, if the typical `!eventName in this.events` check is false OR this.events[eventName] has no length, then return `false`.\nOtherwise, clone the events[eventName] using `.slice()` so that if any of the listeners attempt to mutate the array via `this` or something then we wont mutate the original events.\nThen, just loop over each element in the cloned array and invoke the callback using `.apply(null, args)` before returning `true`",
      timeStamp: '2023-05-31T00:32:46.804Z',
      url: 'https://www.greatfrontend.com/questions/javascript/event-emitter',
    },
  ],
  [
    'Event Emitter II',
    {
      categories: [],
      daysBeforeReminder: '21',
      name: 'Event Emitter II',
      notes:
        'Initialize `this.events` via `Object.create(null` so that we have an object with no extra prototype methods.\nAlso initialize `this.id = 0` which will be used to store the keys for each eventName.\n\nWithin the `on` method, initialize events[eventName] to an OBJECT (not an array).\nAssign `events[eventName][this.id] = listener` -- basically, save the listener to an integer key.\n\nWithin the return statement for on, just return an object with an `off` method on it that is an Arrow function.\nThe `off` method just invokes `delete this.events[eventName][the id you saved the listener at]`.\nDelete is a no-op, so we dont need to worry about repeatedly calling off accidentally deleting extra elements.\n\nwithin the `emit` method, if the events[eventName] == undefined just return early.\nOtherwise just invoke `Object.values(events[eventName])` and loop over each callback, invoking it using `.apply()`',
      timeStamp: '2023-06-04T20:03:45.625Z',
      url: 'https://www.greatfrontend.com/questions/javascript/event-emitter-ii',
    },
  ],
  [
    'Event Target',
    {
      categories: [],
      daysBeforeReminder: '60',
      name: 'Event Target',
      notes:
        'within a constructor, declare a `this.listeners` and assign it to an empty object.\n\nWithin addEventListener, check it this.listeners[name] is already a Set.\nif not, assign it to a new Set.\nAfter the if block, just add the `callback` into the set.\n\nfor removing, just delete from the Set and use optional chaining.\nFor dispatching, just loop over the Set and invoke each cabllack',
      timeStamp: '2023-05-16T20:15:23.791Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/event-target',
    },
  ],
  [
    'Find Closest Value In BST',
    {
      categories: ['dfs'],
      daysBeforeReminder: '41',
      name: 'Find Closest Value In BST',
      notes:
        'common mistake:\n- not using a `closest` variable and updating with Math.abs\n\nCreate a `closest` variable.\nLoop while `tree` is truthy.\nRecalculate closest each loop using Math.abs(target - tree.val).\n\nIf the curr.value is less than the target, traverse left.\nElse, traverse right',
      timeStamp: '2023-05-31T00:35:09.724Z',
      url: 'https://www.algoexpert.io/questions/find-closest-value-in-bst',
    },
  ],
  [
    'Find all anagrams in a string',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '69',
      name: 'Find all anagrams in a string',
      notes:
        'create a Map to hold the count of each letter in the input pattern.\n\nAfter populating the Map, create a `charsMatched = 0` variable and then loop using a sliding window.\nEach loop, if the current character is not undefined in our Map, decrement the count of that character.\nWithin that same `if` block, if the current characters count drops to `0` then increment the `charsMatched` variable.\n\nThen, if our current window is larger than the pattern, we need to slide our window and decrement that count of the character we dropped IF it was present in our Map.\n\nAfter sliding the window, if `charsMatched` is equal to the size of our Map still then we push the `start` index into an output array.',
      timeStamp: '2023-04-21T06:39:46.904Z',
      url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/description/',
    },
  ],
  [
    'Find first and last position of element in sorted array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '46',
      name: 'Find first and last position of element in sorted array',
      notes:
        'create a helper function that will do the binarysearch. it take `arr, target, findMaxIndex` as args.\n\nThe helper uses the typical start/end variables, but also creates a `keyIndex = -1` variable which will be used to return the desired index. \nUnlike normal binary search once `arr[mid] === target` you reassign `keyIndex = mid` AND CONTINUE SEARCHING. \nif `findMaxIndex === true`, you search the greater part of the ascending array to try and find the LAST valid index (start = mid + 1). Otheriwse, you try to find the FIRST valid index (end = mid - 1). \nBasically, youre continuing your binary search past the first match in order to find the first or last index, based on findMaxIndex. \n\nWithin the main function, call your binary search helper with `findMaxIndex = false` in order to find the index to insert as `result[0]`. \nThen, repeat the call with `findMaxIndex = true` to find `result[1]` ONLY IF the initial function did not return an index of `-1` since -1 means there are no matches.',
      timeStamp: '2023-06-09T01:41:53.515Z',
      url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
    },
  ],
  [
    'Find k closest elements',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '21',
      name: 'Find k closest elements',
      notes:
        "common mistakes:\n- not using `.slice(start, start + k)` when returning at the very end\n- using `arr[start]` in any of the calculations rather than relying entirely on `arr[mid]` and `arr[mid + k]`\n\nideal strategy: Use a binary search to create a WINDOW rather than searching for a specific element and then expanding outwards via 2 pointers (which would be the more intuitive, but suboptimal solution).\n\nRather than a normal binary search, the sliding window created by our search is between 'mid' and 'mid + k'.\n\nAfter calculating `mid`, determine whether to search left vs right by comparing `target - arr[mid] > arr[mid + k] - target`.\nThis works because  `arr[mid]` represents the element at the start of our window, while `arr[mid + k]` represents the element furthest to the right of our window (and therefore should be equal or larger than X).\n\nIf the above `if` check is truthy, then we need to start our window somewhere further to the right.\nExample input of `[1,2,3, 5, 10, 11, 12], k = 2, target = 10` -->\nmid on first iteration points to `5` --> we compare `10 - 5 > 11 - 10` --> this check is truthy, so we know we can find the closest numbers by moving our window to the right.\n\nif the `target - mid > mid + k - target` check is false, reassign `end` to `mid` since we need to start our window further left.",
      timeStamp: '2023-06-08T03:15:58.676Z',
      url: 'https://leetcode.com/problems/find-k-closest-elements/',
    },
  ],
  [
    'Find minimum in rotated sorted array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '26',
      name: 'Find minimum in rotated sorted array',
      notes:
        'common mistake:\n- not using `nums[mid] < nums[end] ?? end - 1` to determine which direction to go in\n- not checking for either `nums[mid] < nums[mid - 1]` AND another condition for `nums[mid] > nums[mid + 1]` -- both cases can result in identifying the solution (notice one is `+` and the other is `-`\n- not using `start % nums.length` when returning outside the `while` loop\n\nwithin the while loop (start < end), if the middle element is greater than the element to its right, then return the middle index + 1 since the next element is the pivot. \nIf the middle element is less than the element to the left return mid since we found the pivot.\n\nIf neither of the above cases were true, then we just check if the right of `mid` is smaller via `arr[mid] < ( arr[end] || arr[end - 1] )`. \n\nIf true, then move to the left since the right half cannot possibly contain the smallest element.\nElse, move to the right.\n\nAt the end, if `start` is greater than nums.length then return the first element.',
      timeStamp: '2023-05-25T18:36:40.643Z',
      url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
    },
  ],
  [
    'Find right interval',
    {
      categories: ['heaps'],
      daysBeforeReminder: '17',
      name: 'Find right interval',
      notes:
        'common mistakes:\n- not properly sorting the `data` array based on interval start\n- looping over intervals instead of relying entirely on the `data` array and using the `originalIndex` to assign the output slot\n\nbinary search solution:\nmap the intervals to a new `data` array of objects, where each object is in the shape of {interval, originalIndexInInputArr}. \nSort that `data` based on each intervals start time `(a, b) => a.interval[0] - b.interval[0]`.\n\nCreate an output array based on inputArr.length and fill it with `-1`.\n\nLoop over each element in the `data` array.\nEach loop, declare start, end, mid so we can do a normal binary search.\nWithin the binary search `while`, after calculating `mid` check if  `data[i].interval[1] <= data[mid].interval[0]`.\nIf true, reassign `end` to mid, otherwise assign `start` to mid + 1.\nBasically, this is where we check if the current elements END time is <= the mid elements start time.\n\nAfter the binary search while loop ends, check if `start < data.length` (meaning its inbounds).\nIf true, assign `output[data[i].originalIndex] = data[start].originalIndex`\n\nreturn the output after looping over the entire data array\n\ntwo heaps notes:\nCommon mistake:\n- using `maxStarts` for the outer while loop instead of `maxEnds`\n\nUtilizes two max heaps, one for the start times and one for the end times.\nLoop over the input intervals and for each interval push a tuple in the form of [start OR end, index] into the two maxheaps.\n\nAfter both heaps are populated with starts/ends, loop over the input again.\nEach loop, remove from the `ends` heap and destructure the end time + original index.\nAssign output[originalIndex] to -1 as a default value.\n\nThen, if the maxStartheap.peek() start time is >= the current end time, destructure the start+index from the `starts` heap.\nPerform a nested loop while maxStarts.length && maxStart.peek is >= topEnd and just reassign the [start, startIndex] that you originally destructured from the `starts` heap at the beginning of the `if` block.\nThis is done to ensure we find the CLOSEST start time after a given end time, since that is what the problem asks of us.\n\nAfter the while loop ends, we can reassign output[endIndex] to point to startIndex.\nThen, push the current [start, startIndex] tuple back into the starts array because it could be the next interval for other intervals as well.\n\nThe above flow works because each heap is sorted on MAX.\nSo even though our while loop could discard multiple start times, we know we wont need them again because the end heap is ALSO sorted on max.',
      timeStamp: '2023-06-04T20:20:12.097Z',
      url: 'https://leetcode.com/problems/find-right-interval/',
    },
  ],
  [
    'Find the First K Missing Positive Numbers',
    {
      categories: ['cyclicSort'],
      daysBeforeReminder: '40',
      name: 'Find the First K Missing Positive Numbers',
      notes:
        'Start by doing a cyclic sort IF the current element is greater than 0, i <= input.length, and the correct slot (nums[i] -1) isnt already filled by \nnums[i]. \nElse, just increment `i`.\n\nThen, create a Set to track the missing numbers that we add. \nStarting from 0, loop while `j` < input.length AND missingNumbers.length < k. \nAny time the current element !== j + 1 AND `j + 1` is not already present in the Set, push the j + 1 into the ouput array AND add the input[j] value into a Set. \n\nAfter the loop ends, create a counter = 1 + input.length. \nLoop while output.length < k. \nIn each loop, if our Set doesnt have `counter`, then we can safely add that to our missing numbers array. \nNo matter what, increment count on each loop.\n\nFinally, return the output array',
      timeStamp: '2023-05-31T00:38:48.971Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/q2LA7G0ANX0',
    },
  ],
  [
    'Find the duplicate number',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Find the duplicate number',
      notes:
        "common mistakes:\n- attempting to start fast from `nums[0]` instead of starting it at `0`.\n- returning `nums[slow]` instead of just returning `slow` itself\n----\nThis is the array version of `find a cycle in a linked list`, both of which are a form of Floyds cycle algorithm https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare\n\nDeclare `slow = 0, fast = 0`.\nLoop `while (true)` to perform an infinite loop.\nEach iteration, assign `slow = nums[slow]`\nand `fast = nums[nums[fast]]` to move slow once cycle and fast two cycles.\nIf at any point `slow === fast` then we can `break`, since we entered a cycle.\n\nThe math from floyd's algorithm proves that the distance from the start node to the cycle's beginning is the same distance as the `fast` pointer in the cycle to the node that begins the cycle.\nSo without diving into those specifics more in detail, simply reset `slow = 0` and loop while `slow !== fast`\n\nEach iteration just move the slow and fast pointers by 1, ie `fast = nums[fast]`.\nThen once that loop breaks, we've found the beginning of the cycle (duplicate number) and so we can just return `slow` or `fast` ",
      timeStamp: '2023-06-08T03:26:28.772Z',
      url: 'https://leetcode.com/problems/find-the-duplicate-number/description/',
    },
  ],
  [
    'Flatten',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Flatten',
      notes:
        'common mistake:\n- forgetting to recursively flatten the values during `flatArr` and `flatObj`\n\nbuild a `flattenArr` helper.\nThe helper returns the result of `arr.reduce` where each loop you attempt to `concat` the flattened value onto the accumulator.\n\nbuild a `flattenObj` helper.\nStart by declaring an object and saving it to a variable.\nThen, loop over the object via Object.entries or `for...in` and flatten the value at the current key.\nIf the UNflattened version of the value is an object and its NOT null or an array, then use `object.assign` to merge the flattened value into the closed over object outside the loop.\nElse, just assign `obj[key] = flatVal`.\n\nwithin the main function, if the value is a primitive (typeof !== object) OR the value is null then just return the value.\nOtherwise, call the helpers based on whether the value is an array or not.',
      timeStamp: '2023-06-04T19:21:42.852Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/flatten',
    },
  ],
  [
    'Fruits into Baskets ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '80',
      name: 'Fruits into Baskets ',
      notes:
        'Create a Map, and then do a sliding window `for` loop. \nIncrement the value in the map for the corresponding letter, and then do a `while` loop when the map.size > 2. \nAfter getting the map.size back to 2 or less, use Math.max to compare the previously recorded `maxFruits` against the current window size.',
      timeStamp: '2023-03-25T02:58:34.557Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ',
    },
  ],
  [
    'Function.prototype.bind',
    {
      categories: [],
      daysBeforeReminder: '37',
      name: 'Function.prototype.bind',
      notes:
        'common mistakes:\n- using `.call` or `.apply` instead of using `Reflect.apply(origFunc, thisArg)`\n\ndeclare a varialbe to hold the original `this`\nThrow a type error if the varaiable is not of type `function`.\nReturn a function declaration that accepts arguments, and then returns using the `Reflect.apply` API to ensure you dont encounter any namespace collisions if an end user defined their own `.apply` method.\nReflect.apply takes 3 arguments, the last of which is an array of arguments.\n\nalternative:\nrather than saving `this` to a variable and passing it to Reflect.apply, you can just make the returned function an arrow function and then pass `this` to Reflect.apply since `this` wont be bound',
      timeStamp: '2023-06-04T19:18:04.710Z',
      url: 'https://www.greatfrontend.com/questions/javascript/function-bind',
    },
  ],
  [
    'Gas station',
    {
      categories: [],
      daysBeforeReminder: '12',
      name: 'Gas station',
      notes:
        "common mistake:\n- when finding the starting index, dont mix up the order of operations! You need to begin the iteration by checking if `currGas < 0` and updating `currGas = 0` and `start` BEFORE updating `currGas += gas[i] - cost[i]`\n\nTricky problem that relies on a key realization: if the total sum of elements in the `gas` array is LESS than the sum of elements in the `cost` array, its impossible to complete a circruit.\nIf the sum of gas is >= sum cost, then a solution MUST exist, and we can find it by using a similar strategy to Max Subarray -- keep track of a positive `total`.\n\nStart the problem by summing up the gas and cost arrays and returning `-1` if `gasSum < costSum`.\n\nAfter that, declare `total = 0` and `start = 0`.\nPerform a for loop over the entire `gas` array.\nEach iteration, if `total < 0` then reset total to 0 and reassign `start = i` since we'll use the current index as our new starting point.\nThis works because if at any point the total goes negative, then we know that starting from any of the prior indices will always cause us to run out of gas.\n\nPast that if check, simply add `gas[i] - cost[i]` to the `total`.\n\nAfter the for loop ends, return `start` since it will point to a starting index where the `total` did not become negative (since we already confirmed that there MUST be a solution by summing up the arrays earlier in the problem).",
      timeStamp: '2023-06-02T20:48:55.232Z',
      url: 'https://leetcode.com/problems/gas-station/description/',
    },
  ],
  [
    'Generate Table in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '16',
      name: 'Generate Table in Vanilla JS',
      notes:
        "common mistake:\n- forgetting to `.join('')` the arrays within the template tags.\n- forgetting the formula: col % 2 === 0 ? rows * col + (row + 1) : rows * (col + 1) - row\n\nThe HTML is relatively simple, just build a form with `rows` and `columns` for input names and make sure the inputs have a `min=1` attribute. Also build a `tableContainer` div that we can append the table to.\n\nWithin the JS, grab the form and `tableContainer` and save them to constants.\n\nDeclare a `renderTable` function that accepts `rows` and `columns` as arguments.\nIn the function set `tableContainer.innerHTML` equal to a template literal containing:\n`<table>\n      <tbody>\n        ${Array.from({ length: rows }, (_, row) =>\n              `<tr>\n              ${Array.from({ length: columns }, (_, col) =>\n                    `<td>\n                    ${\n                      col % 2 === 0\n                        ? rows * col + (row + 1)\n                        : rows * (col + 1) - row\n                    }\n                  </td>`,\n                )\n                .join('')}\n            </tr>`,\n          )\n          .join('')}\n      </tbody>\n    </table>`\n\nOutside of the `renderTable` function, add a 'submit' eventListener to the `form` that receives an `event`.\nImmediately `preventDefault()` on the event to avoid page reloads.\nNext, declare `data = new FormData(event.target)`.\nThen declare `rows = data.get('rows')` and do the same thing for 'columns'.\nPass the `rows` and `columns` to the renderTable function.",
      timeStamp: '2023-06-01T01:26:36.206Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/generate-table',
    },
  ],
  [
    'Generate parentheses',
    {
      categories: ['subsets'],
      daysBeforeReminder: '47',
      name: 'Generate parentheses',
      notes:
        "Create a helper Permutation class. Needs a string property, openCount property, and closedCount property.\n\nin main func, create an output arr and a queue. Loop while the queue.length > 0.\n\nEach loop, shift from the queue. \nIf the permutation.closeCount === num, push the perm.STRING into the output arr. \nif perm.openCount < num, push a new class into the queue while adding a '(' incrementing the openCount. \nDo the same for closeCount IF the openCount > closeCount on the individual perm.",
      timeStamp: '2023-04-28T02:21:05.433Z',
      url: 'https://leetcode.com/problems/generate-parentheses/',
    },
  ],
  [
    'Get',
    {
      categories: [],
      daysBeforeReminder: '39',
      name: 'Get',
      notes:
        'common mistake:\n- IDE doesnt support nullish coalescing, so you need to use a ternary when returning object or defaultValue\n\nsplit the input string on `.` if its a string and not an array.\nFor loop up to path.length.\nEach loop, if object == undefined just return `defaultValue`.\notherwise, reassign object to objet[paths[i]` and increment.\n\nAfter the loop ends, use a ternary: if object is NOT undefined then return it.\notherwise, return the default value.',
      timeStamp: '2023-06-06T03:13:00.049Z',
      url: 'https://www.greatfrontend.com/questions/javascript/get',
    },
  ],
  [
    'Grid Lights in React',
    {
      categories: [],
      daysBeforeReminder: '14',
      name: 'Grid Lights in React',
      notes:
        'common mistakes:\n- using a Set instead of an Array to hold the `filled` values.\n- forgetting to add `aria-label`s to each Cell\n- forgetting to add an `isDiabled` state in the main component so that new clicks cant occur when deactivating all of the cells\n\nTo simplify things, create a 3x3 2D `config` matrix in the shape of `\n[1,1,1],\n[1,0,1],\n[1,1,1]`\nThe 0 in the middle will be used to ensure we leave a blank gap where necessary.\n\nCreate a `Cell` component that accepts `filled`,`label`, `onClick`, and `disabled` props.\nFor the JSX, return a button component of type="button".\nSince these cells dont have any text, add an `aria-label={label}`.\nGive the button a conditional classname: `filled ? \'cell cell-activated\' : \'cell\'.\nLastly, pass the onClick and disabled props.\n\nIn the main App component, create an `order` state initialized to an empty array and a `isDeactivating` state initialized to `false`.\n\nDeclare a `deactivateCells` function.\nImmediately `setIsDeactivating(true)`.\nThen, declare `const timer = setInterval()` using a 300ms delay on the interval.\n\nInside of the interval callback,  invoke `setOrder(prev =>` so we can access the previous order.\nInside the setOrder callback, declare `newOrder = prev.slice(0, -1)` so that we drop the very last element from the order array.\nThen, if newOrder.length === 0, invoke `clearInterval(timer)` (since we can access the timer via closures) and then `setDeactivating(false)`.\n\nFinally, return `newOrder`.\n\nFor the JSX of the App component, render a `.wrapper` div.\nThen render a nested `.grid` div.\nWe can use inline styles on this div so that we can access our `config` object in the module scope when declaring the template columns.\n`style={ {gridTemplateColumns: `repeat(${config[0].length}, 1fr)`} }`\nThis ensures the grid columns are flexible in case an interviewer wants a different number of squares.\n\ninside of that `.grid` div, perform `config.flat(1).map((value, index) =>` to flatten the config so we can easily map over it while correctly counting the indices.\n\nInside of the map callback, if `value` is truthy (meaning its not the center square), return a Cell component.\nMake sure to pass a key, a label of `cell ${index}`, `filled={order.includes(index)}`, `disabled={order.includes(index) || isDeactivating}`.\n\nFor the onClick of the Cell, create a copy of `order` by spreading it into an array and append the current index -- `[...order, index]`.\nThen invoke `setOrder(newOrder)`.\nThen if `newOrder.length === config.flat(1).filter(Boolean).length` invoke `deactivateCells`.\n\nFor the "else" condition in our map callback, meaning if value === 0, just render an empty span with a key={index}.\n\nFor the CSS:\n.wrapper {\ndisplay: flex; \nalign-items: center; \nflex-direction: column;\njustify-content: center;\ngap: 16px;\n}\n\n.grid {\n--spacing: 20px;\ndisplay: grid;\nmax-width: 300px;\nwidth: 100%;\npadding: var(--spacing);\ngap: var(--spacing);\nborder: 1px solid black;\n}\n\n.cell {\nbackground-color: transparent;\nborder: 1px solid black;\nheight: 0;\npadding-bottom: 100%; /* setting height to 0 and making one vertical padding 100% is a trick to make height and width equal */\n}\n\n.cell--activated {\nbackground-color: green;\n}',
      timeStamp: '2023-05-21T00:08:19.284Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/grid-lights',
    },
  ],
  [
    'Group anagrams',
    {
      categories: [],
      daysBeforeReminder: '38',
      name: 'Group anagrams',
      notes:
        "the semi-brute force approach works best on this one.\n\nCreate a `counts` OBJECT (not a map).\nThen, loop over each string in the input array.\n\nDeclare a new Array with a length of `26` and fill it with `0`s.\nThis array will represent the count of each letter in the english alphabet that a given string contains.\n\nLoop over the string, and declare an `index` variable that is equal to `string[i].charCodeAt(0) - 'a'.charCodeAt(0)`.\nThis is the JS way of determining the distance between a character such as `d` and the first letter in the alphabet `a`, giving us a difference of `3`.\nThis difference winds up being the index that corresponds to the current character, so we just increment the count in our characters array.\n\nAfter we've counted all the characters in our string, we check if `counts[arr]` exists.\nif it does not, then assign it to an array that contains the current string we looped over.\nOtherwise, just push the current string into the existing array at `counts[arr]`.\n\nAfter weve looped over the entire input array, we can just return Object.values(counts) to grab the grouped strings.",
      timeStamp: '2023-06-01T21:48:16.711Z',
      url: 'https://leetcode.com/problems/group-anagrams/',
    },
  ],
  [
    'HTML Serializer',
    {
      categories: [],
      daysBeforeReminder: '13',
      name: 'HTML Serializer',
      notes:
        "common mistakes:\n-using `.map` instead of `.flatMap()\n\nAdd an additional `indent` parameter to the main `serializeNode` function, and give it a default value of '\\t' (the actual string, including single quotes).\n\nIn the function body, declare a `traverse` function that accepts an `obj` as the first parameter and a `depth` as the 2nd parameter, with `depth` having a default value of 0.\nDo a ternary return based on `obj.children`.\n\nWhen truthy, return `\n[`${indent.repeat(depth)<${obj.tag}>`,\n...obj.children.flatMap(child => traverse(child, depth + 1)\n`${indent.repeat(depth)</${obj.tag}>`\n]`\nOtherwise when falsey, just return `${indent.repeat(depth)}${node}` without wrapping it in an array\n\nBasically, when the children are truthy we create an indented string based on the current depth of the tree, followed by the element tag.\nThen, we recursively traverse the children, and map each returned string into an array before flattening it (this is what `flatMap` does).\nFinally we repeat the tabbed string and end it with a closing tag.\n\nOtherwise if children is falsey, then we know we have a text node and so we just created a tabbed text string.\n\nTo wrap up the main function, we simply return `traverse(node).join('\\n')`",
      timeStamp: '2023-06-06T03:37:53.637Z',
      url: 'https://www.greatfrontend.com/questions/javascript/html-serializer',
    },
  ],
  [
    'Hand of straights',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'Hand of straights',
      notes:
        "common mistakes:\n- returning false when `counts.get(num) <= 0` instead of returning false when `!counts.get(num)` -- its posible the `get` will return undefined, so you need to check for falsey values.\n\nif the `hand.length % groupSize` is not equal to 0, then return `false` since that indicates that we cannot fit everything into the right groupings.\n\nLoop over the `hand` and populate a `map` to track the frequency of each number.\nThen, sort the `hand` in ascending order -- we'll iterate through this sorted array to use it as a sort of minHeap, ensuring we always go from lowest to greatest when making our groupings.\n\nLoop over the sorted `hand`.\nIf the current `hand[i]` is `0` in the `map`, then just continue since we cant start a grouping from it.\n\nDo a nested for loop from `hand[i]` up to `hand[i] + groupSize`.\nInside the nested loop, if `map.get(currNum) > 0` then decrement the count of that number to indicate that we've used it in the current grouping.\nOtherwise the count was <= 0 and so we couldnt find the number that we needed, so we return `false`\n\nAfter both of those loops complete, we can return `true` since we were able to create all of the groupings.",
      timeStamp: '2023-05-31T01:41:52.904Z',
      url: 'https://leetcode.com/problems/hand-of-straights/',
    },
  ],
  [
    'Happy number',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '54',
      name: 'Happy number',
      notes:
        'All numbers eventually get stuck in a cycle, where `n === 1` is a happy number but `n >= 2 && <= 4` will loop forever. \n\nWhile you can find this cycle using fast and slow pointers, its more efficient to just use 2 while loops.\nPerform an outer while loop as long as `n > 4`.\nInside that loop, declare a `sum = 0` and then perform a nested loop while `n > 0`.\nInside the nested loop, grab the last digit via `n % 10` and then square that digit before adding it to `sum`.\nThen reassign `n = Math.floor(n / 10)` to slice off the last digit.\n\nOnce that inner while loop ends, if `sum === 1` then return true. Otherwise reassign `n = sum`.\nAfter the outer while loop ends, just return false since `n` was <= 4 but not equal to 1, meaning it wouldve looped forever.',
      timeStamp: '2023-05-05T03:54:08.017Z',
      url: 'https://leetcode.com/problems/happy-number/',
    },
  ],
  [
    'Holy Grail in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '52',
      name: 'Holy Grail in Vanilla JS',
      notes:
        'common mistakes:\n- for the flex version, you need to ensure the `body` and `#root` both have a min-height of 100vh and are set to flex-column. Then you can make the div containing multiple columns `flex-grow: 1`\n\nUse the `grid-template` to define the rows + columns.\nThe rows should be `auto 1fr auto` OR you can hardcode the height for the header/footer instead.\nThe columns should be `100px auto 100px` to account for the hard widths of the sidebars.\n\nTo make an element span the full width, assign a `grid-column` property and specify the starting + ending column. \nTo make something span 3 columns, that would be `grid-column: 1 / 4`.\n\nYou need to ensure the `html` or `body` take up the entire viewport height.\n\nALTERNATIVE with flexbox\nasign the relevant height to header + footer.\nMake body height 100vh and make it flex: column.\n\nfor the div wrapping the main content, make it a flex: row and also give it a flex-grow of 1 so it takes up remaining height of `body`.\nMake the <main> flex-grow 1 so it takes up any width not consumed by the sidebars',
      timeStamp: '2023-06-06T03:44:54.152Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/holy-grail',
    },
  ],
  [
    'House robber',
    {
      categories: ['dp'],
      daysBeforeReminder: '32',
      name: 'House robber',
      notes:
        'easier approach: fibonacci sequence\nDeclare `oneStepPrev = 0` and the same for `twoStepsPrev`.\nAlso declare a `max` variable with no assigned value.\nLoop from 0 up to end of array.\nEach iteration, assign max to `Math.max(oneStepPrev, twoStepsPrev + nums[i])`.\nThen assign twoStepsPrev to the value of oneStepPrev, and assign oneStepPrev to the value of `max`.\n\nAfter the looping is done, return `oneStepPrev`.\n\nalternative:\nLoop from `1` up to the `inputArr` length.\nEach loop, assign `inputArr[i]` equal to the Math.max of the inputArr[i] OR inputArr[i - 1] OR  `inputArr[i] + inputArr[i - 2]`.\n\nAt the end, just return the last value in the sums array OR 0 if the last value is falsey.',
      timeStamp: '2023-05-20T17:51:16.541Z',
      url: 'https://leetcode.com/problems/house-robber/',
    },
  ],
  [
    'House robber ii',
    {
      categories: ['dp'],
      daysBeforeReminder: '31',
      name: 'House robber ii',
      notes:
        "Same as House Robber 1, but you have to perform the DP solution multiple times and compare the resulting values.\n----\nCreate a helper function that takes in an array and a `start` argument.\nDeclare two variables `twoStepsPrev` and `oneStepPrev`.\ntwoStepsPrev will basically represent the slot TWO steps previously, meaning it is NOT the adjacent slot to our current element.\noneStepPrev will represent our adjacent slot, meaning we cannot add it to our current slot's value.\n\nDeclare a `stop` variable that is equal to nums.length -1 if `start` is 0 so that we exclude the last element when robbing the first house.\nOtherwise, `stop` is nums.length if `start` is 1, since we want to include the last element when skipping the first.\n\nLoop from start to stop.\nEach loop, declare a `max` variable that is equal to the max of `nums[i] + twoStepsPrev` vs `oneStepPrev`.\nBasically, we're calculating a max based on `non-adjacent element + curr element vs adjacent element`.\nThen, reassign twoStepsPrev to `oneStepPrev` (because it becomes non-adjacent to the upcoming element in the array) and reassign `oneStepPrev` to max.\nAfter the loop ends, return `oneStepPrev` since it will be the max.\n\nIn the main function, just return a Math.max of 3 numbers -- nums[0] (in case we have a single element array), helper(start = 0), and helper(start = 1).",
      timeStamp: '2023-05-20T18:01:16.665Z',
      url: 'https://leetcode.com/problems/house-robber-ii/',
    },
  ],
  [
    'Identical DOM Trees',
    {
      categories: [],
      daysBeforeReminder: '11',
      name: 'Identical DOM Trees',
      notes:
        'common mistakes:\n- using `Array.from(nodeA.attributes).every` instead of using `nodeA.getAttributeNames().every`\n- forgetting to `return` inside of the `.every` callbacks!\n\nThe "cheating" version of this is to simply use the `Node.isEqualNode` API which is baked into JS :)\n\nThe manual version youd actually need to do in an interview:\ncheck if `nodeA.nodeType !== nodeB.nodeType` and return false if so.\nThis is similar to comparing the `.tagName` of HTML elements, where we can basically compare the "types" (text, comment, etc) of different nodes.\n\nNext, check if `nodeA.nodeType === Node.TEXT_NODE`, which checks if the node is a text node.\nIf true, return nodeA.textContent === nodeB.textContent.\n\nNext, if the `tagName` doesnt match between the nodes, return false since they contain two different HTML elements.\n\nNext, if the `node.childNodes.length` are unequal OR the `node.attributes.length` are unequal then return false.\nWe have to use `childNodes` instead of `children` because children will only return HTML elements while childNodes will return ALL nodes, including text and comment nodes.\n\nWith most of the quick checks out of the way, we now need to compare the attributes.\nUse `nodeA.getAttributesNames().every(attribute => nodeA.getAttribute(attribute) === nodeB.getAttribute(attribute)` and save it to a "equalAttributes" constant.\nIf that constant is false, then return false.\n\nFinally, we need to recursively check all of the childNodes. Because `childNodes` is a NodeList rather than an array, it doesnt have the `every` method on it\'s prototype chain.\nSo we can either convert the childNodes into an array, or just invoke the `every` method directly from the Array prototype via `return Array.prototype.every.call(nodeA.childNodes, (childA, i) => isSameTree(childA, nodeB.childNodes[i]))`',
      timeStamp: '2023-06-01T05:07:37.269Z',
      url: 'https://www.greatfrontend.com/questions/javascript/identical-dom-trees',
    },
  ],
  [
    'Implement trie prefix tree',
    {
      categories: [],
      daysBeforeReminder: '39',
      name: 'Implement trie prefix tree',
      notes:
        "Create a `trie` class and assign `this.root = {}` within the constructor.\n\nfor the `insert` method, initialize `curr = this.root`.\nThen, loop over the entire string.\nWithin the loop, if `curr[char]` is falsey then assign curr[char] to an empty object.\nPast that `if` block, reassign `curr` to `curr[char]` in order to traverse to the next level of our Trie.\nAfter the loop ends, we know we have created a node for each character in our string, and so we just need to assign `curr['*']` to `true` so that we have a way to indicate that a word does actually end at the current node.\n\nThe search method is 100% identical to `insert`, except instead of adding a new Object if `curr[char]` is falsey, we just return false since we know the input is not contained within our trie.\nAfter looping over the string, just return `curr['*'] || false`.\n\nThe startsWith method is identical to `search`, except that if the for loop over the string completes without returning early then we just return `true` since we were able to successfully navigate the string within our trie.",
      timeStamp: '2023-05-27T19:38:10.726Z',
      url: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
    },
  ],
  [
    'Infinite Scroll',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Infinite Scroll',
      notes:
        "common mistakes:\n-forgetting formula: this.scrollHeight - this.scrollTop - this.clientHeight\n- listening to events on `window` instead of `testimonialContainer`\n- not removing scroll listener when `hasNext` is false\n\nNOTE: this is all easier with an IntersectionObserver, but isnt supported by AE.\n\nSave the `testimonialContainer` into a global constant via document.getElementByid.\nDeclare `afterId = null` and `canFetch = true` variables.\nWhile the function hasnt been made yet, add a `scroll` eventListener to the testimonialContainer and name the function `handleScroll`.\n\nDeclare a `createUrl` function.\nThis function creates a new URL object for the API.\nOn the created URL, access `searchParams.set()` and set the 'limit' param to the integer `5` so that we only request 5 testimonials at a time.\nThen, if `afterId` is truthy then set the 'after' searchParam to whatever the value of `afterId` is so that the BE can paginate properly.\nLastly, return the URL.\n\nDeclare an async function `fetchAndAppend`.\nWithin this function, immediately set `canFetch` to prevent further API calls until previous ones finish.\nNext, create a url by invoking the `createUrl` function.\n`await` a fetch to the created url and dont forget to await turning it into JSON as well.\nDestructure `testimonials` and `hasNext` off of the parsed JSON.\n\nCreate a fragment via `document.createDocumentFragment` -- we'll use this to append all our testimonials before finally appending to the DOM.\nNext, loop over each of the testimonials and destructure the `message` off them.\nPass the message to a `createTestimonial` function, then append the result onto the fragment via `appendChild`.\nAfter the looping is done, append the fragment to `testimonialContainer` via `appendChild`.\n\nAfter appending to the container, check if `hasNext` is truthy and if so, update `afterId` to point to the `id` property of the last element in the testimonials array.\nOtherwise, if hasNext was falsey then remove the `handleScroll` listener from the testimonialContainer `scroll`.\nFinally, set `canFetch` back to `true`.\n\nDeclare the `createTestimonial` function that accepts a message.\nCreate a 'p' element, then add the `testimonial` class to it's classList.\nSet the `textContent` to the message arg before returning the element.\n\nDeclare a `handleScroll` function.\nIn the function, if `canFetch` is falsey then immediately return so we dont spam the BE.\nOtherwise, declare `bottomSpaceRemaining` constant that is equal to `this.scrollHeight - this.scrollTop - this.clientHeight`.\nWe use `this` since it will wind up referring to the element that the event listener is on -- in this case, the testimonialContainer.\nIf `bottomSpaceRemaining` is > 0 then return since we havent scrolled to the bottom yet.\nOtherwise, invoke `fetchAndAppend`.\n\nBack in the main JS, just invoke `fetchAndAppend` to kick things off :)",
      timeStamp: '2023-05-23T05:03:17.561Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/infinite-scroll',
    },
  ],
  [
    'Insert interval',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '45',
      name: 'Insert interval',
      notes:
        'Requires 3 sequential loops. \nFirst loop to push things that dont overlap (i.end < new.start), 2nd loop to merge the overlapping intervals (i.start <= new.end), and 3rd loop to push remaining intervals.\n\ncreate an iterator variable. while arr[i] END time is less than the new interval START time, increment and push the current interval.\n\nThen, loop again while arr[i] START time is <= new interval end time AND i is less than the input length to build an overlapping interval. \nReassign `new interval.start` + `newInterval.end` based on a Math.min/max.\n\nOnce that 2nd while loop is done, push `newInterval` and then loop from `i` over the remaining input arr and push the remaining intervals.',
      timeStamp: '2023-05-03T05:51:03.223Z',
      url: 'https://leetcode.com/problems/insert-interval/',
    },
  ],
  [
    'Intervals Intersection ',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '39',
      name: 'Intervals Intersection ',
      notes:
        "declare i=0, j = 0. \nWhile Loop over both arrays as long as i < a.length && j < b.length. \n\nEach loop, youre searching for an overlap. Overlap is when one intervals start time >= the other start time AND the start time is <= the other's end time.\n\nIf A overlaps B OR B overlaps A, push a new interval with start = Math.max(starts) and end = Math.min(ends).\n\nTo move forward, use ternary: A.end < b.end ? i += 1 : j += 1 at end of each loop.",
      timeStamp: '2023-05-26T19:37:20.760Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D',
    },
  ],
  [
    'Invert binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '55',
      name: 'Invert binary tree',
      notes:
        'Use a stack to process the tree.\nEach iteration, swap the left and right nodes and then process the next level.\n\nAlternatively, just use the main `invertTree` function that is provided recursively',
      timeStamp: '2023-04-21T03:13:24.798Z',
      url: 'https://leetcode.com/problems/invert-binary-tree/',
    },
  ],
  [
    'Ipo',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Ipo',
      notes:
        "Common mistake:\n- doing a while loop and checking against minCapital.length instead of using a simple for loop `i < k). \n\nCreate a minHeap `minCapitals` and a maxHeap `maxProfits`.\nLoop over the input `capital` array and insert the capital and index: minCapitals.insert(capital[i], i).\nThis allows us to populate a minHeap with the LEAST costly projects we can begin.\n\nDeclare an `availableCapital` variable and initialize it to the value of `initialCapital`.\nThen, perform a FOR loop from 0 to `numberOfProjects`.\n\nWithin each loop, perform a nested loop while `minCapitals` has length AND minCapitals.peek()[0] is <= availableCapital.\nEach while loop, remove from `minCapitals` and find the corresponding profit for the job and insert it into the maxProfits heap:\nmaxProfits.insert([profitsArr[removedIndex], removedIndex].\n\nOnce weve removed all possible jobs from minCapitals, the maxHeap will now have all possible profits based on our availableCapital.\n\npast that while loop, IF there is no maxProfits length then break the loop.\nOtherwise, remove from the maxProfits heap and add the profit to availableCapital.\n\nThen, outside of that for loop just return `availableCapital`.\n\nTo understand the above flow:\nSince we are limited by the # of jobs, we're basically just constantly inserting all possible jobs we can begin based on our availableCapital.\nThen, we select the most profitable possible job -- since we dont empty the entire maxHeap on each for loop, we're always guaranteed to pull the most profitable job and we're guaranteed that it is within our budget.\n\nTime complexity is N *logN, since we need to loop over each input but we also have multiple inserts to perform. \nSpace complexity is O(N) since we need to store each interval in the 2 heaps and our output scales related to the input as well.",
      timeStamp: '2023-05-25T18:26:55.657Z',
      url: 'https://leetcode.com/problems/ipo/',
    },
  ],
  [
    'Is Empty',
    {
      categories: [],
      daysBeforeReminder: '13',
      name: 'Is Empty',
      notes:
        'common mistakes:\n- checking `instanceof Buffer` instead of `Buffer.isBuffer()`\n- checking `typeof value === "object"` instead of using `Object.getPrototypeOf(input)` --> `proto === null || proto === Object.prototype`\n\nif the value is `falsey`, then just return `true`.\n\nsave the `typeof` the input into a `type` constant.\n\nIf the input is an array, the type is a string, or `Buffer.isBuffer(input)` is true, then return input.length === 0.\n\nIf `input instanceof Map || input instanceof Set)` then return input.size === 0.\nNote that you can\'t just check for the existence of a `size` key, since a plain object could have a size key manually added to it.\n\nSave the input\'s prototype to a constant via Object.getPrototypeOf(input).\nIf the `proto === null || proto === Object.prototype`, then return Object.keys(input).length === 0.\n\nAt the end, just return true if we didnt hit any of the above cases.',
      timeStamp: '2023-06-06T17:03:55.835Z',
      url: 'https://www.greatfrontend.com/questions/javascript/is-empty',
    },
  ],
  [
    'JSON.stringify',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'JSON.stringify',
      notes:
        'common mistakes:\n- not creating a recursive `dfs` helper INSIDE `isCylic`\n- not adding every object seen within `dfs` to the `seen` set\n- forgetting to use `shouldIgnoreEntry` when mapping over `Object.entries(inputValue)` and then filtering out the undefined elements.\n\nJSON.stringify can\'t handle circular object references, so we need to make an `isCyclic` helper function that can check if an object has such references.\nThe function accepts an `input`.\nImmediately create a new Set, and then declare a nested `dfs` function that accepts an `obj`.\n\nIn the nested dfs helper, if `obj === null` or `typeof obj !== "object"` then we can return `false`, since its obviously not a circular object.\nOtherwise, add `obj` into the Set.\nLastly, return `Object.values(obj).some(val => Set.has(val) || dfs(val)`\nThis is basically checking if the current value has already been seen, or if a nested value winds up being circular (since the Set is in a closure, it can check every value).\n\nBack in the main `isCyclic` body, just return `dfs(input)`.\n\nMoving on to the main `jsonStringify` function, declare a `quote` constant that wraps an INDIVIDUAL DOUBLE QUOTE character within two single quotes --> \'  "  \' (extra spaces added for emphasis, but you dont actually want them in your code).\nAlso declare a constant `escape = /"/g`\n\nImmediately use the `isCyclic(value)` helper to check if we have a circular object, and throw a TypeError if so (\'Converting circular structure to JSON\').\n\nThen check if the input `value` is null, and return the STRING \'null\' if so.\n\nNext, save the typeof `value` into a `type` constant.\nIf `type === "bigint"` then throw a TypeError(\'Do not know how to serialize a BigInt\').\n\nIf `type === "number"`, then check `Number.isNan(value) || Number.isFinite(value) === false` and return the STRING "null" if either is truthy.\nThis is because `NaN` and `Infinity` get coerced to "null" by JSON stringify\nOtherwise we can just return `String(value)`.\n\nNext, if `type === "boolean"` then we can just return `String(value)`.\n\nif `type === "function" || type === "undefined" || type === "symbol"` then we just return the value `undefined` (NOT A STRING).\n\nIf `type === "string"` then we need to return `quote + value.replace(escape, \'\\\\"\') + quote`\nThis is how JSON.stringify naturally works, but can be hard to remember, which is why we made those helper constants at the beginning :)\n\nNext, we need to handle Date objects.\nif `typeof value.toJSON === "function"`, then we know we have a Date object at this point in our logic (since Dates have that method built in.\nSo we need to return `jsonStringify(value.toJSON())` to recursively call our function on the actual timestamp instead of the Date object itself.\n\nAt this point, we\'ve either got an array, or a plain object.\nSo if `Array.isArray(value)` then return ` \'[\' + value.map(el => jsonStringify(el)) + \']\' `.\nSince this is JavaScript, attempt to add the mapped values to \'[\' the JS engine will automatically coerce the array in the middle into a String by invoking Array.prototype.toString under the hood.\n\nLastly, to handle plain objects we create a constant `entries` equal to `Object.entries(value).map( [key, val])`.\nInside of the `.map` callback, declare `shouldIgnoreEntry = typeof key === "symbol" || val === undefined || typeof val === "function" || typeof val === "symbol"`\nThen, if `shouldIgnoreEntry` was truthy we can just `return`.\nOtherwise, we return `quote + key + quote + ":" + jsonStringify(val)`.\n\nAfter the `.map` is done, chain on a `.filter(val => val !== undefined`.\nFinally, we can return `"{" + entries + "}"`.\nSimilar to the Array coercion, JS will naturally invoke Object.prototype.toString on `entries` when we attempt to add it to a string.',
      timeStamp: '2023-06-06T05:15:47.201Z',
      url: 'https://www.greatfrontend.com/questions/javascript/json-stringify',
    },
  ],
  [
    'Jump game',
    {
      categories: [],
      daysBeforeReminder: '15',
      name: 'Jump game',
      notes:
        "Optimal solution uses a greedy algo for O(n) runtime with constant space.\n\nDeclare `goal = inputArr.length - 1` -- this will represent the target index we MUST reach.\n\nLoops backwards over the entire array.\nEach iteration, if the current index + the element is >= goal, then reassign goal to i.\nSince we're allowed to take `input[i]` steps or less, we know that if we start from our current index and add the max number of steps and reach the goal, then the current index can reach the goal.\nSo with that in mind, we no longer need to reach our original goal index, we know that we simply need to reach our current index since the current index can also reach the previous goal, hence why we reassign goal.\n\nAfter the for loop ends, we just return goal === 0, since that means we started from our goal and made it all the way to the beginning of the array, and so there is a valid solution.",
      timeStamp: '2023-05-31T23:29:52.178Z',
      url: 'https://leetcode.com/problems/jump-game/',
    },
  ],
  [
    'Jump game ii',
    {
      categories: [],
      daysBeforeReminder: '13',
      name: 'Jump game ii',
      notes:
        "common mistakes:\n- forgetting to use `i + nums[i]` when calculating furthest\n\nThe idea is you'll search through a window to check every possible starting point between `left` and `right` to see what each point could jump to, and then update `left` to right + 1 and then `right = furthest`.\n---\nDeclare `result = 0, left = 0, right = 0`.\nLeft and right will be used to form a window (not necessarily a sliding window) containing all of the possible jumps we could make.\n\nLoop while `right < input.length - 1`, since that condition indicates that we've reached the end of the array.\n\nEach loop, declare `farthest = 0` -- we'll use this variable to determine the farthest possible slot we can reach. \n\nPerform a nested for loop over the window (i = left, i <= right).\nEach iteration reassign farthest based on Math.max(farthest, i + input[i]).\nAfter the loop ends, assign `left` to `right + 1` (since this will represent the shortest jump we could when starting from `right`).\nThen reassign `right = farthest`, since this represents the farthest jump we could take.\nLastly, increment `result` to account for the jump we took.\n\nAfter the while loop ends, return `result`.",
      timeStamp: '2023-06-09T23:45:29.846Z',
      url: 'https://leetcode.com/problems/jump-game-ii/',
    },
  ],
  [
    'K Pairs with Largest Sums',
    {
      categories: ['heaps'],
      daysBeforeReminder: '44',
      name: 'K Pairs with Largest Sums',
      notes:
        "UPDATED VERSION: use a maxHeap instead of a minHeap. simplifies all of the relevant code.\n\nInitialize a minHeap that we'll use to track\nthe top K sums.\n\nPerform a for loop from 0 to Math.min(k, arr1.length).\nImmediately do a nested for loop from 0 to Math.min(k, nums2.length).\n\nWithin the innermost loop, if the minHeap length is < k, just insert a tuple in the form of [nums1[i] + nums2[j], i , j].\nBasically, we're tracking the max sums we can create and the indices that made them.\n\nElse, we've maxed our minHeap length so we need to perform a nested if/else.\nIf nums1[i] + nums2[j] is less than the top of our minHeap[0], then we should break our loops.\nThis is because the arrays are sorted in descending order -- once we create a sum that is SMALLER than the top of the MINheap, then we cannot possibly generate any further sums that are larger than the top of our minheap.\n\nElse If that check fails, then we have a sum larger than the top of the minHeap so we remove() from the minHeap and then insert our next tuple.\n\nPast the nested for loops, loop over the minHeap and for each tuple, push an array in the form nums1[original `i`] , nums2[original `j`] into the result array..\nFinally, return the result.\n\nTime complexity: O(N∗M∗logK), where N and M are the length of arr1 and arr2 respetively.\nSpace complexity will be `K` since our minHeap only ever holds K elements.",
      timeStamp: '2023-05-31T04:57:26.230Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1JKxRB8EDJ',
    },
  ],
  [
    'Knapsack Problem',
    {
      categories: ['dp'],
      daysBeforeReminder: '23',
      name: 'Knapsack Problem',
      notes:
        'common mistakes:\n- forgetting to use `Math.max()` when updating `knapsack[row][capacity]` -- the `r- 1` slow could potentially be greater than `r - 1 + value`\n- not handling if/else in the main for loops\n\nInitialize an array that will cache calculated sums.\nPopulate it by looping from 0 to `inputArr.length + 1`.\nFor each iteration, push a new Array with a length of `inputCapacity + 1` and filled with 0s.\nThe reason we add the `+1` to everything is so we can use a "0th" row/column to represent what our knapsack could look like with 0 items/0 capacity.\n\nAfter the 2D array is initialized and the prior loop ends, we do a new loop from 1 to `inputArr.length + 1`.\nEach loop, destructure [value, weight] out of `inputArr[i - 1]`.\nThe reason we need the `i - 1` is to account for out 0th row/column that we added.\n\nAfter destructuring, do a nested for loop from 0 to capacity + 1, using an iterator variable named `cap`.\nEach loop, if the destructured `weight` is > `cap`, then fill `knapsack[i][cap]` with the value from `knapsack[i - 1][cap]`.\nThis is basically saying we cannot fit the current items weight into our given capacity, so go to the previous item (previous row) and take whatever max we figured out from there.\n\nElse, we assign `knacpsack[i][cap]` to the Math.max of the previously calculated row at our current capacity VS the previously calculated row at our current capacity MINUS our current row (ie input[col-1][cap - weight]) plus our destructured value.\n\nAt the end, return the very last item in the table and use a helper function to return the items that created it.\n\nFor the helper function, it takes in the generated knapsack table and the original items array.\nInitialize an empty array, an iterator that starts from the last row and a `cap` variable that starts at the last column.\n\nLoop while `i` is greater than 0.\nEach loop, if `knapsack[i][weight]` is equal to the value in the row above it, then decrement `i` to skip the current row.\nThis works because we know that if the current row[weight] included our item, then it would have a different value from the row above it.\n\nElse, we found and item that was included.\nunshift `i - 1` to account for the extra row/col we added and then decrement `weight` by `items[i - 1][1] to remove the original weight.\nAlso, decrement i to skip the remainder of the row.\nif `weight` === 0 at the end, break the while loop.\n---\nExplanation of main logic\nBecause we work "bottoms up", our base case is 0 items at 0 capacity, which is why we added our extra row + column.\nThen once we get to the next row with our first real item, we\'ll start filling in values pretty quickly, \nWe basically build up the table row by row, similar to recursion.',
      timeStamp: '2023-05-12T01:10:54.939Z',
      url: 'https://www.algoexpert.io/questions/knapsack-problem',
    },
  ],
  [
    'Koko eating bananas',
    {
      categories: [],
      daysBeforeReminder: '21',
      name: 'Koko eating bananas',
      notes:
        'Relies on a binary searching for the `k` amount of bananas the gorilla can eat per hour.\n\nDeclare `start = 1` (since we need to eat at least 1 banana per hour), `end = Math.max(...arr) + 1`.\nThe WORST case scenario for `k` will always be eating "n" bananas per hour, where "n" is the largest pile in the array.\nSo we assign `end` to that PLUS 1, just so our usual binary search calculation will work properly (start + (end - start)  2).\nAlso declare a `min` variable that will be used to return `k` at the end.\n\nDo a typical binary search while start < end, except instead of calculating `mid` we calculate `k` (# of bananas to eat per hour).\nThen, declare `hours = 0`.\nLoop over each pile in the input array, and add `Math.ceil(bananas / k)` to the hours total.\nBasically, we\'re just calculating how many hours it will take to finish a pile if we eat at a speed of `k` -- we always need to round up.\n\nThen, if `hours` is <= the input `h` limit, then reassign `min` via Math.min(min, k).\nAlso, update `end = k`.\nOtherwise if hours was greater than h, then reassign start = k + 1.\n\nAfter the while loop ends, just return `min`',
      timeStamp: '2023-05-21T21:08:22.713Z',
      url: 'https://leetcode.com/problems/koko-eating-bananas/',
    },
  ],
  [
    'Kth largest element in a stream',
    {
      categories: ['heaps'],
      daysBeforeReminder: '44',
      name: 'Kth largest element in a stream',
      notes:
        "Initialize an empty minHeap, and then loop over the input array.\nif the heap is empty OR the heap's length is less than input `k`, just add the input element.\nElse if the current element is greater than the top element in our heap, remove from the heap and then add the new number.\n\nAfter initializing everything, for the `add` method of our class we repeat the exact same logic:\nIf no heap length or heap is less than `k`, add the element.\nElse if the element is greater than `heap.peek()`, we remove and then add.\nMake sure to return heap.peek() at the end of the add method.",
      timeStamp: '2023-05-06T17:25:25.683Z',
      url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
    },
  ],
  [
    'Kth smallest element in a bst',
    {
      categories: ['dfs'],
      daysBeforeReminder: '33',
      name: 'Kth smallest element in a bst',
      notes:
        'Tricky solution that only works because we are given a binary search tree.\nWhen you perform an "in-order" traversel (node.left --> node --> node.right in terms of the order we process in) youre guaranteed to traverse the tree in ascending order.\nBasically, if you do an in order traversel than the 3rd smallest element would be the 3rd node you process.\nWith that in mind, we can do an in order traversal with a stack and stop when we have processed `k` nodes.\n\nCreate an EMPTY stack, then loop while `k` is > 0.\nImmediately do a nested loop while `root` is truthy -- we will use this to do DFS to the left.\nEach loop, push the current `root` into the stack, and then reassign `root` to `root.left`.\nThis basically tries to put every `left` node from the root into the stack.\n\nAfter the nested while loop, reassign `root` to whatever was popped from the stack.\nDecrement k.\nIf `k` is `0`, then return the current root.val.\nOtherwise, assign root to `root.right` for the next loop.',
      timeStamp: '2023-05-31T02:03:25.530Z',
      url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
    },
  ],
  [
    'Kth smallest element in a sorted matrix',
    {
      categories: ['heaps'],
      daysBeforeReminder: '39',
      name: 'Kth smallest element in a sorted matrix',
      notes:
        "TODO: learn how to solve this with binary search.\n\nCreate a minHeap.\nLoop over the matrix, and for each row insert a tuple in the format of [value, row, indexInRow].\nBasically, minheap.insert(row[0], row, 0).\n\nAfter populating the heap, loop while the heap has length AND k > 1.\nEach loop, remove from the minHeap.\nIncrement the removed `indexInRow`.\nIf the removed index is still less than the removed row's length then reinsert an updated tuple into the minHeap.\nDont forget to decrement `k` on each loop.\n\nAfter the loop ends, just return the first element of minHeap.peek()",
      timeStamp: '2023-05-05T06:14:12.006Z',
      url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
    },
  ],
  [
    'Laptop Rentals',
    {
      categories: ['heaps'],
      daysBeforeReminder: '41',
      name: 'Laptop Rentals',
      notes:
        'common mistakes:\n- performing a nested `while` loop instead of an `if` loop. Since we can only free up one laptop, a `while` loop doesnt make sense\n\nEasier Array solution: create one array to hold the start times, another to hold the end times. \nLoop over the input and push the start/end for each interval into the appropriate array. \nOnce that loop ends, sort both the arrays in ascending order.\n\nOnce both arrays are sorted, create a pointer index for the ends array and another for the starts array. \n\nPerform a while loop, `i < inputArr.length`. If `starts[i] >= ends[j]` increment j (this is metaphorically "freeing up" a laptop that was previously occupied). \nNo matter what, increment i on each loop.\n\nAfter the while loop ends, simply return i - j.\n\n---\nAlternative approach using a minheap:\n\nSort the input arr by start time in ascending order. \nCreate a new minheap where the comparison function relies on `a[1] - b[1]`, and make sure to pass in `inputArr[0]` during construction. \nMake sure the heap tracks a `.length` property\n\nThen, loop over the sorted input starting at index 1 (since we already passed in the first input to the minheap). \nEach loop, insert the current interval into the minheap. \nThen, if the current interval start time is greater or equal to the minHeap.peek end time, we can run `minHeap.remove()` since that means the laptop is no longer occupied.\n\nat the end, return the minheap.length. \nBasically, because we remove intervals as they free up, the # of elements in the heap represents the max # of laptops that are occupied',
      timeStamp: '2023-05-17T17:14:36.879Z',
      url: 'https://www.algoexpert.io/questions/laptop-rentals',
    },
  ],
  [
    'Largest rectangle in histogram',
    {
      categories: [],
      daysBeforeReminder: '29',
      name: 'Largest rectangle in histogram',
      notes:
        "DRAW THIS OUT TO IMPROVE UNDERSTANDING\n\ncreate an empty stack and initialize a `max = 0` variable that we'll return at the end.\n\nLoop over each element in the input array.\nWithin the loop, declare a `start` variable that is equal to our current index.\nDo a nested loop while the stack has length AND our current element is smaller than the height in the last slot of our stack `stack[-1][1]`.\n\nWithin the nested while loop, destructure the index and height by popping from our stack.\nThen, attempt to update `max` by comparing it against `poppedHeight * (currIndex - poppedIndex)`.\nThen, update `start` to our poppedIndex since we know the `start` can be extended further back than the original assignment of `currIndex`.\n\nAfter the while loop ends, just push a tuple of `[start, currHeight]`.\n\nAfter looping over each element in the input array, there may still be elements in our stack that we should calculate.\nLoop over each element in the entire stack from beginning to end.\nEach iteration, attempt to update max by comparing it against `currHeight * (input.length - currIndex`.\n\nAfter processing everything left in the stack, return `max`.\nRun time: O(n) since we loop over the input once, pop each element a max of 1 time, and then do one more loop over the stack.\nSpace: O(n) since we might need to push every element onto our stack.",
      timeStamp: '2023-05-25T18:33:19.946Z',
      url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
    },
  ],
  [
    'Last stone weight',
    {
      categories: [],
      daysBeforeReminder: '60',
      name: 'Last stone weight',
      notes:
        'Use a maxHeap and remove from the heap each iteration as long as the heap has at least 2 elements. \nMake sure to reinsert the smashed rocks as long as they were different',
      timeStamp: '2023-04-27T01:39:04.536Z',
      url: 'https://leetcode.com/problems/last-stone-weight/',
    },
  ],
  [
    'Letter case permutation',
    {
      categories: [],
      daysBeforeReminder: '40',
      name: 'Letter case permutation',
      notes:
        "CHECK THE GRAPHIC to understand the solution.\n\nDeclare an output array, and put the input string as the first element of the array.\n\nFor loop over the input string -- we'll use this to ensure we handle permutations at each index. \nIn each loop, use isNaN on input[i] and `continue` (skip current iteration) if isNaN returns false so that we dont try to lowercase a number.\n\nWithin the loop, declare a `len = output.length` variable. \nThen, do a for loop starting from `0` while `j < len`. \nWhat we are doing here is creating new permutations based on existing permutations. \n\nIn the nested for loop, use `.split('')` on `output[j]` to copy the existing permutation as an array (because strings are immutable in JS). \nThen, just test if the splitStr[i] is lowercase -- if it is, reassign copy[i] to uppercase, else reassign to lowercase. \n`.join('')` the array and push the permutation back into the output array.",
      timeStamp: '2023-05-31T05:16:01.241Z',
      url: 'https://leetcode.com/problems/letter-case-permutation/',
    },
  ],
  [
    'Letter combinations of a phone number',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Letter combinations of a phone number',
      notes:
        "Create a map/object where the keys are digits 2-9, and the values are arrays OR strings that contain the characters the digit maps to.\n\nwithin the main function, if the input has no length then just return an empty array.\nPast that, declare `output` and `arr` variables that are both empty arrays.\n\nDeclare a nested `backtrack` function that accepts a `currIndex` and `curr` argument.\nThe base case for `backtrack` will be if `curr.length === input.length`, which would indicate weve created a full permutation.\nWhen this case is hit, push `curr.join('')` into the output array and then return to avoid any further execution.\n\nPast that base case, perform a forEach on `digitsMap[input[currIndex]]`.\nEach iteration, push the current character from the map into the `curr` array.\nThen, recursively invoke backtrack and pass in `currIndex + 1, curr`.\nLastly, `pop` from `curr` to remove the added character from our array.\n\nback in the main function, just invoke `backtrack` and pass in `0, arr` to start backtracking before we return the `output`.",
      timeStamp: '2023-05-23T23:36:27.507Z',
      url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/',
    },
  ],
  [
    'Like Button in React',
    {
      categories: [],
      daysBeforeReminder: '26',
      name: 'Like Button in React',
      notes:
        'Declare 3 states via useState: `liked = false`, `loading = false`, and `error = \'\'`.\n\nDeclare an async function `handleClick`.\nImmediately setLoading to `true` and setError to `\'\'`.\nUse a `try/finally` block (instead of try/catch) to fetch the url with a config object that uses \'POST\' for the method, has a `headers` key holding an object that contains `"Content-Type": "application/json"`.\nThe config object also has a body that contains a stringified object with an action key that contains the like/unlike value based on the current `liked` state.\n\nAfter awaiting the fetch, if `response.ok` is falsey, then await `response.json()` and then `setError(json.message)`.\nOtherwise, invoke `setLiked(prev => !prev)`.\n\nIn the finally block, setLoading to `false`.\n\nInside of the actual JSX, give the button a className if `liked` is truthy so that you can add whatever liked styles are necessary.\nMake sure the button is `disabled` if `loading`, and it has type="button".\nAlso assign the onClick handler to it.\nFor the children, conditionally render the icon based on whether loading is truthy -- loading ? Spinner : Heart.\n\nBelow the button, render a div element that renders the `error` -- since we default error to an empty string, it wont actually show up in the UI unless it has a message',
      timeStamp: '2023-06-09T02:19:59.469Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/like-button',
    },
  ],
  [
    'Linked list cycle ii',
    {
      categories: [],
      daysBeforeReminder: '47',
      name: 'Linked list cycle ii',
      notes:
        'optimization:\nOnce the two nodes have met, reset `slow` to head.\nThen just loop while (slow !== fast), and then return `slow` once they meet again. No need to count the length of the cycle :)\n\ncommon mistakes:\n- not returning `null` if there is no cycle\n\nCreate fast + slow pointer. \nLoop while `fast && fast.next` and break when fast and slow meet. \nThis lets us find a node in the cycle.\nIF !fast OR !fast.next then return `null` since there is no cycle.\n\nCreate a cycleLength variable = 1.\nIncrement `fast` to `fast.next`.\nLoop while (slow !== fast) and increment cycleLength each time.\n\nFinally, point slow and fast back to `head`. \nIterate `fast`  by the length of the cycle. \n\nThen iterate both pointers 1 step at a time until they meet. \nReturn `slow`',
      timeStamp: '2023-05-25T00:59:58.053Z',
      url: 'https://leetcode.com/problems/linked-list-cycle-ii/',
    },
  ],
  [
    'LinkedList Cycle ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '80',
      name: 'LinkedList Cycle ',
      notes:
        'create two pointers starting from `head`. loop while and `fast && fast.next`. \nif values ever match, return true.\nIf loop ends, return false.',
      timeStamp: '2023-04-02T03:00:09.887Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D',
    },
  ],
  [
    'List Format',
    {
      categories: [],
      daysBeforeReminder: '17',
      name: 'List Format',
      notes:
        "common mistakes:\n- forgetting to ensure `options.length` is in bounds\n- forgetting to filter out falsey values from the items array `.filter(Boolean)`\n\nEnsure `options` has a default value of `{}` so it doesnt throw errors when accessed.\n\nIn the function body, if `items` is falsey or has no length then return an empty string.\nif items has a length of one, just return the element at the first index.\n\nReassign items to `items.filter(Boolean)` in order to filter out any falsey strings.\nThen, if `options.sorted` is true, invoke `items.sort()` -- the default behavior of `sort` is to sort alphabetically, so you dont need to pass a callback.\n\nThen, if `options.unique` is true, reassign items to `Array.from(new Set(items) )`.\n\nThe last condition if based on `options.length`.\nIf it is truthy (so its not undefined or 0) and `options.length < items.length), then we need to slice off some strings.\nInside the `if` block, declare `firstSection = items.slice(0, options.length).join(', ')`.\nThen declare `count = items.length - options.length`.\n\nDeclare `secondSection = `${count} other${count > 1 ? 's' : ''}`.\nLastly, return `${firstSection} and ${secondSection}`\n\nBack in the main function body, we still need to handle the case where options.length is falsey.\nDeclare `firstSection = items.slice(0, items.length - 1).join(', ')`.\nThen declare `secondSection = items[items.length - 1]`.\nReturn `${firstSection} and ${secondSection}`",
      timeStamp: '2023-06-04T20:00:24.369Z',
      url: 'https://www.greatfrontend.com/questions/javascript/list-format',
    },
  ],
  [
    'Longest Substring with maximum K Distinct Characters ',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '64',
      name: 'Longest Substring with maximum K Distinct Characters ',
      notes:
        'Create a Map to hold the frequency of each character.\nPerform a sliding window over the input string.\nTo shrink the window, loop while the Map.size is greater than the input `k`.\nWithin that loop, decrement the freq of the `start` character.\nIf the freq is === 0 after decrementing, deleting the character from the map.\nafter the while loop, reassign `longest` based on Math.max',
      timeStamp: '2023-04-29T05:32:46.762Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80',
    },
  ],
  [
    'Longest consecutive sequence',
    {
      categories: [],
      daysBeforeReminder: '37',
      name: 'Longest consecutive sequence',
      notes:
        "Brute force solution: sort the array (O nlogn) and then just loop over it with a sliding window to find the longest sequence.\n\nOptimal approach:\ncreate a new Set from the input array -- `new Set(input)`.\nAlso declare a `max` variable that will track our longest length.\n\nLoop over each number within the input array.\nIf the set does NOT have `curr - 1` within it, then we'll treat this number as the start of a potential sequence.\nWe explicitly avoid checking numbers that DO have the previous number in the set (curr - 1) because such numbers cannot be the BEGINNING of a sequence, and so counting them would give us incorrect lengths and would also create duplicated work.\n\nWithin the `if` block, declare a `curr` varialbe that equals our current number and declare a `streak = 1` variable that will hold the length of the current sequence.\n\nDo a nested loop while our Set has `curr + 1` within it.\nWithin the while loop, just increment curr + streak each iteration.\nAfter the while loop ends, reassign `max` via Math.max(max, streak).",
      timeStamp: '2023-06-08T03:28:38.398Z',
      url: 'https://leetcode.com/problems/longest-consecutive-sequence/',
    },
  ],
  [
    'Longest palindromic substring',
    {
      categories: ['dp'],
      daysBeforeReminder: '38',
      name: 'Longest palindromic substring',
      notes:
        "Common mistake:\n- only comparing l === r but not making sure at least one index is in bounds\n\nBrute force solution would involve checking every possible substring to see if its a palindrome, but we can do better by only checking palindromes and exiting early when possible.\n\nCreate an empty string and save it to a `str` variable that we'll return at the end.\nLoop over the entire input string.\n\nWithin our main `for` loop, we need to check for odd length palindromes AND even length palindromes.\nEach iteration, start by declaring a `left` and `right` that are both initialized to `i`.\n\nPerform a nested while loop as long as `left` and `right` are in bounds AND they are matching characters.\nWithin the while loop, if `right - left + 1` is greater than `str` length, then update `str` using string.slice.\nThen, move both the left and right pointer outwards by 1 index.\n\nThe previous loop handles odd-length palindromes, so now repeat the logic for even length palindromes.\nAll logic is the same except `left` will be initialized to `i` and `right` will be initialized to `i + 1`.",
      timeStamp: '2023-06-02T20:52:55.050Z',
      url: 'https://leetcode.com/problems/longest-palindromic-substring/',
    },
  ],
  [
    'Longest repeating character replacement',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '42',
      name: 'Longest repeating character replacement',
      notes:
        "Use for loop + sliding window + frequency Map. \n\nTrack max repeating letter COUNT (not letter) in a variable, recalculate via Math.max in each loop. \n\nThen, IF the current window is bigger than maxRepeatingCharCount + k, slide the window. \n\nWe dont need to bother reassigning `maxRepeatingCharCount` within the `while` loop -- maxRepeatingChar will stay at its current value unless some future letter increases the variable during the Math.max step.\nBasically, if the string is 'aaabbbb' we dont need to worry about shrinking maxRepeatingChar when it is 3 (the first 3 as) because it will automatically be recalculated to `4` when we process all of the b's.\n\nAt end of each for loop, Math.max `maxLengthSeen`",
      timeStamp: '2023-06-09T23:52:32.113Z',
      url: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    },
  ],
  [
    'Longest substring without repeating characters',
    {
      categories: [],
      daysBeforeReminder: '63',
      name: 'Longest substring without repeating characters',
      notes:
        'use a Set within a typical sliding window start/end loop. \nEach loop, start by removing elements from the Set while the current element is present in it. \nThen, add the current element after the while loop. \nThen use math.max to determine the longest length',
      timeStamp: '2023-05-09T22:46:47.118Z',
      url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    },
  ],
  [
    'Lowest common ancestor of a binary search tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '36',
      name: 'Lowest common ancestor of a binary search tree',
      notes:
        'common mistakes:\n- treating any of the inputs as integers rather than nodes\n- using `>=` or `<=` when comparing values\n\nImportant to understand that the nodes `p` and `q` are GUARANTEED to exist within the tree.\n\ndeclare a `curr` variable initialized to the `root` you are given.\nLoop while `curr` is truthy.\nEach loop, check if the `p.val` and `q.val` are GREATER than the `curr.val` -- if so, then we need to traverse to the right in order to find the lowest common ancestor.\nElse if the p.val and q.val are LOWER than the `curr.val` we need to traverse left.\n\nElse we can return `curr` since the nodes are not BOTH in the same direction, which means our current node MUST be the LCA.',
      timeStamp: '2023-05-23T00:41:49.827Z',
      url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    },
  ],
  [
    'Lru cache',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Lru cache',
      notes:
        'common mistakes:\n- forgetting to `return` early in the `put` method to avoid creating new/additional nodes\n\nRelies on a combination of a Map and a linked list. The Linked List is used so that the "head" (most recently used node) and the "tail" (least recently used node) give us easy information about which keys were most recently used.\nThe map provides O(1) lookup for the actual keys and their values.\n---\nStart by creating a `Node` class that accepts a `key` and `value` in the constructor.\nAssign `this.key = key; this.value = value; this.prev = null; this.next = null`.\nThis creates a doubly-linked node.\n\nFor the LRUCache class, the constructor just accepts `capacity`.\nAssign `this.cache = new Map()`, this.capacity is obv.\nWe also need to create the head and tail of the linked list, so still in the constructor assign `this.leastRecent = new Node(null, null)`.\nDo the same for `this.mostRecent`.\nTo finish the constructor, we need to make the head and tail point to each other.\nThis.leastRecent.next = this.mostRecent.\nThis.mostRecent.prev = this.leastRecent.\n\nCreate a `remove` method on the LRUCache class which accepts a `node` argument.\nThe purpose of this helper will just be removing a node from its current place in the linked list.\nSo it needs to assign `node.prev.next = node.next` that way the previous node points to the next node in the list.\nAlso assign `node.next.prev = node.prev`.\n\nBack in the LRUCache body, add another helper `insert` which also accepts a `node` argument.\nThis method will be used to insert the `node` as the most recently used in the linked list.\nGrab the current most recently used node via `this.mostRecent.prev` and save it to a `mru` variable.\nThen assign `mru.next = node` as well as `node.prev = mru`.\nThen assign `node.next = this.mostRecent` and `this.mostRecent.prev = node`.\nThis effectively inserts the `node` argument in between this.mostRecent and the mru node.\n\nWith the helpers handled, we can work on the main class methods.\nFor the `get` method on the class, check if `this.cache.has(key)`.\nIf truthy, then grab the node via `this.cache.get(key)` and save it to a `node` constant.\nBefore we can return `node.value`, we need to handle updating the linked list so that this node is properly marked as the most recent.\nFirst invoke `this.remove(node)` to remove the node from the linked list.\nThen invoke `this.insert(node)` to reinsert the node as the most recent in the linked list.\nFinally return `node.value`.\nIf the cache DIDNT have the key, then just return `-1`.\n\nFor the `put` method on the class, first check if the key already exists via `this.cache.has(key)`.\nIf true, then we want to update the existing value for that key.\nInside that `if` block, grab the matching node via `this.cache.get(key)` and save it to a `node` constant.\nThen, invoke `this.remove(node)`.\nUpdate the value of the node via `node.value = value` and then reinsert the node as most recent via `this.insert(node)`.\nFinally, `return` early so that we dont execute any code outside the if block.\n\nIf we didnt hit that `if` block, then we know the key we have is new so we make a `node` via `new Node()`.\nThen we set the node into the cache via `this.cache.set(key, node)` and insert the node into the list via `this.insert(node)`.\n\nLastly, since we\'re adding a brand new node we need to check on the capacity.\nif `this.cache.size > this.capacity`, then grab the least recent node via `this.leastRecent.next` and save it to a `lru` variable.\nInvoke `this.remove(lru)` to remove it from the list and then also delete it from the cache via `this.cache.delete(lru.key)`.\nThe ability to easily delete from the cache is the main reason we need to store the `key` directly on each node :)',
      timeStamp: '2023-06-10T00:03:39.519Z',
      url: 'https://leetcode.com/problems/lru-cache/',
    },
  ],
  [
    'Maximum CPU Load',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '39',
      name: 'Maximum CPU Load',
      notes:
        "common mistake:\n- not sorting inputArr based on start time\n\nFastest space time approach relies on a MinHeap:\n\nSort the input on start time. \ndeclare a maxLoad and currentLoad variable = 0. Create a new MinHeap.\n\nFor loop over the entire input array. \nWithin that, do a nested while loop. \nWhile the minHeap length > 0 AND the current array element start time is greater or equal to the minHeap end time, pop the minHeap element and subtract the cpuLoad from `currentLoad`. \nOutside that while loop, push the current array element into the minHeap and increment currentLoad by the element's cpuLoad.\nFinally, reassign maxLoad based on math.max",
      timeStamp: '2023-05-17T17:22:15.198Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93',
    },
  ],
  [
    'Maximum Distinct Elements ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '41',
      name: 'Maximum Distinct Elements ',
      notes:
        'common mistake: \n- using a maxHeap instead of a minHeap :)\n- checking `if k` instead of `if k > 0` during the final if check after the heap is empty -- this is probably a bug specific to educative, since both statements should be the same.\n\nGoal is to output the # of distinct elements after deleting stuff.\n\nStart by setting the character frequencies in a Map by looping over the input. \nThen, create a minHeap that will be used to hold the non-distinct numbers in a `[freq, key]` tuple.\n\nCreate a `distinct` variable and set it to 0.\nLoop over the Map and if the frequency for a number is 1, increment `distinct`.\nElse, push the `[freq, int]` tuple into the minHeap.\n\nLoop while the minHeap has length and the input `k` elements to remove is > 0.\nEach loop, remove the top element from the heap and then decrement `k` by the frequency - 1.\nWe dont subtract the full frequency because an element is distinct if it has a count of 1, not a count of 0 (meaning we need to leave 1 element of it).\nif `k` is >= 0 after subtracting the frequency - 1, increment `distinct`.\n\nAfter the while loop ends, run another `if` block since we might have elements to remove still.\nSince each element is distinct at this point, just decrement `distinct` by `k` since that is the number of elements to remove still.\n\nFinally, return `distinct`',
      timeStamp: '2023-05-16T20:01:30.813Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY',
    },
  ],
  [
    'Maximum frequency stack',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Maximum frequency stack',
      notes:
        'Problem relies on a Map full of arrays, where each array holds numbers with equal frequencies so we can quickly grab the most recent value within a given frequency.\n\nDeclare `this.counts = new Map(), this.groupings = new Map(), this.maxFreq = 0` within the constructor.\n\nFor the `push` method, declare `count = (this.freq.get(val) || 0) + 1`.\nThen invoke `this.freq.set(val, count)` to update the frequency in the counts Map.\nThen if `count > this.maxFreq` update maxFreq to the count, so we can track the max frequency in our current "Stack".\n\nNext, we need to update the groupings the maxFreq.\nFirst check if `this.groupings.has(count)` and if not, assign it to an empty array.\nThen add the current value to that array via `this.groupings.get(count).push(val)`.\nThis ensures that out of the all the numbers at a given frequency (grouping), we can always grab the most recent element with that frequency.\n\nFor the `pop` method, grab the grouping via `this.groupings.get(this.maxFreq)` and save it to a `group` constant.\nThen, grab the most recent element in the grouping via `group.pop()` and save it to a `num` constant.\nNext, update the frequency in the `this.counts` Map via `this.counts.set(num, this.maxFreq - 1)`.\nNext,  if the current grouping is now empty after removing the current number, we need to decrement the current maxFreq in our stack:\n`if (group.length === 0) this.maxFreq -= 1`.\nFinally, we can return the actual number.\n\nTime Complexity: O(1) since we\'re just pushing/popping/adding to a Map and then updating values.\nSpace Complexity: O(n) because we have to hold additional space for each number we add.',
      timeStamp: '2023-06-04T18:31:03.186Z',
      url: 'https://leetcode.com/problems/maximum-frequency-stack/description/',
    },
  ],
  [
    'Maximum subarray',
    {
      categories: [],
      daysBeforeReminder: '17',
      name: 'Maximum subarray',
      notes:
        'Conceptually similar to a sliding window.\n\nDeclare `max` AND `currSum` variables that are equal to the first element in the `input` array.\n\nStarting from the 2nd element, loop over the entire array.\nEach iteration, if `currSum` has become negative then simply reset it to `0`.\nThis is conceptually "shrinking the sliding window" so that it only includes the current element (since including multiple negative numbers would not positively contribute to our max sum).\n\nPast that if check, add the current element to `currSum` and then update `max` based on `Math.max`.\n\nAfter the for loop ends, just return `max`',
      timeStamp: '2023-05-31T01:43:11.754Z',
      url: 'https://leetcode.com/problems/maximum-subarray/',
    },
  ],
  [
    'Median of two sorted arrays',
    {
      categories: [],
      daysBeforeReminder: '5',
      name: 'Median of two sorted arrays',
      notes:
        "common mistakes:\n- calculating `mid1` via `(a + b) / 2` instead of `(start + end) / 2`\n\nhttps://www.youtube.com/watch?v=LPFhl65R7ww\nruntime: O(log (min(n, m)) where n and m are the 2 input arrays\n\nOne way to solve the problem would be to merge the arrays and then find the middle elements, but that would require extra space.\nInstead, we can simply partition the individual arrays into a left and right half of each array, and look at the rightmost element IN the left halves of each array.\nBasically, we know that if the rightmost element in each of the left halves is LESS THAN OR EQUAL TO the leftmost element in the right half, then we have effectively partitioned the array where the numbers in the left halves are all smaller than the numbers in the right halves, aka we have found the median :)\n\nIf the total length of the arrays merged together would be odd, then the median will be the LARGER element of the two left halves, aka Math.max(arr1LeftHalf.at(-1), arr2LeftHalf.at(-1). Otherwise, itll be that same Math.max logic + Math.min(arr1RightHalf[0], arr2RightHalf[0]) / 2 since there is no individual median number.\n\nThe tricky thing is that the arrays can be uneven sizes, so creating the partition in a way that mirrors a merged array takes some extra work.\n`arr1` might represent a left half of 2 elements, but array2 might represent a left half of 5 elements, so finding those exact points involves doing a binary search on the smaller of the two input arrays.\n---\nDeclare `a = nums1.length, b = nums2.length`.\n\nThen if `a > b` return `mainFunc(nums2,nums1)` so that we swap the order of the arrays.\nThe logic for our function relies on the first array being the shorter of the two, so this step is mandatory.\n\nDeclare `start = 0, end = a`.\nUnlike a normal binary search, loop while `l <= r`.\nDeclare `mid1 = Math.floor((l + r) / 2)`. \nThis represents the partition between the left and right half of the first input array.\nNext declare `mid2 = Math.floor((a + b + 1) / 2 - mid1)`\nwe add the `+1` because it makes the math for this problem work effectively for both odd and even length arrays.\nFor `mid2`, we have to subtract `mid1` in order to SHRINK the size of the left partion of `arr2` as we increase the size of the partion of `arr1`.\nBasically, as `mid1` increases (meaning the left partition of arr1 grows in size), we need mid2 to decrease (to shrink the left partition of arr2).\nThis ensures that we effectively shrink/grow the partition of each array until we finally have the proper partition sizes to find the median.\n\nDeclare `aLeft = nums1[mid - 1] ?? -Infinity`.\nThis number represents the last number of the left partition, which could be out of bounds which is why we fallback to -Infinity.\nThen declare `aRight = nums1[mid] ?? Infinity`.\nThis is the first element of the right partition, which again, could be out of bounds so we default it to POSITIVE Infinity.\n\nRepeat the same logic for the 2nd array:\n`bLeft = nums2[mid2 - 1] ?? -Infinity, bRight = nums2[mid2] ?? Infinity`\n\nif `aLeft <= bRight && bLeft <= aRight` then the rightmost element of each left partition is less than the leftmost element element of the right partition in the OPPOSITE array.\nIts a bit confusing, but this is how we can tell that we've effectively partitioned each array in a way that accurately represents the two arrays if they were merged into one.\nInside this if block, if `(a + b) % 2 === 0` then the total merged array length is even, and so it doesnt have a precise median.\nIn this case, we return `(Math.max(aLeft, bLeft)) + Math.min(aRight, bRight)) / 2` in order to determine the median.\nOtherwise if the `% 2` check was NOT an even number, then we just have a single median which we can get via `Math.max(aLeft, bLeft)`.\n\nif the (aLeft <= bRight) check wasnt true, then we check if `aLeft > bRight`.\nIf true, then we partitioned too far into the right hand side of the `a` array so we set `r = mid1 - 1` to move the window left.\n\nLastly, if neither of the 2 previous if blocks was true, we assign `l = mid1 + 1` to move the window \n right.\n\nThe problem guarantees a solution, but just in case, outside of the main `while` loop, we return `-1`",
      timeStamp: '2023-06-08T03:35:25.251Z',
      url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
    },
  ],
  [
    'Memoize',
    {
      categories: [],
      daysBeforeReminder: '38',
      name: 'Memoize',
      notes:
        'Declare a new `cache` that is initialized to an empty `Map`.\nNot only does the Map have several helpful methods for a cache, but it allows keys that arent strings (since our `resolver` may or may not return a string).\n\nNext, declare a helper `getKey` function that accepts an array as an argument.\nThe helper returns a ternary: if resolver is truthy, return `resolver(...args)` otherwise return JSON.stringify(args).\n\nAfter declaring the helper, declare our return `memod` function that accepts any number of arguments.\nthe `memod` function invokes our `getKey` helper and passes in the `args` without spreading them.\nThen, if `cache.has(key)` is falsey, invoke the callback and set the returned value into the cache/map.\nFinally, return `cache.get(key)`.\n\nFor the `clear` function, we can just invoke cache.clear since its built in to the native Map in JS.\nDelete is similar -- generate the key and then invoke `cache.delete(key)`.\nHas is identical to delete, but invoke `cache.has` instead',
      timeStamp: '2023-05-25T01:02:48.335Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/memoize',
    },
  ],
  [
    'Merge Sort',
    {
      categories: [],
      daysBeforeReminder: '15',
      name: 'Merge Sort',
      notes:
        'common mistakes:\n- not returning the input array when `arr.length <= 1` -- this will cause a stackoverflow if you forget to include it!\n- accidentally looping over `left` and `right` instead of looping over `sortedLeft` and `sortedRight`\n\nin the main recursive function, if length <= 1 then just return the input.\n\nDeclare `mid = Math.floor(input.length / 2)`.\nThen create 2 arrays to hold the halves -- `left = arr.slice(0, mid)` and `right = arr.slice(mid)`.\nIdeally wed just use pointers instead of making additional arrays, but I havent figured out how to make that work :/\n\n\ndeclare a `sortedLeft` constant that is the result of recursively invoking the mergesort with the `left` argument.\nDo the same for `sortedRight`.\n\nFinally `return merge(sortedLeft, sortedRight)` to invoke our helper method.\n\nFor the `merge` helper, it accepts a `left` and `right` argument, each of which is an array.\nDeclare a `merged` array based on the sum of left.length + right.length;\n\nDeclare `l = 0, r = 0, i = 0`.\nLoop while l < left.length and r < r.length.\nEach iteration, if `left[l]` is less than `right[r]` then assign `merged[i] = left[l]` and increment `l`.\nOtherwise, do the same logic for `right[r]`.\nThen make sure to increment `i` regardless.\n\nAfter the while loop ends, one array might be smaller than the other.\nSo loop while `l < left.length` and use the same logic as the previous while loop without the if/else logic.\nAdd another while loop with the same logic for right[r].\nSince only one of the arrays will be longer than the other, this will ensure we capture all of the remaining elements without errors.\n\nFinally, return `merged`.',
      timeStamp: '2023-06-04T19:27:21.103Z',
      url: 'https://www.greatfrontend.com/questions/javascript/merge-sort',
    },
  ],
  [
    'Merge intervals',
    {
      categories: ['mergeIntervals'],
      daysBeforeReminder: '49',
      name: 'Merge intervals',
      notes:
        'Sort the array based on `interval.start`. Create a new start + end variables and initialize them based on `inputArr[0]`. \n\nLoop, and overwrite `end` IF intervals[i].start is lesser or equal to end. Else, push the existing start+end and reset them to intervals[i].\n\nAfter the loop ends, youll still have a `start` and `end` that needs to be pushed, so dont forget that.',
      timeStamp: '2023-06-06T04:06:32.265Z',
      url: 'https://leetcode.com/problems/merge-intervals/',
    },
  ],
  [
    'Merge k sorted lists',
    {
      categories: [],
      daysBeforeReminder: '42',
      name: 'Merge k sorted lists',
      notes:
        'Create a minHeap. \nLoop over each list in the input array and insert the head of the linked list into the minHeap.\n\ndeclare `head = curr = new ListNode(0)`\nThen, loop while the minHeap has length.\nEach loop, remove a node and store it in a variable.\npoint curr.next to the removed node\n\nIf the `removed` has a truthy `next` value, push that next value back into the minHeap. \nThen, reassign `curr` to curr.next.\n\nAfter the loop, return the `head.next` since `head` is just a dummy node',
      timeStamp: '2023-05-02T07:13:44.541Z',
      url: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    },
  ],
  [
    'Merge triplets to form target triplet',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'Merge triplets to form target triplet',
      notes:
        'The solution relies on a key realization: any triplet where a single value is greater than the target value can be discarded.\nFrom there, if we can find a match for each individual index in the target triplet then we MUST have some combination of "maxing" we can do to reach a solution.\n\nCreate a `solved` Set that will hold the indices where we find a match.\nLoop over each triplet of the `triplets` array.\nIf `triplet[0] > target[0]` (same logic for index 1 and 2 also) then we need to `continue` because we cannot possibly use that triplet.\n\nOtherwise, if `triplet[0] === target[0]` then add index `0` into the `solved` Set.\nRepeat that logic for indices 2 and 3.\n\nAfter the for loop ends, we can return `solved.size === 3` because having 3 indices in the Set means we can make a match.',
      timeStamp: '2023-05-31T00:47:33.898Z',
      url: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/description/',
    },
  ],
  [
    'Merge two sorted lists',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '42',
      name: 'Merge two sorted lists',
      notes:
        'create a dummy node via `new ListNode()`.\nCreate a `tail` pointer that points to the dummy node.\n\nLoop while list1 AND list2 are truthy.\neach loop, reassign tail.next to whichever list node has the lower val.\nThen, move the tail to tail.next.\nAfter the while loop ends, if `list1` is truthy then assign tail.next to list1 to make sure we capture all remaining nodes.\nDo the same logic for `list2`.\nLastly, return `dummy.next` since it will point to the head of our linked list',
      timeStamp: '2023-05-05T05:34:55.000Z',
      url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    },
  ],
  [
    'Min Heap Construction',
    {
      categories: ['heaps'],
      daysBeforeReminder: '55',
      name: 'Min Heap Construction',
      notes:
        "common mistakes:\n- doing `i = 0; i < array.length` during buildHeap when you actually need to start from the end of the array and loop to 0 to ensure the top of the heap remains sorted\n- forgetting how to calculate a parent's index, via `Math.floor((childIndex - 1) / 2)",
      timeStamp: '2023-04-23T06:29:59.628Z',
      url: 'https://www.algoexpert.io/questions/min-heap-construction',
    },
  ],
  [
    'Min cost climbing stairs',
    {
      categories: ['dp'],
      daysBeforeReminder: '31',
      name: 'Min cost climbing stairs',
      notes:
        'Question is unclear: when it asks us to "reach the top floor" it means reach the array length (NOT the last element in the array).\nStarting from index 0 or 1, you have to add either cost[i + 1] if you take 1 step or add cost[i + 2] if you take 2 steps.\n\nWith that in mind, the solution is bottoms up 1D DP.\n\nLoop BACKWARDS over the array starting from `input.length - 2` since we dont need to modify the last element in the array.\nEach iteration, simply increment `cost[i]` by the `Math.min(cost[i + 1], (cost[i + 2] || 0)\n\nAt the end, return the MINIMUM of cost[0] vs cost[1] since we MUST start from one of those two indices.',
      timeStamp: '2023-05-27T19:43:19.190Z',
      url: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
    },
  ],
  [
    'Min stack',
    {
      categories: [],
      daysBeforeReminder: '37',
      name: 'Min stack',
      notes:
        "common mistakes:\n- using `pop()` for anything OTHER than the `pop` method -- use `.at(-1)\n- using Math.min(val, this.stack.at(-1).val) -- you need to compare val against (-1).min !\n\ncreate a MinStack class and initialize `this.stack = []` during the constructor.\n\nThe trick to this problem is that rather than simply inserting values, we'll insert nodes and each node will reference both the inserted value as well as the minimum at the point the node was inserted at.\n\nTo do this, the `push` method of the class starts by declaring a `min` variable.\nif `!this.stack.length` then min is equal to the `val` passed into `push`.\nOtherwise, min is equal to the `min` property on the last node in the stack.\nOnce the min is established, push a new node into the stack in the shape of `{val, min}`.\n\nPop is simple -- just pop and return `popped.val`.\n\nTop and getMin are identical -- grab the last node in the stack and return the val or min property as needed",
      timeStamp: '2023-06-09T01:44:42.729Z',
      url: 'https://leetcode.com/problems/min-stack/',
    },
  ],
  [
    'Minimum Window Sort',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '31',
      name: 'Minimum Window Sort',
      notes:
        'common mistakes:\n- not using `>=` or `<=` during the beginning loops to narrow `l` and `r`\n- not looping while `i` <= `r` (ie accidentally starting loop from `0`)\n- not using `l - 1` > min,  `r + 1` < max during final while loops\n- not returning `r - l + 1`\n\ndo a typical two pointer while loop using left and right pointers. \nIn the while loop, increment left if arr[left + 1] is > arr[left]. \nImmediately check if left >= arr.length - 1 and return 0 if true since the array is already sorted.\n\nDecrement right using the same logic. \nThis is used to find the MINIMUM subarray that needs to be sorted, but we then need to check if it needs to be expanded. \n\nNext, create a min and max variable to track the min/max in our subarray. \nLoop from left up to and including right, and recalculate min/max at each step.\n\nAfter looping to establish the min/max in the subarray, do a while loop as long as left > 0 and arr[left - 1] GREATER THAN min and decrement left each time.\nDo basically the same thing for right (right < arr.length - 1), except incrementing right if `right + 1` is LESS THAN max.\n\nfinally, return right - left + 1 since thats the length of our subarray that needs to be sorted.',
      timeStamp: '2023-05-20T20:20:15.008Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6',
    },
  ],
  [
    'Minimum window substring',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '55',
      name: 'Minimum window substring',
      notes:
        'populate a map based on the pattern, then perform a typical sliding window.\n\nDuring sliding window using a for loop, mark a `charsMatched` variable anytime you decrement a count to 0 (never delete any of the characters, only adjust their counts). \n\nPerform a while loop within the main for loop, while (charsMatched === map.size). \nAttempt to reassign a `smallestStr` variable IF the variable is an empty string or the current window has a smaller length than the string stored in that variable. \nThen shorten the window and increment any necessary counts.\n\nReturn the `smallestStr` variable at the end.',
      timeStamp: '2023-05-31T23:36:18.774Z',
      url: 'https://leetcode.com/problems/minimum-window-substring/',
    },
  ],
  [
    'Move zeroes',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '34',
      name: 'Move zeroes',
      notes:
        'declare a `lastNonZeroSlot = 0`.\nThen, loop over each element in the input.\n\nIf the current element is NOT a `0`,then swap the current element with whatever is in `lastNonZeroSlot` using array destructuring.\nThen, increment `lastNonZeroSlot`.',
      timeStamp: '2023-05-21T16:51:39.826Z',
      url: 'https://leetcode.com/problems/move-zeroes/',
    },
  ],
  [
    'Node Depths',
    {
      categories: ['dfs'],
      daysBeforeReminder: '43',
      name: 'Node Depths',
      notes:
        'Can be solved using DFS + stack, or recurisvely with a 2 liner:\ndepth + recurse(left) + recurse(right)',
      timeStamp: '2023-05-19T17:42:22.983Z',
      url: 'https://www.algoexpert.io/questions/node-depths',
    },
  ],
  [
    'Number Of Binary Tree Topologies',
    {
      categories: ['subsets'],
      daysBeforeReminder: '34',
      name: 'Number Of Binary Tree Topologies',
      notes:
        "main function accepts `n` but also a `cache` that defaults to a value of `{0: 1}`.\nWe'll use the cache to avoid recalculating the different subtrees as we recurse.\n\nTo begin the function, check if our cache has a value for `n` and return it if present.\n\nDeclare a `numberOfTrees` variable = 0.\nLoop from 0 to n, and name the iterator `leftTreeSize`.\nWithin the loop, declare a `rightTreeSize` = n - 1 - leftTreeSize.\nThese 2 values dictate how we split our binary tree topology between left/right sides for any given value of n.\n\nDeclare numOfLeftTrees = recursiveFunction(leftTreeSize, cache).\nDo the same for numberOfRightTrees but use rightTreeSize.\nThen, multiply the return value of those two variables (left * right) and add it to the numberOfTrees.\nWe use multiplication to handle all possible variations of the topologies.\n\nFinally, store the numberOfTrees in our cache and then return it.",
      timeStamp: '2023-05-23T04:15:35.540Z',
      url: 'https://www.algoexpert.io/questions/number-of-binary-tree-topologies',
    },
  ],
  [
    'Number Of Ways To Make Change',
    {
      categories: ['dp'],
      daysBeforeReminder: '34',
      name: 'Number Of Ways To Make Change',
      notes:
        'initialize a `ways` array with n + 1 length, and then fill it with 0s.\nAssign a value of `1` to the first element in the ways array.\nThis value represents the 1 way we have of creating 0 change, which is to use 0 coins.\n\nLoop over every element in the `inputArr`.\nDeclare `coin = denoms[i]`.\n\nNested for loop from 1 to n + 1 using an iterator named `amount`.\nEach loop, if `coin` is less than OR equal to `amount`, then we increment `ways[amount]` by `ways[amount - coin]`.\n\nAt the end, return the last element in the `ways` array.',
      timeStamp: '2023-06-06T03:32:04.976Z',
      url: 'https://www.algoexpert.io/questions/number-of-ways-to-make-change',
    },
  ],
  [
    'Number of islands',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'Number of islands',
      notes:
        'Declare a `total = 0`;\n\ndeclare a nested `dfs` helper that accepts a `row` and `col` argument.\nWithin the `dfs`, if we are out of bounds OR the current coordinates point to water, aka `0`, then return early.\nOtherwise, modify the input grid by overwriting the current square and changing it to "water".\nThen, recurse in all 4 directions.\n\nAfter defining the helper, all we need to do is loop over each square in the input grid.\nAny time the current square is land, aka `1`, then we increment our `total` by 1 and invoke our helper to mark all neighboring squares as water so that we dont get duplicates.',
      timeStamp: '2023-05-25T18:15:29.705Z',
      url: 'https://leetcode.com/problems/number-of-islands/',
    },
  ],
  [
    'Pacific atlantic water flow',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Pacific atlantic water flow',
      notes:
        'save the rows and columns into constants since theyll be needed frequently.\nAlso declare `pacific` and `atlantic` Sets, which will hold the coordinates that can lead to the respective oceans.\nThe general idea is that well working INWARDS from the borders that touch the atlantic/pacific oceans, then return the coordinates which appear in both the Atlantic and Pacific Sets.\n\nDeclare a nested `dfs` helper that accepts `row`, `column`, `visited`, and `prevHeight` arguments.\nThe base case checks if we are out of bounds OR if weve already visited the current square OR if the current square value is LESS than the `prevHeight` and returns early if so.\n\nPast that, it adds the current coordinates into the visited set -- `visited.add(`${r},${c}`).\nThen it recurses in all 4 directions, making sure to pass the current squares value as the new `prevHeight`.\n\nOutside of the `dfs` helper, loop over each `column` in the input -- this loop will check the top and bottom rows that touch the pacific/atlantic oceans.\nIn the loop, invoke `dfs` and pass in a row of `0`, the current column, the `pacific` set, and the current square in the first row (matrix[0][column])\nStill in the loop, do the same general thing but for the BOTTOM row and make sure to pass in `atlantic`.\n\nPast that if loop, do the exact same thing in another if loop that iterates over the ROWS.\nSo invoke `dfs(row, 0, pacific, matrix[row][0])`,\nthen do the same for the right-hand column that borders the atlantic.\n\nNow that both Sets are populated with coordinates that can reach their respective ocean, do one final loop over every row/column in the input.\nEach iteration, if the pacific AND atlantic sets have our current coordinates (`${r},${c}`) then push the current row+column as an array into the output array',
      timeStamp: '2023-05-25T01:12:17.797Z',
      url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
    },
  ],
  [
    'Palindrome linked list',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '49',
      name: 'Palindrome linked list',
      notes:
        'use fast/slow pointers to find the middle pointer (slow = middle).\n\nCreate a helper function that reverses a linked list and returns the head of the newly reversed list (should be the `prev` value of the reverse function). \nPass in the middle node (slow), and store the returned node in a variable.\nCreate another variable to copy that returned head so that we can reverse it again at the end.\nReset `slow` back to the original head. \n\nWhile `slow && reversed`, check if `slow.val !== reversed.val`. \nIf they mismatch, return false, otherwise increment both nodes to the `next` property.\n\nAfter the while loop, unreverse the list and return `true`.\nThere is no need to reconnect anything',
      timeStamp: '2023-06-09T01:47:04.308Z',
      url: 'https://leetcode.com/problems/palindrome-linked-list/',
    },
  ],
  [
    'Palindrome partitioning',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Palindrome partitioning',
      notes:
        "common mistakes:\n- trying to use `arr.join()` instead of `arr.slice()`;\n- doing the nested for loop starting from `end = 0` instead of `end = i`\n\nuses backtracking.\n\nDefine an `isPalindrome` helper that accepts `string`, `start`, and `end` arguments.\nThis function simply loops over the string while `start < end` and returns false if the characters ever mismatch.\nIf the while loop ends then the function returns `true` since the string is a palindrome.\n\nIn the main function, declare an `output` and `currPartition` array.\n\ndeclare a nested `dfs` function that accepts an `index` argument which will indicate the current index in the input string.\n\nFor the base case of our recursive `dfs`, if `index` is greater or equal to the input string's length, SPREAD the current partition into a new array to clone it and then push it into the `output` array before returning (to avoid executing any further logic).\n\nPast that base case, perform a `for` loop starting from `index` up to the input string's length.\n\nWithin the for loop, IF `isPalindrome(inputStr, dfs index argument, currIndex in for loop)` is truthy then slice the input string from `index` up to `currIndex in for loop + 1`  and push the sliced string into `currPartition`.\nThen, recursively invoke dfs on `currIndex in for loop + 1`.\nlastly, `pop` from the `currPartition`.\n^^ all the above occurs within the truthy `if` block.\n\nAfter defining the `dfs` helper, simply invoke it and pass in `0` as the `index` argument.\nThen, return `output`",
      timeStamp: '2023-05-25T00:54:33.688Z',
      url: 'https://leetcode.com/problems/palindrome-partitioning/',
    },
  ],
  [
    'Partition equal subset sum',
    {
      categories: ['dp'],
      daysBeforeReminder: '38',
      name: 'Partition equal subset sum',
      notes:
        'Figure out the sum of all numbers in the input array.\nIf `sum % 2 !== 0` then we have an odd number and cannot create an equal partition using strictly integers, so return false.\nThen, divide `sum` by 2 since were actually trying to figure out if we can create HALF of the total sum, since we need 2 halves.\n\nCreate a new Set, and then add the number 0.\nThis represents the sum `0` that we know we can create by just not using any elements from our input.\n\nNext, loop over the entire input array.\neach loop, create a new Set.\nThen, do a nested forEach over the original Set and add each value to the new set.\nWithin the same forEach loop, also add `currNum + value` to the new Set.\nbasically, just add all existing values + the newly calculated ones into a new set.\nAfter the forEach, if the new set has our target `sum` then return true.\nOtherwise, reassign the original Set to our newly populated one so that we can go over it in the next loop.\n\nAt the end of the main function, return `set.has(sum)`.\n\nThis logic works because we know that if our total sum is divided by 2, then if we ever encounter half of that sum then some combination of the array creates half our target sum and some other combination creates the remaining half otherwise we broke the laws of physics. ',
      timeStamp: '2023-05-07T18:56:26.874Z',
      url: 'https://leetcode.com/problems/partition-equal-subset-sum/',
    },
  ],
  [
    'Partition labels',
    {
      categories: [],
      daysBeforeReminder: '9',
      name: 'Partition labels',
      notes:
        'To effectively partition the string, you need to know the last index of each character within a partition.\nSo create a `map` Map, and then loop over the input string.\nEach iteration, set the current character as the key and the current index as the value, so that we can look up the last index of each character when we do our next loop.\n\nBack in the function body, declare an output array, `size = 0`, and `end = 0`.\n`size` will track the size of the current partition, and `end` will track the last index of the partition.\n\nDo another loop over the input string.\nEach iteration, increment size (since the partition is growing) and update `end` based on `Math.max(end, map.get(currChar)`\nThen, if `i === end` we know that weve reached the end of a partition, so we can push the `size` into the output array and then reset `size` back to `0`0.\n\nAfter the loop ends, just return the output array',
      timeStamp: '2023-06-02T21:02:00.728Z',
      url: 'https://leetcode.com/problems/partition-labels/description/',
    },
  ],
  [
    'Path With Given Sequence ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '70',
      name: 'Path With Given Sequence ',
      notes:
        'recurse, but make sure you include a 3rd argument to track an index (default val = 0).\n\nif !root, return sequence.length === 0.\nif index >= sequence.length OR root.val !== sequence[index], return false.\nif its a leaf node AND index === sequence.length - 1, return true. Otherwise return func(left) || func(right).',
      timeStamp: '2023-05-11T01:22:52.854Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn',
    },
  ],
  [
    'Path sum',
    {
      categories: [],
      daysBeforeReminder: '67',
      name: 'Path sum',
      notes:
        'can be done iteratively or recursively\n\nrecursive solution:\n- if there is no root, return false\n- subtract root.val from sum\n- if sum === 0 AND there is no left/right node, return true since we found a leaf node where the sum added up to the initial target\n- return recursively, ie `return myFunc(leftNode, sum) || myFunc(rightNode, sum)`',
      timeStamp: '2023-05-09T22:35:30.460Z',
      url: 'https://leetcode.com/problems/path-sum/',
    },
  ],
  [
    'Permutation in string',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '57',
      name: 'Permutation in string',
      notes:
        "common mistakes:\n- checking `matched === string1.length` instead of `matched === Map.size` (since the length could be 3, but maybe Map.size was only 2 if the string was 'aba')\n\nBuild a map from pattern. \nLoop over input string and decrement the counts anytime map[char] === 0. \nEach iteration where the window === length of pattern, drop the char at the windowStat and increment. \nreturn `true` if the `matched === patternMap.size` <-- NOTE that you compare the charsMatched against the map size, NOT against the pattern.length!",
      timeStamp: '2023-05-31T01:00:11.406Z',
      url: 'https://leetcode.com/problems/permutation-in-string/',
    },
  ],
  [
    'Permutations',
    {
      categories: ['subsets'],
      daysBeforeReminder: '34',
      name: 'Permutations',
      notes:
        "General idea is to add `input[i]` into EACH position of the queued subArrays, allowing us to build up each loop.\nfor input [1,3,5] it is basically doing this:\n[] --> [1] --> [1,3], [3,1] --> insert 5 into each slot from there...\nLook at the graphic in the solution to understand more\n\ncreate an output array, and a permutations array. \npermutations starts with an empty array at index 0.\n\nfor loop over nums -- this loop will determine which num to insert into the permutation. \nEach loop, declare a `len` variable to store `permutations.length`.\n\nnested for loop starting from 0, where `(j < len)`, which will ensure that we dont try to shift\ntoo many elements per iteration of `i`. \nAll we do is shift() from permutations and save to a variable.\n\nAnother nested for loop (so we have 3 for loops total) starting from 0, where `k < shiftedPermutation.length + 1`.\nStart by copying the shifted permutation from the 2nd for loop -- can be done via array spread. \nThen, splice nums[i] into the permutation at the kth index. `splice(k, 0, nums[i]`.\n \nThis loop builds the next permutation by splicing `nums[i]` into the `k`th index of the permutation + 1. \nBasically, if the `perm` is [1], the `k` loop will create `[1,3]` and `[3, 1]`. \n\nIn the most nested loop, if the copied array length === nums.length, push it into the output array. \notherwise we're not done filling up the permutation, so push it into the pending permutations array.\n\n--- ALTERNATIVE recursive approach\ncreate a helper that accept an input array, an index, a currentPermutation, and an output array.\nif `index === input.length` then push the currentPermutation into the output array.\n\nOtherwise, loop from 0 to the currentPermutation length + 1.\ncreate a copy of the current permutation, then splice `i, 0, nums[index]`.\nThen recursively call the helper while passing the original input, incrementing the index, the new permutation, and the original output.\n\nIn the main function, declare an output array.\nCall the recursive helper while passing in the output, and then return the output array\n\nPermutations always have a time complexity of factorial N aka (N!).\nSince we also need to loop over the permutations themselves, this makes the runtime O(N * N!).\nThe same math applies to the space complexity.",
      timeStamp: '2023-05-06T18:52:12.094Z',
      url: 'https://leetcode.com/problems/permutations/',
    },
  ],
  [
    'Phone Input',
    {
      categories: [],
      daysBeforeReminder: '31',
      name: 'Phone Input',
      notes:
        "The input and button are pretty self explanatory, just ensure there is a max length of `14` on the input and it has `type=\"tel\"`.\n\nFor the input `onChange` handler save the e.target.value into a `text` variable.\nThen, replace all non-digit characters via `text.replace(/\\D/g, '')`.\nIf `text` has no length then set the value to an empty string and return from the change handler.\n\nElse, declare a `newStr` variable equal to `''`.\nImmediately set newStr equal to `(` + `text.slice(0, 3)` to handle the first 3 digits.\n\nIf text.length > 3, add a `) ` to newStr and then add `text.slice(3, 6)`.\nDont forget the empty space in the above bit!\n\nif text.length > 6, add a `-` to newStr and then add `text.slice(6,10).\n\nFinally update the value with newStr.",
      timeStamp: '2023-05-17T01:28:18.511Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/phone-input',
    },
  ],
  [
    'Populating next right pointers in each node',
    {
      categories: ['bfs'],
      daysBeforeReminder: '57',
      name: 'Populating next right pointers in each node',
      notes:
        'Basically, do a normal BFS, nothing special. \nWhile processing each node in the queue, mutate its `.next` pointer to store to a `prev` pointer that is scoped outside the while loop.\nDont forget to ensure the last node in each level points to null.',
      timeStamp: '2023-05-16T20:34:09.783Z',
      url: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
    },
  ],
  [
    'Product of array except self',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Product of array except self',
      notes:
        'common mistakes:\n- using `+=` at ANY point, instead of using `*=`.\n\nSince the problem disallows using division, an alternative approach would be creating 2 `prefix` and `postfix` arrays and then looping over the input to populate them.\nPrefix would require loop left to right over the input, and postfix would be looping right to left.\nBasically, the `prefixes` would represent the numbers to the LEFT of our current element, and the postfixes would represent the numbers to the right of the current element\nThen you would just do one last loop and multiple them against each other to get an output array.\n\nHOWEVER, we can optimize this by just using a single output array and some variables.\n\nDeclare a `prefix` variable that is initialized to `1`.\nLoop over the input from 0 to end, and assign `output[i]` equal to the prefix.\nThen, multiply prefix by the current number.\n\nDeclare a `postfix` variable that equals `1`.\nLoop BACKWARDS over the input from end to 0, and each loop MULTIPLY `output[i]` by postfix.\nThen multiply `postfix` by the current number.\n\nThis is effectively doing what we wanted to do with 2 arrays, but using a constant amount of space (since the prompt says the output array wont count against us in terms of space)\n\nat the end, return output.\nO(n) run time, O(1) space based on the prompt.',
      timeStamp: '2023-05-25T18:10:39.776Z',
      url: 'https://leetcode.com/problems/product-of-array-except-self/',
    },
  ],
  [
    'Progress Bar in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '55',
      name: 'Progress Bar in Vanilla JS',
      notes:
        'Create a `range` input in the HTML that you can use to easily adjust the progressbar value.\nEnsure it has a `min=0` and `max=0`.\n\nBefore building out the JS, update the css file so that the main div has `overflow:hidden` that way the interior progress bar doesnt poke outside its container.\nFor the nested progressbar, make a new class and ensure it takes up the full height of its container.\nAlso align the text to the center, and give it `overflow:hidden` so that the interior text does bleed out of the colored progress bar when dealing with #s that are very small such as 2%.\n\nWithin the JS file, write some JS to grab the initial `progress` div and the range input.\n\nThen, write some code to create a new div that will go inside of the primary div as a child.\nAdd a unique class name to it, set the `role` attribute to `progressbar`, and set the `aria-valuemin` to 0 and the `aria-valuemax` to 100.\nThen, append the created progressbar div to the primary div.\n\nStill within the JS file, write an `updateBar` function.\nThis function grabs the interior progress bar element via its class name, then updates the text content and the width so that they match the current value of the range input.\nIt also sets an `aria-valuenow` attribute.\nInvoke this function immediately, but also assign it to the `oninput` handler of the range input so that it updates as a user slides.',
      timeStamp: '2023-05-12T01:17:56.312Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/progress-bar',
    },
  ],
  [
    'Progress Bars II in React',
    {
      categories: [],
      daysBeforeReminder: '17',
      name: 'Progress Bars II in React',
      notes:
        "Inside the `App` declare a `bars = 0` useState as well as a `completedBars = 0` useState.\nThe button click is obvious -- just increment `bars`.\n\nTo render the Bars in the JSX just create an `Array.from({length: bars}, (_, i)` and return a `Bar` component each iteration, ensuring each one has a key.\nFor the `isEmpty` prop that gets passed to the bar, use `i > completedBars`.\nFor the `onCompletion` prop, pass in a function that lazily increments `completedBars`\n\nFor the `Bar` component, create a `filled` boolean via useState and default it to `false`.\nCreate a useEffect with `isEmpty` as the dependency. \nInside the effect, if `isEmpty` is still true or `filled` has already been toggled to `true`, then just return early.\nOtherwise set `filled` to true.\n\nIn the JSX for the bar, render an `outer` div and then an `inner` div.\nFor the inner div, use a template literal for the className so that you can conditionally add a 'full' class if the useState boolean is true.\nAlso, pass an `onTransitionEnd` prop that invokes `onCompletion` -- this is a javascript event that is associated with the CSS transition!\n\nIn the css, the `.inner` class needs to set `transform: scaleX(0)` so that it starts empty.\nIt also needs `transform-origin: left`, `transition-duration: 2000ms`, `transition-property: transform`, and `transition-timing-function: linear`.\n\nThe `.full` class simply needs to specify `transform: scaleX(1)`.\nWe use CSS transforms since they run on the GPU, unlike animating the `width` property which could get heavy on the CPU as the # of bars increases.",
      timeStamp: '2023-06-01T00:47:06.922Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/progress-bars-ii',
    },
  ],
  [
    'Promise.all',
    {
      categories: [],
      daysBeforeReminder: '32',
      name: 'Promise.all',
      notes:
        'common mistake:\n- not immediately resolving with an empty array if input array is empty\n\nimmediately return a new Promise.\nWithin the Promise, declare an `output` array equal to the `iterable` length, and declare an `unresolved` integer that starts the the iterable length.\n\nImmediately check if `unresolved === 0` and if so, immediately resolve with the `output` (an empty array) and return so that we dont continue executing.\n\nPast that `if` check, iterate over each element within the `iterable`.\nTry to await the element and then assign the result to `output[index]`, then decrement `unresolved`.\nIf `unresolved === 0` then all items have processed and we can resolve with the output.\nSince Promise.all always rejects if any promise does, the `catch` block simply needs to reject().',
      timeStamp: '2023-05-17T17:24:02.107Z',
      url: 'https://www.greatfrontend.com/questions/javascript/promise-all',
    },
  ],
  [
    'Promise.allSettled',
    {
      categories: [],
      daysBeforeReminder: '24',
      name: 'Promise.allSettled',
      notes: '',
      timeStamp: '2023-06-06T16:52:25.139Z',
      url: 'https://www.greatfrontend.com/questions/javascript/promise-all-settled',
    },
  ],
  [
    'Promise.any',
    {
      categories: [],
      daysBeforeReminder: '24',
      name: 'Promise.any',
      notes:
        'If the iterable is falsey or has no length, immediately return a `new AggregateError([])` rather than returning a Promise.\n\nElse, return a new Promise.\nInside of the promise, create an `errors` array initialized based on the `inputArr.length` that will be used to hold any error reasons.\nAlso declare a `rejected` variable that starts at `0`.\n\nLoop over each item in the iterable and use a try/catch.\nIf awaiting the `item` in the try block works, then just invoke `resolve` and pass the value into it.\nOtherwise if we hit the catch block, assign `errors[i] = errorFromCatchBlock` and increment `rejected`.\nIf rejected === inputArr.length, then reject AND MAKE SURE TO PASS THE ERRORS ARRAY into a `new AggregateError` since that is what Promise.any would rejected with',
      timeStamp: '2023-06-06T03:17:18.593Z',
      url: 'https://www.greatfrontend.com/questions/javascript/promise-any',
    },
  ],
  [
    'Promise.race',
    {
      categories: [],
      daysBeforeReminder: '47',
      name: 'Promise.race',
      notes:
        'The code needs to work with .then and .catch, so we need to return a new Promise.\n\nThe new promise takes the usual executor format (resolve, reject) and if there is no iterable length it returns immediately.\nOtherwise, it loops over the iterable via forEach.\nThe forEach uses as async function, ie `forEach(async item => {})`.\nWithin each async function, use a try catch block to try and await each item and then resolve the value, and then catch + reject if needed.\nAwaiting each item before resolving works because each of the async forEach calls will get put into the microtask queue, rather than waiting before moving on to the next item in the iterable.',
      timeStamp: '2023-05-07T18:58:06.791Z',
      url: 'https://www.greatfrontend.com/questions/javascript/promise-race',
    },
  ],
  [
    'Promises',
    {
      categories: [],
      daysBeforeReminder: '23',
      name: 'Promises',
      notes:
        "common mistake:\n- forgetting to pass `#value` to onRejected/onFulfilled\n- defining `fCb` and `rCb` as a function declaration instead of an arrow function, which winds up removing the `this` reference to the MyPromise methods\n- attempting to `if/else` within `fCb/rCb` instead of just `return resolve(this.#value)\n-returning `new myPromise` in the catch block instead of `this.then`\n- forgetting to `resolve` within the main `try` block for `rCb` (or trying to resolve instead of reject in the `catch` block!)\n\noptional: create a `states` object with pending, fulfilled, and rejected keys that have the same value as the key. Basically an enum.\n\nWithin the main class provided, declare a `#state` private field (meaning not in the constructor) that starts as `states.pending`.\nCreate a #value private field that is `null`.\nCreate a `#fulfilledCallbacks` field that is an empty array, and do the same for rejected callbacks.\n\nMoving on to the constructor, it takes in an `executorFunc`.\nWithin the constructor, try invoking the executor and pass in two anonymous arrow functions for the arguments.\nThe first func takes in a value and then returns `this.#resolve(value)`.\nThe second function takes in a value as well, but rejects instead.\nMake sure to catch any errors and then invoke `this.reject(err)` if the executor errored out.\n\nAfter the constructor, create a `then` method that accepts `onFulfilled` and `onRejected` parameters.\nthe `then` method immediately returns a new instance of `MyPromise` (the class we're building), passing in an arrow function that takes in a `resolve` and `reject` parameter (just like a normal Promise would).\n\nWithin the anonymous arrow function, declare a `fulfilledCallback` ARROW function so that we dont bind `.this`.\nWithin fulfilledCallback, if `onFulfilled` from the parent `then` is falsey then return `resolve(this.#value)` since we dont have to worry about any callbacks.\nOtherwise, invoke `queueMicrotask` so we can move our code off the main thread.\nWithin the queueMicrotask, try to invoke `onFulfilled` with this.value and save the result to a variable.\nThen, resolve and pass in the variable you just saved.\nCatch any errors and reject, passing in the error.\n\nStill within the MyPromise arrow function but outside of `fulfilledCallback`, delcare a `rejectedCallback` function.\nThis one is exactly the same as `fulfilledCallback` except were trying to invoke `onRejected`.\n\nPast `rejectedCallback`, we need to perform a switch statement based on `this.#state`.\nif state is pending, then push `fulfilledCallback` into the #fulfilledCallbacks array, and so the same thing for `rejectedCallback` with the other array before breaking.\n\nif state is fulfilled already, then we can just invoke the fulfilledCallback before breaking.\nDo the same general thing for the rejected state.\nAdd a `default` case that throws an error if its hit.\n\nAfter the `then` method, create a `catch` method that receives an `onRejected` parameter.\nThis method simply returns `this.then` and passes in `null` as the first argument and `onRejected` as the second argument.\n\nThe getters are straightforward.\n\nfor the `#resolve` method, it accepts a `value` parameter and then assigns `this.#value` equal to it.\nIt then updates `#state` to be fulfilled, and then it invokes each callback in the `fulfilledCallbacks` private field.\nLastly, it resets `fulfilledCallbacks` back to an empty array so then if some code attempted to try repeatedly resolving the promise even though its already done it would not continue to invoke the callbacks.\n\nthe `#reject` method is identical to `#resolve` but handles rejected states/callbacks.",
      timeStamp: '2023-06-08T03:47:59.241Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/promises',
    },
  ],
  [
    'Promisify',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Promisify',
      notes:
        'The `promisify` function returns a function that accepts any number of arguments.\nThe anonymous function that is returned will immediately return a new Promise.\n\nAs with any promise, the executor function accepts a resolve and reject argument.\n\nWithin the executor function, define a `handleErrorAndValue` function that receives an error argument FIRST and a value argument 2nd.\nIF error is truthy, then we invoke the `reject` function and pass in the error.\nOtherwise, we invoke the resolve function and pass in the value.\n\nAfter defining the handleError func, we just need to invoke the callback with `.call` and pass in `this`, all of the arguments, and the `handleError` function as the last argument.',
      timeStamp: '2023-05-06T17:21:33.806Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/promisify',
    },
  ],
  [
    'Purchase Form',
    {
      categories: [],
      daysBeforeReminder: '50',
      name: 'Purchase Form',
      notes:
        'The ordered list uses a `counter-rest` with a property of `list-items`.\nIt also is a flexbox\nthe `ol li`  have a flex-basis of 100% and are positioned relatively.\n\nThen, on the `li::before` pseudoelement use `counter-increment` with `list-items` as a property.\nTo create the content, just use `content: counter(list-items)`.\nEach pseudoelement will be a flex container to be able to position the content, and you can generate the content itself via `counter-increment` and then `content: counter()`.\n\nto create the horizontal lines, use the ::after element. \nTheir width should be 100% MINUS the circle width. \nAlso give them a height and make them `display: block`. \nLast, position them absolutely.\nTo get the right horizontal position, use `right: calc(-50% + circle radius).\nTo get the vertical position, use a complex `calc((circle radius + circle border width - divider line height) / 2).\n\nTo move the `button`, you need to give it `display: block` for margins to work as expected.',
      timeStamp: '2023-05-12T01:50:01.571Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/purchase-form',
    },
  ],
  [
    'Queue',
    {
      categories: [],
      daysBeforeReminder: '21',
      name: 'Queue',
      notes:
        "common mistakes:\n- returning the node itself, rather than returning the `item` (even for `back` and `front` methods)\n- During the `dequeue` method, after removing the `head.prev` node, make sure to update `head.prev = removedNode.prev` AND THEN update `head.prev.next = head`.\n\nBuilding a queue in JS means building a Linked List, so start by creating a `Node` class that accepts a `val`.\nThen assign `this.val` based on that, and assign `this.prev` and `this.next` to null.\n\nin the main Queue class, create a `head` and `tail` that are equal to new `Node`s.\nThen, point `this.head.next` to `this.tail`, and point `this.tail.prev` to `this.head`.\nLastly, declare an `_length` property and initialize it to 0.\n\nfor the `enqueue` method, create a new Node based on the item passed in.\nAssign `node.prev = this.tail.prev`, then assign `this.tail.prev.next = node`.\nNext, assign `node.next = this.tail` and assign `this.tail.prev = node`.\nEffectively, we take whatever the 2nd to last node originally was, point it to the newly created node, and ensure the newly created node points to the old semi-final node as well as the tail.\nLastly, increment `this._length`.\n\nFor the `dequeue` method, if the Queue's isEmpty method returns true, then just return undefined.\nOtherwise, save `this.head.next.val` into a constant so it can be returned at the end.\nThen, update `this.head.next` to point to `this.head.next.next`.\nNow that `this.head.next` has been updated to point to the 2nd node from the head, we have to reassign it's prev value, so `this.head.next.prev = this.head`.\nThis effectively removes the node that originally was directly after `this.head` so it will be garbage collected.\nLastly, decrement `this._length` and return `val`.\n\nAll the remaining methods are straightforward, just make sure to rely on `this.isEmpty()` as needed.",
      timeStamp: '2023-06-02T20:17:43.338Z',
      url: 'https://www.greatfrontend.com/questions/javascript/queue',
    },
  ],
  [
    'Quick Sort',
    {
      categories: [],
      daysBeforeReminder: '22',
      name: 'Quick Sort',
      notes:
        "common mistakes:\n- looping `while (start <= end)` instead of `while (left <= right)\n- checking `array[left] < array[pivot]` instead of using `<=` (same goes for `right`, but using >=)\n\nCreate a helper function that accepts an array, `start` index, and `end` index.\nIn the helper, immediately check if `start >= end` and return early if true.\nOtherwise, declare a `pivot` that is equal to the `start` index, a `left` pointer that is equal to `start + 1`, and a `right` pointer that is equal to `end`.\n\nLoop while right >= left.\nIf `array[left] > array[pivot]` AND `array[right] < array[pivot]` then swap the left + right elements\nThis is because the goal is ultimately to put everything smaller than the pivot to the left of the pivot, and everything greater than the pivot to the right of the pivot.\n\nOtherwise, if `array[left]` is <= `array[pivot]` then just increment `left` since the element currently in the left slot is already correctly sorted as lower than our pivot.\nDo the same thing for `right` -- `array[right] >= array[pivot]` right -= 1.\n\nOnce that while loop ends, we can be sure everything to the right of pivot is greater than the pivot, so we swap `array[right]` with `array[pivot]` using array destructuring.\n\nThe next thing our helper needs to do is determine which subarray (leftSub vs rightSub) to either side of the pivot to sort first.\nSince we've swapped the original pivot into the `right` slot, we know that everything 1 slot to the left of `right` is the `leftSubArr` and everything to the right of `right` is the `rightSubArr`.\nSo, declare a `leftIsSmaller` boolean that is equal to `right - 1 - start < end - right + 1` since this compares the length of the leftSub vs rightSub. \n\nif `leftIsSmaller` then we want to sort the leftSubArr prior to sorting the rightSubArr, so we recursively invoke `helper(array, start, right - 1)` followed by `helper(array, right + 1, end)`.\nOtherwise if `leftIsSmaller` was falsey then do the exact same thing but reverse the order of `helper` invokations.\n\nThe main function simply invokes the helper and passes in the input array, start = 0, end = array.length - 1.",
      timeStamp: '2023-05-26T19:52:22.251Z',
      url: 'https://www.algoexpert.io/questions/quick-sort',
    },
  ],
  [
    'Rainbow Circles',
    {
      categories: [],
      daysBeforeReminder: '62',
      name: 'Rainbow Circles',
      notes: 'borders + margin + basic math',
      timeStamp: '2023-05-19T05:26:01.055Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/rainbow-circles',
    },
  ],
  [
    'Rearrange String K Distance Apart',
    {
      categories: ['heaps'],
      daysBeforeReminder: '36',
      name: 'Rearrange String K Distance Apart',
      notes:
        "common mistake:\n- you only need 1 while loop based on maxHeap.length\n- ALWAYS insert the object/tuple back into a queue outside the while loop\n- If q.length === k, shift and reinsert into maxHeap IF the freq > 0\n\nstart by creating a Map and populating the character counts in it.\nThen, loop over the map and push a [frequency, char] tuple into a maxHeap.\n\nAfter populating the heap, create an output string and a queue.\nLoop while the maxHeap has length.\nEach loop, remove the top tuple and append the character to the output string.\nThen, push the tuple into the queue WHILE decrementing the frequency by 1.\nAny time the queue.length === k, shift from the queue. \nIf the shifted frequency is > 0, push the tuple back into the maxHeap.\n\nThe above logic is crucial -- because we WONT push elements back into the maxHeap if their frequency becomes 0, other elements may get stuck waiting in the queue. \nThats what we want!\n\nThis helps ensure that if we cant place elements `k` distance from each other, then we will run out of elements in our maxHeap (because some of the elements are stuck in the queue) and our while loop will break.\n\nAfter the while loop, check if the output.length === inputStr.length.\nIf not, return ''.\nAgain, this will happen if elements get stuck in the queue rather than fully emptying both the queue and maxHeap.",
      timeStamp: '2023-05-25T00:51:15.621Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2E4y26k3LE',
    },
  ],
  [
    'Remove Duplicates From Linked List',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '46',
      name: 'Remove Duplicates From Linked List',
      notes:
        'Initialize a `curr` value equal to the head.\nLoop while curr is truthy.\nNested loop while curr.value === curr.next?.value.\nReassign curr.next to curr.next.next.\n\nAfter that nested loop breaks, reassign curr to curr.next.\nReturn the original head at the end of everything',
      timeStamp: '2023-05-17T17:29:51.252Z',
      url: 'https://www.algoexpert.io/questions/remove-duplicates-from-linked-list',
    },
  ],
  [
    'Remove duplicates from sorted array',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '56',
      name: 'Remove duplicates from sorted array',
      notes:
        'declare `nextNonDuplicateSlot = 0. For loop -- each iteration, if arr[i] === arr[i + 1] then `continue`. \nOtherwise, reassign arr[nextNonDuplicateSlot] = arr[i] and increment nextNonDuplicateSlot. \n\nAt the end, return nextNonDuplicateSlot since it will be equal to the LENGTH of the non duplicate array.',
      timeStamp: '2023-05-16T17:04:16.677Z',
      url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    },
  ],
  [
    'Remove nth node from end of list',
    {
      categories: [],
      daysBeforeReminder: '11',
      name: 'Remove nth node from end of list',
      notes:
        'Solved by using two pointers and maintaining a constant distance between them.\nOnce the further right pointer becomes null, we know the left pointer is at the nth node from the end.\n\nCreate a `dummy` node with no value, and set its `.next` property to point to the `head`.\nThen, declare `left = dummy, right = head`.\n\nLoop while the input `n` is greater than 0.\nEach iteration, move the right pointer to the next node `right = right.next` and then decrement `n`.\n\nNow that the proper distance between our nodes is established, loop while `right` is truthy.\nEach iteration, assign left and right to the next nodes, ie `left = left.next`.\n\nAfter that loop is done, the right pointer is at the end of the list (null) and the left pointers `.next` property is pointing to the nth node from the end.\nSo we simply invoke `left.next = left.next.next`.\n\nFinally, return `dummy.next` which will point to whatever the `head` is',
      timeStamp: '2023-06-08T03:31:13.521Z',
      url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    },
  ],
  [
    'Reorder list',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '33',
      name: 'Reorder list',
      notes:
        "common mistake:\n- not assigning `slow?.next` to `null` before finally returning `head`, since slow.next may still point to a node that creates a cycle\n\nStart by creating a `reverse` helper function that reverses a list by taking in a single node as the argument.\n\nIn the main function, use fast/slow pointers to find the middle node. \nThen, use the `reverse` helper and store the returned value as something like `reversedHead`.\nReassign `slow` to point to `head` again, and create a `next` variable.\n\nLoop while `reversedHead && slow`. \nin the loop, you're just pointing the node in `slow.next` to the node at `reversedHead`, then reassigning `slow` to its ORIGINAL .next value (which you needed to store in a `next` variable before overriding the .next pointer). \nThen, do the same thing for the `reversedHead.next` pointers, where you reassign them to point to the node at `slow` before reassigning `reversedHead` to its ORIGINAL .next value in the reversed list.\n\nAfter the while loop is over, if `slow.next` is truthy make sure to reassign it to `null` since it is now the tail node of the modified list.\nFinally, return the original `head` input.",
      timeStamp: '2023-05-23T00:49:41.198Z',
      url: 'https://leetcode.com/problems/reorder-list/',
    },
  ],
  [
    'Reverse alternating K-element Sub-list',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '37',
      name: 'Reverse alternating K-element Sub-list',
      notes:
        'let curr = head, prev = null.\nLoop while curr is truthy.\ndeclare tailOfPrevList = prev, tailOfCurrList = curr, i = 0, next.\n\nnested loop while curr is truthy and i < k where you reverse the nodes as usual.\n\nAfter the nested loop ends, if tailOfPrevList is truthy, point its `next` to prev.\nElse, point `head` to prev.\n\nPast the if/else, assign tailOfCurrList.next to curr.\n\nThen, reassign `i` back to 0 so we can skip `k` nodes.\nLoop while curr is truthy and i < k.\nJust reassign prev + curr each loop.\n\nAt the end of the main while loop, just return `head`.',
      timeStamp: '2023-04-29T06:26:22.106Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG',
    },
  ],
  [
    'Reverse every K-element Sub-list ',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '29',
      name: 'Reverse every K-element Sub-list ',
      notes:
        'common mistakes:\n- at the end of all reversing, reassigning `prev` to `curr` instead of assigning prev to `currTail`\n\nlet `curr = head` and `prev = null`.\nloop `while(curr)`. \nWithin loop, create variable "prevTail = prev" to store the node we need to connect after reversing the next subArr. \nAlso, create variables for `currTail = curr`, `next = null`, and `i = 0`.\n\nnested while loop, curr !== null && i < k. \nreverse the nodes here: next = curr.next, curr.next = prev, prev = curr, curr = next, i + 1.\nafter the nested while loop, connect the PREVIOUS subarray with the new `prev` -- if prevTail !== null, prevTail.next = prev. \nOtherwise, head = prev.\n\nAfter above if/else, assign `currTail.next = curr` to connect the end of the current sub array with the upcoming one.\n\nAt any point within larger `while` loop, if !curr then we break the loop. \nOtherwise, we end the while loop by assigning `prev` to `currTail`.\n\nNOTE: drawing this out on paper will help it make more sense :)',
      timeStamp: '2023-05-17T04:25:32.062Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR',
    },
  ],
  [
    'Reverse linked list ii',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Reverse linked list ii',
      notes:
        'Do a while loop where `i = 1`, as long as `curr` is truthy and `i < p`. \nEach loop, point `tailFirstHalf` to `curr` and then point `curr` to `curr.next` before incrementing `i`\nAfter the final iteration, `curr` will point to `p` .\n\nCreate a `reversedTail` to store `curr` since it will become the tail of our reversed list. \n\nNext, reverse the nodes via while loop, `curr !== null && i <= q`. \n\nafter reversing, update `reversedTail.next` to point to `curr` so that it reconnects with whatever remaining nodes are in the last part of the linked list. \n\nAlso, if tailOfFirstHalf !== null then reassign its `.next` value to `prev`. \nOtherwise, if it IS null then `head` is the first node in the reversed sublist, so we point the .next to head.next. \n\nreturn head.',
      timeStamp: '2023-05-31T05:05:43.825Z',
      url: 'https://leetcode.com/problems/reverse-linked-list-ii/',
    },
  ],
  [
    'Robot Emoji',
    {
      categories: [],
      daysBeforeReminder: '57',
      name: 'Robot Emoji',
      notes:
        'common mistakes:\n- trying to use `margin: 0 auto` without also using `left: 0; right: 0` on an absolute element.\n\nBy putting `display:flex` on the `.light`, you can create a new stacking context that allows you to put a z-index on the `.bulb`\n\nTo position the `.light` above the head, you need to calculate the total height of the .stick (15px) , .bulb (30px) and then account for any margins.\nThe .bulb has a -5px margin, but the head itself has a positive 5px margin so the two of them cancel out. \nTherefore we can put `top: -45px` on the `.light` to position it properly.\n\nThe triangle nose can be created by using borders exclusively.\nThe bottom border will control the height (30px), and the left + right borders control the width (15px each).\nThe left/right borders need a transparent color to create the triangle shape.',
      timeStamp: '2023-05-17T05:07:28.985Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/robot-emoji',
    },
  ],
  [
    'Rotate a LinkedList',
    {
      categories: ['reverseLinkedList'],
      daysBeforeReminder: '33',
      name: 'Rotate a LinkedList',
      notes:
        'TODO: learn the leetcode version!\ncommon mistakes:\n- unnecessarily using a `prev` variable\n\ndeclare a `curr` variable that = head, and a `len` = 0.\nloop while (curr.next) and just move curr and increment len by 1.\n\nAfter the loop, reassign curr.next to head. \nThis makes the list circular by linking the last node to the beginning node.\n\nNext, modulo the rotations by the `len`.\nThis ensures that if `rotations` was larger than the actual list itself, we dont go out of bounds.\n\nReset `curr` variable to `head`.\n\nloop while rotations > 1, where we reassign curr to curr.next and decrement rotations.\nThis allows us to skip to the correct node that will become the new tail of the list.\n\nAfter the for loop, reassign `head` to `curr.next`.\nThen, assign curr.next to null.\nFinally, return head.',
      timeStamp: '2023-05-25T01:32:35.966Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R',
    },
  ],
  [
    'Rotting oranges',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '28',
      name: 'Rotting oranges',
      notes:
        'common mistakes:\n- improperly processing the queue -- you need a nested `for` loop from 0 up to the current q.length. You cant just run a single `while` loop\n- You cannot simply modify the destructured `row/col` when shifting from the queue, because this mutates them. You need to declare new variables WITHIN each iteration of the forEach loop.\n\ndeclare a `directions` constant outside of the main function.\nThis constant is just an array of "next coordinates" -- [[1,0], [-1, 0], [0, 1], [0, -1]].\n\nIn the main function, declare `minutes = 0`, `fresh = 0`, save the rows/cols to constants, and create a queue.\n\nLoop over every square on the board.\nIf the current square === 1, then increment `fresh`.\nWe\'ll use this `fresh` count at the end to determine if we need to return `-1` or not.\nIn that same for loop, if the current square === 2 then push the current coordinates as an array into the queue `[row, col]`.\n\nNow that we know how many fresh oranges there are and we have a queue of rotting orange coordinates, we need to loop while the queue has length AND `fresh > 0`.\n\nIn the while loop, immediately save the length of the queue to a variable.\nThen, do a nested for loop up to that `length`.\n\nWithin the nested for loop, destructure `[r, c]` by shifting from the queue.\nLoop over each of the arrays in the `directions` array.\nWithin the `forEach`, declare `row = r + dir[0]` and `col = c + dir[1]`.\nIf the row or col are out of bounds OR the grid[row][col] !== 1 then just return.\nOtherwise, assign the current grid square to a `2` to mark it as rotten, then push the `row` and `col` into the queue as an array.\nAlso decrement `fresh`.\n\nOnce the `forEach` over `directions` ends, increment `minutes`.\n\nPast the while loop, we finish the main function by returning `minutes` IF `fresh === 0`, otherwise we return -1',
      timeStamp: '2023-05-25T01:17:39.855Z',
      url: 'https://leetcode.com/problems/rotting-oranges/',
    },
  ],
  [
    'Search Bitonic Array',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '40',
      name: 'Search Bitonic Array',
      notes:
        "Make a helper function that uses Binary Search to find the max number's index in the bitonic array. \nThis can be done via normal binary search and looping while `start < end`. \nRather than checking for a target value, you just check if arr[mid] > arr[mid + 1].\nIf true, then reassign `end` to `mid. \nOtherwise reassign start to mid + 1.\nAt the end, return start.\n\nNext, create a helper function that can do an order agnostic binary search, and it accepts `arr, key, start, end` args. \nThe core logic is the same, but you have to determine if the input isAscending via arr[start] < arr[end - 1]. \nOnce thats determined, you do a typical binary search and move the start/end based on the usual check and then a nested check based on isAscending. \nIf at any point you find the target, return it, otherwise return -1 at the end.\n\nIn the main function, you can call the first helper to find the max index in the array. \nThen, you can call the order agnostic binary search on the first half below the maxIndex and then conditionally call the 2nd half above/including that max index if the first search returned -1.",
      timeStamp: '2023-06-04T20:28:43.299Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEGORlpZYJE',
    },
  ],
  [
    'Search a 2d matrix',
    {
      categories: [],
      daysBeforeReminder: '22',
      name: 'Search a 2d matrix',
      notes:
        'Perform a double binary search -- the first searches for the correct row, the 2nd searches for the correct column in the row.\n\nTo search the rows, declare a `top` and `bottom` to binary search with (similar to start + end).\nif the `target` is greater than the last element in the row, adjust `top` so we move to the next row;\nOtherwise, if the target is less than the first element in the row, adjust `bottom`.\nOtherwise `break` since we found the correct row.\n\nThen just do your usual binary search within the row to search for the target',
      timeStamp: '2023-05-23T04:44:34.288Z',
      url: 'https://leetcode.com/problems/search-a-2d-matrix/',
    },
  ],
  [
    'Search in a Sorted Infinite Array ',
    {
      categories: ['binarySearch'],
      daysBeforeReminder: '57',
      name: 'Search in a Sorted Infinite Array ',
      notes:
        'IGNORE ANY CHECKS AGAINST MAX_SAFE_INTEGER.\nProceed as if its not part of the problem, and youll solve it easily.\n\nThis one uses a normal binary search EXCEPT you first need to find the right range to search through.\n\nDeclare start = 0, end = 1. while `(reader[end] <= target)` reassign start to `end` to keep the search range small. \nThen just double `end` to bring in more numbers `end *= 2`. \n\nOnce the while loop ends, do a normal binary search.\nif `reader.get(mid)` ever goes out of bounds, just return -1.',
      timeStamp: '2023-04-21T02:39:21.375Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2',
    },
  ],
  [
    'Search in rotated sorted array',
    {
      categories: [],
      daysBeforeReminder: '18',
      name: 'Search in rotated sorted array',
      notes:
        'common mistakes:\n- checking whether the right is ascending, when its easier to check if left is ascending (start < mid)\n- not using `target >= nums[start] && target < nums[mid` if left is ascending, OR not using `target > nums[mid] && target <= nums[end]` if left is not ascending\nprev reminder: 26\n\nCalculate middle and return it if it contains the target element.\nnext we need to determine if arr[start] < arr[mid], which would indicate that everything left of mid is sorted in ascending order. \nIf so, then we check if the `target` is >= `start` and <= `mid`. \nIf true, we reassign end to mid. \nIf false, we need to move to the right of mid.\n\nIf arr[start] was NOT <= arr[mid], then the right half of the array after `mid` will be in ascending order. \nSo we first check if the target is > `mid` and <= `end - 1` and if it is, we move the `start` to mid + 1. \nOtherwise, we move leftwards.\n\nAt the end, if array[start] === target then return start, otherwise return -1.',
      timeStamp: '2023-05-23T04:37:41.316Z',
      url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    },
  ],
  [
    'Serialize and deserialize binary tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '36',
      name: 'Serialize and deserialize binary tree',
      notes:
        "common mistakes:\n- not incrementing `i` in the `null` path AND in the normal `node` path\n- not keeping the arr comma separated when joining -- .join(',')\n\nCan be solved with DFS (preorder traversal) or BFS.\n\nDFS solution:\nThe serialize function should return a comma-separated string, so start by creating an empty array so that we can return it at the end via `output.join(,)`\nDeclare a `preorder` function within the serialize function which will accept a node as an argument.\nWithin `preorder`, if node is falsey then push a string 'n' into the result array -- the 'n' strings will wind up representing null nodes but take up less space than using the full word 'null'.\n\nElse if the node is truthy, push the node's value into the array -- the value does NOT need to be cast to a string, since the `arr.join()` that we do at the end of serialize will automatically turn everything into a string.\nAfter pushing the node's value, recursively invoke `preorder` on the left + right nodes.\n\nBack in the main `serialize` function, just invoke the preorder function and then return `output.join(',')` to return a comma-separated string.\n\nFor the `deserialize` function, immediately split the input string on each comma via `input.split(',')` and save the array to a variable.\ncreate an `i` variable that starts at `-1`.\n\nDeclare some sort of `dfs` helper within the deserialize function that does NOT take any arguments.\nWithin the helper, immediately increment `i`.\nThen, if `arr[i] === 'n'` we can return `null` since we found a null node.\nPast that `if` statement, create a new TreeNode and pass in `Number(arr[i])` and then save the new node to a variable `tree`.\nAssign `tree.left` to the return value of recursively calling `dfs` and then do the same for `tree.right`\n\nOutside our helper `dfs`, just `return dfs()` to create the tree :)",
      timeStamp: '2023-05-31T01:03:46.397Z',
      url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
    },
  ],
  [
    'Signup Form in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '20',
      name: 'Signup Form in Vanilla JS',
      notes:
        'common mistakes:\n- getting the `pattern` wrong: should be "^[a-zA-Z0-9]+$" where the `+` symbol allows us to match the preceeding token an unlimited number of times\n\nComplex client-side validation will often require JS, especially if attempting to do something like validating as a user types.\nBut in an interview setting, time is a crucial factor and so you should suggest using HTML validation as much as possible.\nIt also gives you a chance to flex your HTML knowledge, a disappearing skillset in React land.\n\nWithin the `form` element, make sure each `label` element is properly associated with the input via the `for` attribute pointing to the `id` on the input.\nWhile you could nest the input inside the label, this doesnt always have the best support across screen readers.\n\nMark every single input with the `required` attribute, and add the `minlength` attribute to the inputs that need it.\nEnsure each input also has the right `type` attribute of `text` / `email` / `password` as necessary.\nAlso ensure each input has a `name` attribute so that it can be read during form submission.\n\nFor the `username` input, add a `pattern` attribute to perform regex checking -- `pattern="^[a-zA-Z0-9]+$"`.\nThe above pattern ensures everything is alphanumeric and accepts unlimited characters.\n\nBelow the `confirmPassword` field, add a div with text "Password fields do not match." inside it.\nGive the div an id so that it can be consistently grabbed via querySelector, and assign it a `hidden` className so that it is initially invisible to the user.\n\nDuring form submission, grab all of the fields via new FormData.\nIf the `password` and `confirmPassword` fields do not match, remove the `hidden` classname from the `password-message` div classList and then return early.\nOtherwise, add the hidden className to the div\'s classList and then pass the form fields to the submit function.',
      timeStamp: '2023-06-09T01:58:04.691Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/signup-form',
    },
  ],
  [
    'Single Cycle Check',
    {
      categories: [],
      daysBeforeReminder: '36',
      name: 'Single Cycle Check',
      notes:
        'common mistakes:\n- returning `true` at the end instead of returning `i === startIndex && visited === array.length`\n- you dont need a helper function, and dont need to check if `i === prev`. Just rely on `visited` and keeping `i` in bounds\n- Make sure to check if visted > 0 && i === start to return early\n\nPoorly worded.\nQuestion is only asking us to check the first element for a cycle, not every single index in the array.\n\nNaive solution involves creating an array or map and marking the indices you visit. \nThis costs space.\nAnother naive solution involves mutating the array as you visit each index, setting it to `null`.\nThis is mutative, so still not ideal.\n\nideal solution involves tracking how many indices weve visited, a `currIndex`, and the original index (0).\nLoop while `visited` < input.length.\nEach loop, check is visited > 1 AND `currIndex === originalIndex`. \nIf true, return false since we hit our starting index but didnt visit all other indices.\nOtherwise, increment `visited` and then reassign curr.\n(curr + input[curr]) % input.length;\nDo a nested while loop as long as curr <0 and add the input.length to curr each time so that we are positive.\nAfter the main while loop ends, return curr === 0 which will indicate that we made it back to our starting point.',
      timeStamp: '2023-06-02T01:05:03.848Z',
      url: 'https://www.algoexpert.io/questions/single-cycle-check',
    },
  ],
  [
    'Single Number ',
    {
      categories: ['xor'],
      daysBeforeReminder: '60',
      name: 'Single Number ',
      notes:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR\n\nWhen you XOR 0 against a number, youll always return the original number. And when you XOR a number against itself, the 32 bit representation will cancel out, returning 0. \n\nWith this in mind, you can initialize `result = 0` and then just loop over the arr, performing `result ^= arr[i]`. The end will result will be the only non-duplicate number, because all other numbers will have cancelled their bits out.',
      timeStamp: '2023-05-17T17:30:35.245Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG',
    },
  ],
  [
    'Sliding Window Median ',
    {
      categories: ['heaps'],
      daysBeforeReminder: '36',
      name: 'Sliding Window Median ',
      notes:
        'Things to watch out for:\n- accidentally removing `end` instead of `start`\n- using `<` instead of `<=` when removing.\n- Not incrementing `start` when removing\n- Not rebalancing BEFORE + AFTER removing\n- not using `end - start + 1 >= k` for the median check.\n- not pushing the median prior to removing the `start`\n\ncreate a `lowers` maxHeap and a `greaters` minHeap within the constructor.\n\nCreate the same methods that you would for the normal median of a number stream problem; insert, updateMedian, rebalanceHeaps.\n\nWithin the predefined `find_median` method that accepts an array and a window size, create an output array and perform a sliding window via `end` and `start` pointers.\nEach loop, starting by inserting input[end].\n\nThen, if our window is === k (end - start + 1), push this.median into the result array.\nThen, determine which number needs to be removed via `input[start]`.\nIf the numToRemove is <= this.lowers.peek, it has to be within that heap.\nSince our heap class doesnt allow targeted removal, just splice the desired element out of the lowers.heap via `splice(indexOf(numToRemove), 1)`.\nMANUALLY decrement the length of the heap, since the heap class wont handle this automatically.\nIf the numToRemove was greater than lowers.peek, then perform the above logic on the `greaters` heap instead.\nThen, increment `start` to slide the window.',
      timeStamp: '2023-05-23T23:01:49.321Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO',
    },
  ],
  [
    'Sliding window maximum',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '35',
      name: 'Sliding window maximum',
      notes:
        'https://youtu.be/DfljaUwZsOk\nCreate a "Deque" (just use an array) and an output array.\n\nLoop from 0 to input.length.\nNested loop while num > deque[-1] --> pop from dequeue.\nAfter nested while loop, push num into dequeue.\n\nif `i` is >= k - 1, push the FIRST element in the dequeue since it is guaranteed to be the largest.\nWithin that same block, remove the maximum value when it\'s moving outside of the window.\nif `nums[i - k + 1] === dequeue[0]` --> shift() from queue.',
      timeStamp: '2023-05-23T00:46:43.615Z',
      url: 'https://leetcode.com/problems/sliding-window-maximum/',
    },
  ],
  [
    'Smallest range covering elements from k lists',
    {
      categories: ['heaps'],
      daysBeforeReminder: '37',
      name: 'Smallest range covering elements from k lists',
      notes:
        'common mistakes:\n- updating `largest` outside of the `if i < list.length` check\n- not comparing the VALUES in the tuples/objects inside the minHeap -- a.val < b.val\n- trying to update rangeStart/rangeEnd via Math.max/min, instead of just reassigning to whatever the smaller range values were\n\n\nInitialize a minHeap, a `currentMax = - Infinity`, a `rangeStart = 0` and `rangeEnd = Infinity`. \nLoop over the input array and insert a tuple in the form of [int, sourceArray, index].\nDuring each iteration, also update currMax by comparing it against the element at the front of each sourceArr.\n\nAfter populating the minHeap, loop while the minHeap length is === inputArr.length (since we need to have at least one element from each array).\nEach iteration, remove the tuple from the top of the heap.\nIf the `currMax` minus the removedInt is SMALLER than the rangeEnd - rangeStart then we have a smaller range, so we update rangeStart to point to the int and updated rangeEnd to point to currMax.\n\nincrement the removed index by 1, and then if the index is less than the sourceArr length, reinsert an updated tuple into the minHeap.\nAlso in that `if` block, updated the currMax based on currMax vs sourceArr[index].\n\nAt the end return [rangeStart, rangeEnd].\n\ntime: O(N * logM) where N is the total # of elements and M is the # of input arrays.\nspace: O(M) since we hold 1 tuple for each source array.\n\nExplanation:\nBecause each list is sorted, we know that the top element in our minHeap is the smallest number out of all the lists.\nSo we know that as long as our minHeap.length == input.length, then the element we remove from the heap inherently is the lowest possible # our range can start at.\nWe also attempt to update `currMax` on each iteration so that currMax always represents the largest number still in the heap.\nIt also ensures that the possible range is always accurate, otherwise is `currMax` was stale than wed have an impossible range such as `[10, 8]`',
      timeStamp: '2023-05-31T05:12:10.203Z',
      url: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/',
    },
  ],
  [
    'Sort K-Sorted Array',
    {
      categories: ['heaps'],
      daysBeforeReminder: '66',
      name: 'Sort K-Sorted Array',
      notes:
        'Solution involves a single MinHeap, so start by building that out as a Class.\n\nWithin the main function, create a new MinHeap and pass in the input array UP TO the `k + 1` index (but not including it). \nThis can be done using array.slice(0, k + 1).\n\nDeclare an indexToInsertAt counter = 0. \nPerform a for loop, starting from k + 1. \nDuring each loop, remove an element from the minheap and insert it at `indexToInsertAt`. \nThen, increment indexToInsertAt. \nLastly, insert array[i] into the minHeap.\n\nOnce the first for loop ends, there will still be elements in the minHeap and the array will only be partially sorted. \nSo, do a while loop that ends when minHeap.peek() === null. \nDuring each loop, repeat the same steps you did in the first for loop but without inserting any new elements into the minHeap.\n\nOnce the while loop ends, the array should be sorted-in-place so just return it.',
      timeStamp: '2023-06-08T03:38:12.692Z',
      url: 'https://www.algoexpert.io/questions/sort-k-sorted-array',
    },
  ],
  [
    'Sort colors',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '44',
      name: 'Sort colors',
      notes:
        'common mistake:\n- using `i < high` instead of `i <= high`\n\ncreate 3 variables, `low = 0`, `i = 0`, and `high = arr.length - 1`. The goal is to get all 0s BEFORE `low`, and all 2s AFTER `high`.\n\nwhile (i <= high), we need to handle 3 scenarios.\n\nThe first scenario is when arr[i] = 0. If we have 0, swap arr[i] and arr[low], then increment both low and i. \nThis helps us move all 0s before `low`.\n\nsecond if branch handles arr[i] = 2. In this branch, swap `i` and `high` elements and then decrement high.\nNotice that we dont increment `i` -- this is because we might now have a `0` at `i` which would need to be moved.\n\nlast `else` branch just increments `i`, since the 1s will naturally wind up in the middle of low and high.',
      timeStamp: '2023-05-31T23:40:27.116Z',
      url: 'https://leetcode.com/problems/sort-colors/',
    },
  ],
  [
    'Spaghetti Recipe',
    {
      categories: [],
      daysBeforeReminder: '80',
      name: 'Spaghetti Recipe',
      notes:
        'Dont forget `article` semantics.\narticle wraps all content, and is then further broken down into `header` and `section` elements.',
      timeStamp: '2023-04-13T02:44:33.780Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/spaghetti-recipe',
    },
  ],
  [
    'Squaring a Sorted Array ',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '76',
      name: 'Squaring a Sorted Array ',
      notes:
        'Create a new array via `Array(input.length)` and create an `indexToInsertAt` variable that points to the end of the array.\n\nuse two pointers left + right and then populate the array backwards by looping `while left <= right`. Since a squared number is always positive, you can just compare via `arr[left] * arr[left]` vs the same thing on the right',
      timeStamp: '2023-04-29T18:15:59.565Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R',
    },
  ],
  [
    'Squash Object',
    {
      categories: [],
      daysBeforeReminder: '16',
      name: 'Squash Object',
      notes:
        "common mistakes:\n- forgetting to `.filter(Boolean)` after calling `.concat(key)` ONLY in the block where `currVal !== \"object\"`. In the block where currVal is an object, you just concat the key and recurse\n\nBit of a mind bender.\n\nStart by adding 2 parameters to the function `path = []` and `output = {}` -- we'll use these to help with recursion.\n\nIn the function body, loop over the `[key, val]` tuple generated by object.entries.\nIf the `typeof val` is not an object OR the val === null, then we can just assign the value to our output object without recursing further.\n`const slot = path.concat(key).filter(Boolean).join('.')` --> output[slot] = val;\n\nELSE the val is some sort of object/array, so we need to recursively handle it\n`recurse(val, path.concat(key), output)`\n\nAfter the for/of loop ends, just return the output",
      timeStamp: '2023-06-04T19:55:09.351Z',
      url: 'https://www.greatfrontend.com/questions/javascript/squash-object',
    },
  ],
  [
    'Stable internships',
    {
      categories: [],
      daysBeforeReminder: '1',
      name: 'Stable internships',
      notes:
        "O(n^2) space + time complexity.\nAlso known as the Gale-Sharpley problem in academia. A stable matching means that there are no pairs of teams/interns where they would each have preferred to have matched with each other, but didnt.\n\nIn the event of a tie, this question has us optimize for interns.\n---\nCreate `chosenInterns = {}`, `freeInterns = interns.map(_, i => i)`, and `currentInternChoices = Array(interns.length).fill(0)`.\n`freeInterns` will be used as a stack that can determine which interns are still unassigned, `currentInternChoices` holds the top rank of a team that the intern has not yet tried to join, and chosenInterns is the actual mapping between a team and the intern being assigned to them.\n\nNext declare `teamMaps = []` and loop over each team in the `teams` array.\nEach iteration, declare `rank = {}`.\nThen, loop over each intern in the teams preferences: `team.forEach((intern, i))`.\nWithin the nested loop, assign `rank[intern] = i` to record the ranked preferences of the team.\nOnce the nested loop ends, push the `rank` into the `teamMaps` array.\n\nBack in the main function body, loop while `freeInterns.length` is truthy.\nEach iteration, declare `internNumber = freeInterns.pop()`.\nThen declare `internPreferences = interns[internNumber]` to grab the interns original preferences.\nThen declare `teamPreference = internPreferences[currentInternChoices[internNumber]` to find the team that the intern would prefer.\nThen immediately increment `currentInternsChoices[internNumber]` by 1, so that if we need to process the intern again to find a different match then we'll process their next team preference that they havent been assigned to yet.\n\nIf `chosenInterns[teamPreference] == undefined` then assign `chosenInterns[teamPreference] = internNumber`.\nThis is done to assign the intern to the team theyll be assigned to.\nThen immediately `continue` to avoid executing the below logic...\n\nOtherwise if the `teamPreference` wasnt undefined in chosenInterns, then declare `previousIntern = chosenInterns[teamPreference]`.\nThen declare `previousInternRank = teamMaps[teamPreference][previousIntern]` so we know how highly the team ranked the intern already assigned to them.\nThen declare `currentInternRank = teamMaps[teamPreference][internNumber]` so we can see how highly the team ranks the current intern.\n\nIf `currentInternRank < previousInternRank` then the team prefers the current intern over the one already assigned to them.\nSo invoke `freeInterns.push(previousIntern)` and then `chosenInterns[teamPreference] = internNumber` to update the teams currently assigned intern.\n\nOtherwise if that `if` condition was falsey, then the team wants to keep the intern already assigned to them, so we simply invoke `freeInterns.push(internNumber` to push the current intern back into the stack.\n\nWhile a bit confusing, this DOESNT cause an infinite loop, since each iteration was updating `currentInternChoices[internNumber]` so that the next iteration tries assigning the intern to the NEXT team in their list of preferences.\n\nFinally once that while loop ends, we declare `matches = Object.entries(chosenInterns).map( [teamNumber, internNumber])`.\nInside the map callback, just return a tuple in the shape of `[internNumber, Number(teamNumber)]`.\nIts important to convert via the `Number` constructor since the key (teamNumber) is going to be a string, and the 2d output needs to be all numbers.\n\nFinally, return `matches`.",
      timeStamp: '2023-05-26T23:02:35.711Z',
      url: 'https://www.algoexpert.io/questions/stable-internships',
    },
  ],
  [
    'Stack',
    {
      categories: [],
      daysBeforeReminder: '50',
      name: 'Stack',
      notes: 'Basically just use an array',
      timeStamp: '2023-05-31T23:44:24.885Z',
      url: 'https://www.greatfrontend.com/questions/javascript/stack',
    },
  ],
  [
    'Star Rating in React',
    {
      categories: [],
      daysBeforeReminder: '25',
      name: 'Star Rating in React',
      notes:
        "TODO: review how to make this more accessible, since it will probably come up in interviews.\n--\nCreate an individual `Star` component that accepts a `filled` prop.\nThis component returns the provided star svg with a conditional className in the form of\n`filled ? 'star-icon start-icon--filled' : 'star-icon'`\n\nFor the `StarRating` parent component, it accepts `value`, `max`, and `onChange` props.\nDeclare a `hoveredIndex(null)` useState, which we'll use to fill all stars to the left of the currently hovered star.\n\nfor the jsx, return a wrapping div which will contain all the stars.\nThen, do a nested `Array.from({length: max}, (_, index) =>`\nFor the callback, return a `button` with a key.\nThe button should also have `onMouseEnter= () => setHoveredIndex(index)`.\nFor the onMouseLeave, just setHoveredIndex(null).\nGive it an onClick = () => onChange(index + 1), which allows us to set the filled stars in the consuming parent component.\n\nInside the button, return a Star component with `filled = hoveredIndex !== null \n? index <= hoveredIndex\n: index < value`.\nThis is saying that if hoveredIndex is truthy, use that.\nOtherwise, use the `value` being passed in to the StarRating.\n\nInside the parent `App` component, declare a `rating` state that is defaulted to `3`.\nPass in `max = 5`, `value = rating`, `onChange = setRating` to the StarRating component",
      timeStamp: '2023-06-09T02:08:01.735Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/star-rating',
    },
  ],
  [
    'Stopwatch',
    {
      categories: [],
      daysBeforeReminder: '26',
      name: 'Stopwatch',
      notes:
        'common mistakes:\n- reassigning `millisElapsedSinceLastStart` using the `=` operator INSTEAD of the `+=` operator (we need to be adding time, not starting from scratch)\n\nSave all 3 buttons and the timer text into constants.\nAlso declare variables `timerId`, `lastTimerStartTime = 0`, and `millisElapsedBeforeLastStart = 0.\n\nDeclare a `startTimer` function.\nIn the function, set `startBtn.disabled = true` and do the same for the resetBtn.\nRemove the `disabled` attribute from the stopBtn (can be done via `.disabled = false` or removeAttribute).\n\nInvoke `requestAnimationFrame` and pass in `updateTime` as the callback argument while saving the return value into our `timerId` variable.\n\nrequestAnimationFrame executes a callback each time the browser paints. \nWe use this over `setInterval` because we dont want to TRULY run all our logic every millisecond -- this would be very hard for browsers to process, since they run @ ~60fps rather than the 1000fps required to execute a callback every millisecond.\nBasically, requestAnimationFrame tells the browser to execute our callback every chance it gets but no faster than that.\n\nLastly, assign `lastTimerStartTime` to Date.now().\n\nFor the `stopTimer` function, remove the `disabled` attribute from `startBtn` and `resetBtn`, while adding it to the `stopBtn`.\nUse the `+=` operator to add `Date.now() - lastTimerStartTime` to our `millisElapsedBeforeLastStart` variable.\nThis is done so that when we click startBtn again we arent starting a timer from 0:0:0.\n\nLastly, invoke `cancelAnimationFrame(timerId)` to stop the callback from further updating the timer text.\n\nFor the `resetTimer` function, disable the `resetBtn` and assign the `timer` textContent to `"00:00:000".\nThen, reassign `millisElapsedBeforeLastStart` back to 0.\n\nCreate a `formatNumber` helper that accepts a `number` and `digitsToShow` argument.\nIn the function, convert the number into a string using the String constructor.\nThen, return `str.padStart(digitsToShow, \'0\').\nThis allows us to turn something like "5" milliseconds into "005".\n\nFinally, declare our `updateTime` function.\nWithin it, declare `millisElapsed` equal to `Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart`.\nNext, declare `secondsElapsed` equal to `millisElapsed / 1000` since there are 1000ms in a second.\nThen, declare `minutesElapsed` equal to `secondsElapsed / 60` since there are 60seconds in a minute.\n\nNext, we need to "shave off" the excess time. \nFor example, if millisElapsed is 12003, we dont want to render that since thats just 12 seconds and 3 ms.\nSo, we declare `milliText` equal to the result of invoking `formatNumber` and passing in `millisElapsed % 1000`.\nWe do the same thing for `secondsText`, setting it equal to `formatNumber(Math.floor(secondsElapsed) % 60, 2)`.\nWe do this since seconds + minutes elapsed will potentially be decimals, which we dont want to show.\n`minutesText` is similar, except we just use `formatNumber(Math.floor(minutesElapsed), 2)` since we dont need to use our modulo operator based on the prompt.\n\nWith our texts created, we just assign `timer.textContent` equal to a template literaly that combines `minutesText:secondsText:milliText`.\nLastly, we reassign `timerId` to `requestAnimationFrame(updateTime)` so that we continuously invoke our updateTime function every paint.\n\nThe only remaining thing to do is add \'click\' event listeners to the relevant buttons',
      timeStamp: '2023-05-18T01:09:34.853Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/stopwatch',
    },
  ],
  [
    'Stopwatch in React',
    {
      categories: [],
      daysBeforeReminder: '11',
      name: 'Stopwatch in React',
      notes:
        "common mistakes:\n- incorrectly assigning `parts` -- should be `parts.hours = Math.floor(time / MS_IN_HOURS` followed by `time %= MS_IN_HOUR`\n- not immediately setting `lastTick.current = Date.now()` for the first line of `startTimer`.\n- Within the interval, you MUST declare `now` immediately, followed by `elapsed = now - lastTick.current`. THEN you can invoke setTimeElapsed(prev => prev + elapsed, lastTick.current = now`.\nFailing to do otherwise makes the page slow af.\n\nDeclare a few constants for simplicity:\n`MS_IN_SECOND = 1000`, `SECONDS_IN_MINUTE = 60`,\n`MINUTES_IN_HOUR = 60`,\n`MS_IN_HOUR =\n  MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND`\nand finally `MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND`.\n\nNext, declare a `formatTime` function that accepts a `time` argument.\nIn that function, declare a `parts` object in the shape of `{ms: 0, seconds: 0, minutes: 0, hours: 0}`.\n\nTo ensure we dont wind up with a huge `ms` at the end, we start by building the larger numbers first.\nif `time > MS_IN_HOUR` then assign `parts.hours = Math.floor(time / MS_IN_HOUR)` and then reassign `time %= MS_IN_HOUR`.\nRepeat that `if` block 2 more times for MS_IN_MINUTE and then `MS_IN_SECOND.\n\nFinally, assign `parts.ms = time` since `time` will now be the remaining milliseconds, and then return `parts`\n\nCreate a `padNum` helper that accepts a number and returns based on `num >= 10 ? String(num) : '0${num}' `\n\nIn the main StopWatch component, create a `lastTickTiming = useRef(null)`.\nThen declare a `totalDuration` state via useState(0).\nAlso create a `timerId` via `useState(null)`.\n\nCreate an `isRunning` derivedState based on `timerId !== null`\n\nDeclare a `startTimer` function inside the Stopwatch component.\nInside that function reassign `lastTickTiming.current = Date.now()`.\nThen invoke `setTimerId(\nwindow.setInterval( () => {\nconst now = Date.now()\nconst timeElapsed = now - lastTickTiming.current\nsetTotalDuration(prev => prev + timeElapsed)\nlastTickTiming.current = now\n}, 1))`\n\nBack in the component body, create a `stopInterval` function that just invokes `window.clearInterval(timerId)` and then `setTimerId(null)`.\n\nDeclare a `resetTimer` function that invokes `stopInterval` and then invokes `setTotalDuration(0)`.\n\nDeclare a `toggleTimer` function.\nIn that function if `isRunning` is truthy then invoke `stopInterval`, otherwise invoke `startTimer`.\n\nBefore the final JSX return, assign `formattedTime = formatTime(totalDuration)`.\n\nInside the JSX return, use a `div` to wrap the entire returned body.\nThen, render a `button` with a className of `time` that has an onClick of `toggleTimer`.\nThis button is going to render the actual time, so it has a lot of children.\nThe first child is conditionally rendered if `formattedTime.hours > 0` -- return a span that contains a nested span with a class of `time-number` and textContent of `formattedTime.hours`.\nAfter the first nested span, render another span with a class of `time-unit` and 'h' as the text content.\n\nRepeat the span 2 more times, where the span for `minutes` is conditional (minutes > 0) but the 2nd span for `seconds` is unconditional.\n\nAfter the hours/minutes/seconds spans, render a span with a className of `time-number time-number--small`.\nfor the textContent, render `padNum(Math.floor(formattedTime.ms / 10)`.\n\nLastly, we need to render the stop/start button and reset button.\nRender a nested div to wrap the two buttons on a new row via display: block.\nFor the first button, assign the onClick to `toggleTimer`.\nIts child content is a ternary based on `isRunning ? 'Stop' : 'Start'`\nThe second button has its onClick assigned to `resetTimer` and has text content of 'Reset')\n\nfor the CSS, the `.wrapper` div in App.js should align items to center.\nThe `.time` button should have a transparent background, align the items to baseline, have no border, a `cursor: pointer`, and a 16px gap.\n\nthe .time-unit class should use a font-size of 24px, and the .time-number should use a font-size of 62px, and the time-number--small should use a font size of 36px.",
      timeStamp: '2023-05-17T22:44:02.142Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/stopwatch',
    },
  ],
  [
    'Structurally Unique Binary Search Trees',
    {
      categories: ['subsets'],
      daysBeforeReminder: '30',
      name: 'Structurally Unique Binary Search Trees',
      notes:
        'common mistakes:\n- defining the iterator as something OTHER than `i`. `i` is there to represent the value of the root node, and then you recurse via `left = func(start, i - 1), right = func(i + 1, end)\n\nin the main function, if the `input` is <= 0, return [].\nOtherwise, call a recursive helper, passing in `1` for the start and `input` as the `end`.\nReturn the `length` of the array returned by the helper.\n\nThe recursive helper accepts a `start` and `end` argument, which it will use to generate valid binary trees.\n\nfor the base case, if `start > end` return [null].\n\nPast the base case, for loop from start up to and including `end`.\nCreate the leftSubtree by calling the recursive function on (start, `i - 1`).\nCreate the rightSubtree by calling the recursive function on (`i + 1`, end).\n\nWhat this does is create all possible valid binary trees below the current node with a value of `i`. start to `i - 1` creates all combinations of nodes on the left, and `i + 1 to end` does the same for the right.\n\nAfter generating the subtrees, loop from `0` over the leftSubtrees and then nested loop from 0 over the rightSubtrees.\nIn the most nested loop, push a new TreeNode into the output array, in the form of:\n{value: i, leftChild: leftSubtrees[l], rightChild: rightSubtrees[r]}.\n\nThis output array now contains all possible binary trees where `i` is the root node, and then we have our various tree shapes on the left and right.\n\nReturn `result` from the recursive function, since the output array contains all possible trees and so the length will equal all possible topologies.',
      timeStamp: '2023-05-20T20:38:47.530Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9',
    },
  ],
  [
    'Subset Sum ',
    {
      categories: [],
      daysBeforeReminder: '42',
      name: 'Subset Sum ',
      notes:
        'TRY TO LEARN THE BOTTOMS UP DP APPROACH!\ncommon mistake: doing a `forEach` loop instead of `for` loop over input array, preventing an early `return` from working\n\nRecursive solution:\nCreate a Set and insert the number 0, representing the sum 0 which we can always create by just not using any elements.\n\nLoop over each element in the input array WITHOUT USING FOREACH.\nEach loop, create a `nextSet` Set.\nDo a nested loop over the primary set that exists outside the for loop.\nFor each element in the main set, push the element into the nextSet AND do another push of the element + currNum.\nThis is the equivalent of a branching strategy, where we create 2 branches representing excluding the current number and including the current number.\nAt the end of the forEach over the original Set, if the nextSet has our target then return true.\nOtherwise, reassign the main Set to the nextSet.',
      timeStamp: '2023-05-05T03:38:00.666Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk',
    },
  ],
  [
    'Subsets',
    {
      categories: ['subsets'],
      daysBeforeReminder: '42',
      name: 'Subsets',
      notes:
        'DOESNT USE A QUEUE. Just create an output array that contains an empty array, ie `[ [ ] ]`.\n\nPerform a for loop over the input. This loop will be responsible for pushing the current number to the end of each copied array.\nThen, do a nested while loop starting from 0, `while (j < n)` where n = output.length.\nWe start the nested loop from 0 each time so we can generate subsets that are copies of the empty array + each input number.\nWithin each while loop, copy the array @ `output[j]` and then push `input[i]` into the copy. then push the copied array back into the subsets.',
      timeStamp: '2023-05-21T17:42:06.757Z',
      url: 'https://leetcode.com/problems/subsets/',
    },
  ],
  [
    'Subsets ii',
    {
      categories: [],
      daysBeforeReminder: '28',
      name: 'Subsets ii',
      notes:
        "common mistakes:\n- attempting to increment `i` as a standalone operation, instead of relying entirely on the `while` loop before invoking `backtrack(i + 1)`\n\nsort the input array in ascending or descending order -- doesnt matter which.\nDeclare an empty `output` array.\n\nDeclare a `backtrack` function which accepts an `index` and `subset` (array) argument.\nWithin `backtrack` if `index === input.length` then copy the `subset` and push it into the `output` before returning.\n\nOtherwise, push `input[index]` into our `subset` and then invoke `backtrack(index + 1, subset)`.\nThis will wind up creating all subsets which DO include `input[index]`.\n\nNext, `pop` from subset to remove `input[index]` since we still need to create all subsets which DONT include the current number.\nAfter popping, perform a while loop as long as `index` is in bounds and `input[index] === input[index + 1]` -- this loop just increments `index` each iteration.\nOnce that loops ends and we're confident the current index doesnt point to the same number as the previous index, invoke `backtrack(index + 1, subset)`.\n\nOutside of our `backtrack` function, just invoke it and pass in `0` and `[]` for the 2 arguments before finally returning the output.",
      timeStamp: '2023-05-17T00:56:33.493Z',
      url: 'https://leetcode.com/problems/subsets-ii/',
    },
  ],
  [
    'Subtree of another tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '39',
      name: 'Subtree of another tree',
      notes:
        'Can be done recursively or iteratively.\nIterative version:\n\nIn the main function, create a stack that contains the root node, and then loop while the stack has length.\nEach loop, remove a node from the stack and invoke a `compareTrees` helper.\nIf the helper returns true, then exit early by returning true.\nOtherwise, push the left node into the stack if it exists.\nDo the same for the right.\nIf the while loop finishes without exiting early then return false.\n\nCreate a helper that takes in nodes `p` and `q` where p is the main tree from the main function, and q is the subtree from the main function.\nIn the helper function, create two stacks and put `p` into one stack and `q` into the other.\nLoop while BOTH stacks have length.\n\neach loop, pop a node from each stack.\nIf both nodes are falsey, then continue (since `null === null`).\nif one node is truthy and the other is falsey, return false.\nif the two node values dont match, return false.\n\nPush both the left and right child of both nodes into their respective stacks.\nAfter the while loop ends, just return stackP.length === stackQ.length',
      timeStamp: '2023-05-31T04:49:59.157Z',
      url: 'https://leetcode.com/problems/subtree-of-another-tree/',
    },
  ],
  [
    'Sum of Path Numbers ',
    {
      categories: ['dfs'],
      daysBeforeReminder: '57',
      name: 'Sum of Path Numbers ',
      notes:
        'function should take in a node and a sum arg, where sum defaults to `0`. \nIf there is no node, return 0. \nOtherwise, reassign sum to (sum * 10) + node.value to achieve a "concatenating number".\n\nIf its a leaf node, return sum. Otherwise, recursively return func(left, sum) + func(right, sum)',
      timeStamp: '2023-05-07T19:01:46.422Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69',
    },
  ],
  [
    'Surrounded regions',
    {
      categories: ['topologicalSort'],
      daysBeforeReminder: '33',
      name: 'Surrounded regions',
      notes:
        'Easiest solution involves flipping the prompt in a sense -- rather than focus on finding the "O"s and trying to determine if theyre surrounded on 4 sides, we can just loop over the perimeter and find any O\'s and DFS from there since anything connected to the perimeter will not be converted to an "X".\n\nWith that in mind, make a nested `dfs` function that takes in a `row` and `col` argument.\nFor the base case, if we are out of bounds OR if the current square is NOT equal to "O" then we return.\nOtherwise, we convert the given square to an "R" (for "replacement") and then dfs in all 4 directions.\n\nAfter making the helper, traverse the perimeter only, using some basic for loops and invoke the dfs helper anytime the current square is an "O".\n\nNow that all of the regions connected to the perimeter are replaced, we can just loop over everything in the board again and replace any "O" with an "X" since we know the region must not be connected to the perimeter.\n\nLastly, do another set of for loops to convert any "R" on the board back into "O" (no need to use the dfs helper)',
      timeStamp: '2023-05-19T17:53:13.304Z',
      url: 'https://leetcode.com/problems/surrounded-regions/',
    },
  ],
  [
    'Tabs II in React',
    {
      categories: [],
      daysBeforeReminder: '16',
      name: 'Tabs II in React',
      notes:
        'import `useId` from React and use it to generate a unique id for the Tabs component (since there could be multiple tabs on a page).\n\nFor the `div` that wraps the buttons(but not the div wrapping the panel contents), assign a role of `tablist`. \n\nFor the buttons within the tablist div, give each one a role of `tab`.\nAlso, assign `aria-selected={isActiveValue}` where isActiveValue is a boolean based on the current tab value equaling the active tab state.\nMake sure to assign an `id` to the button, something like `{useId}-header-{tabValue}`.\nLastly, assign `aria-controls` to the id youll use for the tab panels -- `{useId}-contents-{tabValue}`.\n\nFor the tab panels, give each div a role of `tabpanel`.\nThen assign the `id` mentioned above in the aria-controls section.\nLastly, assign `aria-labelledby` to the id used on the corresponding button.',
      timeStamp: '2023-05-31T05:21:02.665Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/tabs-ii',
    },
  ],
  [
    'Tabs III in React',
    {
      categories: [],
      daysBeforeReminder: '7',
      name: 'Tabs III in React',
      notes:
        "common mistakes:\n- forgetting to `break` at the end of each switch case, which can break keyboard navigation\n\nInside the `Tabs` body, declare a `setValueViaIndex` helper that accepts an `index` parameter.\nIn this function, invoke `setValue(items[index].value)` and then `document.getElementById(getTabsListItemId(tabsId, items[index].value).focus()` so that the tab is immediately focused.\n\nIn the JSX, we can place an `onKeyDown` event handler directly on the `tabslist` div, which ensures that the function will only fire when the `tab` buttons are focused.\n\nFor the `onKeyDown`, declare an `ArrowLeft` case.\nFor `ArrowLeft`, declare `index = items.findIndex(item => item.value === activeValue)`.\nThen invoke `setValueViaIndex( (index - 1 + items.length) % items.length)` so that we wrap around if needed.\nFinally, `break`.\n\nFor the `ArrowRight` case, the logic is identical except we use `index + 1` when invoking `setValue` rather than `index - 1`.\n\nFor the 'Home' case, just invoke `setValueViaIndex(0)`.\n'End' is identical, but using the last index.\n\nIMPORTANTLY, the WAI-ARIA spec suggests that you shouldnt actually be able to jump between each tab button via the `Tab` key, and instead hitting `Tab` should move focus to the tabpanel.\nTo make that work, we first add `tabIndex={itemValue === activeValue ? 0 : -1}` to each button, so that only the active Tab can be reached via the Tab key.\nNext, we add `tabIndex={0}` to each tabpanel so that theyre focusable via the Tab key (the `hidden` attribute ensures we cant focus non active tabpanels).",
      timeStamp: '2023-05-26T22:46:15.734Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/tabs-iii',
    },
  ],
  [
    'Tabs in React',
    {
      categories: [],
      daysBeforeReminder: '25',
      name: 'Tabs in React',
      notes:
        'Start with the API of the component.\nThe component should accept `items`, which will be an array of objects containing a `value`, `label`, and `content`.\nIt should also accept a `defaultValue`, which will be the item or panel or initially show.\nIf this is undefined, we\'ll just show the first `item`.\n\nFor controlled components, there could be a `value` and `onChange` prop instead of defaultValue. \nThis is just something to mention to interviewers :)\n\nWithin the component itself, declare an `activeValue` React state that is initialized to `defaultValue || items[0].value`.\n\nIn the JSX, use 1 wrapping div for the entire component, then use a nested div for the "button container".\nIn the button container, map over the items and return a button that has the `item.label` as its text content.\nThe button should have a unique key, be of type "button", have a click handler that updates the active value to the current item\'s value, and it should have a conditional className based on whether `item.value === activeValue`.\n\nAs a sibling to the button container div, create another div to contain the actual contents of the items.\nIn this container, just map over the items again and return a div with the `item.contents` as its children.\nThis div should have the `hidden` attribute set based on `item.value !== activeValue`.',
      timeStamp: '2023-05-27T21:48:25.957Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/tabs',
    },
  ],
  [
    'Task scheduler',
    {
      categories: ['heaps'],
      daysBeforeReminder: '39',
      name: 'Task scheduler',
      notes:
        'common mistakes:\n- checking `if (cycle > 0) total += cycle` rather than checking `if (cycle > 0 && queue.length > 0)`\n\nCreate a Map and loop over the input array to populate the map with the frequency of each task.\nCreate a maxHeap, and insert each [frequency, value] tuple into the maxHeap by looping over the Map.\n\nDeclare a `result` variable initialized to 0.\nLoop while the maxHeap has length.\nEach loop, create a `waitList` array that will hold our cooling tasks.\nAlso declare a counter = k + 1.\n\nThen, do a nested loop while `counter > 0` AND the maxHeap.length is truthy.\nWithin the nested loop, increment the main `result` variable by 1.\nThen, destructure a tuple from the maxHeap.\nIf the frequency in the tuple is > 1, insert the tuple into the waitList.\nThen, decrement `counter`.\n\nAfter the nested while loop, if `counter` is greater than 0 AND we have items in our waitlist, then increment `result` by `counter`.\nThen push each element in the waitlist back into the heap.',
      timeStamp: '2023-06-09T23:42:03.729Z',
      url: 'https://leetcode.com/problems/task-scheduler/',
    },
  ],
  [
    'Temperature Converter in Vanilla JS',
    {
      categories: [],
      daysBeforeReminder: '39',
      name: 'Temperature Converter in Vanilla JS',
      notes:
        'after creating the converted number, pass it directly into the `/\\.\\d{5}/.test(number)` without turning it into a string -- you can run the regex on numbers, not just strings, which saves you from converting things multiple times\n\nAdd two text inputs to the page and make them accessible.\n\nIn the JS file, grab each input and save it to a variabe.\nTry to make a single function that can be used as the `oninput` for each input.\nBecause celsius and fahrenheit are calculated differently, the function needs to take in a `calculate` argument.\nMake sure to add the function as an event listener to each input.',
      timeStamp: '2023-04-23T23:47:45.404Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/temperature-converter',
    },
  ],
  [
    'Testing Framework',
    {
      categories: [],
      daysBeforeReminder: '43',
      name: 'Testing Framework',
      notes:
        'start "bottoms up" by completing `expect`, then `it`, and `describe` last.\n\n`expect` should return an object with the methods on it.\nMake sure to JSON.stringify any reference to `actual` or `expected`\n`Expect.toExist` checks if actual is === null OR === undefined and throws a template literal if true.\nITS IMPORTANT to throw the string/literal rather than an actual Error object.\ntoBe just checks if actual !== expected and throws if so.\nLastly, toBeType follows the same general logic.\n\n`it` use a try+catch block to invoke the function it receives and then print a success message if no errors, otherwise it throws if we enter the catch block.\nTo ensure the `describe` block can catch the `it` throw properly, make sure to throw an object in the shape of `{testCaseName, err}` so that they can be destructured by `describe`.\n\nThe describe block is basically identical to the `it` block, except the catch block receives an object  and then finally prints via `console.error` .',
      timeStamp: '2023-05-09T05:46:22.547Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/testing-framework',
    },
  ],
  [
    'Text Search',
    {
      categories: [],
      daysBeforeReminder: '14',
      name: 'Text Search',
      notes:
        "common mistakes:\n- not handling invalid string/query\n- not converting both the string and the query to lowercase\n- looping using `for` instead of `while` (the for loop increments by `1` each cycle, which throws things off)\n\nBegin by handling edge cases: if string or query are falsey, or `string.trim() === \"\"` or `query.trim === \"\"` then just return the input string.\n\nReassign the `query` to `query.toLowerCase()`.\n\nCreate a `boldChars` array equal to the input string length and fill it with `false`.\nThis array will be used to mark indices where substrings match the query string.\nDeclare an `i = 0` variable and loop while i is less than the string length.\n\nEach loop, create a substring via `string.slice(i, i + query.length)`.\n\nIf `substring.toLowerCase === query` then we need to mark those indices as matching via `boldChars.fill(true, i, i + query.length)` since .fill mutates the target array.\nThen, increment i by the query length -- i += query.length.\nOtherwise if the substring didnt match, just increment `i` by 1.\n\nOnce the while loop ends, declare a `highlightedString = ''` variable.\nDo a normal for loop over the entire string.\n\nInside the for loop, declare `shouldAddOpeningTag = boldChars[i] === true && boldChars[i - 1] !== true` since this indicates we are beginning some matched text.\nThen declare `shouldAddClosingTag = boldChars[i] === true && boldChars[i + 1] !== true` since the prompt asks us to group two subsequent matches into one.\n\nDeclare a `char = string[i]` variable.\nIf `shouldAddOpeningTag` is truthy, reassign char to `'<b>' + char`.\nif `shouldAddClosingTag` is truthy, add `'</b>'` to the end of `char`.\nLastly append `char` to `highlightedString`.\n\nOnce that for loop ends, just return the highlightedString.",
      timeStamp: '2023-05-31T01:36:28.635Z',
      url: 'https://www.greatfrontend.com/questions/javascript/text-search',
    },
  ],
  [
    'This Binding',
    {
      categories: [],
      daysBeforeReminder: '38',
      name: 'This Binding',
      notes:
        'For the `myCall` function, start by generating a Symbol() and storing it in a value.\nSymbols are guaranteed to be unique, and repeated calls to `Symbol()` will never return the same result.\nAdditionally, adding Symbols do not appear when using a `for ... in` loop, so if the function that is used with myCall happens to use a for in loop, we dont have worry about that loop accidentally iterating over our Symbol key like we would if we just assigned a string as the key.\n\nAfter creating the symbol, assign it as a property on `thisContext` like you would any other key on an object, and the value it equals will be `this` ( which is the original function).\nThen, invoke the method @ thisContext[symbol], passing in the original arguments, and save the return value.\nNext, delete the key from the thisContext object so that we dont permanently pollute it.\nFinally, return the value you stored.\n\nFor myApply, you can just invoke `myCall` since apply has identical functionality besides receiving arguments as an array.\n\nA same thing applies to myBind, except that bind returns an actual function.\nSo just return an ARROW function that accepts arguments and returns `this.myApply` with the arguments passed in.\nWe use myApply instead of myCall simply because myApply accepts an array, so we can pass in [...oldArgs, ...newArgs] easily.',
      timeStamp: '2023-05-27T19:54:26.198Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/this-binding',
    },
  ],
  [
    'Throttle',
    {
      categories: [],
      daysBeforeReminder: '32',
      name: 'Throttle',
      notes:
        "common mistakes:\n- not using an `if/else` based on delayRemaining\n- not reassigning `timeSince` in both if/else cases\n- not calculating `delayRemaining = delay - Date.now() - timeSince`\n\ncreate two closed-over variables, `lastCalledTime = 0` and a `timer`.\n\nDeclare a new function that will be returned at the end.\nThis function takes in any number of arguments.\n\nWithin the nested function, declare a `currTime = Date.now()` and a `delayRemaining` that is equal to `delay` - (currTime - lastCalledTime)`.\nIF delayRemaining is <= 0 then assign `lastCalledTime` to currTime and invoke the callback via `.apply` so we can pass in `this`.\n\nELSE clear any running timers and then reassign `timer` to a returned setTimeout.\nThe setTimeout's anonymous function reassigns `lastCalledTime` to Date.now() and then invokes the callback with.apply.\nThe delay on setTimeout should be `delayRemaining` rather than the original delay.\n\nWe also need to attach a .cancel method to our return function.\nSince functions are just objects in JS, we can do `func.cancel = () => {}`.\nWithin the .cancel function, just clear the timer and reset it to null.",
      timeStamp: '2023-05-25T01:23:31.857Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/throttle',
    },
  ],
  [
    'Tic Tac Toe',
    {
      categories: [],
      daysBeforeReminder: '45',
      name: 'Tic Tac Toe',
      notes:
        'Save the boardWidth (3) to a constant, and create a `winConditions` constant.\n`winConditions` is an array that contains all possible winning arrays, which means it contains [0,1,2], [3,4,5], [2,4,6] etc.\nBasically, all 3 horizontal wins, vertical wins, and the 2 diagonal wins need to be in the array.\nRemember that the array is 0 indexed, so one diagonal win would be `[0, 4, 8]`\n\nNext declare `currentPlayer = 1` and `movesCompleted = 0`, and save the heading + restart button to constants.\nUse document.querySelectorAll() to grab all of the game squares and save to a constant.\n\nLoop over each of the `squares` and add a `click` event listener.\nIn the listener, just invoke `makeMove` and pass the current square as the argument.\n\nBack in the module body, declare a `makeMove(square)` function.\nIn the function, update the `square`s textContent using a ternary `currentPlayer === 1 ? "X" : "O"`.\nThen disabled the square and increment `movesCompleted`.\nIF `didPlayWin()` is truthy, then update the heading to render a template literaly showing the winning player and invoke `endGame()`.\nELSE IF `completedMove >= boardWidth * boardWidth` update the heading to "Tie game" and invoke `endGame()`\nELSE just change currPlayer to `1` or `2` as needed and update the heading using a template literal.\n\nBack in the module body, declare function `didPlayerWin`.\nSave a `match` constant equal to `currPlayer === 1 ? "X" : "O"`\nLoop over the `winConditions` array using a `.some(condition => {})`.\nWithin the `.some`, return `condition.every(position => squares[position].textContent === match`.\nBasically, we just check if any of the winning conditions have been met by verifying the current textContent.\n\nIn the module body, declare an `endGame` function.\nIn the function, change the `restartBtn` display to block, then loop over each of the `squares` and disable them.\n\nIn the module body, declare a `restartGame` function.\nSet `currPlayer` back to `1` and `movesCompleted` back to 0.\nReset the heading text, then loop over each of the `squares` and enable each square and reset the textContent to an empty string.\nLastly, set the restartBtn display back to \'none\'.',
      timeStamp: '2023-05-12T06:12:30.941Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/tic-tac-toe',
    },
  ],
  [
    'Tier List',
    {
      categories: [],
      daysBeforeReminder: '24',
      name: 'Tier List',
      notes:
        "common mistakes:\n- adding a `dragend` listener instead of `dragover`\nNOTE: this challenge pre-does it for you, but its worth noting that HTML elements (other than `image` tags) must have `draggable=\"true\"` set on them to be draggable.\n\nUse `querySelectorAll()` to grab all of the individual items and then do a `forEach` over each item, passing in `setUpItem` as the callback.\n\nDeclare a `setupItem` function that receives an item as its parameter.\nAdd a 'dragstart' event listener, where the callback function receives the event as its argument.\nIn the listener, declare a `draggedId` equal to the event.target.id.\nThen invoke `event.dataTransfer.setData('text/plain', draggedId`.\nThis is an API that basically exists to make it easier for drag/drop apps to keep track of which item a user dragged.\n\nBack within `setupItem`, add an additional `dblclick` listener to the `item` and pass `onDoubleClick` as the callback.\n\nIn the module scope, declare a function `onDoubleClick`.\nIn the function, grab the \"unranked dropzone\" via querySelector.\nThen, IF `unrankedDropzone !== this.parentNode`, invoke `unrankedDropzone.appendChild(this)`.\nBasically, we check to see if the double clicked item was already in the unranked dropzone and if not, we move it there.\n\nIn the module, invoke `querySelectorAll` to grab each of the `.drop-zone` classed divs, then loop over each of them and pass `setupDropzone` as the callback.\n\nFor the `setupDropzone` function, it accepts a `dropZone` element for its parameter.\nAdd a `drop` event listener to the `dropZone` and pass `onDropOverZone` as the callback.\nThen, add a `dragover` event listener to the dropzone and make sure the callback just invokes `event.preventDefault()` since the default behavior is actually to prevent drops, surprisingly.\n\nBack in the module, declare `onDropOverZone` as a function that accepts an event.\nIn the function, immediately invoke `preventDefault` because SOME browsers actually treat the dataTransfer property like links.\nThen, declare `draggedId = event.dataTransfer.getData('text/plain')`.\nUse the `draggedId` to obtain the dragged item using `getElementById`.\nThen, if `this !== draggItem.parentNode`, invoke `this.appendChild(draggItem)`.\nThis ensures we only move the item if its not already in the current dropzone.",
      timeStamp: '2023-05-17T04:36:15.389Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/tier-list',
    },
  ],
  [
    'Time based key value store',
    {
      categories: [],
      daysBeforeReminder: '8',
      name: 'Time based key value store',
      notes:
        'Initialize `this.store = {}`.\nFor the `set` method, if `this.store[key]` is falsey then assign it to an empty array.\nNext, push a tuple in the shape of `[value, timestamp]` into the array.\nBecause the prompt guarantees that the timestamps we receive are always in ascending order, we dont need to worry about sorting the array after we insert.\n\nThe `get` method is trickier.\nInitialize `result = ""` because the prompt specifies that if there is no value at a given key then we should return an empty string.\nNext, declare `arr = this.store[key] || []` so that we can easily binary search over the potential values.\nDeclare start, end, and mid just as you would with any binary search, then loop while start < end.\n\nEach loop, calculate `mid` as usual.\nThen, if `arr[mid][1] <= timestamp`, we know we have a valid value so we can update `result = arr[mid][0]` and then update `start = mid + 1`.\nThis works because the prompt doesnt want the closest timestamp, it wants the closest timestamp LESS THAN or equal to to requested timestamp.\n\nElse if the above check was false, then we shrink the window via `end = mid`.\n\nOnce the binary search is over, we can just return `result`.',
      timeStamp: '2023-06-02T20:59:49.041Z',
      url: 'https://leetcode.com/problems/time-based-key-value-store/description/',
    },
  ],
  [
    'Tip Calculator',
    {
      categories: [],
      daysBeforeReminder: '50',
      name: 'Tip Calculator',
      notes:
        'The problem constraints make this easier to solve with "brute force" React -- create a `useState` for the bill, tip, and people inputs.\n\nThese useStates will always expect a NUMBER value, so within the input `onChange` make sure to convert the event.target.value into a number when you set the relevant state.\nBecause the onChanges are so simple, just define them in line on each input element.\n\nWithin the component body, make `totalTip` and `tipPerPerson` derived states.\ntotalTip = `(bill * tipPercentage) / 100`.\ntipPerPerson is obvious.\nMake sure BOTH of them fall back to `NaN` via the `||` operator so that when we check `isNaN` for our paragraphs it will work properly.\n\nDisplaying the actual tips is tricky -- we need to handle `NaN` so we cant just render `Total Tip ${totalTip}` in our JSX.\n\nInstead, we need to do a ternary and some template literals:\n<p>\nTotal Tip: {isNaN(totalTip) ? \'-\' : `$${totalTip.toFixed(2)}`}',
      timeStamp: '2023-06-06T04:19:45.242Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/tip-calculator',
    },
  ],
  [
    'Toasts',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'Toasts',
      notes:
        "common mistake:\n- invoking `container.remove(toast)` instead of just invoking `toast.remove()`\n- not using `durationInput.value ? Number(durationInput.value) : 500` to handle possible invalid values\n\nSave all the inputs, buttons, and container into constants EXCEPT for the radio buttons.\n\nDeclare an `addToast` function, which will wind up doing 100% of the work for this challenge.\nSave a `message` variable and `cancelable` variable based on their respective input's `value`.\nDeclare a `type` that is equal to `querySelector('input[name=\"type\"]:checked')` so that it grabs whichever radio is currently selected.\n\nCreate a `toast` div and add the 'toast' class and a `${type}-toast` class to dynamically set the right class.\nCreate a `p` paragraph and add the 'message' class to it.\nif the `message` itself is falsey (because the message input is empty) then reassign its text based on a ternary that looks at the `type`.\nThen, set the `p` text content to the message.\nAppend the `p` to the toast.\n\nIF `cancelable` is true (the input is checked), then create a `closeBtn` button.\nAssign the textContent and give it the relevant class name.\nAssign the `closeBtn` onclick to an arrow function that invokes `toast.remove()` so that it immediately deletes the toast when clicked.\nThen, append the `closeBtn` to the `toast`.\n\nDeclare a `duration` variable equal to the `durationInput` value converted to a number (if the value is truthy), otherwise default the value to 500.\nCheck if `duration` is < 500 and reassign it to 500 if true.\n\nPREPEND the `toast` to the `toastContainer` and then immediately set a timeout to invoke `toast.remove` once the duration is up.\n\nBack in the module scope, assign the `addBtn` onclick to `addToast`.\nAlso assign the `clearBtn` onclick to a function that invokes `replaceChildren()` on the `toastContainer`",
      timeStamp: '2023-05-27T20:23:27.556Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/toasts',
    },
  ],
  [
    'Top k frequent elements',
    {
      categories: ['heaps'],
      daysBeforeReminder: '51',
      name: 'Top k frequent elements',
      notes:
        'Create a Heap class.\n\nIn the main function create a Map. \nLoop over the input array and set the counts of each number in the Map.\n\nThen, create a maxHeap. Loop over the Map itself using `forEach`, and push a tuple containing [frequency, integer] into the minHeap. \nIf the minHeap length becomes > k just break the while loop to avoid adding unnecessary tuples.\n\nAfter the while loop, create an output array. \n\nWhile the minHeap has length and k > 0, remove from it and insert the 2nd value of each tuple so we have a list of the most frequent integers. decrement k on each loop',
      timeStamp: '2023-04-29T18:24:59.889Z',
      url: 'https://leetcode.com/problems/top-k-frequent-elements/',
    },
  ],
  [
    'Traffic Light in React',
    {
      categories: [],
      daysBeforeReminder: '17',
      name: 'Traffic Light in React',
      notes:
        'common mistakes:\n- not assigning `aria-live="polite"` to the traffic light container div\n- not assigning `aria-label={`current light: ${currentColor}`}` on that same container div\n\nInside of the main `App.js`, define a `config` object where each key is a color and the value is an object in the shape of `{ backgroundColor: \'colorAsString\', duration: integer, next: nameOfNextColorInCycle }`.\n\nThis config object is great because we could also add additional colors if we wanted to, and wouldnt need to modify the TrafficLight implementation.\n\nIn the TrafficLight.js file, ensure that the main component accepts a `config` prop as well as a `layout = "vertical"` prop (some countries use horizontal traffic lights instead of vertical) and a `initialColor = "green"` prop.\n\nIn the module scope, create a `Light` component that will accept a `backgroundColor` prop.\nThis component just returns a div with `aria-hidden={true}, className="traffic-light", style={{backgroundColor}}`.\nWe use aria-hidden since these divs are purely for color purposes.\n\nBack in the main TrafficLight component, declare `color` via React.useState(initialColor).\n\nThen write a useEffect that depends on `currentColor`.\nIn the effect, destructure `duration` and `next` from `config[currentColor]`.\n\nCreate a timer via setTimeout, and simply invoke `setCurrentColor(next)` based on the `duration` we destructured.\n\nMake sure to save the timer into a constant so that we can clean it up via the hooks return statement.\n\nIn the JSX return for the TrafficLight, render a div with `aria-live="polite"` so that the changes are announced to screen readers.\nAlso assign `aria-label={`current light: ${currentColor}`}` so that the current color is always clear to screen readers.\nGive the div a classname of `traffic-light-container`, and then a conditional className of `horizontal` based on the layout prop (layout !== "vertical").\n\nInside of the container div, Loop over the keys in the `config` object via `Object.keys(config).map(color)`.\nFor each iteration, return the `Light` component and pass in the backgroundColor via `color === currentColor ? config[color].backgroundColor : undefined` so that the inactive lights arent also filled in.',
      timeStamp: '2023-06-09T02:41:10.571Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/traffic-light',
    },
  ],
  [
    'Transfer List in React',
    {
      categories: [],
      daysBeforeReminder: '1',
      name: 'Transfer List in React',
      notes:
        "Import `useId` and `useState` from React.\n\nDeclare a function `CheckboxItem` that accepts `onChange, label, checked` props.\nGenerate a unique id for the item via `useId`, which will be used to associate the label with the checkbox.\nFor the return statement, render a `div` with a clasName like `transfer-list__section__items__item`\nInside the div, render a label element with attribute`htmlFor={idGeneratedByUseId}` and the `label` prop as its children.\nThen render a sibling checkbox input with `id={idGeneratedByUseId}`, `checked={checkedProp}` and `onChange={onChangeProp}`.\n\nBack in the module scope, declare our next helper function `ItemList` which accepts `items` and `setItems` props.\n`items` is actually going to be a Map rather than an array, since marking each item as checked/unchecked as well as removing items from an array are all O(n) operations.\nInstead we can use a Map since updating and removing are both O(1) time AND maps are ordered, so we dont have to worry about elements moving around randomly in our UI.\n\nItemList has no state of its own, so we can immediately return a `div` with a class of `tranfer-list__section`.\nThis div immediately renders a `ul` with a className of `transfer-list__section__items`.\nInside of the `ul`, we make an array via `Array.from(items.entries()).map( [label, checked] )`.\n\nInside of the `.map()` callback, return a `li` with a `key` of `label`.\nInside the `li`, return a `CheckboxItem` and prop drill the `label` and `checked` arguments as props.\nFor the `onChange` of the CheckboxItem, pass an anonymous function: `() => {\nconst newItems = new Map(items)\nnewItems.set(label, !items.get(label))\nsetItems(newItems)\n}`\n\nBack in the module scope, we'll make 2 arrays: defaultLeftItems = ['HTML', 'JavaScript', 'CSS', 'TypeScript'].\nAs wel as defaultRightItems = ['React', 'Angular', 'Vue', 'Svelte'].\n\nNext, create a utility function `generateItemsMap` that accepts an `items` argument.\nIt returns `new Map(items.map(label => [label, false]`\n\nAfter that function, declare another utility `hasNoSelectedItems(items)`.\nThis function returns `Array.from(items.value()).filter(Boolean).length === 0`\n\nNext declare yet another utility `transferAllItems`.\nIt accepts `itemsSource, setItemsSource, itemsDestination, setItemsDestination` as arguments.\nThis function first invokes `setItemsDestination(new Map( [...itemsDestination, ...itemsSource] ) )`\nThen it invokes `setItemsSource(new Map()`.\nThis effectively moves all items to one side and then resets the other side.\n\nThe next utility is `transferSelectedItems`, which accepts the same arguments as the previous utility.\nIn the function, declare `newItemsSource = new Map(itemsSource)`.\nAlso declare `newItemsDestination = new Map(itemsDestination)`.\n\nTo remove the selected items from the source list and move them to the destination, we invoke `itemsSource.forEach( (value, key) => {\nif (!value) return;\nnewItemsDestination.set(key, value)\nnewItemsSource.delete(key)`\nLastly, we invoke `setItemsSource(newItemsSource)` and do the same for `setItemsDestination(newItemsDestination)`\n\nWith all of that out of the way, we finally work on the main App component.\nDeclare `itemsLeft` via useState(generateItemsMap(defaultLeftItems) and do the same for itemsRight.\n\nInside the JSX, render a parent div with a className of `transfer-list`.\nThen render `ItemsList` as a child and propdrill `items={itemsLeft} setItems={setItemsLeft}`.\nAs a sibling to ItemsList, we render another div with a className of `transfer-list__actions` which contains all the buttons.\n\nFor the first button, give it an `aria-label` of \"Transfer all items to left list\" so that screen readers can understand it.\nset an attribute `disabled={itemsRight.size === 0}`.\nGive it a click handler via `() => {\ntransferAllItems(itemsRight, setItemsRight, itemsLeft, setItemsLeft)`\nAs a child of the button render a span with `aria-hidden={true}` and text content of `&lt;&lt;` (2 less than arrows).\n\nThe next sibling button within the transfer-list__actions div has an aria-label of \"Transfer selected items to left list\".\nIt has `disabled={hasNoselectedItems(itemsRight)}`.\nAs an onClick it has `() => transferSelectedItems(itemsRight, setItemsRight, itemsLeft, setItemsLeft)`.\nIt has the same child aria-hidden span as the previous button, but with text content of a single `&lt;`\n\nThe next two sibling buttons use `&gt;` for the child span of the \"transfer selected items to right list\" button and `&gt;&gt;` for the \"transfer all items to right list\" button.\nclick handlers and disabled should be obvious.\n\nLastly, after the `transfer-list__actions` div we just render another `<ItemsList items={itemsRight} setItems={setItemsRight} />`\n\nstyles:\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.transfer-list {\n  border: 1px solid #ccc;\n  display: flex;\n  max-width: 768px;\n  margin: 0 auto;\n}\n\n.transfer-list__section {\n  padding: 20px;\n  flex-grow: 1;\n}\n\n.transfer-list__section__items {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n}\n\n.transfer-list__section__items__item {\n  display: flex;\n  gap: 8px;\n}\n\n.transfer-list__actions {\n  border-color: #ccc;\n  border-width: 0 1px 0 1px;\n  border-style: solid;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  row-gap: 12px;\n}",
      timeStamp: '2023-05-26T23:43:31.120Z',
      url: 'https://www.greatfrontend.com/questions/user-interface/transfer-list',
    },
  ],
  [
    'Trapping rain water',
    {
      categories: [],
      daysBeforeReminder: '38',
      name: 'Trapping rain water',
      notes:
        'use 2 pointers, starting from each end.\nAlso create a `maxL` pointer to contain the left max (initialize to first element in aray).\nDo the same for `maxR` initialized to last element in array.\n\nTypical 2 pointer loop while `l < r`.\nIF `maxL` is less than maxR then increment `l` and recalculate `maxL`.\nLastly, add `maxL - currEl`  to the total.\nThen do the exame same logic for `r` and `maxR` in the ELSE block.\n\nreturn total after the while loop',
      timeStamp: '2023-06-04T17:52:13.818Z',
      url: 'https://leetcode.com/problems/trapping-rain-water/',
    },
  ],
  [
    'Two sum',
    {
      categories: [],
      daysBeforeReminder: '61',
      name: 'Two sum',
      notes:
        'common mistakes:\n- storing the current index at `sums[currSum] = i` instead of at `sums[currNum] = i`\n\ncreate a hashmap to store the sums we find.\nLoop over the input.\n\nif `hasmap[currNum]` is not undefined, then just return that and our current index since we have the result.\n\nOtherwise define a `match` that is equal to the target minus our current number.\nstore the current number and the index in our sums, ie hashmap[match] = i.',
      timeStamp: '2023-05-23T22:47:35.014Z',
      url: 'https://leetcode.com/problems/two-sum/',
    },
  ],
  [
    'Two sum ii input array is sorted',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '82',
      name: 'Two sum ii input array is sorted',
      notes:
        'uses a two-pointer solution to work from the outsides inwards since the input array is already sorted.',
      timeStamp: '2023-04-14T01:05:29.371Z',
      url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    },
  ],
  [
    'Type Utilities II',
    {
      categories: [],
      daysBeforeReminder: '20',
      name: 'Type Utilities II',
      notes:
        'common mistakes:\n- checking for `value === null` instead of `value == null` (to ensure we also capture `undefined`)\n- `isObject` needs to check `type === "object" || type === "function`.\n- `isPlainObject` needs to check if the prototype is null || prototype === Object.prototype\n\nisArray can use `Array.isArray` OR if that is not allowed, we can check `input.constructor === Array` as long as the input `!= null`.\n\nisObject needs to check if the `typeof === "object" OR typeof === "function"`.\nIf == null, return false.\n\nisPlainObject is a bit trickier. If the input == null, return false early.\notherwise, save the result of `Object.getPrototype(input)` into a variable, and then return `result === null || result === Object.prototype`',
      timeStamp: '2023-05-31T04:47:08.342Z',
      url: 'https://www.greatfrontend.com/questions/javascript/type-utilities-ii',
    },
  ],
  [
    'Typeahead',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Typeahead',
      notes:
        "Save the input and `ul` into constants.\nDeclare a `timerId` variable.\n\nCreate a `handleInput` function that will receive a change event.\nIf the event value is an empty string, then invoke `clearSuggestions` and then return early.\nOtherwise, invoke `clearTimeout` on the current timer and then reassign the timerId to a new `setTimeout` that invokes `fetchAndAppend` after 500ms.\n\nBack in the module scope, declare and async function `fetchAndAppend`.\nIn the function, create a new `URL` and set the `text` search params to whatever the current `input.value` is.\nNext, fetch and parse the json into an array we can work with.\nCreate a document fragment, and then loop over each string in the parsed array.\nEach loop, create an `li` and assign its textContent to the string.\nAlso, assign the `li.onclick` to a function that updates the `input` value to the li's string, and then invokes `clearSuggestions`.\nAppend the `li` to our document fragment.\nAfter the loop appends, invoke `replaceChildren` on the `ul` element and pass the fragment as the argument.\n\nBack in the module scope, declare a `clearSuggestions` function.\nIn it, invoke `replaceChildren` with no arguments to clear out the list.\nThen, invoke clearTimeout.\n\nLastly, add an `input` eventListener to invoke `handleChange`.",
      timeStamp: '2023-05-19T18:35:14.120Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/typeahead',
    },
  ],
  [
    'Union Find',
    {
      categories: [],
      daysBeforeReminder: '6',
      name: 'Union Find',
      notes:
        'common mistakes:\n- checking `!this.parents[valueOne]` instead of `this.parents[valueOne] == null` to make sure we dont exclude the value "0"\n- forgetting to reassign `this.parents[value] = this.find(this.parents[value])` during path compression\n\nIn the constructor, create `this.parents = {}` and `this.ranks = {}`.\nThis.parents will be used to quickly look up the parent of a given value, while `this.ranks` will be used to efficiently union two sets in a way that ensures the "height" of the set(each set is a Tree-like structure) is minimized.\n\nFor the `createSet` method, assign `this.parents[value] = value`, aka make the value reference itself as its own parent.\nThen assign `this.ranks[value] = 0` to indicate that the value\'s set currently has no additional height.\n\nFor the `find` method, first check if `this.parents[value] == undefined` and just return `null` if so since the element does exist.\nOtherwise, we want to perform some path compression to help ensure that the height of a set is always minimized.\nSo `if (value !== this.parents[value])` then we can assign `this.parents[value] = this.find(this.parents[value])`.\nThis will recursively reassign the value\'s parent until it has a height of `1`, helping to ensure out Sets dont wind up with crazy heights of `5` or something (imagine a binary tree where every node exists on the left hand side, aka worst-case scenario height-wise).\nFinally, we can return `this.parents[value]`\nTODO: draw this out to improve understanding.\n\nBecause we always perform path compression, the `find` time complexity and space complexity is below O (log n), and is O (alphaSymbol(n)) -- google it :)\nThe same also applies to space complexity, due to the recursion.\n\nFor the `union` method, if `this.parents[valueOne] == undefined || this.parents[valueTwo] == undefined` then return early since we cant union nonexistent elements.\nOtherwise, declare `valueOneRoot = this.find(valueOne)` and so the same for `valueTwo` so that we have the root of the set holding each value.\n\nNext, we want to efficiently union the two sets in a way that minimizes the height of the resulting union set (remember, it looks like a Tree structure).\nSo if `this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]` then we assign `this.parents[valueOneRoot] = valueTwoRoot` to add the smaller tree into the larger one.\nElse if the inverse is true then we assign `this.parents[valueTwoRoot] = valueOneRoot`.\nElse, the two sets have the same height and we can just arbitarily assign `this.parents[valueTwoRoot] = valueOneRoot` and then increment `this.ranks[valueOneRoot]` by 1 to indicate that it has some new height..',
      timeStamp: '2023-06-09T01:37:54.219Z',
      url: 'https://www.algoexpert.io/questions/union-find',
    },
  ],
  [
    'Unique Generalized Abbreviations ',
    {
      categories: ['subsets'],
      daysBeforeReminder: '45',
      name: 'Unique Generalized Abbreviations ',
      notes:
        'Create an AbbreviatedWord class that will be a helper. \nIt accepts a string, `nextIndex`, and `replacedLetters` to track how many letters have been replaced.\n\nIn the main function, create an output array and a queue. \nThe queue should contain one element, a new AbbreviatedWord that receives an empty string, 0, and 0.\n\nLoop while there are elements still in the queue. \nEach while loop, shift an element from the queue. \nIF that elements `nextIndex` is equal to input.length, do a nested if checl:\nif the elements `replacedLetters` is greater than 0, \nappend the `replacedLetters` to the current string without pushing the result. \nThen, regardless of whether the replacedLetters was appended or not, push the string into the output array.\n\nELSE, if the nextIndex didnt equal the input length, push a new abbreviation into the queue that passes the existing string but increments `nextIndex` AND `replacedLetters`, indicating that we have replaced a letter. \n\nStill within the else block, if the replacedLetters is greater than 0, add the replacedLetters to the current string. \n(This is how we get strings like `c2e` from the string `code`.)\nThen, append the character from the input string @ nextIndex, so `str += word[abrev.nextIndex]`. \nFinally, push a new abbreviation by passing in the current string, incrementing nextIndex, and resetting count to 0.\n\nAfter processing queue, return the results',
      timeStamp: '2023-06-02T01:00:36.411Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN',
    },
  ],
  [
    'Valid palindrome',
    {
      categories: ['twoPointers'],
      daysBeforeReminder: '36',
      name: 'Valid palindrome',
      notes:
        'Lowercase the string, and replace all non-word characters with a regex -- /[^a-z0-9]/g.',
      timeStamp: '2023-05-23T04:28:40.668Z',
      url: 'https://leetcode.com/problems/valid-palindrome/',
    },
  ],
  [
    'Valid parentheses',
    {
      categories: [],
      daysBeforeReminder: '57',
      name: 'Valid parentheses',
      notes:
        'create a `pairs` object where the key is the CLOSING bracket and the value is the opening bracket.\n\nIn the main function, create an empty stack and then loop over the input string.\nIf the current character is a valid key in our `pairs` object, then pop from the stack and compare `popped !== currChar` and return false if that check is true.\n\nOtherwise if the current character was not a valid key then we have an opening bracket, so we can just push it onto our stack.\n\nAt the end, return `stack.length === 0` since the stack should be empty if each opening bracket had a closing bracket.',
      timeStamp: '2023-06-02T20:33:03.257Z',
      url: 'https://leetcode.com/problems/valid-parentheses/',
    },
  ],
  [
    'Valid sudoku',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Valid sudoku',
      notes:
        'https://youtu.be/TjFXEUCMqI8\ncommon mistake: \n- forgetting to handle `.` symbols\n- not using `Math.floor` when setting `squares[sq]`\n- relying on helper functions instead of just doing all logic within the 2 for loops\n\nSince we always need to be checking for duplicates in rows, columns, and individual squares (the designated 3x3 parts of the sudoku board), create an empty object for `rows`, `cols`, and `squares`.\n\nNext, loop over each row in the input board `let r = 0; r < 9`.\nSince we need to traverse the whole board, immediately create a nested loop `let c = 0; c < 9`.\n\nif the current element in the board is empty, then just `continue`.\n\nInserting into the `sq` board is tricky since we cant *easily* tell which square we are currently in.\nTo find the corresponding square, create a template literal for ${Math.floor(row / 3)}, ${Math.floor(col / 3)} and then save it to a variable.\nThis works because we know we only have up to 3 squares (to create our total 9x9 grid), and we can make them 0 indexed rather than 1 indexed.\n\nBecause this is JS, if `cols[col]` is falsey then it means we dont have a Set created for the current column yet, so set `cols[col] = new Set`.\nDo the same thing for `rows[row]` and `squares[sq]`.\n\nWith that safety net created, IF `rows[row] || cols[col] || squares[sq]` has the current element in the board, then immediately return false.\n\nOtherwise, add the current element to the Set for each of rows/cols/squares.\n\nif the nested loops finish, then just return true since we know the board must be valid.',
      timeStamp: '2023-05-31T01:20:24.720Z',
      url: 'https://leetcode.com/problems/valid-sudoku/',
    },
  ],
  [
    'Validate binary search tree',
    {
      categories: ['dfs'],
      daysBeforeReminder: '38',
      name: 'Validate binary search tree',
      notes:
        "Easiest to solve when using recursion.\n\nMake sure the function accepts a `min` and `max` value with default params of Infinities.\nIf there is no root, return `true` as our base case.\n\nOtherwise, if the root.value is <= to `min` OR the root value is >= `max`, then we've violated the rules of our BST so we return `false`.\n\npast that `if` condition, just return the recursive func on the left && right nodes.\nWhen recursing to the left, `min` is unchanged (since we are allowed to decrease in value) but `max` is updated to the current node's value.\nThis is because ALL child nodes to the left of a given node need to be smaller than that node.\n\nThe same applies when traversing to the right, but in reverse -- `min` is updated (because all nodes must be larger than the parent node) but `max` is unchanged.",
      timeStamp: '2023-05-25T18:18:39.341Z',
      url: 'https://leetcode.com/problems/validate-binary-search-tree/',
    },
  ],
  [
    'Word search ii',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'Word search ii',
      notes:
        "Create a `Trie` class that resembles any other typical Trie, except it only has a constructor and `insert` method.\nFor the insert method, rather than specifying the end of a word with `*` symbol, save the actual word itself, ie `node.word = inputString`.\nThis saves us from having to manually build the strings in our main `findWords` function.\n\nBack in the main `findWords` function, initialize a new Trie and populate it by looping over each word from the input array.\nNext, for simplicity we should save the length of the board to a `rows` variable and the number of columns to a `cols` variable.\n\nCreate an `output = new Set()` and `visited = new Set()`.\n\nNext, create a `dfs` helper (can be within the findWords func or external, wont matter).\nThe `dfs` accepts a row, column, and node argument.\n\nWithin dfs, if `node.word` is truthy then add `node.word` to our output set.\nNext, do all conditional checks and return early if any is true:\n- row and col cannot be less than 0 OR === `rows` or `cols` since this would be out of bounds.\n- our `visited` set should not have `${row}${col}` within it (we use strings for immediate lookups and shallow comparison).\nThe current element in our board should not be falsey.\n\nAssuming none of those checks fail, we add the current row/col combo as a string to our `visited` set so that we dont reprocess squares we've already visited -- visited.add(`${row}${col}`).\nThen, we reassign `node` to `node[board[row][col]`.\n\nWith visited and node update, we recursively invoke dfs in all 4 directions -- row + 1, row - 1, col + 1, col - 1.\nAfter all recursive calls finish, we delete the current ${row}${col} from our visited since we are done processing our current round of dfs searches.\n\nTo end `findWords`, just loop over the entire board matrix and invoke `dfs(row, col, trie.root)`.\nAfter that loop ends, create a new Array from our `output` set and return it.",
      timeStamp: '2023-05-20T00:55:05.749Z',
      url: 'https://leetcode.com/problems/word-search-ii/',
    },
  ],
  [
    'Wordle',
    {
      categories: [],
      daysBeforeReminder: '30',
      name: 'Wordle',
      notes:
        "common mistakes:\n- forgetting to include `solution` in the Effect dependencies, causing `solution` to be undefined in the reducer\n\nNOTE: the below instructions use `.toUpperCase()` but the test cases use .toLowerCase(), so you need to account for that\n\nDeclare `NUM_GUESSES = 6` and `WORD_LENGTH = 5` constants.\n\nCreate a `reducer` that destructures `key`and `solution` from the dispatched object.\nImmediately destructure `guesses, currentGuess` from `state`.\nIF `guesses[NUM_GUESSES - 1] != null` or `guesses.includes(solution)` then just return `state` since the game is over or solved.\n\nPast that, perform a `switch` based on the `key`\nfor the 'Backspace' case just return `guesses` and update `currentGuess` to `currentGuess.slice(0, -1)` to remove the last character from the string.\n\nFor the 'Enter' case, IF `currentGuess.length !== WORD_LENGTH` then return state since the row is incomplete.\nDeclare a `currentGuessIndex` constant and set it to the result of `guesses.indexOf(null)`.\nSpread the `guesses` into a `newGuesses` array for immutability.\nAssign `newGuesses[currentGuessIndex]` to the `currentGuess`.\nThen return {guesses: newGuesses, currentGuess: ''} so that we reset the currentGuess.\n\nLastly, declare a `default` case.\nimmediately reassign `key` to `key.toUpperCase()` so we dont need to continuously modify it.\nAssign a `charCode` constant equal to `key.charCodeAt(0)`.\nDeclare an `isLetter` boolean based on `key.length === 1 && charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)`.\nThis is because some key characters, such as arrows, are more than 1 length.\n\nThen, IF `currentGuess.length < WORD_LENGTH && isLetter), return {guesses, currentGuess: currentGuess + key}.\notherwise, return `state` since we have a key that isnt a valid letter.\n\nIn the main Wordle component, invoke the useReducer and pass `{guesses: Array(NUM_GUESSES).fill(null), currentGuess: ''}` as the initial state.\nAlso destructure `guesses, currentGuess` from the `state`.\n\nFor simplicity, declare a `solution` via `useState` and initialize to an empty string.\nUse a useEffect to fetch the word and then set the `solution` based on `fetchedWords[Math.floor(Math.random() * fetchedWords.length)]`\n\nNext, use another `useEffect` that relies on `solution` in its dependency array.\nIn the useEffect, if `solution` is falsey then return early.\nOtherwise, declare a `handleKeyPress` function that takes in an event and then dispatches {key: event.key, solution}.\nThen, add a `keydown` listener to the window and pass in `handleKeyPress`.\nMake sure to remove the listener in the useEffect return statement.\n\nBack in the Wordle body, reuse the `currentGuessIndex` logic from the reducer.\nAlso, return `null` if the solution is falsey (because we havent fetched any words yet).\n\nIn the JSX, map over the `guesses`.\nEach iteration, return a GuessLine component and assign a `key`.\nThe guessLine receives the `solution` as a prop.\nIt receives `isFinal = currentGuessIndex > i || currentGuessIndex === -1`\nIt receives `guess = (i === currentGuessIndex ? currentGuess : guess ?? '').padEnd(WORD_LENGTH)`\n\nWithin the separate GuessLine component, destructure the props.\nIn the JSX, map over character in `guess.split('')`.\nEach iteration, declare `className = 'tile' `.\nIF `isFinal`, do some nested if/else checks:\nif `char === solution[i]` then append ' correct' to the className (notice the empty space!).\nelse if `solution.includes(char)`, append ' close' to the classname.\nelse append ' incorrect' to the className.\n\nFinally, return a div with a key and the classname, with the `char` as the text content.",
      timeStamp: '2023-05-18T02:18:54.442Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/wordle',
    },
  ],
  [
    'Words Concatenation',
    {
      categories: ['slidingWindow'],
      daysBeforeReminder: '40',
      name: 'Words Concatenation',
      notes:
        'create a Map to record the frequency of each WORD (not letter) in the input array.\nThen, loop over the input array to populate the map with word counts.\n\ncreate an output array that will contain the valid indices we find.\n\nPerform a for loop that ends when i < str.length - words.length * words[0].length + 1. \nThis helps us avoid iterating over the part of the input string where the substrings we\'ll create cannot possibly fit the full length of a string necessary to match the input array.\n\nDuring each iteration of the for loop, create a new Map that will hold the frequency of each substring we create. \nThen, do another for loop where `j` starts at 0 and ends when `j < inputArr.length`. \n\nWithin the nested for loop, create a `nextWordIndex` variable that is equal to `i + j * inputArr[0].length`. \nThis tells us the index for our next substring since each word is equal in length.\n\nOnce nextWordIndex is set, create a new variable to hold `inputString.subString(nextWordIndex, nextWordIndex + inputArr[0].length` to create the next substring.\n\nOnce we have the next substring, try to retrieve it from the "wordCounts" Map based on the input arr. \nif the substring isnt present, break the nested loop. \n\nAssuming it is present, set the substring into the substringCounts Map created during the main for loop. \nThen, compare the count at that map versus the count in the main map to see if we have seen the word too many times during this nested loop. \nIf we have too high of a frequency, break the loop.\n\nFinally, within the nested loop we can push `i` (the start of a valid substring) IF j + 1 === words.length because we reached the end of the j loop and didnt have to break for any reason.\n\nIn the main function, just return the results once the main for loop ends.\n---\nConsider this case\na) s.length = 10 -->(0-9 indexes) and\nb) given words[] = {"aa", "aa", "aa"}....\nc) The total length of substring is (3 words * 2 char len each) = 6.\n\nSo when searching for subString in \'s\' the window should contain at least 6 chars.\nSo possible start positions of subString in \'s\' are 0,1,2,3,4 only. From 5th position, there are only 5 chars or less to search...\nSo no point searching sections of \'s\' which have insufficient number of chars to required to find the subString\n+1 is required because array indexes start from 0 and not 1... an array of length 5 has index 0-4',
      timeStamp: '2023-05-11T21:58:18.933Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O',
    },
  ],
  [
    'getElementsByClassName',
    {
      categories: [],
      daysBeforeReminder: '10',
      name: 'getElementsByClassName',
      notes:
        "common mistakes:\n- forgetting to split on MULTIPLE spaces via `.trim().split(/\\s+/)`\n\nFor the `classNames` input string to be a match, it has to be a subset of the elements `classList` property.\nWe can't match on pure strings, because an input of `foo bar` should match an element with a className of `foo baz bar`, where an extra class exists in the middle.\n\nStart by reassigning the input `classNames` via `.trim().split(/\\s+/)` to turn it into a trimmed array.\nThen reassign it to a new Set, and immediately convert it back via `Array.from` so that we have an array with duplicates removed.\n\nDeclare an output array.\nDeclare a `recurse` function that accepts an `el` parameter.\nIn the function, if `el` is falsey then return;\n\nIf `classNames.every( cls => el.classList.contains(cls)`, then push the `el` into the output array.\nNOTE you must use classList.contains, because classList is a DOMTokenList rather than an array (so you cant use `.includes`).\n\nNext, loop over all of the children and recurse.\n\nBack in the main function body, loop over the input element's children and pass each one into the `recurse` function.\n\nFinally, return the output array.",
      timeStamp: '2023-05-31T23:50:54.157Z',
      url: 'https://www.greatfrontend.com/questions/javascript/get-elements-by-class-name',
    },
  ],
  [
    'getElementsByTagName',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'getElementsByTagName',
      notes:
        "declare an output array, and transform the input `tagName` into uppercase.\nThis is a required step because checking the JS `element.tagName` will always return an uppercase string for some reason.\n\nNext, declare a nested `traverse` function that accepts an `element` argument.\nWithin `traverse`, if the element is falsey then just return early.\nIf the current elements `.tagName` equals the input tagName, then push the element into the output array.\nLastly, loop over the element's `.children` and recursively invoke `traverse` on each child.\nNOTE, you need to check `i < (element.children || []).length` since children is potentially undefined.\n\nOutside of the `traverse` function, just loop over each of the input root's children (using the same `|| [].length` trick) and invoke `traverse` on each element.\n\nFinally, return the output",
      timeStamp: '2023-05-21T16:54:47.170Z',
      url: 'https://www.greatfrontend.com/questions/javascript/get-elements-by-tag-name',
    },
  ],
  [
    'jQuery Class Manipulation',
    {
      categories: [],
      daysBeforeReminder: '18',
      name: 'jQuery Class Manipulation',
      notes:
        "common mistakes:\n- using the regex `/s+/` without the leading forward slash (`/\\s+/`\n- forgetting to `.trim()` before using the `.split()` below\n- using `split(' ')` instead of using `split(/\\s+/)` to ensure we split on an unlimited number of consecutive spaces\n\nMajority of logic lives within `toggleClass`.\n\nWithin toggleClass, immeditately return `undefined` if the element is falsey.\n\nOtherwise, declare a `spacesRegex = /\\s+/` which will match any number of empty spaces.\nDeclare `classes = new Set(className.trim().split(spacesRegex)`.\nDo the same thing with `elementClasses`, making a Set from the target elements `className` property.\n\nLoop each element in `classes` (not the elementClasses!).\nDeclare a `shouldRemove` constant that is equal to `state === undefined ? elementClasses.has(clas) : !state`\n\nThen, if shouldRemove is true then delete the clas from the `elementClasses` set.\nOtherwise add it.\n\nAfter the loop is done, update `element.className` to `Array.from(elementClasses).join(' ')`.\nLastly, return `this`.\n\nThe other two addClass and removeClass methods are simple -- just invoke `this.toggleClass` and pass in whatever state boolean is needed before returning `this`",
      timeStamp: '2023-06-04T19:16:37.727Z',
      url: 'https://www.greatfrontend.com/questions/javascript/jquery-class-manipulation',
    },
  ],
  [
    'jQuery.css',
    {
      categories: [],
      daysBeforeReminder: '33',
      name: 'jQuery.css',
      notes:
        'common mistakes:\n- using an arrow function instead of a function declaration\n\nSelect the element from the DOM and save it to a constant.\nReturn an object that has a `css` method on it THAT MUST BE A FUNCTION DECLARATION.\nThe css method accepts obvious arguments.\nWithin the method, if the `assignment` argument is undefined, then if there is no element return `undefined`.\nOtherwise, return the element.style[property] OR undefined (since the property may not be set).\nDONT USE NULLISH COALESCING!\n\nPast those cases, if `assignment` is truthy and the element is truthy, then assign the elements style to the new assignment before finally returning `this` no matter what.\nReturning `this` is important to allow chaining of the `.css` method\n\nAdditional note: because arrow functions lexically scope `this`, the `css` method needs to be defined as a function declaration otherwise `this` will not refer to the returned object but to the original `$` function, which would break things.',
      timeStamp: '2023-05-20T17:58:47.966Z',
      url: 'https://www.greatfrontend.com/questions/javascript/jquery-css',
    },
  ],
  [
    'useFetch',
    {
      categories: [],
      daysBeforeReminder: '36',
      name: 'useFetch',
      notes:
        "Works best with a reducer, so import `useEffect` and `useReducer`.\n\nDeclare the `reducer` function outside the `useFetch` hook.\nThe function accepts `state` and the 2nd argument destructures `type, response, error`.\nExecute a `switch` block based on `type`.\n\nfor the 'loading' case, just spread the existing state into a new object and set `isLoading` to true.\nfor the `success` case, set `isLoading` to false, `error` to null, and use the `responseJSON` that was destructured.\nDo the same general thing for error: loading = false, responseJSON = null.\n\nwithin `useFetch`, invoke useReducer and pass in the `reducer` and a default state where `loading` is true and the other 2 states are null.\n\ninvoke a `useEffect` and immediately declare a `shouldCancel = false` boolean that will be used to cancel the resulting fetches (alternatively, use an AbortController).\n\ndeclare a nested async function `getData`.\nThis function immediately dispatches a 'loading' action.\n\nThen, use a `try` block to fetch the url.\nOnce the JSON is returned, transform it into normal JS code via `response.json()`.\nCheck is `shouldCancel` is true and immediately return if so.\nOtherwise, dispatch a `success` action and pass in the resulting data.\n\nFor the catch block, we check if `shouldCancel` is true and return early if so.\notherwise we dispatch an error action and pass the error on the object.\n\nStill within the useEffect, invoke the `getData` helper.\nLastly, use the `return` of the useEffect to set shouldCancel to true -- `return () => {shouldCancel = true}`\n\nOutside the useEffect, we can just return `state` since it contains all the necessary values",
      timeStamp: '2023-06-06T16:50:06.330Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useFetch',
    },
  ],
  [
    'useInterval',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'useInterval',
      notes:
        'Declare a `callbackRef` and initialize it with the `callback` argument.\n\nCreate one `useEffect` that updates the ref whenever `callback` changes.\n\nCreate another useEffect for the interval work.\nIn this useEffect, if `delay == null` then just return early.\nOtherwise, invoke `setInterval` and have it invoke the callbackRef.current with the `delay` arg, then save the timer into an `intervalId` variable.\nFor the effect cleanup, simply invoke `clearInterval(intervalId)`.\n\nThis works because the effect cleanup runs every time the component unmounts or the dependency array changes, so we dont need to worry about saving the interval into a ref or doing any other complex cleanup',
      timeStamp: '2023-05-20T17:47:54.987Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useInterval',
    },
  ],
  [
    'useLocalStorage',
    {
      categories: [],
      daysBeforeReminder: '35',
      name: 'useLocalStorage',
      notes:
        'common mistake:\n- you only need a useEffect that listens to `value`\n\nDeclare a `[value, setValue]` tuple with useState.\nThe useState uses lazy evaluation to determine its initial value:\n`() => (JSON.parse(localStorage.getItem(key)) ?? initialValue))`\n\nFrom there, fire a `useEffect` that invokes `localStorage.setItem(key, JSON.stringify(value))` and include `value` in the dependency array.\n\nFinally, just return the useState tuple',
      timeStamp: '2023-06-01T21:57:18.300Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useLocalStorage',
    },
  ],
  [
    'useMap',
    {
      categories: [],
      daysBeforeReminder: '40',
      name: 'useMap',
      notes:
        'common mistake:\n- not using lazy evaluation during `setMap()` to take in the `prev` and then turn it into a new Map()\n\nDeclare a `map, setMap` via `useState` -- initialize the useState with `new Map(initialValue)`.\n\nfor the `set` function, declare a `set` constant that is equal to a `useCallback`.\nThe useCallback takes in `key` and `val` arguments, and has an empty dependency array.\nWithin the nested useCallback, invoke `setMap` and use lazy evaluation to receive the `previousMap` as an argument.\nWithin the lazy eval func, clone the map via `new Map(prevMap)` and then set the `key + val` combo.\nLastly, return the newMap within the `setMap` lazy eval so that the state updates and we trigger a render.\n\nthe `deleteFunc` logic is EXACTLY the same, except you delete a key in the newMap instead of setting a key.\n\nthe `clear` function is simpler -- use a `useCallback` that invokes `setMap(new Map())` ',
      timeStamp: '2023-05-31T01:24:32.962Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useMap',
    },
  ],
  [
    'useStateWithHistory',
    {
      categories: [],
      daysBeforeReminder: '34',
      name: 'useStateWithHistory',
      notes:
        'common mistake:\n- not increment historyIndex when pushing a new value into `history`\n\nCan be done with a single `history` and `currIndex` state, along with a `changeIndex` function that can flexible increase/decrease the `currIndex`.',
      timeStamp: '2023-05-19T17:06:29.623Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useStateWithHistory',
    },
  ],
  [
    'useWindowSize',
    {
      categories: [],
      daysBeforeReminder: '40',
      name: 'useWindowSize',
      notes:
        "Declare a `width` and `height` state via `useState`, and initialize both via `window.innerWidth/innerHeight`.\n\nCreate a `useEffect` with a nested function that sets the width + heights.\nWithin the useEffect, add an eventListener to the window for the 'resize' event, and pass the function that updates width + height states.\n\nMake sure that the useEffect cleanup function removes the event listener!",
      timeStamp: '2023-05-11T01:13:40.370Z',
      url: 'https://www.algoexpert.io/frontend/coding-questions/useWindowSize',
    },
  ],
];

export default {
  questionMocks,
  questionMocksLarge,
};
