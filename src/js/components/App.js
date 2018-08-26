import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import FriendsContainer from './FriendsContainer';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div >
				<Grid item xs={12}>
					<Paper>
						<FriendsContainer></FriendsContainer>
					</Paper>
				</Grid>
			</div>
		);
	}
}

export default App;
