import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import SearchError from '../components/SearchError'
import CompanyList from "./CompanyList"
import { createSymbol } from "../actions";
import {  useSelector, useDispatch } from "react-redux";
import Box from '@material-ui/core/Box';
import TextSearch from "../components/TextSearch"
import { Typography } from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';



// const theme = createMuiTheme({
//   typography: {
//     color: '#00bfa5'
//   },
// });

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
        <div style={{color : '#00bfa5'}}>
        <Typography>
          <Box fontWeight="fontWeightBold" m={1} fontSize={64}>
          <ShowChartIcon/>
            SSNIPER
          </Box>
        </Typography>
        </div>
          <TextSearch />
          <SearchError/>
          <CompanyList/>
      </Container>

    );

}






export default MainPage;