import { Stepper, Step, StepLabel } from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles'

import { stepsData } from "../../../utils/data";

const useStyles = makeStyles((theme) => ({
  stepper: {
		paddingLeft: 0
	}
}))

const DialogStepper = ({ activeStep }: PropTypes) => {
  const classes = useStyles();

  return (
    <Stepper orientation="vertical" className={classes.stepper} activeStep={activeStep}>
      {stepsData.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        )
      })}
  </Stepper>
  )
}

export default DialogStepper

interface PropTypes {
  activeStep: number;
}