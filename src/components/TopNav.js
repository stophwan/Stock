import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home'; 
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Link } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux";
import { createStockInfo } from "../actions";
import { createMainInfo } from "../actions";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const {ticker} = useParams();
  const dispatch = useDispatch();


  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{background: '#00bfa5'}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            STOCK_SNIPER
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}
          >
            <IconButton aria-label="Home"
            onClick = {() => {}}
            component = {Link} 
            to = '/'
            color="inherit">
                <HomeIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="detail"
              onClick = {() => {
                dispatch(createStockInfo(ticker))
              }}
            >
              <RefreshIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}