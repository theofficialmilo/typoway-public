import {useState} from 'react'


const useAnchor = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleSetAnchor = (el: HTMLButtonElement) => {
    setAnchorEl(el);
  } 

  const handleUnsetAnchor = () => {
    setAnchorEl(null);
  }

  return {anchorEl, handleSetAnchor, handleUnsetAnchor}
}

export default useAnchor;
