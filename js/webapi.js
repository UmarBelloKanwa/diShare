export class myAPIs {
    notify(text) {
        if ('Notification' in window) {
            Notification.requestPermission().then( permission => void new Notification(text));
        } 
        console.log(text); 
        window.alert(text);
    }
    copyToClipboard(message, name) {
        message = name != 'undefined' ? name : message;
        if (navigator.clipboard != 'undefined') {
            navigator.clipboard.writeText(message);
            this.notify('copied');
        } else this.notify('Failed to copy the text');
    }
    download(file, name) {
        const link = document.createElement('a');
        link.download = name;
        link.href = file;
        if (name == 'undefined') {
            link.href = URL.createObjectURL(new Blob([file], { type : 'text/plain'}));
            link.download = file.slice(0, 12);
        } 
        link.click();
        this.notify('Downloaded file ' + link.download);
    } 
    shareToOthers(message) {
        if (navigator.share != 'undefined') {
            navigator.share({
                title : message.slice(0, 12),
                text : message,
            });
            this.notify('Shared');
        } else this.notify('Web Share API is not supported by this browser');
    }
    textToSpeech(message, name) {
        message = name != 'undefined' ? name : message;
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message);
            window.speechSynthesis.speak(utterance);   
        } else this.notify('Speech Synthesis API is not supported by this browser');
    }
}