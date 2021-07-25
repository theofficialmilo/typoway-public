import { InsertDriveFileOutlined, Dashboard, Message, PhotoLibrary } from '@material-ui/icons'

export const dialogDeleteData = () => {
  return {
    title: 'Delete template?',
    content: 'Are you sure you want to delete the template? \nDeleted template cannot be recovered.'
  }
}

export const dialogGoBackData = () => {
  return {
    title: 'Leaving without saving?',
    content: 'Oops, looks like you did not save your template.\n Are you sure you want to leave without making any changes?'
  }
}

export const templateTypeData = () => {
  return ["Email", 'Advertisment', 'Newsletter']
}

export const designTypeData = () => {
  return [
    {
      label: 'Blank',
      description: 'For the adventurous designers to unleash their full creativity',
      icon: <InsertDriveFileOutlined color='primary' style={{ fontSize: 85 }} />
    },
    {
      label: 'Preset',
      description: 'You know what they say. Good artist copy, Great artist steal.',
      icon: <Dashboard color='primary' style={{ fontSize: 85 }} />
    }
  ]
}

export const stepsData = () => {
  return ["Template Info", 'Start Designing!']
}

export const navLinksData = () => {
  return {
    message: {
      icon: <Message />,
      link: "/message"
    },
    library: {
      icon: <PhotoLibrary />,
      link: "/library"
    }
  }
}
