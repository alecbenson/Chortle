
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import AssignmentIcon from '@material-ui/icons/Assignment';
import BallotIcon from '@material-ui/icons/Ballot';
import GavelIcon from '@material-ui/icons/Gavel';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class NavDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	toggleDrawer() {
		this.setState({open: !this.state.open});
	}
	handleClose() {
		this.setState({open: false});
	}
	render() {
		const listItems = (
			<div>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Chore Assignment" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<BallotIcon />
					</ListItemIcon>
					<ListItemText primary="Chore Selection" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<GavelIcon />
					</ListItemIcon>
					<ListItemText primary="Penalties" />
				</ListItem>
			</div>
		);

		const list = (
			<div>
				<List>{listItems}</List>
			</div>
		);

		return (
			<div>
				<IconButton
					color="inherit"
					onClick={this.toggleDrawer}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					open={this.state.open}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={this.handleClose}
						onKeyDown={this.handleClose}
					>
						{list}
					</div>
				</Drawer>
			</div>
		);
	}
}

NavDrawer.propTypes = {
	open: PropTypes.bool,
};

export default NavDrawer;
