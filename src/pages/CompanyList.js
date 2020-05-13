import React from 'react';
import _ from "lodash"
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CompanyProfile = ({company}) => {
    const { description } = company;
    return(
      <ListItem
      button = {true} 
      component = {Link}
      to={`/company/${company.symbol}`}
      >
      <ListItemIcon>
          <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary={description}/>
    </ListItem>
    )
}


const CompanyList = () => {
    const classes = useStyles();
    const companies = useSelector(state => state.companies)
    return (
        <>
        <List className = {classes.root}>
            {companies.map(company => (<CompanyProfile key={company.symbol} company = {company}/>))}
        </List>
        </>
    )
}

export default CompanyList;

