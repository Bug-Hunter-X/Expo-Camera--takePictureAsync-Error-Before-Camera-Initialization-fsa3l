# Expo Camera: takePictureAsync Error Before Camera Initialization

This repository demonstrates a common error when using Expo's Camera API: calling `takePictureAsync` before the camera is fully initialized.  This results in an error indicating the camera is not ready.  The solution involves using the `onCameraReady` callback to ensure the camera is initialized before taking a picture.

## Bug

The `bug.js` file shows the problematic code, which attempts to call `takePictureAsync` immediately. 

## Solution

The `bugSolution.js` file demonstrates the corrected approach, incorporating the `onCameraReady` callback to handle camera initialization correctly. This prevents errors and ensures smooth camera operation.