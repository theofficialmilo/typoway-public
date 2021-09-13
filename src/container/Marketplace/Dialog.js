import React, {useState, useEffect} from 'react'

import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, IconButton, Avatar, Button, ButtonBase} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Close } from '@material-ui/icons'
import { getTemplate } from '../../service/storeServices'

import { templateTypeData } from '../../utils/data'

const useStyles = makeStyles(theme => ({
  inheritStyle: {
    maxHeight: 'inherit'
  },
  imgContainer: {
    maxHeight: 'inherit',
    overflowY:'auto'
  },
  img:{
    height: 'fit-content',
    width: '100%',
  },
  dialogTitle: {
    paddingBottom: 0
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  cardBody: {
    overflowY: 'auto',
    maxHeight: 375
  },
  cardActions: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(2),
  },
  avatarIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(1)
  },
  avatarButton: {
    padding: theme.spacing(1),
    marginLeft: `-${theme.spacing(1)}px`,
    borderRadius: '10px',
    '&:hover' :{
      backgroundColor: 'rgba(0,0,0, 0.05)',

    }
  },
}))

const TemplateDialog = ({id, open, handleClose, handleSave}) => {
  const classes = useStyles();
  const [template, setTemplate] = useState(null);
  const templateData = templateTypeData();
  
  useEffect(()=> {
    if(open) {
      getTemplate(id)
        .then(doc =>
          setTemplate(doc)
        )
    }
  },[open])

  return (
    <Dialog fullWidth maxWidth={'md'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      {template !== null && 
        <Grid container className={classes.inheritStyle}>
        <Grid item md={6} className={classes.imgContainer}>
          <img className={classes.img} alt={template.title} src={template.imgUrl}/>
        </Grid>
        <Grid item md={6}>
        <DialogTitle disableTypography className={classes.dialogTitle}>
          <ButtonBase className={classes.avatarButton} disabled>
            <Avatar className={classes.avatarIcon}  src={template.account.iconUrl}/>
            <Typography variant="body1" display='inline' color='secondary'>
              {template.account.name}
            </Typography>
          </ButtonBase>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close/>
          </IconButton>
        </DialogTitle>
        <DialogContent>
        <div className={classes.cardHeader}>
          <div>
            <Typography variant="h4" color='primary'>
              {template.title}
            </Typography>
            <Typography variant="subtitle1" color='secondary' style={{textTransform: 'capitalize'}}>
              {templateData[template.templateType]}
            </Typography>
          </div>
            <Typography variant="h5" color="secondary">
            {template.price === 0 ? 'Free' : `$${template.price}`}
            </Typography>
        </div>
        <div className={classes.cardBody}>
          <Typography color='secondary' variant="body1">
            {template.description}
          </Typography>
        </div>
        </DialogContent>
        <DialogActions className={classes.cardActions}>
          <Button variant='contained' color='primary' onClick={handleSave}>
            Save to Library
          </Button>
        </DialogActions>
        </Grid>
      </Grid>
      }
      
    </Dialog>
  )
}


export default TemplateDialog
