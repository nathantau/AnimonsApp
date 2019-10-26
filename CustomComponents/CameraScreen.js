import React, {Component, PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
'use strict';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class CameraScreen extends PureComponent {

	static navigationOptions = {
			header: null
	}

  constructor(props) {
	super(props);

	this.state = {
	  path: null,
	};
  }

	render() {
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					captureAudio={false}

					flashMode={RNCamera.Constants.FlashMode.off}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					androidRecordAudioPermissionOptions={{
						title: 'Permission to use audio recording',
						message: 'We need your permission to use your audio',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					onGoogleVisionBarcodesDetected={({ barcodes }) => {
						console.log(barcodes);
					}}
				/>
				<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
					<TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
						<Text style={{ fontSize: 14 }}> SNAP </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	takePicture = async() => {
		if (this.camera) {
			const options = { quality: 0.5, base64: true };
			const data = await this.camera.takePictureAsync(options);

			alert(data.uri);

			upload(data);

			console.log(data.uri);
		}
	};

}

const upload = (file) => {
  fetch('https://fafb9e51.ngrok.io', { // Your POST endpoint
    method: 'POST',
    headers: {
    },
    body: file // This is your file object
  }).then(
    response => response.json().then(
    success => alert('success' + JSON.stringify(success))) // Handle the success response object
  ).catch(
    error => alert(error) // Handle the error response object
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraScreen