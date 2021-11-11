import { Toolbar, Button, Typography, Divider, Box, IconButton } from '@material-ui/core'
import { ArrowBackIos, SaveAlt } from '@material-ui/icons'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Skeleton from '@material-ui/lab/Skeleton';
import Grow from '@material-ui/core/Grow';

import { templateTypeData } from '../../utils/data';
import { EditorTemplateData } from '../../interfaces/Library';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0 8px",
    height: '20px'
  },
  buttonDiv: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(1),
    }
  }
}))

const Header = ({ loading, handleSave, handleBack, templateData }: PropTypes) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Box className={classes.title}>
        <IconButton
          onClick={handleBack}
          size='small'>
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <Typography variant='h6' color='secondary'>
          {!loading ? templateData.name : <Skeleton width={150} />}
        </Typography>
        <Divider orientation='vertical' className={classes.divider} variant='middle' />
        <Typography color='secondary'>
          {!loading ? templateTypeData[templateData.templateType] : <Skeleton width={75} />}
        </Typography>
      </Box>
      <div className={classes.buttonDiv}>
        {!loading &&
          <Grow in={!loading}>
            <Button 
              onClick={handleSave} 
              startIcon={<SaveAlt />} 
              variant='contained' 
              color='primary'
            >
              Save Design & Exit
            </Button>
          </Grow>
        }
      </div>
    </Toolbar>
  )
}

export default Header

interface PropTypes { 
  loading: boolean, 
  handleSave: React.MouseEventHandler<HTMLButtonElement>, 
  handleBack: React.MouseEventHandler<HTMLButtonElement>, 
  templateData: EditorTemplateData
}