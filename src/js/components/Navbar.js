import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class FriendList extends React.Component {
	constructor(props) {
		super(props);
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
		);
	}
}

FriendList.propTypes = {
	names: PropTypes.array,
};

export default FriendList;
