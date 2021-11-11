import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ExtractRouteParams, useHistory, useParams } from "react-router";
import { Template } from "../../interfaces/Marketplace";
import { RootState } from "../../state/store";

import { getMarketplaceDataAction } from "../../state/marketplace/marketplaceDucks";


const useMarketView = () => {
  const dispatch = useDispatch();
  //Sidebar 
  const [selected, setSelected] = useState<string>('Featured');

  const {type, value}: ExtractRouteParams<string> = useParams();
  const history = useHistory();

  const templates = useSelector((state: RootState) => state.marketplace.templates)

  useEffect(() => {
    if(templates.length !== 0) return 
      dispatch(getMarketplaceDataAction());
  },[])

  const handleOnSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.id)
  }

  const handleOnClose = () => {
    
  }

  const handleOnUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    const id = e.currentTarget.id;
    history.push({
      pathname: `/store/user/${id}`,
    }); 
  } 

  const handleOnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(e.currentTarget.parentElement) return
      //setTemplate(e.currentTarget.parentElement.id);
  }

  const handleOnSave = () => {
    //setIsOpen(false);
    //history.push({
    //  pathname: `/editor/create/${template}`
   // });
    //setTemplate(null);
  }


  return {selected, type, value, handleOnSelect, handleOnMore, handleOnClose, handleOnSave, handleOnUser}
}

export default useMarketView