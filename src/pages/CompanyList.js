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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from "react-router-dom";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
});

const use2Styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const CompanyProfile = ({company}) => {
    const classes = useStyles();
    const classes2 = use2Styles();
    const { name,logo,c, ticker } = company;
    return(
    //   <ListItem
    //   button = {true} 
    //   component = {Link}
    //   to={`/company/${company.ticker}`}
    //   >
    //   <ListItemIcon>
    //       <StorefrontIcon />
    //   </ListItemIcon>
    //   <ListItemText primary={name}/>
    //   <ListItemText secondary={c}/>
    // </ListItem>
    <Grid item xs={12} md={6}>
    <CardActionArea 
    component={Link} 
    to={`/company/${company.ticker}`}>
      <Card className={classes.card}>
      <List className={classes2.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={ticker} src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes2.inline}
                color="textPrimary"
              >
                Now: {c}
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem>
        </List>
      </Card>
    </CardActionArea>
  </Grid>
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

