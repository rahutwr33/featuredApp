import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { Register_Screen,pushTabBasedApp } from '../../navigation';
import { Container,  Content, Form, Item, Input,Button } from 'native-base';
import { PushScreen } from '../../navigation/pushscreen';

export default class LoginScreen extends Component {
   
    componentDidMount(){
        // setTimeout(() => {
        //     Navigation.push(this.props.componentId, {
        //         component: {
        //           name: Register_Screen,
        //           passProps: {
                   
        //           },
        //           options: {
        //             topBar: {
        //               title: {
        //                 text: 'Register',
        //                 alignment:'center'
        //               },
        //               backButton:{
        //                 visible:true
        //               },
        //             },
                
        //           }
        //         }
        //       });
        // }, 3000);
    }

    render() {
        return (
          <Container>
            <Content>
              <Form>
                <Item>
                  <Input placeholder="Email" />
                </Item>
                <Item last>
                  <Input placeholder="Password" />
                </Item>
                <Button block style={{backgroundColor: '#039893',margin:10}} onPress={()=>pushTabBasedApp()}>
                  <Text style={{color:'#fff'}}>SignIn</Text>
                </Button>
                <View style={{alignSelf:'center',flexDirection:'row'}}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity onPress={()=>PushScreen(Register_Screen,'Register',this.props,true)}><Text style={{paddingLeft:5,color:'#0f64ff',fontWeight:'100'}}>Register</Text></TouchableOpacity>
                </View>
              </Form>
            </Content>
          </Container>
        )
    }
}
