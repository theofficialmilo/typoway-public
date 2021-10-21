import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import Lottie from 'lottie-react';

import { Box, Container, Grid, Typography, Avatar, makeStyles, Paper, Toolbar } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { getHeader, removeQuote, formatDate } from "../../utils/helper"

import { clearMessageAction } from '../../state/sendbox/sendboxDucks';

import Mail from '../../assets/e-mail.json'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px'
  },
  container: {
    height: "100%"
  },
  headerContainer: {
    padding: "8px 24px",
    margin: 0,
    width: '100%'
  },
  btmHeader: {
    textAlign: "left"
  },
  iframe: {
    height: 'calc(100% - 109px)',
    overflowY: 'scroll',
    width: '100%'
  },
  date: {
    textAlign: 'right'
  },
  skeletonDate: {
    display: 'inline-block',
    marginRight: 0
  }
}))

const EmptyMail = () => {
  const classes = useStyles();

  return (
    <Box className={classes.eptyMail}>
      <div>
        <Lottie
          loop={true}
          animationData={Mail}
          style={{ height: 400 }}
        />
        <Typography color='secondary' variant='h5' align='center'>
          Click on an Email to Open it
        </Typography>
      </div>
    </Box>
  )
}

const MessageView = ({ message, isLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearMessageAction());
    }
  }, [dispatch])

  const headers = message ? message.headers : [];
  const htmlData = message ? DOMPurify.sanitize(message.data) : '';

  return (
    <Paper elevation={0} className={classes.root} >
      {message === null ? (
        <EmptyMail />
      ) : (
        <Grid className={classes.container}>
          <Toolbar variant='dense'>
            <Typography variant="h5" noWrap>
              {!isLoading ? getHeader(headers, "Subject") : (<Skeleton width={100} />)}
            </Typography>
          </Toolbar>
          <Box className={classes.headerContainer}>
            <Grid item container wrap="nowrap" justifyContent="flex-start" direction="row" className={classes.btmHeader} spacing={2}>
              <Grid item >
                {!isLoading ? (<Avatar
                  alt={removeQuote(getHeader(headers, "From").split("<")[0])}
                  src="/static/images/avatar/1.jpg"
                />) : (<Skeleton variant="circle" width={40} height={40} />)}
              </Grid>
              <Grid item container direction="row" >
                <Grid item md={6}>
                  <Typography variant="body1">
                    {!isLoading ? getHeader(headers, "From") : (<Skeleton width={200} />)}
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.date}>
                  <Typography variant="caption">
                    {!isLoading ? formatDate(getHeader(headers, "Date")) : (<Skeleton width={125} className={classes.skeletonDate} />)}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography variant="caption">
                    {!isLoading ? `To: ${getHeader(headers, "To")}` : (<Skeleton width={150} />)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Container component='div' id='iframe' title='messageBody' className={classes.iframe}>
            {!isLoading ? (<div dangerouslySetInnerHTML={{ __html: htmlData }} />) : (<Skeleton variant="rect" width={'100%'} height={'calc(100% - 16px)'} />)}
          </Container>
        </Grid>
      )
      }
    </Paper>
  )
}

export default MessageView