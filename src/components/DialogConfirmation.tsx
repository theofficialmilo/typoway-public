import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography'

const DialogConfirmation = ({ isOpen, data, handleCancel, handleClick }: PropTypes) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle >{data.title}</DialogTitle>
      <DialogContent>
        <Typography>{data.content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogConfirmation

interface PropTypes{
  isOpen: boolean,
  data: {
    title: React.ReactChildren | string,
    content: React.ReactChildren | string
  },
  handleCancel: React.MouseEventHandler<HTMLButtonElement>,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}
