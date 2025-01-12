import * as React from 'react';
import { Camera, useCameraDevices } from 'expo-camera';

export default function App() {
  const devices = useCameraDevices();
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (isCameraReady) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo', photo);
    }
  };

  const cameraRef = React.useRef(null);

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
        onCameraReady={() => setIsCameraReady(true)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 30,
              left: 30,
            }}
            onPress={() => takePicture()}
          >
            <Text style={{ color: '#fff' }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
