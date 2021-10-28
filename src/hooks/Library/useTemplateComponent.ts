import { History } from "history";
import React from "react";

const useTemplateComponent = (history: History, onMore: CallableFunction) => {
  const handleOnUse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let templateId = e.currentTarget.value
    history.push({
        pathname: '/message/new',
        state: templateId
    });
  }

  const handleOnEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let templateId = e.currentTarget.value
    history.push({
        pathname: '/library/editor',
        state: {
          template: templateId
        }
    });
  }

  const handleOnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onMore(e)
  }

  return {handleOnUse, handleOnEdit, handleOnMore}
}

export default useTemplateComponent