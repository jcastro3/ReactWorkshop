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

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'My First React App',
    headerTintColor: 'red'
  };
  
  handleChange() {
    
  }
  
  render() {
    const logo = { uri: 'http://axelvaldez.mx/assets/media/work/nearsoft-workshops.png' }; 
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.welcomeContainer}>
        <Logo src={logo}/>
        <TouchableHighlight>
          style={styles.searchInput}
          underlayColor='white'
          onPress={this.handleChange.bind(this)}
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

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'My chat',
    headerTintColor: 'blue'
  };
  render() {
    return (
      <View>
        <Text> This is my chat box! :D </Text>
      </View>      
    );
  }
};

class MyPics extends React.Component {
  static navigationOptions = {
    title: 'My Pic Files',
    headerTintColor: 'green'
  };
  
  printImages(images) {
    return images.map((image, idx) => <Image key={idx} source={image} style={styles.picItem}/> );
  }
  
  render() {
    let pics = [
      { uri: 'http://cdn.cavemancircus.com//wp-content/uploads/images/2013/april/sloth/sloth_lol_14.jpg'},
      { uri: 'http://www.qygjxz.com/data/out/193/5485088-random-image.png'},
      { uri: 'https://www.newton.ac.uk/files/covers/968361.jpg'},
      { uri: 'https://ugc.kn3.net/i/origin/http://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg'},
      { uri: 'https://steamuserimages-a.akamaihd.net/ugc/780658011420073542/D0A3409F1A9ED4C370840B45E3AE48FC2A9D1C34/'}      
    ];
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.picContainer}>
        {this.printImages(pics)}
      </View>
      )
    }
};

const MyApp = StackNavigator({
  Welcome: { screen: Welcome },
  ChatScreen: { screen: ChatScreen },
  MyPics: { screen: MyPics }
});

export default class App extends React.Component {
  render() {
    return <MyApp style={styles.container}/>;
  }
}