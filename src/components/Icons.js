import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useSelector, useDispatch } from "react-redux";
import { chageResolution } from "../actions";

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('d');

  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton key={1} value="D">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="W">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key={3} value="M">
      <FormatAlignRightIcon />
    </ToggleButton>,
  ];

  return (

    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup size="medium" value={alignment}
         exclusive onChange={handleChange}
         onClick = {()=>{
           dispatch(chageResolution())
         }
        }>
          {children}
        </ToggleButtonGroup>
      </Grid>

    </Grid>
  );
}