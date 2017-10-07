/* jshint ignore:start */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginTop: 12
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
  }
});


class Welcome extends React.Component {
  static navigationOptions = {
    title: 'My First React App',
    headerTintColor: 'red'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, im the Navigation</Text>
        <Button
          onPress={() => navigate('ChatScreen')}
          title="My chat holis"/>
        <Button
          onPress={() => navigate('MyPics')}
          title="My Pics"/>
      </View>      
    );
  }
};



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



// export default class App extends React.Component {
//   var navigationOptions = {
//     title: 'Welcome'
//   };
//   render() {
//     var  { navigate } = this.props.navigation;
//     let pic = {
//       uri: 'http://i0.kym-cdn.com/entries/icons/original/000/003/549/Dolan.jpg'
//     };
//     
//     let size = {
//       w: 100,
//       h: 100
//     };
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Goobys pls</Text>
//         <Doland pic={pic} width={size.w} height={size.h}></Doland>
//         <Text> Have a nice day </Text>
//       </View>
//     );
//   }
// }
// 
// class Doland extends Component {
//   render() {
//     return (
//       <Image source={this.props.pic} style={{ width: this.props.width, height: this.props.height}}/>
//     );
//   }
// }
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 30,
//     color: 'red'
//   }
// });
/* jshint ignore:end */
