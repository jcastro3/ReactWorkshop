/* jshint ignore:start */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
 } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  prettyfy: {
    color: 'red',
    fontSize: 34
  }
});

class Hola extends Component {
    render() {
      return(
        <Text style={{ 'fontSize' : this.props.size }}>{this.props.text}</Text>
      )
    }
}

class PrintImages extends Component {
  print(images) {
    return images.map((_image, idx) => <Image key={idx} source={_image} style={styles.logo}/>)
  }
  render() {
    return (
      <View>
        {this.print(this.props.images)}
      </View>
    )
  }
}

export default class Welcome extends Component {
  render() {
    let pic = [
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"},
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"},
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"},
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"},
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"},
      { uri: "https://thumbs.dreamstime.com/x/playful-three-toe-sloth-sitting-tree-costa-rica-12058189.jpg"}
    ]
    return (
      <View style={styles.container}>
        <Hola size={34} text={'Holis'} />
        <PrintImages images={pic}/>
      </View>
    )
  }
}
/* jshint ignore:end */
