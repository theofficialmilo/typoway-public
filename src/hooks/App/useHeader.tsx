import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { logoutUserAction } from "../../state/user/userDucks";
import useAnchor from "../Common/useAnchor";

const useHeader = () => {
  const dispatch = useDispatch();
  const {anchorEl, handleSetAnchor, handleUnsetAnchor} = useAnchor();
  const open = Boolean(anchorEl);
  const user = useSelector((state:RootState) => state.user.user)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSetAnchor(e.currentTarget);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleUnsetAnchor();
  }

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logoutUserAction());
  }

  return { anchorEl, open, user, handleClick, handleClose, handleSignOut }
}

export default useHeader
