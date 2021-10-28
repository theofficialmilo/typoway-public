import { Toolbar, AppBar, Typography, IconButton, Button, Avatar, Popover, CardContent, CardActions} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';

import Logo from '../../assets/logo.png'
import useHeader from '../../hooks/App/useHeader'

const useStyles = makeStyles((theme) => ({
  logoDiv: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff'
  },
  logo: {
    width: 'auto',
    height: '40px'
  },
  cardRoot: {
    minWidth: '300px',
    textAlign: 'center'
  },
  avatarsize: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    left: '50%',
    transform: 'translateX(-50%)'
  },
  avatarCard: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  cardAction: {
    justifyContent: 'center'
  },
}))

export const Header = () => {
  const classes = useStyles();
  const { anchorEl, open, user, handleClick, handleClose, handleSignOut} = useHeader();

  return (
    <AppBar elevation={0} color="transparent" position='static'>
      <Toolbar>
        <div className={classes.logoDiv}>
          <img src={Logo} alt='logo' className={classes.logo} />
          <Typography variant='h5'>Typoway</Typography>
        </div>
        <div>
          <IconButton edge='end' onClick={(e) => handleClick(e)}>
            <Avatar alt={user.name} src={user.iconUrl}>{user.name.charAt(0)}</Avatar>
          </IconButton>
          <Popover
            id='user-popover'   
            open={open}
            anchorEl={anchorEl}
            onClose={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClose(e)}
            elevation={4}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            PaperProps={{
              className: classes.cardRoot
            }}
          >
            <CardContent>
              <Avatar className={classes.avatarCard} alt={user.name} src={user.iconUrl}/>
              <Typography variant='h6'><b>{user.name}</b></Typography>
              <Typography variant='body2' color='secondary'>{user.email}</Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
              <Button disableElevation href='https://forms.gle/M3ZC3tHZhJZnpp9UA' target='_blank' variant='contained' fullWidth>
                Feedback
              </Button>
              <Button disableElevation onClick={(e) => handleSignOut(e)} color='primary' variant='contained' fullWidth>
                Sign Out
              </Button>
            </CardActions>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  )
}


export default Header