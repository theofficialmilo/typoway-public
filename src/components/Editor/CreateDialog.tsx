import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	Grid,
	makeStyles
} from '@material-ui/core'

import { createTemplateAction } from '../../state/library/libraryDucks'

import InfoForm from './CreateForms/InfoForm'
import DialogStepper from './CreateForms/DialogStepper'
import FeedbackCard from './CreateForms/FeedbackCard'

import { RootState } from '../../state/store'

//Styling Const
const useStyles = makeStyles(theme => ({
	dialogContent: {
		paddingBottom: theme.spacing(2)
	}
}))

const CreateDialogCard = ({ isOpen, handleOnClose }: PropTypes) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.library.editorIsLoading)

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

  return (
    <Dialog open={isOpen} maxWidth='md'>
			<DialogTitle disableTypography>
				<Typography variant='h6' color='secondary'>Create Template</Typography>
			</DialogTitle>
			<DialogContent className={classes.dialogContent}>
				<Grid container spacing={4}>
					<Grid item container md={3} alignContent='space-between'>
						<Grid item>
							<DialogStepper activeStep={activeStep} />
						</Grid>
						<Grid item >
							<Typography variant='body2' color='secondary' component='p'>
								&#9432; You can still change these options later.<br />
								Located at Settings &gt; Profile
							</Typography>
						</Grid>
					</Grid>
					<Grid item md={9}>
						{activeStep === 0 &&
							<InfoForm
								nameValue={formData.name}
								templateTypeValue={formData.templateType}
								designTypeValue={formData.designType}
								handleOnChange={handleOnChange}
                handleOnSubmit={handleSubmit}
							/>
            }
						{activeStep === 1 && 
              <FeedbackCard 
                loading={isLoading} 
                handleOnClose={handleOnClose} 
              />
            }
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
  )
}

export default CreateDialogCard

interface PropTypes {
  isOpen: boolean,
  handleOnClose: CallableFunction
}

