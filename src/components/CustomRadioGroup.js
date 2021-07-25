import React from 'react'
import {
  makeStyles,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  CardContent,
  CardActionArea,
  Typography,
  FormLabel,
  RadioGroup,
  Card,
  CardMedia
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  card: {
    borderColor: theme.palette.primary.main,
    backgroundColor: 'rgba(109, 184, 255, 0.2)'
  },
  formControlLabel: {
    margin: 0
  },
  radioButton: {
    display: 'none'
  },
  cardImg: {
    width: '85px',
    height: '85px',
    margin: '20px auto'
  },
}))

const CustomRadioGroup = ({ header, value, radioGroupRef, handleOnChange, options, id }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} component='fieldset'>
      <FormLabel component='legend' color='secondary'>{header}</FormLabel>
      <RadioGroup aria-label={header} name={id} row value={value} ref={radioGroupRef} onChange={handleOnChange}>
        <Grid container spacing={2}>
          {options.map((type, index) => (
            <Grid key={type.label} item md={options.length === 2 ? 6 : 4}>
              <Card variant='outlined' className={value === index ? classes.card : ''}>
                <CardActionArea>
                  <FormControlLabel
                    labelPlacement="bottom"
                    className={classes.formControlLabel}
                    value={index}
                    control={
                      <Radio
                        className={classes.radioButton}
                        color='primary'
                      />
                    }
                    label={
                      <>
                        {type.img !== undefined && <CardMedia
                          image={type.img}
                          className={classes.cardImg}
                          component='img'
                        />}
                        {type.icon !== undefined && <CardMedia
                          className={classes.cardImg}
                          children={type.icon}
                        />}
                        <CardContent>
                          <Typography variant='body1' color='primary'>
                            {type.label}
                          </Typography>
                          <Typography variant='body2' color='secondary'>
                            {type.description}
                          </Typography>
                        </CardContent>
                      </>
                    }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}

export default CustomRadioGroup
