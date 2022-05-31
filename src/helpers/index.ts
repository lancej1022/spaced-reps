export function parseUrl(url: string) {
  const urlObj = new URL(url);
  const { hostname, pathname } = urlObj;

  // TODO: handles educative/grokking URL and leetcode separately
  // if (hostname === 'leetcode.com') {
  const pathParts = pathname.split('/');
  // TODO: rather than assign this to an empty string, we should probably throw an error or something
  let problemName = pathParts[2] ?? '';
  let formattedTitle = problemName?.replaceAll('-', ' ');
  formattedTitle = formattedTitle[0]?.toUpperCase() + formattedTitle.slice(1);

  return { pathname, hostname, unformattedTitle: problemName, formattedTitle };
  // }
}
