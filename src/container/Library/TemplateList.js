import React from 'react'

import { Grid } from '@material-ui/core';

import { OneTemplate, LoadingTemplate, EmptyList } from '../../components/Library/Template';

import { templateTypeData } from '../../utils/data';


const TemplateList = ({ history, load, templates, onMore }) => {
  const typeList = templateTypeData();

  return (
    <Grid container spacing={2} >
      {load ?
        <LoadingTemplate />
        :
        templates.length !== 0 ?
          templates.map(({ id, data }, index) => {
            return (
              <OneTemplate
                history={history}
                key={index}
                id={id}
                name={data.name}
                templateType={typeList[data.templateType]}
                onMore={onMore}
              />
            )
          }) :
          <EmptyList />
      }
    </Grid>
  )
}

export default TemplateList
