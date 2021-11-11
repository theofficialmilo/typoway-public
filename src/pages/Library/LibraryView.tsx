import { Link as RouterLink } from "react-router-dom";

import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Fab,
	Menu,
	MenuItem,
	makeStyles,
	Typography,
} from "@material-ui/core";

import { Add as AddIcon } from "@material-ui/icons";

import DialogConfirm from "../../components/DialogConfirmation";
import TemplateList from "../../components/Library/TemplateList";

import useLibraryView from "../../hooks/Library/useLibraryView";
import { dialogDeleteData } from "../../utils/data";
import { History } from "history";

const useStyles = makeStyles((theme) => ({
	fab: {
		position: "fixed",
		bottom: theme.spacing(5),
		right: theme.spacing(5),
		textTransform: "initial",
	},
	fabIcon: {
		marginRight: theme.spacing(1),
	},
	card: {
		height: "100%",
		maxWidth: "calc(100% - 84px)",
		padding: theme.spacing(1),
		flex: "1 0 auto",
	},
	cardActions: {
		textAlign: "right",
	},
	cardName: {
		overflowY: "auto",
	},
	tabsContainer: {
		borderBottom: `1px solid ${theme.palette.secondary.light}`,
	},
	tab: {
		minWidth: "auto",
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
	},
}));

const Library = ({ history }: PropTypes) => {
	const classes = useStyles();
	const {
		anchorEl,
		showDialog,
		templateState,
		setShowDialog,
		handleShowMenu,
		handleHideMenu,
		handleOnDelete,
		handleExport,
		handleDelete,
	} = useLibraryView();

	return (
		<>
			<Card className={classes.card}>
				<CardHeader title={"My Designs"} />
				<CardContent className={classes.cardName}>
					<TemplateList
						history={history}
						onMore={handleShowMenu}
						load={templateState.isLoading}
						templates={templateState.list}
					/>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Fab
						variant="extended"
						component={RouterLink}
						to={"/editor/create"}
						color="primary"
						aria-label="add"
						className={classes.fab}
					>
						<AddIcon className={classes.fabIcon} />
						Create Template
					</Fab>
				</CardActions>
			</Card>
			<Menu
				keepMounted
				id="simple-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleHideMenu}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem onClick={handleExport}>
					<Typography color="secondary">Export Template</Typography>
				</MenuItem>
				<MenuItem onClick={handleOnDelete}>
					<Typography color="error">Delete</Typography>
				</MenuItem>
			</Menu>
			<DialogConfirm
				isOpen={showDialog}
				data={dialogDeleteData}
				handleCancel={() => setShowDialog(false)}
				handleClick={handleDelete}
			/>
		</>
	);
};

export default Library;

interface PropTypes {
  history: History
}
