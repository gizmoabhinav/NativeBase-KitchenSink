import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  H3
} from "native-base";

import styles from "./styles";

class Emergency extends Component {
  // eslint-disable-line

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
            <Title>Emergency</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ backgroundColor: "#fff" }}>
          <Button full warning style={styles.mt15}><Text>Security Emergency</Text></Button>
          <Button full danger style={styles.mt15}><Text>Medical Emergency</Text></Button>
          <Button full dark style={styles.mt15}><Text>Need Assistance</Text></Button>
        </Content>
      </Container>
    );
  }
}

export default Emergency;