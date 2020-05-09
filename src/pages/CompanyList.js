import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '144ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const CompanyProfile = ({company}) => {
    const classes = useStyles();
    const {ticker, name, country, logo} = company;
    return(
        <div>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={ticker} src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary= {name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {country}
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem>
        <Divider />
      </div>
    )
}


const CompanyList = () => {
    const classes = useStyles();
    const companies = useSelector(state => state.companies)
    return (
        <>
        <List className = {classes.root}>
            {companies.map(company => <CompanyProfile key={company.phone} company = {company}/>)}
        </List>
        </>
    )
}

export default CompanyList;
