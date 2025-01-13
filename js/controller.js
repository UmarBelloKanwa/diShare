 export class Controller {
    constructor(model, view) {
        this.model = new model(this);
        this.view = view;
        this.view.introBox(this.model.serverAddress);
        this.acceptConnection();
    }
    acceptConnection() {
        window.confirm('Are you sure you want to connect ?') && this.view.acceptedConnection(this);
    }
    sendMessage(input) {
        if (input.value.trim().length) {
            switch (input) {
                case this.view.ui.autoSizeTextAreas[0] :
                    this.model.sendMessage(input.value).then(msg => {
                        this.view.sentMessage(msg);
                    });
                    break;
                case this.view.ui.uploadFileInput :
                    for (const file of input.files) {
                        this.model.sendMessage(file).then(msg => {
                            this.view.sentMessage(msg);
                        });
                    }
                    input.value = '';
                    break;
            }
        }
    }
    receivedMessage(message) {
        this.view.receivedMessage(message);
    }
    displaySections(nav) {
        this.view.appSections(nav);
    }
}