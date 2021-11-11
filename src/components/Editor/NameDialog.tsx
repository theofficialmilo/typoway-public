import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	FormControl,
	FormLabel,
	OutlinedInput,
  CircularProgress,
  Button
} from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'
import useNameDialog from '../../hooks/Editor/useNameDialog'

const useStyles = makeStyles(theme => ({
  nameButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1)
  },
  loader: {
    color: '#fff'
  }
}))

const NameDialog = ({ isOpen, templateId, handleOnClose }:PropTypes) => {
  const classes = useStyles();
  const { formData, isLoading, handleOnChange, handleSubmit } = useNameDialog(templateId, handleOnClose);

  return (
    <Dialog open={isOpen} fullWidth maxWidth='xs'>
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
        <Button variant='contained' color='primary' className={classes.nameButton} onClick={handleSubmit} fullWidth disabled={isLoading}>
          {!isLoading? 'Save into Library!': <CircularProgress className={classes.loader} size={24}/>}
				</Button>
      </DialogContent>
    </Dialog>
  )
}

export default NameDialog

interface PropTypes {
  isOpen: boolean,
  templateId: string | undefined,
  handleOnClose: CallableFunction
}