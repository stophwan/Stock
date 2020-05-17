import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useSelector, useDispatch } from "react-redux";
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
    <ToggleButton key={1} value="D">
      D
    </ToggleButton>,
    <ToggleButton key={2} value="W">
      W
    </ToggleButton>,
    <ToggleButton key={3} value="M">
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