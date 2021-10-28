import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import { setAlertAction } from '../../state/app/appDucks';
import { getListAction } from '../../state/library/libraryDucks';

import { deleteTemplate, getTemplate } from '../../service/libraryServices';

import { requestDownload } from '../../utils/helper';

import useAnchor from '../Common/useAnchor';

const useLibraryView = () => {
  const dispatch = useDispatch();
  const {anchorEl, handleSetAnchor, handleUnsetAnchor} = useAnchor(); 
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | undefined>();

  const userEmail = useSelector((state:RootState) => state.user.user.email)
  const templateState = useSelector((state: RootState) => state.library) 

  useEffect(() => {
    dispatch(getListAction(userEmail))
  }, [userEmail])

  const handleShowMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSetAnchor(e.currentTarget);
    setSelectedTemplateId(e.currentTarget.value);
  }

  const handleHideMenu = () => {
    handleUnsetAnchor();
    setSelectedTemplateId(undefined);
  }

  const handleOnDelete = () => {
    handleUnsetAnchor();
    setShowDialog(true);
  }

  const handleExport = () => {
    if(selectedTemplateId) 
      getTemplate(selectedTemplateId)
        .then(resp => {
          requestDownload(resp);
          handleHideMenu();
      })
  }

  const handleDelete = () => {
    if(selectedTemplateId)
      deleteTemplate(selectedTemplateId)
        .then(data => {
          setSelectedTemplateId(undefined);
          setShowDialog(false);
          dispatch(setAlertAction({type: 'success', message: data}));
          dispatch(getListAction(userEmail)); 
        })
  }

  return {anchorEl, showDialog, templateState, setShowDialog, handleShowMenu, handleHideMenu, handleOnDelete, handleExport, handleDelete}

}
 export default useLibraryView;

