import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

import NavDrawer from './NavDrawer';

class Navbar extends React.Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<NavDrawer />
					<IconButton>
						<NotificationsIcon/>
					</IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Navbar;
