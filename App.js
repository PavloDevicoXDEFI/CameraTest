import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import {
  useCameraDevices,
  useFrameProcessor,
  Camera,
} from 'react-native-vision-camera';
import { scanOCR } from 'vision-camera-ocr';

export default function App() {
   const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const scannedOcyarnr = scanOCR(frame);
    console.log(
      '🚀 ~ file: ScanQrCodeScreen.tsx:17 ~ frameProcessor ~ scannedOcyarnr:',
      scannedOcyarnr
    );
  }, []);

  useEffect(() => {
    Camera.requestCameraPermission();
    Camera.requestMicrophonePermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;
  console.log(
    '🚀 ~ file: ScanQrCodeScreen.tsx:44 ~ ScanQrCodeScreen ~ device:',
    device
  );
  return (
    <View style={styles.container}>
        {device ? (
        <Camera
          style={{ width:400, height:400, border: '1px solid red' }}
          device={device}
          isActive
          // frameProcessor={frameProcessor}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
