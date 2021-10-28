import makeStyles from '@material-ui/core/styles/makeStyles';

const useEmptyListStyle = makeStyles((theme) => ({
  emptyText: {
      width: '100%',
      textAlign: 'center',
      marginTop: '10rem'
  },
  emptyImg: {
      paddingBottom: theme.spacing(3),
      width: '160px',
      margin: 'auto'
  }
}));

export default useEmptyListStyle;