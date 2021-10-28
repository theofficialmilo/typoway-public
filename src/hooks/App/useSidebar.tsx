import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';

import { mainNav } from '../../utils/data'

const useSidebar = () => {
  const [active, setActive] = useState("Store");
  const location = useLocation();

  useEffect(() => {
    mainNav.map((entry) => {
      if(location.pathname.includes(entry.to)) setActive(entry.title)
    })
    return () => {
    }
  }, [location])

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActive(e.currentTarget.id)
  }

  return{active, mainNav, handleOnClick}
}

export default useSidebar