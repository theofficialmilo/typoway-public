import React, { useState, useRef, useEffect, useCallback } from 'react'

import EmailEditor from 'react-email-editor'

import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skeleton from '@material-ui/lab/Skeleton'

import Header from '../../components/Editor/Header'

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    width: '100%',
    borderRadius: '10px'
  }
}))

const Editor = ({ loading, templateData, handleOpenConfirmation, handleOnSave, handleBack }) => {
  const classes = useStyles();

  const emailEditorRef = useRef(null);
  const [loadingEditor, setLoadingEditor] = useState(true);

  const loadDesign = useCallback(() => {
    const template = JSON.parse(templateData.dataJson);
    emailEditorRef.current.editor.loadDesign(template);
  }, [templateData.dataJson])

  useEffect(() => {
    if (loadingEditor) return;
    else loadDesign();
  }, [loadingEditor, loadDesign]);

  const onEditorLoad = () => {
    setLoadingEditor(false)
  }

  const saveDesign = (e) => {
    e.preventDefault();
    var dataObj = {};
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      dataObj.dataHtml = html;
      dataObj.dataJson = JSON.stringify(design);
      handleOnSave(dataObj)
    })
  }

  const checkDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      design = JSON.stringify(design);
      if (design !== templateData.dataJson)
        handleOpenConfirmation();
      else
        handleBack();
    })
  }

  return (
    <Paper className={classes.mainPaper} elevation={2}>
      <Header
        loading={loading}
        handleBack={checkDesign}
        handleSave={(e) => saveDesign(e)}
        templateData={templateData}
      />
      {!loading ?
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onEditorLoad}
          minHeight={'calc(100% - 64px)'}
        /> :
        <Skeleton variant="rect" width={'100%'} height={'calc(100% - 64px)'} />
      }
    </Paper>
  )
}

export default Editor