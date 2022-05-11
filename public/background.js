// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   let url = tabs[0].url;
//   // use `url` here inside the callback because it's asynchronous!
//   console.log(url);
// });

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);
  // localStorage.setItem('tabname', tab);
  return tab;
}

// getCurrentTab()
//   .then((data) => {
//     console.log('newdata', data);
//   })
//   .catch((error) => {
//     console.log('error!', error);
//   });

chrome.webNavigation.onCompleted.addListener(
  getCurrentTab()
    .then((data) => {
      console.log('newdata', data);
    })
    .catch((error) => {
      console.log('error!', error);
    })
);
