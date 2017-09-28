import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

const pratik = require("../../../img/contacts/pratik.png");
const sanket = require("../../../img/contacts/sanket.png");
const megha = require("../../../img/contacts/megha.png");
const atul = require("../../../img/contacts/atul.png");
const saurabh = require("../../../img/contacts/saurabh.png");
const varun = require("../../../img/contacts/varun.png");

const datas = [
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "Syllabus completed",
    time: "96%"
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "Syllabus completed",
    time: "90%"
  },
  {
    img: megha,
    text: "Megha",
    note: "Syllabus completed",
    time: "86%"
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Syllabus completed",
    time: "89%"
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "Syllabus pending",
    time: "75%"
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "Syllabus completed",
    time: "100%"
  }
];

class NHAttendance extends Component {
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
            <Title>Attendance</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Text>{data.time}</Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHAttendance;
