// /* eslint-disable no-use-before-define */
// import React, { useState }  from 'react';
// import {  useSelector, useDispatch } from "react-redux";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { createMainInfo } from "../actions";

// export default function SearchBar() {

//     const companies = useSelector(state=>state.companies)
//     const loading = useSelector(state => state.loading)
//     const [name, setName] = useState("");
//     const dispatch = useDispatch();


//     return (
//         companies &&
//       <div style={{ width: 500 }}>
//         <Autocomplete
//           freeSolo
//           id="free-solo-2-demo"
//           disableClearable
//           options={companies.map((company) => company.symbol)}
//           onChange={(event,value)=>{
//             setName(event.target.value);
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Search input"
//               margin="normal"
//               variant="outlined"
//               InputProps={{ ...params.InputProps, type: 'search' }}
//               value={name}
//               onKeyDown={(event)=> {
//                 if(event.keyCode === 13){
//                   if(!loading){
//                     dispatch(createMainInfo(name));
//                     setName("");
//                   }
//                   event.preventDefault();
//                   return false;
//                 }
//               }}
//             />
//           )}
//         />
//       </div>
//     );
//   }
  
