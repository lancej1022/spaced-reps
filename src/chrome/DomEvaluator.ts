export type DOMMessage = {
  type: 'GET_DOM';
};

export type DOMMessageResponse = {
  difficulty?: string;
  headlines: string[];
  isAnswered?: boolean;
};

// This runs as a callback AFTER the extension App.tsx has run
const messagesFromExtensionListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log('[content-script.js] Message received', msg);

  // TODO: works on the LC website only, so we should conditionally invoke this
  const difficulty = document.querySelector('[diff]')?.textContent ?? '';

  // If we're on the submissions page AND we can find the `div` with the `success` prefix on its className, then we know the user already submit and finished the problem,
  // const isAnswered = window.location.href.includes('/submissions') && Boolean(document.querySelector('[class^=success]'));

  // rather than check if the answer was correct, we just check if theyre on the `/submissions` page. This way, they trigger
  // the right popup UI regardless of whether theyve got the answer correct or not.
  const isAnswered = window.location.href.includes('/submissions');

  const headlines = Array.from(document.getElementsByTagName<'h2'>('h2')).map((h2) => h2.innerText);

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    difficulty,
    headlines,
    isAnswered,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromExtensionListener);
