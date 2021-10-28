import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	FormControl,
	FormLabel,
	OutlinedInput,
  Button
} from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'
import useNameDialog from '../../hooks/Library/useNameDialog'

const useStyles = makeStyles(theme => ({
  nameButton: {
    marginTop: theme.spacing(4)
  }
}))

const NameDialog = ({ isOpen, templateId, handleOnClose }:PropTypes) => {
  const classes = useStyles();
  const { formData, handleOnChange, handleSubmit } = useNameDialog(templateId, handleOnClose);

  return (
    <Dialog open={isOpen}>
      <DialogTitle disableTypography>
				<Typography variant='h6' color='secondary'>Save Template</Typography>
			</DialogTitle>
      <DialogContent>
        <FormControl variant="outlined" size='small' fullWidth>
				  <FormLabel component='legend' color='secondary' htmlFor="name">Template Name</FormLabel>
				  <OutlinedInput
					  id="name"
					  name="name"
					  value={formData.name}
					  onChange={handleOnChange}
				  />
			  </FormControl>
        <Button variant='contained' color='primary' className={classes.nameButton} onClick={handleSubmit} fullWidth>
          Save into Library!
				</Button>
      </DialogContent>
    </Dialog>
  )
}

export default NameDialog

interface PropTypes {
  isOpen: boolean,
  templateId: string
  handleOnClose: CallableFunction
}