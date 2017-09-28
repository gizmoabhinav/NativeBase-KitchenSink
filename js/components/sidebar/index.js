import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";
import JavaBridge from "../native/";

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");

const dataa = [
	{
		name: "Accounts",
		route: "NHLogin",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Notices",
		route: "NHNotices",
		icon: "easel",
		bg: "#C5F442",
	}
	
];

const data = [
    {
		name: "Accounts",
		route: "NHLogin",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Syllabus",
		route: "NHCheckbox",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Student Attendance",
		route: "NHAttendance",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "School Notifications",
		route: "NHNotices",
		icon: "notifications",
		bg: "#4DCAE0",
	},
	{
		name: "Emergencies",
		route: "NHEmergency",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "Live Classroom",
		route: "NHVideo",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "Teacher Complaints",
		route: "NHComplaintBox",
		icon: "checkmark-circle",
		bg: "#EB6B23",
	},
	{
		name: "Live Bus Tracking",
		route: "Map",
		icon: "swap",
		bg: "#3591FA",
		types: "2",
	}

]

const dataManagement = [
    {
		name: "Accounts",
		route: "NHLogin",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Student Info",
		route: "Footer",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Fee Structure",
		route: "Footer",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Receipt Generation",
		route: "NHBadge",
		icon: "notifications",
		bg: "#4DCAE0",
	},
	{
		name: "Bus Facility",
		route: "NHButton",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
	}

]

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			loading: true,
			username: "default"
		};
	}	

    componentWillMount() {
		this.setState({username: "aa"});
		JavaBridge.getUserId((msg) => {this.setState({username: msg, loading: true});alert("inside"+this.state.username);});
    }

	render() {
		
		if (this.state.loading) {
		  var i =1;
          setTimeout(() => {this.setState({username: "aa"+i++});}, 3000);
        }
		
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Image square style={styles.drawerImage} source={drawerImage} />
					</Image>
					<List
						dataArray={data}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} new items`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
