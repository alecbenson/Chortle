import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class FriendList extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.names);
	}
	render() {
		return (
			<List component="nav">
			{
				this.props.names.map((friend, idx) =>
					<ListItem button key={idx}>
						<ListItemText primary={friend}/>
					</ListItem>
				)
			}
			</List>
		)
	}
}

export default FriendList;
