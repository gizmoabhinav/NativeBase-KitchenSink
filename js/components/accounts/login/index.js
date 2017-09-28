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
  Text,
  Card,
  CardItem
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
            <Title>Accounts</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		  <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>
                Social Applications
              </Text>
            </CardItem>
            <CardItem>
              <Icon
                active
                name="logo-googleplus"
                style={{ color: "#DD5044" }}
              />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-facebook" style={{ color: "#3B579D" }} />
              <Text>facebook</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-twitter" style={{ color: "#55ACEE" }} />
              <Text>Twitter</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-linkedin" style={{ color: "#007BB6" }} />
              <Text>LinkedIn</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Add Account</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;