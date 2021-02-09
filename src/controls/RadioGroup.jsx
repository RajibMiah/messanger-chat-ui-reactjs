import React from 'react'
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyle = makeStyles(theme =>({
  root:{
    '& .MuiFormLabel-root':{
      fontWeight:'bold',
      color:theme.palette.primary.main
    },
    '& .MuiFormControlLabel-label':{
      fontWeight:'bold',
      color:'black'
    },
    '& .MuiRadio-root': {
      color: 'green'
    }
  }
}))
export const RadioGroupContent = (props) => {
  const { name, label, value, onChange, items ,  ...other } = props
  const classes = useStyle()
  return (
    <FormControl component = 'fieldset' className = {classes.root}>
      <FormLabel component = 'legend' style= {{textDecoration:'underline'}} >{label}</FormLabel>
      <RadioGroup  row
       {...other}
          name={name}
          value={value} 
          onChange={onChange}>

           {
             items.map((item , index) =>(
              <FormControlLabel key = {index} value= {item.id} control={<Radio />} label= {item.title} />
             ))
            }
      </RadioGroup>
    </FormControl>
  )
}

