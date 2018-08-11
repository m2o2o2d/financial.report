import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import Home from '@/views/Home/Home';
import RebateMonth from '@/views/Rebate/RebateMonth';
import RebateYear from '@/views/Rebate/RebateYear';
import RebateCustomer from '@/views/Rebate/RebateCustomer';

const styles = theme => ({
  	root: {
	    flexGrow: 1,
	    height: 430,
	    zIndex: 1,
	    overflow: 'hidden',
	    position: 'relative',
	    display: 'flex',
  	},
  	content: {
    	flexGrow: 1,
    	backgroundColor: theme.palette.background.default,
    	paddingLeft: theme.spacing.unit * 2,
    	paddingRight: theme.spacing.unit * 2,
    	minWidth: 0, // So the Typography noWrap works
  	},
	toolbar: theme.mixins.toolbar,
});

class App extends Component {

	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Header />
				<Sidebar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route path="/app/home" exact component={Home} />
						<Route path="/app/rebateMonth" exact component={RebateMonth} />
						<Route path="/app/rebateYear" exact component={RebateYear} />
						<Route path="/app/rebateCustomer" exact component={RebateCustomer} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(App);