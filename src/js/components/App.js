import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import ChoreList from './ChoreList';
import Navbar from './Navbar';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


const colors = createMuiTheme({
	palette: {
		primary: red,
		secondary: red,
	}
});

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});



class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {classes} = this.props;
		return (
			<MuiThemeProvider theme={colors}>
				<Navbar />
				<div className={classes.root}>
					<Paper>
						<ChoreList />
					</Paper>
				</div>

			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
