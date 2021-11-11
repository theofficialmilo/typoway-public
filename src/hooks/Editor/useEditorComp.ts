import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HtmlExport } from "react-email-editor";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { RootState } from "../../state/store";
import { ExtractRouteParams } from "react-router";
import { clearTemplateAction, getTemplateAction, saveTemplateAction, setIsLoadingAction, setIsReadyAction, updateTemplateAction } from "../../state/editor/editorDucks";

const useEditorComp = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const history = useHistory();

  const {type, value}: ExtractRouteParams<string> = useParams();

  const {isLoading, template} = useSelector((state:RootState) => state.editor);
  const [showPromptDialog, setShowPromptDialog] = useState<boolean>(false);
  const [isEditorLoaded, setIsEditorLoaded] = useState<boolean>(false);

  const emailEditorRef = useRef<any>(null);

  useEffect(() => {
    if((type === 'edit') && (value !== undefined)) dispatch(getTemplateAction(value))
    return () => {}
  }, [location])

  useEffect(() => {
    if(isEditorLoaded) {
      loadDesign()
      updateListener();
    };
    return () => {}
  }, [isEditorLoaded])

  useEffect(() => {
    if(template !== null){
      dispatch(setIsLoadingAction(false))
    }
  }, [template]) 

  useEffect(() => {
    return () => {
      dispatch(clearTemplateAction());
    }
  },[])


  //Action Handlers
  const editorOnLoad = () => {
    setIsEditorLoaded(true);
  }

  const editorReady = () => {
    dispatch(setIsReadyAction(true));
  }

  const loadDesign = useCallback(() => {
    const jsonData = JSON.parse(template.dataJson)
    emailEditorRef.current!.data = template.dataJson;
    emailEditorRef.current!.editor.loadDesign(jsonData);
  }, [template])

  const updateListener = () => {
    emailEditorRef.current.editor.addEventListener('design:updated', function(updates: any){
      emailEditorRef.current.editor.exportHtml(function(data:HtmlExport) {
        var json = JSON.stringify(data.design); // design json
        var html = data.html; // design html
        // Save the json, or html here
        dispatch(updateTemplateAction({dataJson: json, dataHtml: html}))
      })
    })
  }

  const saveDesign = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(saveTemplateAction(template));
  } 

  const checkDesign = () => {
    //Check if there are any design changes, if yes, show Dialog.
    if(emailEditorRef.current.data !== template.dataJson)
      setShowPromptDialog(true);
    else
      handleToLibrary();
  }

  const handleToLibrary = () => {
    history.push('/library')
  }

  return {
    isLoading, 
    template ,
    showPromptDialog,
    setShowPromptDialog,
    emailEditorRef, 
    checkDesign, 
    editorReady, 
    saveDesign, 
    editorOnLoad, 
    handleToLibrary
  }

}

export default useEditorComp