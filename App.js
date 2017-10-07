/* jshint ignore:start */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TextExample from './Components/TextExample'
import ImageExample from './Components/ImageExample'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
  container: {
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  welcomeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignContent: 'flex-start'
  },
  searchInput: {
    height: 50,
    padding: 10,
    margin: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#fa3635',
    borderRadius: 8,
    color: 'black',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  picContainer: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  picItem: {
    width: 200,
    height: 200
  },
  block1: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'powderblue'
  },
  block2: {
    flex: 2,
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  block3: {
    flex: 3,
    height: 100,
    width: 100,
    backgroundColor: 'green'
  },
  block4: {
    flex: 4,
    height: 100,
    width: 100,
    backgroundColor: 'purple'
  }
});

class Welcome extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }
  static navigationOptions = {
    title: 'My First React App',
    headerTintColor: '#fa3635'
  };
  
  handleSubmit() {
    
  }
  
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }
  
  render() {
    const logo = { uri: 'http://axelvaldez.mx/assets/media/work/nearsoft-workshops.png' }; 
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcomeContainer}>
        <Logo src={logo}/>
          <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}/>
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.handleSubmit.bind(this)}>
            <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>   
    );
  }
};

class Logo extends React.Component {
  render() {
    return(
      <Image source={this.props.src} style={styles.logo}/>
    )
  }
}


const MyApp = StackNavigator({
  Welcome: { screen: Welcome }
});

export default class App extends React.Component {
  render() {
    return <MyApp style={styles.container}/>;
  }
}
/* jshint ignore:end */
