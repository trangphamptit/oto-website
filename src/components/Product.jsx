import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 350,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Phụ tùng ô tô"
          height="200"
          image="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.playbuzz.com%2Fimage%2Fupload%2Ff_auto%2Cfl_lossy%2Cq_auto%2Fcdn%2Fa5335fac-2762-47e5-8d50-e23597c9c398%2Ffa7eb98a-c98e-4b51-ad43-412515de1288.jpg&f=1"
          title="Phụ tùng ô tô"
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            Phụ tùng ô tô
          </Typography>
          <Typography variant="h6" component="p" align="center">
            30000 đ
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" fullWidth>
          <ShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
}
