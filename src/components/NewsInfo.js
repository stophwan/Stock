import React from 'react';
import _ from "lodash"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  img: {
    height: 140,
  },
});

const NewsInfo = ({newsinfo}) => {
  const classes = useStyles();
  const {datetime, headline, image} = newsinfo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          title="Contemplative Reptile"
        >
          <img src = {image} alt="News" className={classes.img}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {headline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const NewsList = () => {
   const newsinfos = useSelector(state => state.newsinfo)
   return (
    <GridList cols={4}>
      {_.map(newsinfos, newsinfo => (<NewsInfo key={newsinfo.id} newsinfo = {newsinfo}/>))}
    </GridList>
       
)
}
export default NewsList;