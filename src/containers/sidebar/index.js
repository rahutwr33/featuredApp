import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SidebarScreen extends Component {
    render() {
        console.log(1111111111111)
        return (
            <View style={{flex:1,backgroundColor: 'red',}}>
                <Text> Sidebar </Text>
            </View>
        )
    }
}
