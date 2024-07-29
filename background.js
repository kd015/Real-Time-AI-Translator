chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "translate") {
      // Handle translation request
      const { text, targetLanguage } = message.payload;
      
      // Call your translation API here
      // Example using fetch:
      fetch(`https://api.example.com/translate?text=${text}&target=${targetLanguage}`)
        .then(response => response.json())
        .then(data => {
          sendResponse({ translatedText: data.translatedText });
        })
        .catch(error => {
          console.error('Error:', error);
          sendResponse({ error: 'Translation failed' });
        });
      
      // Return true to indicate that the response will be sent asynchronously
      return true;
    }
  });
  