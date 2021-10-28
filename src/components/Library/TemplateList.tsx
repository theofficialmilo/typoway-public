import Grid from '@material-ui/core/Grid';

import TemplateCard from './Template';
import TemplateSkeleton from './TemplateSkeleton';
import EmptyList from './EmptyList';

import { templateTypeData } from '../../utils/data';
import { StoredTemplate } from '../../interfaces/Library';
import { History } from 'history';

const TemplateList = ({ history, load, templates, onMore }: PropTypes) => {
  return (
    <Grid container spacing={2} >
      {load ?
        <TemplateSkeleton /> :
        templates.length !== 0 ?
          templates.map((template: StoredTemplate, index: number) => {
            return (
              <TemplateCard
                history={history}
                key={index}
                id={template.id}
                name={template.name}
                templateType={templateTypeData[template.templateType]}
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

interface PropTypes {
  history: History,
  load: boolean,
  templates: StoredTemplate[],
  onMore: CallableFunction
}