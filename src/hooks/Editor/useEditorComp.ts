import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { HtmlExport } from "react-email-editor";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { clearTemplateAction } from "../../state/library/libraryDucks";

const useEditorComp = (handleBack:CallableFunction, handleOnSave:CallableFunction) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditorLoaded, setIsEditorLoaded] = useState<boolean>(false);

  const emailEditorRef = useRef<any>(null);

  let templateData = useSelector((state:RootState) => state.library.editorTemplate);

  const loadDesign = useCallback(() => {
    console.log(templateData.dataJson);
    const template = JSON.parse(templateData.dataJson)
    emailEditorRef.current!.editor.loadDesign(template);
  }, [templateData])

  useEffect(() => {
    if(isEditorLoaded) loadDesign();
    return () => {}
  }, [isEditorLoaded])

  useEffect(() => {
    if(templateData !== null)
      setIsLoading(false);
  }, [templateData]) 

  //Action Handlers
  const saveDesign = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    var dataObj: HTMLData;
    emailEditorRef.current!.editor.exportHtml((data: HtmlExport) => {
      const { design, html } = data;
      dataObj.dataHtml = html;
      dataObj.dataJson = JSON.stringify(design);
      handleOnSave(dataObj)
    })
  } 

  const checkDesign = () => {
    //Check if there are any design changes, if yes, show Dialog.

  }

  const editorOnLoad = () => {
    setIsEditorLoaded(true);
  }

  return {isLoading, templateData ,emailEditorRef, checkDesign, saveDesign, editorOnLoad}

}

export default useEditorComp

interface PropTypes{

}

interface HTMLData {
  dataHtml: string,
  dataJson: string
}