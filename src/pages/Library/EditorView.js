import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Grow } from '@material-ui/core'

import CreateDialog from '../../components/Editor/CreateDialog'
import NameDialog from '../../components/Editor/NameDialog'

import EditorContainer from '../../container/Editor/Editor'
import DialogBack from '../../components/DialogConfirmation'

import { getDefaultTemplate, getTemplate, createTemplate, updateTemplate } from '../../service/libraryServices'
import { getTemplate as getStoreTemplate } from '../../service/storeServices'
import { setAlertAction } from '../../state/app/appDucks'

import { dialogGoBackData } from '../../utils/data'

const Editor = ({ history, location }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [showDialogBack, setShowDialogBack] = useState(false);
  const [showDialogForm, setShowDialogForm] = useState(false);
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [templateData, setTemplateData] = useState({
    id: null,
    name: 'Untitle Template',
    templateType: 0,
    designType: 1,
    dataJson: null,
    dataHtml: ''
  })

  const templateList = useSelector((state) => state.library.templateList)

  useEffect(() => {
    //Edit an current template
    if (location.state !== undefined) {
      //From User Library
      if(location.state.template !== undefined) {
      getTemplate(location.state.template)
        .then(data => {
          setTemplateData(prevState => ({
            ...prevState,
            ...data
          }))
          setShowDialogForm(false)
          setLoading(false)
        })
      }
      //From Store
      else if(location.state.store !== undefined){
        setShowNameDialog(true)
      }
    }
    //Create a new Template
    else {
      setShowDialogForm(true);
    }
    return () => {}
  }, [templateList, location.state])

  useEffect(() => {
    if (templateData.dataJson !== null && templateData.dataHtml !== '') {
      updateTemplate(templateData)
      return
    }
  }, [templateData])

  const handleDialogFormClose = (e) => {
    e.preventDefault();
    setShowDialogForm(false)
  }

  const handleNameDialogClose = () => {
    setShowNameDialog(false);
  }

  const handleOnSave = (data) => {
    setTemplateData(prevState => ({
      ...prevState,
      dataJson: data.dataJson,
      dataHtml: data.dataHtml
    }))
    dispatch(setAlertAction({ type: "success", message: 'Template has been saved!' }))
    handleBack();
  }

  const handleBack = () => {
    history.push('/library')
  }

  const dialogBackData = dialogGoBackData();

  return (
    <>
      <Grow in={true} mountOnEnter unmountOnExit>
        <EditorContainer
          loading={loading}
          templateData={templateData}
          handleOpenConfirmation={() => setShowDialogBack(true)}
          handleOnSave={(data) => handleOnSave(data)}
          handleBack={e => handleBack(e)}
        />
      </Grow>
      <CreateDialog
        isOpen={showDialogForm}
        handleOnClose={(e) => handleDialogFormClose(e)}
      />
      <NameDialog 
        isOpen={showNameDialog}
        templateId={location.state.store}
        handleOnClose={handleNameDialogClose}
      />
      <DialogBack 
        isOpen={showDialogBack} 
        data={dialogBackData} 
        handleCancel={() => setShowDialogBack(false)} handleClick={handleBack} 
      />
    </>
  )
}

export default Editor
