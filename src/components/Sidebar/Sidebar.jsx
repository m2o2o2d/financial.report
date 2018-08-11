import React, { Component }  from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, Icon, ListItemText, Divider, Collapse } from '@material-ui/core';
import { Home, ExpandLess, ExpandMore } from '@material-ui/icons';

const styles = theme => ({
	drawerPaper: {
	    position: 'relative',
	    width: 240,
	},
	toolbar: theme.mixins.toolbar,
	link: {
		textDecoration: 'none',
	},
	nested: {
    	paddingLeft: theme.spacing.unit * 4,
  	},
});

class Sidebar extends Component {

	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	state = {
		rebateOpen: true
	}

	handleClickRebate = () => {
		this.setState(state => ({
			rebateOpen: !state.rebateOpen
		}));
	};

	render() {
		const { classes } = this.props;

		return (
			<Drawer
		        variant="permanent"
		        classes={{
		        	paper: classes.drawerPaper,
		        }} >
		        <div className={classes.toolbar} />
		        <List>
		        	<NavLink
		        		to="/app/home"
		        		className={classes.link}
		        		activeClassName="active" >
			        	<ListItem button>
			        		<ListItemIcon>
			        			<Home />
			        		</ListItemIcon>
			        		<ListItemText inset primary="主页" />
			        	</ListItem>
			        </NavLink>
		        	<ListItem button onClick={this.handleClickRebate}>
		        		<ListItemIcon>
		        			<Home />
		        		</ListItemIcon>
		        		<ListItemText inset primary="返利管理" />
		        		{this.state.rebateOpen ? <ExpandLess /> : <ExpandMore />}
		        	</ListItem>
		        	<Collapse in={this.state.rebateOpen} timeout="auto" unmountOnExit>
		        		<List component="div" disablePadding>
		        			<NavLink
				        		to="/app/rebateMonth"
				        		className={classes.link}
				        		activeClassName="active" >
					        	<ListItem button className={classes.nested}>
					        		<ListItemIcon>
					        			<Home />
					        		</ListItemIcon>
					        		<ListItemText inset primary="月度规则设定" />
					        	</ListItem>
				        	</NavLink>
				        	<NavLink
				        		to="/app/rebateYear"
				        		className={classes.link}
				        		activeClassName="active" >
					        	<ListItem button className={classes.nested}>
					        		<ListItemIcon>
					        			<Home />
					        		</ListItemIcon>
					        		<ListItemText inset primary="年度规则设定" />
					        	</ListItem>
				        	</NavLink>
				        	<NavLink
				        		to="/app/rebateCustomer"
				        		className={classes.link}
				        		activeClassName="active" >
					        	<ListItem button className={classes.nested}>
					        		<ListItemIcon>
					        			<Home />
					        		</ListItemIcon>
					        		<ListItemText inset primary="客户返利设定" />
					        	</ListItem>
				        	</NavLink>
			        	</List>
		        	</Collapse>
		        </List>
		    </Drawer>
		);
	}
}

export default withStyles(styles)(Sidebar);