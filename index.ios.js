/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,NavigatorIOS,StyleSheet,Text,View} from 'react-native';

import {Main} from './App/Components/Main';
//var Main = require('./App/Components/Main');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});


 class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: 'My Initial Scene - githubNotetaker',
          component: Main
        }} />
    );
  }
}
AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
