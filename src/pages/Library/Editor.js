import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Grow } from '@material-ui/core'

import DialogForm from '../../container/Editor/DialogForm'
import EditorContainer from '../../container/Editor/Editor'
import DialogBack from '../../components/DialogConfirmation'

import { getDefaultTemplate, getTemplate, createTemplate, updateTemplate } from '../../service/templateServices'
import { setAlertAction } from '../../state/app/appDucks'

import { dialogGoBackData } from '../../utils/data'

const Editor = ({ history, location }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [showDialogBack, setShowDialogBack] = useState(false);
  const [showDialogForm, setShowDialogForm] = useState(false);
  const [templateData, setTemplateData] = useState({
    id: null,
    name: 'Untitle Template',
    templateType: 0,
    designType: 1,
    dataJson: null,
    dataHtml: ''
  })

  const templateList = useSelector((state) => state.template.templateList)

  useEffect(() => {
    if (location.state !== undefined) {
      getTemplate(location.state)
        .then(data => {
          setTemplateData(data)
          setShowDialogForm(false)
          setLoading(false)
        })
    }
    else {
      setShowDialogForm(true);
    }
    return () => {
    }
  }, [templateList, location.state])

  useEffect(() => {
    if (templateData.dataJson !== null && templateData.dataHtml !== '') {
      updateTemplate(templateData)
      return
    }
    if (templateData.id === null && templateData.dataJson !== null) {
      createTemplate(templateData)
        .then(id => {
          setTemplateData(prevState => ({
            ...prevState,
            id: id
          }))
        })
      return
    }
  }, [templateData])

  const handleFormOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    name !== 'name' ?
      setTemplateData(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      })) :
      setTemplateData(prevState => ({
        ...prevState,
        [name]: value
      }))
  }

  const handleFormSubmit = () => {
    if (templateData.designType === 1) {
      getDefaultTemplate(templateData.templateType.toString())
        .then(data => {
          setTemplateData(prevState => ({
            ...prevState,
            dataJson: data
          }))
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else if (templateData.designType === 0) {
      createTemplate(templateData)
        .then(id => {
          setTemplateData(prevState => ({
            ...prevState,
            id: id
          }))
        })
      setLoading(false);
    }
  }

  const handleDialogFormClose = (e) => {
    e.preventDefault();
    setShowDialogForm(false)
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
      <DialogForm
        templateData={templateData}
        isOpen={showDialogForm}
        handleOnChange={(e => handleFormOnChange(e))}
        handleOnSubmit={handleFormSubmit}
        handleOnClose={(e) => handleDialogFormClose(e)}
      />
      <DialogBack isOpen={showDialogBack} data={dialogBackData} handleCancel={() => setShowDialogBack(false)} handleClick={handleBack} />
      <Grow in={true} mountOnEnter unmountOnExit>
        <EditorContainer
          loading={loading}
          templateData={templateData}
          handleOpenConfirmation={() => setShowDialogBack(true)}
          handleOnSave={(data) => handleOnSave(data)}
          handleBack={e => handleBack(e)}
        />
      </Grow>
    </>
  )
}

export default Editor
