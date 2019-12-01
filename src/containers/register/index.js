import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { Container,  Content, Form, Item, Input,Button } from 'native-base';
import { PushScreen } from '../../navigation/pushscreen';
import { Login_Screen } from '../../navigation';

export default class RegisterScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                        <Input placeholder="Full Name" />
                        </Item>
                        <Item>
                        <Input placeholder="Email" />
                        </Item>
                        <Item last>
                        <Input placeholder="Password" />
                        </Item>
                        <Button block style={{backgroundColor: '#039893',margin:10}}>
                        <Text style={{color:'#fff'}}>Register</Text>
                        </Button>
                        <View style={{alignSelf:'center',flexDirection:'row'}}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>PushScreen(Login_Screen,'Login',this.props,false)}><Text style={{paddingLeft:5,color:'#0f64ff',fontWeight:'100'}}>Login</Text></TouchableOpacity>
                        </View>
                    </Form>
                </Content>
          </Container>
        )
    }
}
