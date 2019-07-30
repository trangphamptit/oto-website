import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { lightGreen } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    backgroundColor: lightGreen[500],
  },
}));
export default useStyles;
