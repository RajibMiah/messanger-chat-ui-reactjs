import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields(props) {
  const { name, placeholder, label, value, onChange,  error , ...other } = props
  return (
      <TextField
        variant="outlined"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        // helperText = 'can not be emplty'
        {...(error && {error:true , helperText:error })}
        {...other}
       
      />
  );
}