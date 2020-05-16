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

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
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
      <AppBar position="static" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MJ_STOCK
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