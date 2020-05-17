// import React from 'react';
// import { useSelector } from 'react-redux';

// export default function ErrorMsg() {
//   const error = useSelector(state => state.error);

//   if (!error) {
//     return <div/>;
//   }
//   return (
//     <Alert variant='danger'>
//       Error: {error.message}
//     </Alert>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();
  const error = useSelector(state => state.error)

  if(!error){
    return <div/>;
  }
  else{
    if(error.message==="Cannot create property 'name' on string 'Symbol not supported'"){
      error.message="Check Again! Input Right Symbol"
    }
  }
  return (
    <div className={classes.root}>
      
      <Alert severity="error">{error.message}</Alert>
    </div>
  );
}