import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, MenuItem, Select, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      height: '35px',
      // border: '1px solid green',
      borderRadius: '25px'
    },
    '& .MuiFormControl-root': {
      width: '90%',
      marginBottom: '10px'
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: '#fafafa00'
    }
    

  },
  selectStyle: {
    width: "90%",
    '& .MuiOutlinedInput-root': {
      borderRadius: '25px',
      height: '29px'
    },
    '& .MuiOutlinedInput-input': {
      color: 'black',
      fontWeight: 'bold'
    },

  },
  lableTypo: {
    paddingLeft: '5px',
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: '10px'
  }
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const { name, placeholder, label, title, value, onChange, options, ...other } = props

  return (
    <div className={classes.root} {...other}>
      <label >
        <Typography className={classes.lableTypo}>
          {title}
        </Typography>
      </label>

      <FormControl variant="outlined">
        <Select
          name={name}
          value={value}
          onChange={onChange}
          {...other}
        >
          <MenuItem value="">  None</MenuItem>
          {
            options.map(
              (
                item => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>))
            )
          }
        </Select>
      </FormControl>
    </div>

  );
}