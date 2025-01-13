export class Model {
    constructor(controller) {
        this.controller = controller;
        this.navigatorAddress = navigator.address;
        if ('WebSocket' in window) {
            this.webSocket = new WebSocket('ws://192.168.171.213:8000/dishare/message');
            this.webSocket.addEventListener('message', (e) => this.receivedMessage(JSON.parse(e.data)));
        } else this.controller.view.api.notify('WebSocket is not supported by this browser');
    }
    async sendMessage(data) {
        let message;
        switch (typeof data) {
            case 'string':
                message = {
                    'message': data,
                    'type': 'none/plain',
                    'name': 'undefined'
                };
                break;
            case 'object':
                message = {
                    'message': await this.readFile(data),
                    'type': data.type,
                    'name': data.name
                };
                break;
        }
        if (this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify({ message }));
        } else this.controller.view.api.notify('Could not sent your message');
        return message;
    }
    readFile(file) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.result);
            reader.readAsDataURL(file);
        });
    }
    receivedMessage(message) {
        this.controller.receivedMessage(message['message']);
    }
}