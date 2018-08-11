import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';

const styles = theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

class Header extends Component {

	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	render() {
		const { classes } = this.props;

		return (
	        <AppBar position="absolute" className={classes.appBar}>
	        	<Toolbar>
	            	<Typography variant="title" color="inherit" className={classes.flex}>
	              		财务报表系统
	            	</Typography>
	        	</Toolbar>
	        </AppBar>
		);
	}
}

export default withStyles(styles)(Header);