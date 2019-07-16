import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
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
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://salt.tikicdn.com/cache/200x200/ts/product/96/28/56/2687a225560aadd25efd2150da4f7fd2.jpg"
        title="búa thoát hiểm đa năng"
      />
      <CardContent>
        <Typography
          variant="body2"
          component="p"
          align="center"
          transform="capitalize"
          color="black"
        >
          Búa thoát hiểm đa năng
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          98.000 đ
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
          style={{ textDecoration: 'line-through' }}
        >
          180.000 đ
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: 'flex',
          justifyContent: ' space-between',
          // visibility: 'hidden',
        }}
        className={classes.cardContent}
      >
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="primary" className={classes.button}>
          Add to cart
        </Button>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
