import React, { useState, useRef, useEffect } from 'react'

import {
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	FormControl,
	FormLabel,
	OutlinedInput,
	Grid,
	Select,
	MenuItem,
	Stepper,
	Step,
	StepLabel,
	Button,
	CircularProgress,
	makeStyles
} from '@material-ui/core'

import Lottie from 'lottie-react'
import tick from '../../assets/40401-tick.json'

import CustomRadioGroup from '../../components/CustomRadioGroup'

import { templateTypeData, designTypeData, stepsData } from '../../utils/data'

//Styling Const
const useStyles = makeStyles(theme => ({
	rootDialog: {
		width: '100%'
	},
	templateType: {
		marginBottom: theme.spacing(2)
	},
	dialogContent: {
		paddingBottom: theme.spacing(2)
	},
	stepper: {
		paddingLeft: 0
	},
	loaderBox: {
		textAlign: 'center',
		margin: theme.spacing(8)
	},
}))

//Data Constants
const templateType = templateTypeData();
const templateDesignType = designTypeData();

//Form Information Dialog Component
//This Component is used to get:
//- type of template 
//- design type of template
const InfoDialog = ({ nameValue, templateTypeValue, designTypeValue, handleOnChange }) => {
	const classes = useStyles();
	const radioGroupRef = useRef(null);

	return (
		<>
			<FormControl variant="outlined" size='small' fullWidth className={classes.templateType}>
				<FormLabel component='legend' color='secondary'>Template Type</FormLabel>
				<Select
					id="templateType"
					name="templateType"
					value={templateTypeValue}
					onChange={handleOnChange}
				>
					{templateType.map((text, index) => (
						<MenuItem key={text} id={index} value={index}>
							{text}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl variant="outlined" size='small' fullWidth className={classes.templateType}>
				<FormLabel component='legend' color='secondary' htmlFor="name">Template Name</FormLabel>
				<OutlinedInput
					id="name"
					name="name"
					value={nameValue}
					onChange={handleOnChange}
				/>
			</FormControl>
			<CustomRadioGroup
				header="Design Type"
				id='designType'
				value={designTypeValue}
				radioGroupRef={radioGroupRef}
				handleOnChange={handleOnChange}
				options={templateDesignType}
			/>
		</>
	)
}

//Loader & Feedback Dialog Compoenent
//This Component is used to simulation loading and feedback of editor component being loaded.
const StartDesigningDialog = ({ handleOnLoad }) => {
	const classes = useStyles();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//Uses timeout to simulate loading.
		setTimeout(() => {
			setLoading(false);
			handleOnLoad()
		}, 3000);
		return
	}, [loading, handleOnLoad])

	return (
		<Box className={classes.loaderBox}>
			{loading ?
				<>
					<CircularProgress size='10rem' thickness={1.5} />
					<Typography variant='h6' color='secondary'>Please hold as we are preparing the workspace</Typography>
				</> :
				<>
					<Lottie
						loop={false}
						animationData={tick}
						style={{ height: 240 }}
					/>
					<Typography variant='h6' color='primary'>You can start designing!</Typography>
				</>
			}
		</Box>
	)
}


//Main Component for Dialog Component
const DialogForm = ({ templateData, isOpen, handleOnChange, handleOnSubmit, handleOnClose }) => {
	const classes = useStyles();

	const [activeStep, setActiveStep] = useState(0);
	const steps = stepsData();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep !== 2 ? prevActiveStep + 1 : prevActiveStep);
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
							<Stepper orientation="vertical" className={classes.stepper} activeStep={activeStep}>
								{steps.map((label, index) => {
									const stepProps = {};
									const labelProps = {};
									return (
										<Step key={label} {...stepProps}>
											<StepLabel {...labelProps}>{label}</StepLabel>
										</Step>
									)
								})}
							</Stepper>
						</Grid>
						<Grid item >
							<Typography variant='body2' color='secondary' component='p'>
								&#9432; You can still change these options later.<br />
								Located at Settings &gt; Profile
							</Typography>
						</Grid>
					</Grid>
					<Grid item md={9}>
						<form>
							{activeStep === 0 &&
								<InfoDialog
									nameValue={templateData.name}
									templateTypeValue={templateData.templateType}
									designTypeValue={templateData.designType}
									handleOnChange={handleOnChange}
								/>}
							{activeStep < 1 &&
								<Button variant='contained' color='primary' onClick={(e) => { handleOnSubmit(e); handleNext() }} fullWidth>
									Next
								</Button>
							}
						</form>
						{activeStep >= 1 && <StartDesigningDialog handleOnLoad={() => handleNext()} />}
						{activeStep === 2 &&
							<Button variant='contained' color='primary' onClick={handleOnClose} fullWidth>
								Start Designing!
							</Button>
						}
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default DialogForm
