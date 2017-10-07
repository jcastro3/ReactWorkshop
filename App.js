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
  TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    flexDirection: 'column',
    padding: 10
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100
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
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  };
  
  render() {
  let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TextExample></TextExample>
        <ImageExample width={200} height={200}></ImageExample>
        <Blink text='this should blink'/>
        <View style={styles.block1}></View>
        <View style={styles.block2}></View>
        <View style={styles.block3}></View>
        <View style={styles.block4}></View>
      </View>
    )
  }
}
/* jshint ignore:end */
