import { Location } from "history";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExtractRouteParams, useHistory, useLocation, useParams } from "react-router"
import { Contributor, Template } from "../../interfaces/Marketplace";
import { getUserData } from "../../service/storeServices";
import { setAlertAction } from "../../state/app/appDucks";

import { RootState } from '../../state/store';


const useByUserView = () => {
  const dispatch = useDispatch();
  const {value}: ExtractRouteParams<string> = useParams();
  const history = useHistory();
  const location = useLocation();

  const {templates, contributors} = useSelector((state:RootState) => state.marketplace)
  
  const [user, setUser] = useState<Contributor>()
  const [filteredList, setFilteredList] = useState<Template[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if(value === undefined || templates === undefined || contributors === undefined) return;
    setIsLoading(true);
    try {
      (async () => {
        const userData = await getUserData(value);
        const filtered = templates.filter(template => template.account.id === value);
        setUser(userData)
        setFilteredList(filtered);
        setIsLoading(false);
      })();
    }catch(err: any){
      dispatch(setAlertAction({ type: 'error', message: err.code  }))
    }
  }, [location])

  const handleBack = () => {
    history.goBack();
  }

  return {user, filteredList, isLoading, handleBack}

}

export default useByUserView