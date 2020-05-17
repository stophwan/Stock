import React from 'react';
import Container from '@material-ui/core/Container';
import NewsInfo from "../components/NewsInfo"
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';



const NewsPage = () => {

    return (
      <Container maxWidth="md">
        <div style={{color : '#00bfa5', marginTop: '50px'}}>
          <Typography>
            <Box fontWeight="fontWeightBold" m={1} fontSize={64}>
              Weekly News
            </Box>
          </Typography>
        </div>
        <NewsInfo/>
      </Container>
    );
}






export default NewsPage;