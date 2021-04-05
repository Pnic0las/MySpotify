import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Flip from 'react-reveal/Flip';


const useStyles = makeStyles({
  root: {
    width: 345,
    height: 300,
  },
});

export default function ImgMediaCard({url, name}) {
  const classes = useStyles();

  return (
      <Flip left>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="240px"
          image={url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Flip>
  );
}
