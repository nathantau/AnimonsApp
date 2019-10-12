import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableNativeFeedback
} from 'react-native';

import Header from './CustomComponents/Header'
import CameraScreen from './CustomComponents/CameraScreen'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class PizzaTranslator extends Component {

	  constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
      );
    }

}


function _onPressButton(){
	alert('tapped')
}

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

	render(){
		const {navigate} = this.props.navigation;

	return (
      <>
        <StatusBar />

  			<View style = {{backgroundColor: 'white', flex: 1,}}>

  				<Header/>

  				<View style = {{justifyContent: 'space-between', backgroundColor: 'white',}}>

  								<View style = {{margin: 30}}>
          						<Button
          							onPress={() => {
          								alert('You tapped the button!');
          							}}
          							title="My Animons"
          						/>
          				</View>

  								<View style = {{margin: 30}}>
          						<Button
          							onPress={() => {
          								alert('You tapped the button!');
          							}}
          							title="My Profile"
          						/>
          				</View>

          				<View style = {{margin: 30}}>
          						<Button
          							onPress={() => {
          								alert('You tapped the button!');
          							}}
          							title="My Friendsf"
          						/>
          				</View>

  			</View>


  			<View style={styles.bottom}>
  						<TouchableNativeFeedback

                              onPress={() => navigate('CameraScreen', {name: 'Jane'})}

  												background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
  											<View style={styles.button}>
  												<Text style={styles.buttonText}>CAPTURE {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
  											</View>
  						</TouchableNativeFeedback>
  				</View>

  			</View>

      </>
    );


	}


};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  block: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    color: 'white',
    height: 300,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    height: 300,
    justifyContent: 'flex-end',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  CameraScreen: {
  	screen: CameraScreen,
  },
});

const App = createAppContainer(AppNavigator);


export default App;
