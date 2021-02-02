import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";

// import IconButton from "@material-ui/core/IconButton";

import useStyles from "./styles";

import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant="h5" gutterBottom>
						{product.name}
					</Typography>

					<Typography variant="h5">
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton area-label="Add to Cart">
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
