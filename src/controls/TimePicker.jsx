import React from 'react'
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const TimePicker = (props) => {
  const { name, value, label, onChange , ...other} = props
  const converToDefaultEventPara = (name , value) =>({
    target:{
      name , value
    }
})
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label= {label}
        value={value}
        {...other}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => onChange(converToDefaultEventPara(name , date))}
      />
    </MuiPickersUtilsProvider>
  )
}

export default TimePicker
