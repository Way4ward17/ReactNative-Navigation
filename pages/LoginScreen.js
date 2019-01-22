import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text> Login </Text>
<Button onPress={()=> this.props.navigation.navigate('HomeScreen')}
  title = "Goto Signup"
/>
      </View>
    )
  }
}