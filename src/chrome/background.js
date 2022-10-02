// initialize extension
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    contexts: ['selection'],
  });
});

// This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(() => {
  // do something
});

// Use APIs that support event filters to restrict listeners to the cases the extension cares about. If an extension is listening for the tabs.onUpdated event, try using the webNavigation.onCompleted event with filters instead, as the tabs API does not support filters.
const filter = {
  url: [
    {
      urlMatches: 'https://www.google.com/',
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  console.info('The user has loaded my favorite website!');
}, filter);
