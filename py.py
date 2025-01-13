from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Directory to mount
MOUNT_DIRECTORY = "C:/Users/umar bello kanwa/Desktop/Files/Console"

if not os.path.exists(MOUNT_DIRECTORY):
    os.makedirs(MOUNT_DIRECTORY)

# Mount the directory
app.mount("/files", StaticFiles(directory=MOUNT_DIRECTORY), name="files")
