import { ReminderInterface } from '~/components/QuestionCard/QuestionCard';

export const questionMocksLarge: [string, ReminderInterface][] = [];
for (let i = 0; i < 1000; i++) {
  questionMocksLarge.push([
    `${i}`,
    {
      name: `${i}`,
      timeStamp: new Date().toISOString(),
      daysBeforeReminder: '1', // TODO: random between 1-30
      url: `${i}`,
    },
  ]);
}

export const questionMocks: [string, ReminderInterface][] = [
  [
    'Fruits into Baskets ',
    {
      daysBeforeReminder: '5',
      name: 'Fruits into Baskets ',
      timeStamp: '2022-06-16T07:52:49.667Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ',
    },
  ],
  [
    'Longest Subarray with Ones after Replacement ',
    {
      daysBeforeReminder: '3',
      name: 'Longest Subarray with Ones after Replacement ',
      timeStamp: '2022-06-18T01:17:35.680Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ',
    },
  ],
  [
    'Longest Substring with Distinct Characters ',
    {
      daysBeforeReminder: '4',
      name: 'Longest Substring with Distinct Characters ',
      timeStamp: '2022-06-17T02:38:58.908Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO',
    },
  ],
  [
    'Longest Substring with Same Letters after Replacement ',
    {
      daysBeforeReminder: '1',
      name: 'Longest Substring with Same Letters after Replacement ',
      timeStamp: '2022-06-18T00:34:50.291Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR',
    },
  ],
  [
    'Longest Substring with maximum K Distinct Characters ',
    {
      daysBeforeReminder: '7',
      name: 'Longest Substring with maximum K Distinct Characters ',
      timeStamp: '2022-06-17T02:16:27.594Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80',
    },
  ],
  [
    'Maximum Sum Subarray of Size K ',
    {
      daysBeforeReminder: '6',
      name: 'Maximum Sum Subarray of Size K ',
      timeStamp: '2022-06-17T23:56:38.684Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP',
    },
  ],
  [
    'Pair with Target Sum ',
    {
      daysBeforeReminder: '1',
      name: 'Pair with Target Sum ',
      timeStamp: '2022-06-18T07:17:54.358Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP',
    },
  ],
  [
    'Permutation in a String',
    {
      categories: ['slidingWindow', 'bfs'],
      daysBeforeReminder: '1',
      name: 'Permutation in a String',
      notes: 'ayyyyy lmao',
      timeStamp: '2022-06-20T00:45:51.692Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D',
    },
  ],
  [
    'Remove Duplicates ',
    {
      daysBeforeReminder: '2',
      name: 'Remove Duplicates ',
      timeStamp: '2022-06-18T21:38:49.998Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA',
    },
  ],
  [
    'Smallest Subarray With a Greater Sum ',
    {
      daysBeforeReminder: '4',
      name: 'Smallest Subarray With a Greater Sum ',
      timeStamp: '2022-06-18T00:08:19.401Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ',
    },
  ],
  [
    'Squaring a Sorted Array ',
    {
      daysBeforeReminder: '1',
      name: 'Squaring a Sorted Array ',
      timeStamp: '2022-06-18T21:57:57.612Z',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R',
    },
  ],
];
