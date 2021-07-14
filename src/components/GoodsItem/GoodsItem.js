import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../../Redux/actionCreators/cartActions';

const useStyles = makeStyles({
  root: {
    width: '19%',
    minWidth: '200px',
    margin: 20,
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 180
  },
  media: {
    height: 180,
  },
});

export default function MediaCard(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const server = useSelector(state => state.app.serverDomen)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${server}${props.image}`}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {props.price} RUB
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {() => dispatch(addToCart(server, props.id, 1))}>
          Click
        </Button>
      </CardActions>
    </Card>
  );
}