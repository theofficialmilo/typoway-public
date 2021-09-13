import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardHeader, CardContent, Grid, Button, makeStyles } from '@material-ui/core'

import { getMessagesListAction } from '../../state/message/messageDucks';
import MessageList from '../../container/Message/MessageList';
import MessageView from '../../container/Message/View'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    textTransform: 'initial'
  },
  fabIcon: {
    marginRight: theme.spacing(1)
  },
  card: {
    height: '100%',
    maxWidth: 'calc(100% - 84px)',
    padding: theme.spacing(1),
    flex: '1 0 auto'
  },
  cardActions: {
    textAlign: 'right'
  },
  cardName: {
    height: 'calc(100% - 64px)'
  },
  tabsContainer: {
    borderBottom: `1px solid ${theme.palette.secondary.light}`
  },
  tab: {
    minWidth: 'auto',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  fullHeight: {
    height: '100%'
  }
}))

const Message = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesListAction())
  }, [dispatch])

  const { messages, isLoadingList, message, isLoading } = useSelector(state => state.message)

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/library')
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={'Email Sendbox'}
        action={
          <Button
            color='primary'
            variant='contained'
            onClick={(e) => handleSubmit(e)}
          >
            Compose Email
          </Button>
        }
      />
      <CardContent className={classes.cardName}>
        <Grid container className={classes.fullHeight} spacing={3}>
          <Grid item md={6} className={classes.fullHeight}>
            <MessageList messages={messages} isLoading={isLoadingList} />
          </Grid>
          <Grid item md={6} className={classes.fullHeight}>
            <MessageView message={message} isLoading={isLoading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Message
