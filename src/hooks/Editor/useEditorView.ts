import { Location } from 'history';
import { useState, useEffect } from 'react'
import { ExtractRouteParams } from 'react-router';
import { useParams } from 'react-router-dom';

const useEditorView = (location: Location) => {
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [showNameDialog, setShowNameDialog] = useState<boolean>(false);

  let {type, value}: ExtractRouteParams<string> = useParams();

  useEffect(() => {
    if(type === 'create' && value === undefined) setShowCreateDialog(true);
    else if(type === 'create' && value !== undefined) setShowNameDialog(true);
    return () => {
    }
  }, [location])

  return {
    type,
    value,
    showCreateDialog,
    showNameDialog,
    setShowCreateDialog,
    setShowNameDialog
  }
}

export default useEditorView;