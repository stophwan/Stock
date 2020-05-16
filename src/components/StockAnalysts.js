import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
      >StockAnalysts</Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.tarketHigh}
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.tarketHigh}
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.tarketHigh}
      </Typography>
      <Typography component="p" variant="h6">
        {stockanalysts.tarketHigh}
      </Typography>


    </React.Fragment>
    
  );
}