export type DOMMessage = {
  type: 'GET_DOM';
};

export type DOMMessageResponse = {
  title: string;
  headlines: string[];
};

const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log('[content-script.js]. Message received', msg);

  const headlines = Array.from(document.getElementsByTagName<'h1'>('h1')).map(
    (h1) => h1.innerText
  );

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    title: document.title,
    headlines,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
