from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins= [
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:20097",
        "http://127.0.0.1:20097",
        "http://192.168.43.213:5500",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
connected_users = {}

@app.websocket("/dishare/message")
async def message(websocket : WebSocket) :
    await websocket.accept()
    connected_users[websocket] = True

    try :
        while True :
           message = await websocket.receive_text()
           for user_ws in connected_users.items() :
               if user_ws != websocket :
                  await user_ws.send_text(message)

    except :
        del connected_users[websocket]
        #await websocket.close()

""""     
if __name__ == "__main__" :
    import uvicorn

    uvicorn.run(app, host="192.168.43.213", port=8000, reload=False)
"""
# python -m uvicorn server:app --host 192.168.43.213 --port 8000 --reload
# "C:\Users\umar bello kanwa\shopark"