import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	root: {
		maxWidth: "100%",
	},
	media: {
		height: 0,
		paddingTop: "100%", // 16:9 is 56.25% // 100% testing if it's square
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
}));
