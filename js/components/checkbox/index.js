import React, { Component } from 'react';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	List,
	ListItem,
	CheckBox,
	Text,
	Left,
	Right,
	Body,
} from 'native-base';

import styles from './styles';

class NHCheckbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkbox1: true,
			checkbox2: true,
			checkbox3: true,
			checkbox4: false,
		};
	}

	toggleSwitch1() {
		this.setState({
			checkbox1: !this.state.checkbox1,
		});
	}

	toggleSwitch2() {
		this.setState({
			checkbox2: !this.state.checkbox2,
		});
	}

	toggleSwitch3() {
		this.setState({
			checkbox3: !this.state.checkbox3,
		});
	}

	toggleSwitch4() {
		this.setState({
			checkbox4: !this.state.checkbox4,
		});
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Syllabus</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<ListItem button onPress={() => this.toggleSwitch1()}>
						<CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
						<Body>
							<Text>English half yearly course (4th std)</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch2()}>
						<CheckBox color="red" checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
						<Body>
							<Text>English grammer half yearly course (5th std)</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch3()}>
						<CheckBox color="green" checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
						<Body>
							<Text>English half yearly course (5th std)</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch4()}>
						<CheckBox color="#000" checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
						<Body>
							<Text>English grammer half yearly course (6th std)</Text>
						</Body>
					</ListItem>
				</Content>
			</Container>
		);
	}
}

export default NHCheckbox;
