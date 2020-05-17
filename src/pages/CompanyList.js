import React from 'react';
import _ from "lodash"
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  title:{

  },
  logo:{
    width: 75,
    height: 75
  }
}));

const CompanyProfile = ({company}) => {
    const classes = useStyles();
    const { name,logo,c, ticker } = company;
    return(
    //   <CardActionArea 
    //   component={Link} 
    //   to={`/company/${company.ticker}`}>
    //   <Card className={classes.root} variant="outlined">
    //     <CardContent>
    //       <Typography className={classes.title} color="textSecondary" gutterBottom>
    //         <img src={logo} alt={ticker}/>
    //       </Typography>
    //       <Typography variant="h5" component="h2">
    //         {name}
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       Current price: {c}
    //     </Typography>
    //     </CardContent>
    //   </Card>
    // </CardActionArea>
    <CardActionArea 
    component={Link} 
    to={`/company/${company.ticker}`}>
      <Card>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={ticker} src={logo} className={classes.logo}/>
        </ListItemAvatar>
        <ListItemText>
          <Typography
          component="h4"
          variant="h4">
            {name}
          </Typography>
          <Typography
          component="span"
          variant="body2"
          >
            Now: {c}
          </Typography>
        </ListItemText>
        </ListItem>
        </List>
      </Card>
    </CardActionArea>
  )
}


const CompanyList = () => {
    const classes = useStyles();
    const maininfo = useSelector(state => state.maininfo)
    return (
        <div>
        <List className = {classes.root}>
            {maininfo.map( company => (<CompanyProfile key={company.ticker} company = {company}/>))}
        </List>
        </div>
    )
}

export default CompanyList;

