import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const ListItemLink = ({ to, index, text, active, classes, handleClick, icon, ...others }) => {
  return (
    <ListItem
      component={RouterLink}
      button
      dense
      to={to}
      id={text}
      classes={{
        root: classes.listItem,
        button: classes.listItemButton,
        selected: classes.listItemSelected
      }}
      onClick={handleClick}
      selected={active === text ? true : false}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText id={text} primary={text} color='secondary' />
    </ListItem>
  )
}

export default ListItemLink