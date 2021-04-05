import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Artistcard from "../widget/Cards";
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
      width: "100%",
    margin: "auto",

  },
});

function createData(image, artist) {
    return {image, artist}
}

export default function ImgArtistCard(props) {
    const classes = useStyles();

    const [rows, setrows] = useState([])

    useEffect(() => {
        var tmp = []
        
        console.log(props.data)
        if (props.data != null) {
            props.data.forEach((line, i) => {
                tmp.push(createData(line.images[1].url, line.name));
            });
            setrows(tmp);
        }
    }, [props.data])
    
  return (
      <Grid container justify="center" spacing={10} className={classes.root}>
      <>

    {rows.map((row, index) => (
        <Grid key={index} alignItems item>
        <Artistcard url={row.image} name={row.artist}></Artistcard>
        </Grid>
    ))}
    </>
    </Grid>
  );
}
