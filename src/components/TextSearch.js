import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {  useSelector, useDispatch } from "react-redux";
import { createMainInfo } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const loading = useSelector(state => state.loading)
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        value = {name}
        onChange={(event)=>{
            setName(event.target.value);
        }}
        onKeyDown={(event)=>{
            if(event.keyCode === 13){
                if(!loading){
                    dispatch(createMainInfo(name))
                    setName("");
                }
            event.preventDefault();
            return false;
            }
        }}
      
      />
    </form>
  );
}