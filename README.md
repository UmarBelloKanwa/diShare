# diShare

## Introduction
**diShare** is a simple message-sharing app designed for seamless communication between two users on the same network. It allows users to share text, images, and any type of file. Built using **FastAPI** as the backend and a browser-based client for the frontend, diShare ensures quick and secure file sharing without the need for internet access.

## Features
1. **Text Sharing**
   - Quickly send and receive text messages between users.

2. **Image Sharing**
   - Share images instantly for real-time communication.

3. **File Sharing**
   - Send and receive any type of file, ensuring flexibility in what can be shared.

4. **Network-Based Communication**
   - Works on local networks, ensuring fast and private data transfer.

## Technology Stack
- **Backend**: FastAPI (Python)
- **Frontend**: Browser-based interface (HTML, CSS, JavaScript)

## Prerequisites
Ensure you have the following installed:
1. **Python 3.9+**
2. **A modern web browser**

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/diShare.git
   cd diShare
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/macOS
   venv\Scripts\activate    # For Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

### Frontend Setup
1. Open your web browser.
2. Navigate to `http://<server-ip>:8000` where `<server-ip>` is the IP address of the machine running the server.

## Usage
1. **Connect to the Network**: Ensure both users are connected to the same local network.
2. **Open the App**: Access the app via the provided URL.
3. **Share Messages and Files**:
   - Type a message or select a file to share.
   - Click the **Send** button to transmit the message or file.
4. **Receive Messages and Files**: The receiving user will see incoming messages and files in real-time.

## Key Functionalities
- Peer-to-peer communication on the same network.
- Support for various file types.
- Real-time updates for shared content.

## Future Enhancements
1. Add support for group chats.
2. Implement encryption for enhanced security.
3. Introduce a Progressive Web App (PWA) version for offline capabilities.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributors
- **Umar Bello Kanwa** ([umarbellokawa@gmail.com](mailto:umarbellokawa@gmail.com))

---
Thank you for using diShare!


