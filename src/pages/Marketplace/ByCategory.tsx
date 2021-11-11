import { Grid } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

import TemplateCard from '../../components/Marketplace/TemplateCard'
import useByCategoryView from '../../hooks/Marketplace/useByCategoryView'

import { Location } from 'history'
import { Template } from '../../interfaces/Marketplace'
import { useLocation } from 'react-router'

const useStyles = makeStyles(theme => ({
  cardDiv: {
    width: 'calc(100% / 2)',
    [theme.breakpoints.up(1100)]: {
      width: 'calc(100% / 3)'
    },
    [theme.breakpoints.up(1320)]: {
      width: 'calc(100% / 4)'
    },
    [theme.breakpoints.up(1550)]: {
      width: 'calc(100% / 5)'
    },
    [theme.breakpoints.up(1825)]: {
      width: 'calc(100% / 6)'
    },
  }
}))

const ByCategory = ({handleOnMore}: PropTypes) => {
  const classes = useStyles();
  const location = useLocation();

  const {filteredList} = useByCategoryView(location);

  return (
    <Grid container spacing={2} >
     {filteredList && filteredList.map((data, index) => (
       <Grid item key={index} className={classes.cardDiv}>
        <TemplateCard
          id={data.id}
          price={data.price}
          imgUrl={data.imgUrl}
          title={data.title}
          templateType={data.templateType}
          userName={data.account.name}
          handleOnClick={handleOnMore}
        />
        </Grid>
      ))}
    </Grid>
  )
}

export default ByCategory

interface PropTypes {
  location: Location,
  handleOnMore: React.MouseEventHandler<HTMLButtonElement>,
}
