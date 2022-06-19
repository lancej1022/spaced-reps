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

// Listeners exist to trigger functionality once an event has fired. To react to an event, structure the desired reaction inside of the listener event.
chrome.runtime.onMessage.addListener((message, callback) => {
  const tabId = getForegroundTabId();
  if (message.data === 'setAlarm') {
    chrome.alarms.create({ delayInMinutes: 5 });
  } else if (message.data === 'runLogic') {
    chrome.scripting.executeScript({ file: 'logic.js', tabId });
  } else if (message.data === 'changeColor') {
    chrome.scripting.executeScript({
      func: () => (document.body.style.backgroundColor = 'orange'),
      tabId,
    });
  }
});
