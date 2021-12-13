import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import Constants from 'expo-constants';
import LogoImage from '../../assets/logo.png';

export default class Splash extends Component {
  componentDidMount() {
    //method that gets called after a component is mounted
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 500);
  }
  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={LogoImage}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Get started </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaebd2',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: 190,
    maxHeight: 230,
  },
  textContainer: {
    marginBottom: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
});
