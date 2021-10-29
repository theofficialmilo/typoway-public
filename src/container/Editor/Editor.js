import React, { useState, useRef, useEffect, useCallback } from 'react'

import EmailEditor from 'react-email-editor'

import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skeleton from '@material-ui/lab/Skeleton'

import Header from '../../components/Editor/Header'
import useEditorComp from '../../hooks/Editor/useEditorComp'

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    width: '100%',
    borderRadius: '10px'
  }
}))

const Editor = ({ handleOpenConfirmation, handleOnSave, handleBack }) => {
  const classes = useStyles();
  const {
    isLoading,
    templateData,
    emailEditorRef,
    checkDesign,
    saveDesign,
    editorOnLoad
  } = useEditorComp(handleBack, handleOnSave);

  return (
    <Paper className={classes.mainPaper} elevation={2}>
      <Header
        loading={isLoading}
        handleBack={checkDesign}
        handleSave={(e) => saveDesign(e)}
        templateData={templateData}
      />
      {!isLoading ?
        <EmailEditor
          ref={emailEditorRef}
          onLoad={editorOnLoad}
          minHeight={'calc(100% - 64px)'}
        /> :
        <Skeleton variant="rect" width={'100%'} height={'calc(100% - 64px)'} />
      }
    </Paper>
  )
}

export default Editor