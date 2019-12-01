import React,{ useState, useEffect} from 'react'
import { View, Text,StyleSheet,Animated } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Login_Screen } from '../../navigation'

const Splash = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))
    
    useEffect(() => {
        Animated.timing(fadeAnim,
          {
            toValue: 1,
            duration: 2000,
          }
        ).start();
        Animated.timing(fadeAnim,
            {
              toValue: 1,
              duration: 2000,
            }
          ).start();
          (()=>{
            setTimeout(() => {
              Navigation.setStackRoot(props.componentId, [
                {
                component: {
                      name: Login_Screen,
                      passProps: {
                       
                      },
                      options: {
                        topBar: {
                          title: {
                            text: 'Login',
                            alignment:'center'
                          },
                          backButton:{
                            visible:false
                          }
                        },
                        animations: {
                          setStackRoot: {
                            enabled: true
                          }
                        }
                      }
                    }
              }
            ])
            }, 5000);
        })()
      }, [])

   

    return (
        <View style={styles.container}>
                  <Animated.View style={[styles.ball ,{opacity : fadeAnim}]}/>              
        </View>
    )
}



const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ball:{
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor: '#ffff00',
        justifyContent: 'center',
        alignItems: 'center'
       
    }
})
export default Splash;
