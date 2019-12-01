import React, { Component } from 'react'
import { Text, View,PanResponder,StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Sidebar_SCREEN,TAB1_SCREEN,TAB2_SCREEN } from '../../navigation';
import Svg, { Line,Circle } from 'react-native-svg';

export default class HomeScreen extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
          locationX : '',
          locationY:'',
          cordinates:[],
          dummy:[
            {X1: "153.71", Y1: "133.99",X2: "193.13", Y2: "262.83"}           
          ]
        }
        this.panResponder;
        Navigation.events().bindComponent(this);
      }

      componentWillMount()
      {
        this.panResponder = PanResponder.create(
        {
          onStartShouldSetPanResponder: (event, gestureState) => true,
        
          onStartShouldSetPanResponderCapture: (event, gestureState) => true,
        
          onMoveShouldSetPanResponder: (event, gestureState) => false,
   
          onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
   
          onPanResponderGrant: (event, gestureState) => false,
        
          onPanResponderMove: (event, gestureState) => false,
        
          onPanResponderRelease: (event, gestureState) =>
          {
              var temp = []
              temp.push({
                X: event.nativeEvent.locationX.toFixed(2) ,
                Y: event.nativeEvent.locationY.toFixed(2)
              })
              this.setState({
                  locationX: event.nativeEvent.locationX.toFixed(2), 
                  locationY: event.nativeEvent.locationY.toFixed(2) ,
                  cordinates : [...this.state.cordinates , ...temp]
              });
          }
        });
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
    
    loadDots(){
      if(this.state.cordinates.length>0){
        if(this.state.cordinates.length==1){
          return(this.state.cordinates.map((key,index)=>{
            return(
              <View key={index++} style = {[
                            styles.point,
                            { top: parseFloat(key.Y - 15 ), 
                              left: parseFloat( key.X- 15 )
              }]} />
            )
          }))
        }else{
          this.drawLine()
        }
        
      }else{
          return(null)
      }
      
    }

    drawLine(){
      console.log(1111111111)
        return(
          this.state.dummy.map((key,index)=>{
            return(
              <Svg height="100" width="100" style={{position: 'absolute',overflow:'hidden'}}>
                  <Line x1={key.X1} y1={key.Y1} x2={key.X2} y2={key.Y2} stroke="black" strokeWidth="2" />
              </Svg>
            )
          })
        )
      
    }

    render() {
      console.log('this.state', this.state)
        return (
            // <View>
            //     <Svg height="10" width="10">
            //       <Circle cx="5" cy="5" r="5" fill="black" />
            //     </Svg>
            // </View>
            <View style = { styles.MainContainer }>
                <View>
                    <Text style = { styles.text }>X: { this.state.locationX }, Y: { this.state.locationY }</Text>
                </View>
                <View style = { styles.childView }>   
                    <View style = {{ flex: 1, backgroundColor: 'red' }}  { ...this.panResponder.panHandlers } />
                    {this.drawLine()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
   
      childView:
      {
          flex: 1,
          backgroundColor: 'transparent',
          overflow: 'hidden'
      },
   
      text:
      {
          fontSize: 22,
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          padding: 8,
          backgroundColor: 'transparent',
      },
   
      point:
      {
          height: 10,
          width: 10,
          position: 'absolute',
          borderRadius: 5,
          backgroundColor: '#FF3D00'
      }
  });
