async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab);
  // localStorage.setItem('tabname', tab);
  return tab;
}

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  console.log('Received message from ' + sender + ': ', request);
  sendResponse({ received: true }); //respond however you like
});

// getCurrentTab()
//   .then((data) => {
//     console.log('newdata', data);
//   })
//   .catch((error) => {
//     console.log('error!', error);
//   });

// chrome.webNavigation.onCompleted.addListener(
//   getCurrentTab()
//     .then((data) => {
//       console.log('newdata', data);
//     })
//     .catch((error) => {
//       console.log('error!', error);
//     })
// );
