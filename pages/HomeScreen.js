import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {TabNavigator} from 'react-navigation'


class News extends Component {
    render() {
        return (
            <View>
                <Text> This is News </Text>
            </View>
        )
    }
}


class Home extends Component {
    render() {
        return (
            <View>
                <Text> This is HomeScreen </Text>
            </View>
        )
    }
}



const HomeScreenTab = TabNavigator({
    Home: {screen: Home},
    News: {screen: News}
},{
    animationEnabled:true
})



export default HomeScreenTab;