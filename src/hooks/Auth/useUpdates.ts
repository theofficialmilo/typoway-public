import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Update } from '../../interfaces/Updates'

import { getNewsList } from '../../service/updatesServices'
import { setAlertAction } from '../../state/app/appDucks'

const useUpdates = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Update[]>([]);

  useEffect(() => {
    getNewsList()
      .then(resp => setData(resp))
      .catch(err => dispatch(setAlertAction({ type: 'error', message: err })))
  },[])

  return { data }
}

export default useUpdates