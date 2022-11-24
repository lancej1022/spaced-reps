# About

Spaced Reps is a Chrome extension that encourages spaced repetition learning of algorithms.

For those unfamiliar, spaced repetition is a learning approach where an individual repeatedly attempts to solve the same problem over an extended window of time.

Imagine that you attempt to solve the [Two Sum problem on Leetcode](https://leetcode.com/problems/two-sum/) and manage to solve it after some difficulty.
Rather than solve the problem and then "move on", you acknowledge that you probably need to keep practicing the problem a few more times before you feel confident that you can efficiently solve it on your first try in an interview setting.

Since you're using spaced repetitions to master the problem/pattern, you set a reminder to reattempt the problem from scratch in 2 days.

Those 2 days go by and then you reattempt the problem. It's easier this time around since you can remember the available patterns for solving the problem, but you still need 3 tries to get the algorithm right and pass all test cases.
So, you set another reminder for 4 days in the future.

Those 4 days go by and you reattempt the problem. This time, you solve it on the first attempt.

Once you've reached the point where you can successfully solve a problem on the first attempt, you can either set more reminder(s) even further into the future (7 days, 14 days, whatever) if you feel like you still need to solidify your understanding even further, or you can stop setting reminders for the problem if you are confident that you no longer need to practice it.

Academic research on spaced repetitions can be viewed @ https://www.pnas.org/doi/10.1073/pnas.1815156116 (there is plenty of other research available online as well).

## Technology

This extension is currently built in a way that guarantees support with Google Chrome, but it may not work in other browsers (Firefox, Edge). **There are no plans to support other browsers at the moment**, but Pull Requests to add support are certainly welcome.

The source code uses SolidJs for building the UI, Vanilla Extract for styling, and Vite for building the project.

### Tech guidelines

- do not create an `index.css` file or youll get vanilla-extract error due to `index.css.ts` already existing

## Get Started/Set Up

1. clone the repo.
2. run commands `npm ci && npm run build `
3. upload the dist folder to your Chrome extensions. You can check the documentation at the bottom of this section for instructions on uploading a local chrome extension https://developer.chrome.com/docs/extensions/mv3/overview/#hello-extensions.

## Attributions / Credits

The [rocketship icons](https://www.flaticon.com/free-icons/rocket) are created by Freepik - Flaticon
