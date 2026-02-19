// script.js

// Functionality for streaming audio
function streamAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

// Functionality for downloading files
function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Example usage
// streamAudio('your-audio-file-url');
// downloadFile('your-file-url', 'filename.ext');