export type DOMMessage = {
  type: 'GET_DOM';
};

export type DOMMessageResponse = {
  headlines: string[];
};

// This runs as a callback AFTER the extension App.tsx has run
const messagesFromExtensionListener = (
  msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log('[content-script.js] Message received', msg);

  const headlines = Array.from(document.getElementsByTagName<'h2'>('h2')).map((h2) => h2.innerText);

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    headlines,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromExtensionListener);
