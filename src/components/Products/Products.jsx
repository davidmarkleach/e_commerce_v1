import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
	{
		id: "1",
		name: "Shoes",
		description: "Running shoes.",
		price: "$5",
		image:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a1762714-62cb-4479-8d57-425334bd625e/pegasus-trail-2-womens-trail-running-shoe-JNVF2M.jpg",
	},
	{
		id: "2",
		name: "Macbook",
		description: "Apple Macbook.",
		price: "$10",
		image:
			"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000",
	},
];

const Products = ({ products }) => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
