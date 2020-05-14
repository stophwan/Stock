import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CompanyList from "./CompanyList"
import { createSymbol } from "../actions";
import {  useSelector, useDispatch } from "react-redux";

import TextSearch from "../components/TextSearch"
// import NewSearch from "../components/NewSearch"
// import RenewSearch from "../components/RenewSearch"


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
            <TextSearch />
            <CompanyList/>
      </Container>

    );

}






export default MainPage;