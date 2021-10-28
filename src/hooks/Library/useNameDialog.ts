import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTemplate as getStoreTemplate } from '../../service/storeServices'
import { createTemplateAction } from '../../state/library/libraryDucks';

const useNameDialog = (templateId: string, handleOnClose: CallableFunction) => {
  const dispatch = useDispatch();

  const [formData,setFormData] = useState({
    name: 'Untitle Template',
    templateType: 0,
    dataJson: undefined
  })

  useEffect(() => {
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
    dispatch(createTemplateAction(formData));
    handleOnClose();
  }

  return { formData , handleOnChange, handleSubmit}
}

export default useNameDialog