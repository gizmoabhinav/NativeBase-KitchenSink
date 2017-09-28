import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Body,
  Left,
  Right,
  Input,
  Item
} from "native-base";

import styles from "./styles";

class ComplaintBox extends Component {
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
            <Title>Complaints</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item regular>
            <Input placeholder="Enter issue" />
          </Item>
          <Item regular>
            <Input placeholder="Enter description" />
          </Item>
		  
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Submit Complaint</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ComplaintBox;
