document.getElementById('save-button').addEventListener('click', () => {
    const defaultLanguage = document.getElementById('default-language').value;
    
    chrome.storage.sync.set({ defaultLanguage }, () => {
      console.log('Default language saved:', defaultLanguage);
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('defaultLanguage', (data) => {
      document.getElementById('default-language').value = data.defaultLanguage || 'es';
    });
  });
  