import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {  useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {createStockChart} from '../actions'

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('D');
  const dispatch = useDispatch();
  const {ticker} = useParams();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch( createStockChart(ticker, newAlignment))

  };

  const children = [
    <ToggleButton key={4} value="D">
      D
    </ToggleButton>,
    <ToggleButton key={5} value="W">
      W
    </ToggleButton>,
    <ToggleButton key={6} value="M">
      M
    </ToggleButton>,
  ];

  return (

    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup size="medium" value={alignment}
         exclusive onChange={handleChange}>
          {children}
        </ToggleButtonGroup>
      </Grid>

    </Grid>
  );
}