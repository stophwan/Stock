import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import SearchError from '../components/SearchError'
import CompanyList from "./CompanyList"
import { createSymbol } from "../actions";
import {  useSelector, useDispatch } from "react-redux";
import Box from '@material-ui/core/Box';
import SearchBar from "../components/SearchBar"
import { Typography } from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';


const MainPage = () => {
    
    const companies = useSelector(state=>state.companies)
    const dispatch = useDispatch();
    useEffect(()=>{
      if(!companies){
        dispatch(createSymbol());
      }
    })
    return (
      <Container maxWidth="md">
        <div style={{color : '#00bfa5', marginTop: '50px'}}>
        <Typography>
          <Box fontWeight="fontWeightBold" m={1} fontSize={64}>
          <ShowChartIcon style={{ fontSize: 70 }}/>
            SSNIPER
          </Box>
        </Typography>
        </div>
          <SearchBar/>
          <SearchError/>
          <CompanyList/>
      </Container>

    );

}






export default MainPage;