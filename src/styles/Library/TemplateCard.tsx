import makeStyles from '@material-ui/core/styles/makeStyles';

const useTemplateCardStyle = makeStyles((theme) => ({
  iconButton: {
      marginLeft: 'auto'
  },
  cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 0
  },
  card: {
      boxShadow: 'none'

  }
}));

export default useTemplateCardStyle;