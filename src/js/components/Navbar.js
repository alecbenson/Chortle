import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import NavDrawer from './NavDrawer';

class Navbar extends React.Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<NavDrawer />
					<Typography variant="title" color="inherit">
						Chores
					</Typography>
					<Button color="inherit"> Notifications </Button>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Navbar;
