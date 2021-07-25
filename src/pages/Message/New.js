import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Base64 } from "js-base64";

import { Editor } from '@tinymce/tinymce-react';

import { Paper, Typography, Grow, makeStyles, TextField, IconButton, Button, Box, Toolbar } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import { getTemplate } from '../../service/templateServices';
import { sendMessage } from '../../service/messageServices';
import { setAlertAction } from '../../state/app/appDucks';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderRadius: '10px'
  },
  editorBox: {
    height: '100%',
    width: '100%'
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  morebutton: {
    padding: 0
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
  },
  contentDiv: {
    padding: '0 24px',
    height: 'calc(100% - 64px)'
  },
  textDiv: {
    marginBottom: theme.spacing(4)
  }
}))

const New = ({ history, location }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [templateHtml, setTemplateHtml] = useState(null)
  const [form, setForm] = useState({
    to: null,
    cc: '',
    subject: null,
    message: null
  })

  useEffect(() => {
    const loadTemplate = (templateId) => {
      getTemplate(templateId)
        .then(resp => {
          setTemplateHtml(resp.dataHtml)
        })
    }
    loadTemplate(location.state)
    return
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTo = form.to;
    const ccTo = form.cc;
    const subject = form.subject;
    const message = form.message;

    formatMessage(
      {
        To: emailTo,
        CC: ccTo,
        Subject: subject,
        'Content-Type': 'text/html; charset=UTF-8',
        "Content-Transfer-Encoding": "base64"
      },
      message
    );
  };

  const formatMessage = (headers_obj, message) => {
    let email = "";

    for (var header in headers_obj) {
      email += header += ": " + headers_obj[header] + "\r\n";
    }

    email += "\r\n" + message;

    const base64EncodedEmail = Base64.encodeURI(email);

    sendMessage(base64EncodedEmail)
      .then(resp => {
        if (resp.status === 200) {
          dispatch(setAlertAction({ type: 'success', message: 'Message has been sent!' }))
          history.push({
            pathname: '/message',
          });
        }
      })
      .catch(error => {
        dispatch(setAlertAction({ type: 'error', message: error.result.error.message }))
      })
  };

  const handleEditorOnChange = (content) => {
    setForm(prevState => ({
      ...prevState,
      message: content
    }))
  }

  const handleFormOnChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Paper className={classes.root}>
      <Toolbar>
        <Box className={classes.title}>
          <IconButton
            onClick={() => history.push('/library')}
            className={classes.button}
            size='small'>
            <ArrowBackIos fontSize="small" />
          </IconButton>
          <Typography variant='h6' color='secondary'>
            {!loading ? 'Send Message' : <Skeleton width={150} />}
          </Typography>
        </Box>
        <div className={classes.buttonDiv}>
          {!loading &&
            <Grow in={!loading}>
              <Button
                color='primary'
                variant='contained'
                onClick={(e) => handleSubmit(e)}
              >
                Send Message
              </Button>
            </Grow>
          }
        </div>
      </Toolbar>
      <div className={classes.contentDiv}>
        <div className={classes.textDiv}>
          {!loading ?
            <>
              <TextField name='to' id="to" label="To:" fullWidth size='small' onChange={handleFormOnChange} />
              <TextField name='cc' id="cc" label="Cc:" fullWidth size='small' onChange={handleFormOnChange} />
              <TextField name='subject' id="subject" label="Subject" fullWidth size='small' onChange={handleFormOnChange} />
            </> :
            <Skeleton variant="rect" width={'100%'} height={135} />
          }
        </div>
        <Editor
          className={classes.editor}
          initialValue={templateHtml}
          outputFormat='html'
          apiKey={process.env.REACT_APP_TINYMCE_KEY}
          init={{
            visual: false,
            width: '100%',
            height: '75%',
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
              'visualblocks',
              'code', 'fullpage',
            ],
            visualblocks_default_state: false,
            toolbar:
              'undo redo code| formatselect | bold italic backcolor' +
              'alignleft aligncenter alignright alignjustify' +
              'bullist numlist outdent indent | removeformat | help fullpage',
            setup: function (editor) {
              editor.on('init', function (e) {
                setLoading(false)
              });
            }
          }}
          onEditorChange={handleEditorOnChange}
        />
      </div>
    </ Paper >
  )
}

export default New
