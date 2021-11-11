import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTemplateAction } from '../../state/editor/editorDucks';
import { RootState } from '../../state/store'


const useCreateDialog = () => {
  const dispatch = useDispatch();
  const isReady = useSelector((state: RootState) => state.editor.isReady);

  const [activeStep, setActiveStep] = useState(0);

  const [formData,setFormData] = useState({
    templateType: 0,
    name: 'Untitle Template',
    designType: 1,
  })

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
    dispatch(createTemplateAction(formData))
    handleNext();

  }

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep !== 1 ? prevActiveStep + 1 : prevActiveStep);
	};

  return {isReady, formData, activeStep, handleOnChange, handleSubmit}
}

export default useCreateDialog