export class renderUI {
    constructor() {
        window.d = document;
        this.introBox = d.querySelector("[title=intro-box]"); 
        this.section = d.querySelector('section');
        this.messagesContainer = d.querySelector('[itemprop=messages]'); 
        this.messagesNav = d.querySelector('nav > header + div');
        this.filesNav = d.querySelector('nav > div + div'); 
        this.filesContainer = d.querySelector('[itemprop=files]');
    }
    introBoard(address) {
        return `
        <img src="./photos/logo.png">
        <h1> diShare </h1>
        <p> Connet your computer to share and chat locally without wasting your mobile data. </p>
        <div>
            <span> Step 1 </span>
            <p> Go to setting >> Network & Internet >> HotSpot and create a hotspot.  (Set your own password )</p>
            <span> Step 2 </span>
            <p> Connect your computer to the WiFi network you just created. (Use your own device name and password ) </p>
            <span> Step 3 </span>
            <p> ${ address ? 'Visit below address in your computer browser' : 'Set Hotspot first, to get address' }</p>
        </div>
        <input type="text" disabled value=" ${address  ? address : '192.168.__.__:__'} "> `;
    }
    initRendering() {
        this.introBox.hidden = 'hidden'; 
        this.section.removeAttribute('hidden');
        this.messagesContainer.innerHTML = `
        <form onsubmit="event.preventDefault(); return false">
        <div id="form-area"> 
            <textarea autosize placeholder="Type message here..."></textarea>
            <div id="icons-container">
                <img src="./photos/send.png" id="send">
                <img src="./photos/upload.png" id="upload">
            </div> 
        </div>
        <span> Chat with the user you connected to share <br> resources. </span>
        </form>`;
        this.filesContainer.innerHTML = `
        <h1 style="color: var(--txt);"> File <span id="big">S</span>erver </h1>
        <form>
        <p> For sharing big files you need to use file server </p>
        <label> Folder Path : </label>
        <textarea autosize placeholder="example C:\User\Folder\subFolder"></textarea>
        <div>
            <h1> 
                What <span id="big">Y</span>ou <span id="big"> C</span>
                an <span id="big">d</span>o <span id="big"> : </span> 
            </h1>
            <ol>
               <li> Edit </li> 
               <li> Download </li> 
               <li> Delete </li> 
               <li> Upload </li>
            </ol>
        </div> <br>
        <button> Serve </button>
        </form>`;
        this.messageInputParent = d.getElementById('form-area'); 
        this.sendTextMessageIcon = d.getElementById('form-area');
        this.uploadFileIcon = d.getElementById('upload'); 
        this.uploadFileInput = d.createElement('input');
        this.autoSizeTextAreas = d.querySelectorAll('[autosize]');
        this.uploadFileInput.setAttribute('type', 'file');
        this.uploadFileInput.setAttribute('multiple', '');
        this.fileServerFormElm = d.querySelector('[itemprop=files] form');
    }
    sentMessage(message) {
        const [msg, type, name] = Object.values(message)
            , div = d.createElement('div');
        div.innerHTML = name != 'undefined' ? name + '<br><br>' : '';
        type.startsWith('none/') ? div.textContent += msg : div.innerHTML += this.findElement(msg, type);
        return div;
    }
    receivedMessage(message, api) {
        const [msg, type, name] = Object.values(message)
            , p = d.createElement('p');
            console.log(message);
        type.startsWith('none/') ? p.textContent += msg : p.innerHTML += this.findElement(msg, type);
        p.innerHTML += (`
        ${name != 'undefined' ? '<br>' + name : ''}
        <span>
           <img src="./photos/copy.png" onclick="${api}.copyToClipboard('${msg}', '${name}')">
           <img src="./photos/download.png" onclick="${api}.download('${msg}', '${name}')">
           <img src="./photos/share.png" onclick="${api}.shareToOthers('${msg}')">
           <img src="./photos/listen.jpg" onclick="${api}.textToSpeech('${msg}', '${name}')">
        </span>
        `); 
        return p;
    }
    findElement(msg, type) {
        return type.startsWith('image/') ? `<img src="${msg}">` :
        type.startsWith('video/') ? `<video src="${msg}" controls> </video>` :
        type.startsWith('audio/') ? `<audio src="${msg}" controls> </audio>` :  `<object data="${msg}"></object>`;
    }
}