import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../state/store'

const DialogController = () => {
  const dispatch = useDispatch()
  const isReady = useSelector((state: RootState) => state.editor.isReady)

  const [formData, setFormData] = useState({
    name: 'Untitle Template',
    templateType: 0,
    dataJson: undefined
  })

  return (
    <div>
      
    </div>
  )
}

export default DialogController
