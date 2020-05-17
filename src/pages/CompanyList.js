import React from 'react';
import _ from "lodash"
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80px',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  title:{

  },
  card: {
    margin:'3px',
    boxShadow: '#00bfa5'
  },
  logo:{
    width: 75,
    height: 75,
    marginRight: '5px',
    alignItems: 'flex-start'
  }
}));

// '#00bfa5'
const CompanyProfile = ({company}) => {
    const classes = useStyles();
    const { name,logo,c, ticker } = company;
    return(
    <CardActionArea 
    component={Link} 
    to={`/company/${company.ticker}`}>
      <Card variant="outlined" className={classes.card} style={{borderColor: '#00bfa5'}}> 
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={ticker} src={logo} className={classes.logo}/>
        </ListItemAvatar>
        <ListItemText>
          <Typography
          component="h4"
          variant="h4">
            {name}
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography
          component="h5"
          variant="h5"
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

