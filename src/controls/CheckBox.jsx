import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { CheckBox } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles'
import React from 'react'


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />)

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiFormControlLabel-root': {
      marginBottom: '-0.7rem'
    },
    '& .MuiTypography-body1': {
      fontWeight: 'bold !important',
      fontSize: 'small !important'
    },
    '& .MuiFormGroup-row':{
      paddingBottom:'15px'
    }
  }
}))

const CheckBoxCtm = (props) => {
  const { name, value, label, onChange, items, ...other } = props
  const classes = useStyle()
  const converToDefaultEventPara = (name, value) => ({
    target: {
      name, value
    }
  })
  return (
    <FormControl component='fieldset' className = {classes.root}>
      <FormLabel component='legend' style={{ textDecoration: 'underline' , color:'green' }}   >{label}</FormLabel>
      <FormGroup row 
         {...other}
        name={name}
        // value={items.isChecked}
        onChange={(e)=> onChange((e)=>converToDefaultEventPara(name , e.target.value))}
        
        >

        {
          items.map((item, index) => (
            <FormControlLabel key={index} value={item.isChecked} control={<GreenCheckbox/>} label={item.title} />
          ))
        }
      </FormGroup>
    </FormControl>
  )
}

export default CheckBoxCtm
