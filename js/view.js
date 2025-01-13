export class View {
    constructor(renderUI, api) {
        this.ui = renderUI;
        this.api = api;
    }
    introBox(address) {
        this.ui.introBox.innerHTML = this.ui.introBoard(address);
    }
    acceptedConnection(ctr) {
        this.ui.initRendering();
        this.handleEvents.call(ctr);
    }
    appSections(nav) {
        switch (nav) {
            case this.ui.messagesNav:
                this.ui.messagesContainer.style.cssText += 'color:var(--bg); display:flex;';
                this.ui.filesContainer.style.cssText += 'color:var(--txt); display:none;';
                break;
            case this.ui.filesNav: 
                this.ui.filesContainer.style.cssText += 'color:var(--bg); display:block;';
                this.ui.messagesContainer.style.cssText += 'color:var(--txt); display:none;';
                break;
        }
    }
    sentMessage(message) {
        this.ui.messagesContainer.appendChild(this.ui.sentMessage(message));
        this.ui.autoSizeTextAreas[0].value = ""; this.ui.autoSizeTextAreas[0].style.height = '35px';
    }
    receivedMessage(message) {
        this.ui.messagesContainer.appendChild(this.ui.receivedMessage(message, 'api'));
    }
    handleEvents() {
        ['input', 'paste'].forEach((e, i) => {
            this.view.ui.autoSizeTextAreas[i]?.addEventListener(e, ev => {
                const area = ev.target; 
                if (!area.value.trim().length) area.value = '';
                if (area.scrollHeight < 150) area.style.height = area.scrollHeight + 'px';
            });
        });
        this.view.ui.sendTextMessageIcon.addEventListener('click', () => this.sendMessage(this.view.ui.autoSizeTextAreas[0]));
        this.view.ui.uploadFileIcon.addEventListener('click', () => {
            this.view.ui.uploadFileInput.click();
            this.view.ui.uploadFileInput.addEventListener('change', (e) => this.sendMessage(e.target));
        });
        [this.view.ui.messagesNav, this.view.ui.filesNav].forEach(
            nav => nav.addEventListener('click', (e) => this.displaySections(e.target))
        );
    }
}