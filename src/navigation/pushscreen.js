import { Navigation } from 'react-native-navigation';

export const PushScreen = (screen,title,props,backbuttonvisible) => Navigation.push(props.componentId, {
            component: {
              name: screen,
              passProps: {
               
              },
              options: {
                topBar: {
                  title: {
                    text: title,
                    alignment:'center'
                  },
                  backButton:{
                    visible:backbuttonvisible
                  },
                },
            
              }
            }
    });