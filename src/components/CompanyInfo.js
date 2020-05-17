import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function CompanyInfo({companyinfo}) {


  const name =  companyinfo.name

  return (
    <React.Fragment>
      <Typography
      component="h2" variant="h6" color="primary" gutterBottom>
          {name}</Typography>
    </React.Fragment>
  );
}