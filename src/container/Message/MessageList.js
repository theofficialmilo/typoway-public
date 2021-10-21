import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { List, makeStyles } from "@material-ui/core"

import { EmptyRow, Row } from './Row'
import { getOneMessageDataAction } from '../../state/sendbox/sendboxDucks'

const useStyles = makeStyles(theme => ({
  list: {
    paddingTop: 0,
    textAlign: 'left',
    height: '100%',
    overflowY: 'scroll'
  },
}))

const MessageList = ({ messages, isLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState("");

  const handleMessageClick = (e, index) => {
    const messageId = e.currentTarget.getAttribute("id");
    setSelectedItem(index)
    dispatch(getOneMessageDataAction(messageId))
  };

  return (
    <List className={classes.list}>
      {!isLoading ?
        messages.map((message, index) => {
          return (
            <Row
              key={index}
              isLoading={isLoading}
              message={message}
              handleMessageClick={(e) => handleMessageClick(e, index)}
              selected={selectedItem === index}
            />
          )
        }) :
        LoadingList()
      }
    </List>
  )
}

const LoadingList = () => {
  var rows = [];
  for (var i = 0; i < 10; i++) {
    rows.push(<EmptyRow key={i} />);
  }
  return rows;
}

export default MessageList
