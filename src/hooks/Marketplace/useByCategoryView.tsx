import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { ExtractRouteParams, useParams } from "react-router"

import { categoryConverter } from '../../utils/helper';

import { Location } from 'history';
import { Template } from '../../interfaces/Marketplace';
import { RootState } from '../../state/store';

const useByCategoryView = (location: Location) => {
  let {value}: ExtractRouteParams<string> = useParams();
  const templates: Template[] = useSelector((state:RootState) => state.marketplace.templates)
  
  const [filteredList, setFilteredList] = useState<Template[]>();
  
  useEffect(() => {
    if(value === undefined || templates === undefined) return;
    const category = categoryConverter(value.toString());
    const filtered = templates.filter(template => template.templateType === category)
    setFilteredList(filtered)
  }, [location])

  return {filteredList}
}

export default useByCategoryView