import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

interface PropTypes {
  index: number, 
  to: string,
  text: string,
  active: string,
  classes: any,
  handleClick: any,
  icon: any,
}

const ListItemLink = ({ to, index, text, active, classes, handleClick, icon, ...others }: PropTypes) => {
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
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e)}
      selected={active === text ? true : false}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText id={text} primary={text} color='secondary' />
    </ListItem>
  )
}

export default ListItemLink