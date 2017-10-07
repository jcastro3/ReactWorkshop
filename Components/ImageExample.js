import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ImageExample extends Component {
  render() {
    var pic = { uri: 'https://i.pinimg.com/736x/0f/1d/d3/0f1dd3a4bf278b25d877a02565a6e742.jpg'};
    return(
      <Image source={pic} style={{ width: this.props.with, height: this.props.height }}/>
    )
  }
}