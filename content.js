function captureAudioFromVideo(videoElement) {
    const audioContext = new AudioContext();
    const mediaElementSource = audioContext.createMediaElementSource(videoElement);
    const mediaStreamDestination = audioContext.createMediaStreamDestination();
  
    mediaElementSource.connect(mediaStreamDestination);
    mediaElementSource.connect(audioContext.destination);
  
    return mediaStreamDestination.stream;
  }
  
  const videoElements = document.getElementsByTagName('video');
  if (videoElements.length > 0) {
    const videoElement = videoElements[0];
    const audioStream = captureAudioFromVideo(videoElement);
  
    // Send the audio stream to the background script for processing
    chrome.runtime.sendMessage({
      type: "processAudio",
      payload: { stream: audioStream }
    });
  }
  