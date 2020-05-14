import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createStockInfo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';



const useStyles = makeStyles({
  Context: {
    flex: 1,
  },
});

export default function StockInfo() {
  const classes = useStyles();
  const stockinfo = useSelector(state => state.stockinfo)
  const {ticker} = useParams();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(stockinfo){
      if(ticker !== stockinfo.ticker){
        dispatch((createStockInfo(ticker)))
      }else{
        return;
      }
    }
    else{
      dispatch((createStockInfo(ticker)));
    }
  })

  console.log(stockinfo)

  return (
    stockinfo&&
    <React.Fragment>
      <Typography
      component="h2" variant="h6" color="primary" gutterBottom
      >Current Price</Typography>
      <Typography component="p" variant="h4">
        {stockinfo.c}
      </Typography>
      <Typography color="textSecondary" className={classes.Context}>
       {stockinfo.t}
      </Typography>
      <Typography component="p" variant="h6">
        open: {stockinfo.o}
      </Typography>
      <Typography component="p" variant="h6">
        high: {stockinfo.h}
      </Typography>
      <Typography component="p" variant="h6">
        low: {stockinfo.l}
      </Typography>
      <Typography component="p" variant="h6">
        pc: {stockinfo.pc}
      </Typography>


    </React.Fragment>
  );
}