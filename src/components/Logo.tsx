import {Typography, makeStyles} from '@material-ui/core'

import logo from '../assets/logo.png'

const useStyles = makeStyles(theme=> ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    marginRight: theme.spacing(1)
  },
  textColor: {
    color: '#737373'
  }
}))

interface PropTypes {
  size: string
}

const Logo = ({size}: PropTypes) => {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      {size === 'small'? 
        <>
          <img src={logo} alt="Typoway" width="42" height="42" className={classes.logo}/> 
          <Typography variant='h5' color='secondary'>Typoway</Typography> 
        </>:
        <>
          <img src={logo} alt="Typoway" width="75" height="75" className={classes.logo}/> 
          <Typography variant='h3' className={classes.textColor}>Typoway</Typography> 
        </>
      } 
    </div>
  )
}

export default Logo
