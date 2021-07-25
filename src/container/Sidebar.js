import React, { useState, useEffect } from 'react'
import { List, makeStyles } from '@material-ui/core'

import { useLocation } from 'react-router'

import ListItemLink from '../components/ListItemLink'
import { navLinksData } from '../utils/data'

//Object Array of NavLinks
const navLinks = navLinksData();

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
    flexDirection: 'column',
    width: '72px',
    height: '72px',
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
  const [active, setActive] = useState("message");
  const location = useLocation();

  useEffect(() => {
    Object.entries(navLinks).map((entry) => {
      if (location.pathname.includes(entry[1].link)) {
        setActive(entry[0])
      }
    })
  }, [location])

  const handleOnClick = (e) => {
    setActive(e.currentTarget.id)
  }

  return (
    <List disablePadding component="nav" className={classes.listComponent}>
      {Object.entries(navLinks).map((entry, index) => (
        <React.Fragment key={index}>
          <ListItemLink
            to={entry[1].link}
            index={index}
            text={entry[0]}
            active={active}
            icon={entry[1].icon}
            classes={classes}
            handleClick={handleOnClick}
          />
        </React.Fragment>
      ))}
    </List>
  )
}

export default Sidebar