import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icons from '../components/Icons'
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NewChart from '../components/NewChart';
import StockInfo from '../components/StockInfo';
import DayStock from '../components/DayStock';
import MinuteStock from '../components/MinuteStock';
import StockAnalysts from '../components/StockAnalysts';
import { createCompanyInfo } from "../actions";
import { createNewsInfo } from "../actions";
import { createStockChart } from "../actions";
import Typography from '@material-ui/core/Typography'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


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
    const resolution =  useSelector(state => state.resolution);
    const companyinfo = useSelector(state => state.companyinfo);
    const stockcandle = useSelector(state => state.stockcandle);
    const dispatch = useDispatch();

    useEffect(() => {

      if(companyinfo){
        if(ticker !== companyinfo.ticker){
          dispatch((createCompanyInfo(ticker)));
        }
        else{
          return;
        } 
      }
      else{
      dispatch((createCompanyInfo(ticker)));
      }

      if(stockcandle){
        if(ticker !== stockcandle.ticker){
          dispatch((createStockChart(ticker,resolution)));
        }
        else{
          return;
        }
      }
      else{
        dispatch((createStockChart(ticker,resolution)))
      }

    });



    return (
        <div>
          {companyinfo && stockcandle &&
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
              <Typography
              component="h2" variant="h3"  gutterBottom>
                  {companyinfo.name}</Typography>
              <Typography
              component="h2" variant="h5"  gutterBottom>
                  {companyinfo.symbol}</Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                See more....
                <IconButton aria-label="Home"
                onClick = {() => {
                  dispatch(createNewsInfo(ticker))
                }}
                component = {Link} 
                to = {`/news/${ticker}`}
                color="inherit">
                    <AssignmentIcon/>
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                  <StockInfo/>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <NewChart candle={stockcandle} ticker={ticker}/>
                  <Icons/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <StockAnalysts/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
              <Typography
              component="h2" variant="h6" color="primary" gutterBottom>
                  시간별 시세</Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <MinuteStock/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
              <Typography
              component="h2" variant="h6" color="primary" gutterBottom>
                  일별 시세</Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <DayStock/>
                </Paper>
              </Grid>

            </Grid>
          </Container>
        }
        </div>
    );
}




export default CompanyDetail;