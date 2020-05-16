import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { createStockInfo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

});

function contarst_color(contrast_num, contrast_per){
  if(contrast_num>0){
    return(
      <React.Fragment>
        <span style={{color: '#0000FF'}}>
          <ExpandLessIcon/>
          <b>{contrast_num} </b> ({contrast_per}%)
        </span>
      </React.Fragment>
    )
  }
  else{
    return(
      <React.Fragment>
      <span style={{color: '#DC143C' }}>
        <ExpandMoreIcon/>
        <b>{contrast_num} </b> ({contrast_per}%)
      </span>
    </React.Fragment>
    )
  }
}

export default function StockInfo() {
  const classes = useStyles();
  const stockinfo = useSelector(state => state.stockinfo)
  // let timestamp = stockinfo.t
  // let date = new Date(timestamp)
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

  return (
    stockinfo&&
    <Paper elevation={3}>
    <TableContainer>
      <Table className={classes.table} aria-label="spanning table">
        <TableRow>
            <TableCell rowSpan={3} align="center">
              <Typography variant="h4"  style={{color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
              Current : {stockinfo.c}
              </Typography>
              <br/>
             전일대비: {contarst_color(stockinfo.contrast_num, stockinfo.contrast_per)}
            
            </TableCell>
            <TableCell colSpan={2}>Open Price  :  {stockinfo.o}</TableCell>
            <TableCell >High Price  : {stockinfo.h}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={2}> Close Price  :  {stockinfo.c} </TableCell>
            <TableCell>Low Price  :  {stockinfo.l} </TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={2}>Previous  :  {stockinfo.pc} </TableCell>
            <TableCell></TableCell>
        </TableRow>
      </Table>
    </TableContainer>
    </Paper>
    
  );
}