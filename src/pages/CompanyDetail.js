import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/Chart';
import NewChart from '../components/NewChart';
import StockInfo from '../components/StockInfo';
import CompanyInfo from '../components/CompanyInfo';
import { createCompanyInfo } from "../actions";
import { createStockChart } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 500,
    },
  }));



const CompanyDetail = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const {ticker} = useParams();
    const dispatch = useDispatch();
    const companyinfo = useSelector(state => state.companyinfo);
    const stockcandle = useSelector(state => state.stockcandle);

    useEffect(() => {
      if(!companyinfo){
       dispatch((createCompanyInfo(ticker)));
      }
      if(!stockcandle){
        dispatch((createStockChart(ticker)));
      }
    });



    return (
        <div>
          {companyinfo && stockcandle &&
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <CompanyInfo companyinfo = {companyinfo}/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <NewChart candle= {stockcandle}/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <StockInfo/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        }
        </div>
    );
}




export default CompanyDetail;