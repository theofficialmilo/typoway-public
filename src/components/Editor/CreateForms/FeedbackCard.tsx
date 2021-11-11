import {
	Box,
	Typography,
	Button,
	CircularProgress,
	makeStyles
} from '@material-ui/core'

import Lottie from 'lottie-react'
import tick from '../../../assets/40401-tick.json'

//Styling Const
const useStyles = makeStyles(theme => ({
	loaderBox: {
		textAlign: 'center',
		margin: theme.spacing(8)
	},
}))

const FeedbackCard = ({isReady, handleOnClose} : PropTypes) => {
  const classes = useStyles();

  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleOnClose();
  }

  return (
    <>
		  <Box className={classes.loaderBox}>
			  {!isReady ?
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
      {isReady && (<Button variant='contained' color='primary' onClick={(e) => handleOnClick(e)} fullWidth>
				Start Designing!
			</Button>)
      }
    </>
	)
}

export default FeedbackCard

interface PropTypes {
  isReady: boolean,
  handleOnClose: CallableFunction,
}