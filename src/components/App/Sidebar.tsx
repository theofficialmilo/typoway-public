import React from 'react'
import { List, makeStyles } from '@material-ui/core'

import ListItemLink from '../ListItemLink'
import useSidebar from '../../hooks/App/useSidebar'

const useStyles = makeStyles((theme) => ({
  listComponent: {
    marginRight: theme.spacing(1),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    padding: `${theme.spacing(2)}px 0`,
    background: 'rgba(255, 255, 255, 0.50)',
    backdropFilter: 'blur(5.0px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  sidebarListItem: {
    width: '72px',
    height: '72px'
  },
  listItemButton: {
    width: '72px',
    height: '72px',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize'
  },
  listItemSelected: {
    color: '#1989fa !important',
    background: "transparent !important"
  }
}))

const Sidebar = () => {
  const classes = useStyles();
  const {active, mainNav, handleOnClick} = useSidebar();

  return (
    <List disablePadding component="nav" className={classes.listComponent}>
      {mainNav.map((data, index) => (
        <React.Fragment key={index}>
          <ListItemLink 
            classes={classes}
            index={index}
            text={data.title}
            to={data.to}
            icon={data.icon}
            active={active}
            handleClick={handleOnClick}
          />
        </React.Fragment>))
      }
    </List>
  )
}

export default Sidebar