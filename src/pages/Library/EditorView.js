import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Grow } from '@material-ui/core'

import CreateDialog from '../../components/Editor/CreateDialog'
import NameDialog from '../../components/Editor/NameDialog'

import EditorContainer from '../../container/Editor/Editor'
import DialogBack from '../../components/DialogConfirmation'

import { setAlertAction } from '../../state/app/appDucks'

import { dialogGoBackData } from '../../utils/data'
import useEditorView from '../../hooks/Library/useEditorView'

const Editor = ({ history, location }) => {
  const dispatch = useDispatch();
  const {
    showCreateDialog,
    showStoreDialog,
    showPromptDialog,
    setShowCreateDialog,
    setShowStoreDialog,
    setShowPromptDialog
  } = useEditorView(location);

  //Handlers should only be for dialogs
  const handleDialogFormClose = (e) => {
    e.preventDefault();
    setShowCreateDialog(false)
  }

  const handleNameDialogClose = () => {
    setShowStoreDialog(false);
  }

  const handleOnSave = (data) => {
    dispatch(setAlertAction({ type: "success", message: 'Template has been saved!' }))
    handleBack();
  }

  //Handle Redirection of url
  const handleBack = () => {
    history.push('/library')
  }

  const dialogBackData = dialogGoBackData();

  return (
    <>
      <Grow in={true} mountOnEnter unmountOnExit>
        <EditorContainer
          handleOpenConfirmation={() => setShowPromptDialog(true)}
          handleOnSave={(data) => handleOnSave(data)}
          handleBack={e => handleBack(e)}
        />
      </Grow>
      <CreateDialog
        isOpen={showCreateDialog}
        handleOnClose={(e) => handleDialogFormClose(e)}
      />
      {(location.state && location.state.store) &&
        <NameDialog
          isOpen={showStoreDialog}
          templateId={location.state.store}
          handleOnClose={handleNameDialogClose}
        />
      }
      <DialogBack
        isOpen={showPromptDialog}
        data={dialogBackData}
        handleCancel={() => setShowPromptDialog(false)} handleClick={handleBack}
      />
    </>
  )
}

export default Editor
