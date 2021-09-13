import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getTemplateListByCategory } from '../../service/storeServices'

import { Grid } from '@material-ui/core'
import TemplateCard from '../../components/Marketplace/TemplateCard'
import { categoryConverter } from '../../utils/helper'

const ByCategory = ({location, handleOnMore}) => {
  let {value} = useParams();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    if(value === undefined) return;
    const category = categoryConverter(value);
    getTemplateListByCategory(category)
      .then(data => {
        setTemplates(data)
      })
      .catch(err => {
        console.log(err)
      })
  },[location])

  return (
    <Grid container spacing={2}>
     {templates && templates.map((data, index) => (
        <Grid item key={index}>
          <TemplateCard
            id={data.id}
            price={data.price}
            imgUrl={data.imgUrl}
            title={data.title}
            templateType={data.templateType}
            userName={data.account.name}
            handleOnClick={handleOnMore}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ByCategory
