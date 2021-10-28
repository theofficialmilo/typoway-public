import { useEffect } from "react";
import { useSelector } from "react-redux";

import {history} from '../../utils/history';
import { RootState } from "../../state/store";

const useAuth = () => {
  const isLoading = useSelector((store: RootState) => store.app.isLoading);
  const isAuth = useSelector((store: RootState) => store.user.isAuth);

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    e.preventDefault();
    window.gapi.auth2.getAuthInstance().signIn();
  }

  useEffect(() => {
    if(isAuth === true) history.push('/')
    return 
  }, [isAuth])

  return {isLoading, handleSignUp}
}

export default useAuth