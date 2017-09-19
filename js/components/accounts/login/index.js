import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";

import styles from "./styles";
import JavaBridge from "../../native/";

class Login extends Component {
	
  constructor(props){
	  super(props)
	  this.state = {
		  username: '',
		  password: ''
	  }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setState({username:text})} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input password={true} onChangeText={(text) => this.setState({password:text})}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => JavaBridge.authenticate(this.state.username, this.state.password)}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;