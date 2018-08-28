import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ChoreList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chores: {}
		};
	}
	addChore(name, points, frequency) {
		let choreList = Object.assign({}, this.state.chores);
		if (!choreList.hasOwnProperty(name)) {
			choreList[name] = {name, points, frequency};
			this.setState({chores: choreList});
		}
	}
	removeChore(name) {
		let choreList = Object.assign({}, this.state.chores);
		if (choreList.hasOwnProperty(name)) {
			delete choreList[name];
			this.setState({chores: choreList});
		}
	}
	editChore(name, points, frequency) {
		let choreList = Object.assign({}, this.state.chores);
		if (choreList.hasOwnProperty(name)) {
			choreList[name] = {name, points, frequency};
		}
	}
	render() {
		const rowBuilder = (chore, idx) => (
			<TableRow key={idx}>
				<TableCell>{chore.name}</TableCell>
				<TableCell>{chore.points}</TableCell>
				<TableCell>{chore.frequency}</TableCell>
			</TableRow>
		);
		const header = (
			<TableRow>
				<TableCell>Name</TableCell>
				<TableCell>Points</TableCell>
				<TableCell>Frequency</TableCell>
			</TableRow>
		);

		let choreList = Object.keys(this.state.chores);
		let body = choreList.map((key, idx) => {
			let chore = this.state.chores[key];
			return rowBuilder(chore, idx);
		});

		let table = (
			<Table>
				<TableHead>{header}</TableHead>
				<TableBody>{body}</TableBody>
			</Table>
		);
		return (
			<div>
				<Paper>{table}</Paper>
			</div>
		);
	}
}

export default ChoreList;
