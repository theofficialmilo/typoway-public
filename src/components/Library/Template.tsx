import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Grid,
	IconButton,
} from "@material-ui/core";

import useTemplateCardStyle from "../../styles/Library/TemplateCard";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { History } from "history";
import useTemplateComponent from "../../hooks/Library/useTemplateComponent";

const TemplateCard = ({ id, name, templateType, history, onMore }: PropTypes) => {
	const classes = useTemplateCardStyle();
	const { handleOnUse, handleOnEdit, handleOnMore } = useTemplateComponent(history,	onMore);

	return (
		<Grid item md={3}>
			<Card className={classes.card} variant="outlined" id={id}>
				<CardContent className={classes.cardContent}>
					<Typography variant="h6">{name}</Typography>
					<Typography variant="body2" color="secondary">
						{templateType}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<Button
						size="small"
						color="primary"
						onClick={(e) => handleOnUse(e)}
						value={id}
					>
						Use
					</Button>
					<Button
						size="small"
						color="secondary"
						onClick={(e) => handleOnEdit(e)}
						value={id}
					>
						Edit
					</Button>
					<IconButton
						aria-controls="simple-menu"
						aria-haspopup="true"
						className={classes.iconButton}
						onClick={(e) => handleOnMore(e)}
						value={id}
					>
						<MoreVertIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default TemplateCard;

interface PropTypes {
	id: string;
	name: string;
	templateType: string;
	history: History;
	onMore: CallableFunction;
}


