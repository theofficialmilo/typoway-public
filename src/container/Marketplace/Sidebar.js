import React from 'react'

import { Link as RouterLink } from 'react-router-dom'

import {Box, List, ListItem,ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles' 

import { marketplaceNav } from '../../utils/data'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  listItem: {
    fontSize: theme.typography.subtitle1.fontSize
  },
  listItemSelected: {
    color: '#1989fa !important',
    background: "transparent !important"
  }
}))

const Sidebar = ({active, handleSelect}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List disablePadding>
        <ListItem>
          <Typography variant='h5'>Store</Typography>
        </ListItem>
        {marketplaceNav.map((data, index) => (

          <ListItem 
            dense 
            id={data.title}
            component={RouterLink} 
            selected={active === data.title ? true : false}
            key={index} 
            button 
            onClick={handleSelect} 
            to={data.to}
          >
            <ListItemIcon className="MuiButton-startIcon">
              {data.icon}
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant="subtitle1">
                {data.title}
              </Typography>
            } />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar
