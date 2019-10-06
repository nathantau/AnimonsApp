/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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




const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />

			{global.HermesInternal == null ? null : (
				<View style={styles.engine}>
					<Text style={styles.footer}>Engine: Hermes</Text>
				</View>
			)}

			<View style = {{backgroundColor: 'white', flex: 1,}}>

				<Header/>

				<View style = {{justifyContent: 'space-between', backgroundColor: 'white',}}>

								<View style = {{marginLeft:30, marginRight: 30, paddingBottom: 30}}>
        						<Button
        							onPress={() => {
        								alert('You tapped the button!');
        							}}
        							title="My Animons"
        						/>
        				</View>

        				<View style = {{marginLeft:30, marginRight: 30, paddingBottom: 30}}>
        						<Button
        							onPress={() => {
        								alert('You tapped the button!');
        							}}
        							title="My Profile"
        						/>
        				</View>

        				<View style = {{marginLeft:30, marginRight: 30, paddingBottom: 30}}>
        						<Button
        							onPress={() => {
        								alert('You tapped the button!');
        							}}
        							title="Capture"
        						/>
        				</View>

				</View>





			</View>

    </>
  );
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  block: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: 'white',
  },
  button: {
  },
});

export default App;
