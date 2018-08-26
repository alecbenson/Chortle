import React, { Component } from "react";
import ReactDOM from "react-dom";
import FriendList from "./FriendList";

class FriendsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Alec Benson',
			friends: ['Peter Salem', 'Cam Peterson']
		}
	}
	render() {
		return (
			<div>
				<h3> Name: {this.state.name} </h3>
				<FriendList names={this.state.friends} />
			</div>
		);
	}
}

export default FriendsContainer;