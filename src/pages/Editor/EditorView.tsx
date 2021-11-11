import { Grow } from '@material-ui/core'

import CreateDialog from '../../components/Editor/CreateDialog'
import NameDialog from '../../components/Editor/NameDialog'

import EditorContainer from '../../components/Editor/EditorComp'

import useEditorView from '../../hooks/Editor/useEditorView'
import { Location } from 'history'

const Editor = ({ location }: PropType) => {
  const {
    value,
    showCreateDialog,
    showNameDialog,
    setShowCreateDialog,
    setShowNameDialog,
  } = useEditorView(location);

  //Handlers should only be for dialogs
  const handleDialogFormClose = () => {
    setShowCreateDialog(false)
  }

  const handleNameDialogClose = () => {
    setShowNameDialog(false)
  }

  return (
    <>
      <Grow in={true} mountOnEnter unmountOnExit>
        <EditorContainer/>
      </Grow>
          <CreateDialog
            isOpen={showCreateDialog}
            handleOnClose={handleDialogFormClose}
          /> 
          <NameDialog
            isOpen={showNameDialog}
            templateId={value}
            handleOnClose={handleNameDialogClose}
          />
      
    </>
  )
}

export default Editor

interface PropType {
  location: Location
}
