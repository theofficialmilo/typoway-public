import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTemplate as getStoreTemplate } from '../../service/storeServices'
import { createTemplateAction } from '../../state/editor/editorDucks';
import { RootState } from '../../state/store';

const useNameDialog = (templateId: string | undefined, handleOnClose: CallableFunction) => {
  const dispatch = useDispatch();

  const isReady = useSelector((state: RootState) => state.editor.isReady)

  const [isLoading, setIsLoading] = useState(false);
  const [formData,setFormData] = useState({
    name: 'Untitle Template',
    templateType: 0,
    dataJson: undefined
  })

  useEffect(() => {
    if(isReady === true) handleOnClose();
    return () => {
    }
  }, [isReady])

  useEffect(() => {
    if(templateId !== undefined)
      getStoreTemplate(templateId)
        .then(template => {
          setFormData(prevState => ({
            ...prevState,
            templateType: template.templateType,
            dataJson: template.data
          }))
        })
      return () => {
      }
  }, [templateId])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target
    name !== 'name' ?
      setFormData(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      })) :
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(createTemplateAction(formData));
  }

  return { formData, isLoading, handleOnChange, handleSubmit}
}

export default useNameDialog