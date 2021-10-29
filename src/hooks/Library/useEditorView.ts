import { Location } from 'history';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editTemplateAction } from '../../state/library/libraryDucks';

const useEditorView = (location: Location<State>) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [showStoreDialog, setShowStoreDialog] = useState<boolean>(false);
  const [showPromptDialog, setShowPromptDialog] = useState<boolean>(false);

  //UseEffect for directing what type of operations
  //Create 
  // -- From Library
  // -- From Store
  //Update
  // -- Form Library
  useEffect(() => {
    console.log(location);
    if(location.state === undefined) setShowCreateDialog(true);
    else {
      //Show Store Dialog, else dispatch template Id to put and edit
      if (location.state.store !== undefined) setShowStoreDialog(true)
      if (location.state.template !== undefined) dispatch(editTemplateAction(location.state.template))
    }
    return () => {
    }
  }, [location])

  return {
    showCreateDialog, 
    showStoreDialog, 
    showPromptDialog,
    setShowCreateDialog,
    setShowStoreDialog,
    setShowPromptDialog
  }
}

export default useEditorView;

interface State {
  template?: string,
  store?: string
}