import { Route, Switch, Redirect } from 'react-router-dom';

import {Box, Card, Typography, CardHeader, CardContent} from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'

import MainSection from '../../components/MainSection' 
import Sidebar from '../../container/Marketplace/Sidebar'
import Dialog from '../../container/Marketplace/Dialog'
import Featured from './Featured'
import ByCategory from './ByCategory';
import ByUser from './ByUser';

import useMarketView from '../../hooks/Marketplace/useMarketplaceView';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '-8px'
  },
  sidebar: {
    width: '250px'
  },
  fullWidth: {
    width: '100%',
    padding: theme.spacing(1)
  },
  cardContent: {
    overflowY: 'auto',
    height: 'calc(100% - 64px)'
  }
}))

const Index = ({...props}) => {
  const classes = useStyles();
  const {
    selected, 
    type, 
    value, 
    handleOnSelect,
    handleOnMore, 
    handleOnClose, 
    handleOnSave,
    handleOnUser
  } = useMarketView();

  return (
    <MainSection>
      <Box className={classes.sidebar}>
        <Sidebar active={selected} handleSelect={handleOnSelect} />
      </Box>
      <Card className={classes.fullWidth} elevation={0}>
        {type!=='user' && 
        <CardHeader 
          title={
          <Typography variant='h5' color='primary' style={{textTransform: 'capitalize'}}>
            {value ? value: type}
          </Typography> 
        }
        />
      }
        <CardContent className={classes.cardContent}>
          <Switch>
            <Route exact path='/store' render={() => <Redirect to='/store/featured'/>}/>
            <Route exact path='/store/featured' render={() => <Featured />} />
            <Route path='/store/category/:value'  render={(props => <ByCategory handleOnMore={e => handleOnMore(e)} {...props} />)}  />
            <Route path='/store/user/:value'  render={() => <ByUser handleOnMore={e => handleOnMore(e)}/>}/>
          </Switch>
        </CardContent>
      </Card>
      <Dialog handleClose={handleOnClose} handleSave={handleOnSave} handleUser={handleOnUser}/>
    </MainSection>
  )
}

export default Index
