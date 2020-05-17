import React, {useEffect} from 'react';
import _ from "lodash"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { createNewsInfo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  img: {
    height: 140,
  },
});


function timetoDate(timestamp){
  var date = new Date(timestamp)
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var daydate = year+'-'+month+'-'+day
  return daydate
}

const NewsInfo = ({newsinfo}) => {
  const classes = useStyles();

  const {headline, image, url, datetime} = newsinfo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={url}>
        <CardMedia
          title="Contemplative Reptile"
        >
          <img src = {image} alt="News" className={classes.img}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="inherit">
            {headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {timetoDate(datetime*1000)}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default function NewsList(){
  const {ticker} = useParams();
  const dispatch = useDispatch();
  dispatch(createNewsInfo(ticker))
  const newsinfos = useSelector(state => state.newsinfo)
  useEffect(()=>{
    if(newsinfos){
      if(ticker !== newsinfos.ticker){
        dispatch((createNewsInfo(ticker)))
      }else{
        return;
      }
    }
    else{
      dispatch((createNewsInfo(ticker)));
    }
  })
  return (
    <GridList cols={4}>
      {_.map(newsinfos, newsinfo => (<NewsInfo key={newsinfo.id} newsinfo = {newsinfo}/>))}
    </GridList> 
)
}