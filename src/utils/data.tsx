import { InsertDriveFileOutlined, Dashboard, Message, Store, Folder, Star, Forum, Announcement, ListAlt } from '@material-ui/icons'
import { DesignTypeData, DialogData, NavData } from '../interfaces/Ui';

export const dialogDeleteData: Function = (): DialogData => {
  return {
    title: 'Delete template?',
    content: 'Are you sure you want to delete the template? \nDeleted template cannot be recovered.'
  }
}

export const dialogGoBackData: Function = (): DialogData => {
  return {
    title: 'Leaving without saving?',
    content: 'Oops, looks like you did not save your template.\n Are you sure you want to leave without making any changes?'
  }
}

export const templateTypeData: Function = (): Array<string> => {
  return ["Email", 'Advertisement', 'Newsletter', 'Signature']
}

export const designTypeData: Function = (): Array<DesignTypeData> => {
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

export const stepsData: Function = () : Array<string> => {
  return ["Template Info", 'Start Designing!']
}

export const mainNav: Array<NavData> = [
  {
    id: 0,
    title: 'Store',
    icon: <Store />,
    to: '/store/featured'
  },
  {
    id: 1,
    title: 'Designs',
    icon: <Store />,
    to: '/library'
  },
  {
    id: 2,
    title: 'Sendbox',
    icon: <Message />,
    to: '/message'
  },
]

export const marketplaceNav: Array<NavData> = [
  {
    id: 0,
    title: 'Featured',
    icon: <Star/>,
    to: '/store/featured'
  },
  {
    id: 1,
    title: 'Email',
    icon: <Forum/>,
    to: '/store/category/email'
  },
  {
    id: 2,
    title: 'Advertisment',
    icon: <Announcement/>,
    to: '/store/category/advertisement'
  },
  {
    id: 3,
    title: 'Newsletter',
    icon: <ListAlt/>,
    to: '/store/category/newsletter'
  }
]