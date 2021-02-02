import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/Gift Remote Logo.png';
import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();

	return (
		<>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography variant="h6" className={classes.title} color="inherit">
						<img src={logo} alt="Gift Remote" height="75px" className={classes.image} />
						Gift Remote
					</Typography>
					<div className={classes.grow} />
					<div className={classes.button}>
						<iconButton area-label="Show cart items" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<ShoppingCart />
							</Badge>
						</iconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Navbar
