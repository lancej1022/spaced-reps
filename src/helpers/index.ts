import type { ReminderInterface } from '~/components/QuestionCard/QuestionCard';

function parseUrl(url: string) {
  const urlObj = new URL(url);
  const { hostname, pathname } = urlObj;

  const pathParts = pathname.split('/');
  // TODO: rather than assign this to an empty string, we should probably throw an error or something
  let problemName = pathParts[2] ?? '';
  let formattedTitle = problemName?.replaceAll('-', ' ');
  formattedTitle = formattedTitle[0]?.toUpperCase() + formattedTitle.slice(1);

  return { pathname, hostname, unformattedTitle: problemName, formattedTitle };
}

function testSize(obj: Record<string, unknown>) {
  const size = new TextEncoder().encode(JSON.stringify(obj)).length;
  const kiloBytes = size / 1024;
  console.log(`Size of all items in local storage is ${size} bytes.`);
  return kiloBytes;
}

const millisecondsPerDay = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / millisecondsPerDay);
}

function sortByDaysRemainingBeforeReminder(array: [string, ReminderInterface][]) {
  return array.sort((a, b) => {
    const daysSinceA =
      Number(a[1].daysBeforeReminder) - dateDiffInDays(new Date(a[1].timeStamp), new Date());
    const daysSinceB =
      Number(b[1].daysBeforeReminder) - dateDiffInDays(new Date(b[1].timeStamp), new Date());
    return daysSinceA - daysSinceB;
  });
}

const helpers = {
  parseUrl,
  testSize,
  sortByDaysRemainingBeforeReminder,
  dateDiffInDays,
};
export default helpers;
