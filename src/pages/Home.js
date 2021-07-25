import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles';

import Header from '../container/Header'
import Sidebar from '../container/Sidebar'

import ViewLibrary from './Library/Index'
import Editor from './Library/Editor'
import New from './Message/New';
import Message from './Message/Index';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `linear-gradient(#89cffa, #f5fbff);`,
    backgroundSize: 'cover',
  },
  mainDiv: {
    height: `calc(100% - 64px)`,
    padding: theme.spacing(1),
    display: 'flex',
  },
  logo: {
    height: '35px',
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root} >
      <Header />
      <main className={classes.mainDiv}>
        <Sidebar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/message' />} />
          <Route exact path="/message" render={(props) => <Message {...props} />} />
          <Route exact path="/message/new" render={(props) => <New {...props} />} />
          <Route exact path="/library" render={(props) => <ViewLibrary {...props} />} />
          <Route exact path="/library/editor" render={(props) => <Editor {...props} />} />
        </Switch>
      </main>
    </Box>
  )
}

export default Home
