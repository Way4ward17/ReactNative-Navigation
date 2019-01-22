import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {StackNavigator} from 'react-navigation';
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'

export default class App extends Component {
  render() {
    return (
     
      <AppNavigator/> 
      
    );
  }
}


const AppNavigator = StackNavigator({
  LoginScreen: {screen: LoginScreen},
  SignupScreen:{screen: SignupScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
