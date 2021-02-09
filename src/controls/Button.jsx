import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
    'button:focus': {
      outline: 'none !important'
    },
    [theme.breakpoints.down('md')]: {
      /// for responsive
      fontSize: "small"
    },
    [theme.breakpoints.down('sm')]: {
      /// for responsive
      fontSize: "6px"
    },
  },
  label: {
    textTransform: 'none'
  },

}))

const ButtonContainer = (props) => {
  const classes = useStyle()
  const { text, size, color, variant, onClick, ...other } = props
  return (
    <Button
      variant={variant || "contained"}
      color = {color || "primary"}
      size={size || "large"}
      color = { color ||'secondary'}
      onClick = {onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >

      {text}
    </Button>
  )
}

export default ButtonContainer
