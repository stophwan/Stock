/* eslint-disable import/first */
import React, {useEffect} from 'react';;
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { minuteStock } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

function timetoDate(timestamp){
  var date = new Date(timestamp)
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDay();
  var daydate = year+'-'+month+'-'+day
  return daydate
}

export default function MinuteStock() {
  const minutestock = useSelector(state => state.minutestock)
  const {ticker} = useParams();
  const dispatch = useDispatch();

  
  useEffect(()=>{
    console.log(minutestock)
    if(minutestock){
      if(ticker !== minutestock.ticker){
        dispatch((minuteStock(ticker)))
      }else{
        return;
      }
    }
    else{
      dispatch((minuteStock(ticker)));
    }
  })

  return (
    minutestock&&
    <React.Fragment>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
            <TableCell>High</TableCell>
            <TableCell>Low</TableCell>
            <TableCell align="right">Volumn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {minutestock.map((stock) => (
            <TableRow key={stock.t}>
              <TableCell>{timetoDate(stock.t)}</TableCell>
              <TableCell>{stock.o}</TableCell>
              <TableCell>{stock.c}</TableCell>
              <TableCell>{stock.h}</TableCell>
              <TableCell>{stock.l}</TableCell>
              <TableCell align="right">{stock.v}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}