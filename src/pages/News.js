import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NewsInfo from "../components/NewsInfo"

import { Typography } from '@material-ui/core';



const NewsPage = () => {
    
    return (
      <Container maxWidth="md">
        <Typography component='h2'>
          Weekly News
        </Typography>
        <NewsInfo/>
      </Container>

    );

}






export default NewsPage;