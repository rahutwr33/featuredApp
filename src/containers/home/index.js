import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Sidebar_SCREEN,TAB1_SCREEN,TAB2_SCREEN } from '../../navigation';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
      }
      navigationButtonPressed({ buttonId }) {
        const { data } = this.props;
        console.log(buttonId)
        switch (buttonId) {
          case 'sidebar_btn': {
            Navigation.mergeOptions('leftDrawer', {
              sideMenu: {
                left: {
                  visible: true
                }
              }
            });
            break;
          }
          default:
            break;
        }
      }
    
    render() {
        return (
            <View>
                <Text> home screen </Text>
            </View>
        )
    }
}
