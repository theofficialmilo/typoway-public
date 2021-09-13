import React from 'react'
import PropTypes from "prop-types"

import { ListItem, ListItemText, Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import Skeleton from '@material-ui/lab/Skeleton';

import { getHeader, decodeHtml, removeQuote, formatDate } from "../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    marginBottom: '8px',
    borderRadius: '10px'
  },
  rootSelected: {
     backgroundColor: '#1989fa !important',
      color: '#fff !important',
      "& > div > h6 ": {
        color: '#fff !important'
      },
      "& > div > p": {
        color: '#ccc !important'
      },
      "& > div > span": {
        color: '#737373 !important'
      },
      "& > div > .MuiIconButton-label": {
        color: '#ccc !important'
      },
      "& ~ div > span > span": {
        color: '#fff !important'
      },
      "& ~ div > button": {
        color: '#fff',
        "&:hover": {
          color: "#ccc !important"
        }
      }
  },
  listItemText: {
    width: '100%'
  },
  primaryTextDiv: {
    justifyContent: 'space-between'
  },
  iconButton: {
    '&:hover': {
      color: '#1989fa'
    }
  },
  name: {
    width: '40%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export const EmptyRow = ({ index }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      disabled
      classes={{
        root: classes.root,
        selected: classes.rootSelected
      }}
      key={index}
      id={index}
      alignItems='flex-start'
      divider
      ContainerComponent="div"
    >
      <ListItemText
        className={classes.listItemText}
        primary={
          <div className={classes.header}>
            <Typography
              variant="body2"
              display='inline'
              children={<Skeleton width={100} />}
            />
            <Typography
              variant="caption"
              display='inline'
              children={<Skeleton width={75} />}
            />
          </div>
        }
        secondary={
          <React.Fragment>
            <Typography
              component='h6'
              variant="subtitle1"
              color='textPrimary'
              children={<Skeleton width={150} />}
            />
            <Typography
              component='p'
              variant="body2"
              color='textSecondary'
              children={<Skeleton />}
            />
          </React.Fragment>
        }
        disableTypography
      />
    </ListItem>
  )

}

export const Row = ({ message, handleMessageClick, selected }) => {
  const classes = useStyles();

  const name = removeQuote(getHeader(message.payload.headers, "From").split("<")[0]);
  const subject = getHeader(message.payload.headers, "Subject");
  const msg = decodeHtml(message.snippet);
  const date = formatDate(getHeader(message.payload.headers, "Date"));

  const handleOnClick = (e) => {
    handleMessageClick(e);
  }

  return (
    <ListItem
      button
      classes={{
        root: classes.root,
        selected: classes.rootSelected
      }}
      selected={selected}
      key={message.id}
      id={message.id}
      onClick={(e) => handleOnClick(e)}
      alignItems='flex-start'
      divider
      ContainerComponent="div"
    >
      <ListItemText
        className={classes.listItemText}
        primary={
          <div className={classes.header}>
            <Typography
              variant="body2"
              display='inline'
              noWrap
              children={name}
            />
            <Typography
              variant="caption"
              display='inline'
              children={date}
            />
          </div>
        }
        secondary={
          <React.Fragment>
            <Typography
              component='h6'
              variant="subtitle1"
              color='textPrimary'
              noWrap
              children={subject ? subject : '<No Subject>'}
            />
            <Typography
              component='p'
              variant="body2"
              color='textSecondary'
              noWrap
              children={msg}
            />
          </React.Fragment>
        }
        disableTypography
      />
    </ListItem>
  )
}

Row.prototype = {
  message: PropTypes.object.isRequired,
  handleMessageClick: PropTypes.func.isRequired
};