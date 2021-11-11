import EmailEditor from 'react-email-editor'

import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skeleton from '@material-ui/lab/Skeleton'

import Header from './Header'
import DialogBack from '../DialogConfirmation'
import { dialogGoBackData } from '../../utils/data'

import useEditorComp from '../../hooks/Editor/useEditorComp'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    width: '100%',
    borderRadius: '10px'
  }
}))

const Editor = () => {
  const classes = useStyles();
  const {
    isLoading,
    template,
    showPromptDialog,
    setShowPromptDialog,
    emailEditorRef,
    checkDesign,
    editorReady,
    saveDesign,
    editorOnLoad,
    handleToLibrary
  } = useEditorComp();

  return (
    <>
      <Paper className={classes.mainPaper} elevation={2}>
        <Header
          loading={isLoading}
          handleBack={checkDesign}
          handleSave={(e:React.MouseEvent<HTMLButtonElement>) => saveDesign(e)}
          templateData={template}
        />
        {!isLoading ?
          <EmailEditor
            ref={emailEditorRef}
            onLoad={editorOnLoad}
            onReady={editorReady}
            minHeight='calc(100% - 64px)'
          /> :
          <Skeleton variant="rect" width='100%' height='calc(100% - 64px)' />
        }
      </Paper>
      <DialogBack 
        isOpen={showPromptDialog}
        data={dialogGoBackData}
        handleCancel={() => setShowPromptDialog(false)}
        handleClick={handleToLibrary}
      />
    </>
  )
}

export default Editor