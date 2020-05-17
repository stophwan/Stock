import React,{useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { createStockAnalysts } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';



export default function StockAnalysts() {
  const stockanalysts = useSelector(state => state.stockanalysts)
  const {ticker} = useParams();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(stockanalysts){
      if(ticker !== stockanalysts.ticker){
        dispatch((createStockAnalysts(ticker)))
      }else{
        return;
      }
    }
    else{
      dispatch((createStockAnalysts(ticker)));
    }
  })
  console.log(stockanalysts)

  return (
    stockanalysts&&
    <React.Fragment>
      <Typography
      component="h2" variant="h6" color="primary" gutterBottom
      >종목 분석</Typography>
        <Typography component="p" variant="h6">
        TargetHigh
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.targetHigh}
        <Typography component="p" variant="h6">
        TargetLow
      </Typography>
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.targetLow}
      </Typography>
      <Typography component="p" variant="h6">
        TargetMean
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.targetMean}
      </Typography>
      <Typography component="p" variant="h6">
        TargetMedian
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.targetMedian}
      </Typography>


    </React.Fragment>
    
  );
}