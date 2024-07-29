document.getElementById('translate-button').addEventListener('click', () => {
    const targetLanguage = document.getElementById('target-language').value;
    
    // Send a message to the content script to start translation
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "startTranslation",
        payload: { targetLanguage }
      });
    });
  });
  