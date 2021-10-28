import { useRef } from 'react'
import {
	FormControl,
	FormLabel,
	OutlinedInput,
	Select,
	MenuItem,
  Button,
} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles';

import CustomRadioGroup from '../../CustomRadioGroup';
import { templateTypeData, designTypeData } from '../../../utils/data'

//Styling Const
const useStyles = makeStyles(theme => ({
	templateType: {
		marginBottom: theme.spacing(2)
	}
}))

//Form Information Dialog Component
//This Component is used to get:
//- type of template 
//- design type of template
const InfoForm = ({nameValue, templateTypeValue, designTypeValue, handleOnChange, handleOnSubmit} : PropTypes) => {
  const classes = useStyles();
	const radioGroupRef = useRef(null);

  return (
    <form>
			<FormControl variant="outlined" size='small' fullWidth className={classes.templateType}>
				<FormLabel component='legend' color='secondary'>Template Type</FormLabel>
				<Select
					id="templateType"
					name="templateType"
					value={templateTypeValue}
					onChange={(e) => handleOnChange(e)}
				>
					{templateTypeData.map((text, index) => (
						<MenuItem key={text} id={index.toString()} value={index} >
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
					onChange={(e) => handleOnChange(e)}
				/>
			</FormControl>
			<CustomRadioGroup
				header="Design Type"
				id='designType'
				value={designTypeValue}
				radioGroupRef={radioGroupRef}
				handleOnChange={handleOnChange}
				options={designTypeData}
			/>
      <Button variant='contained' color='primary' fullWidth onClick={(e) => handleOnSubmit(e)}>
        Next
      </Button>
		</form>
  )
}

export default InfoForm

interface PropTypes {
  nameValue: string,
  templateTypeValue: number, 
  designTypeValue: number,
  handleOnChange: CallableFunction,
  handleOnSubmit: CallableFunction
}