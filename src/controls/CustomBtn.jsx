import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    // paddingLeft:'35px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
    },
    // [theme.breakpoints.down('md')]: {
    //   paddingLeft:'0px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingLeft:'0px',
    // },
  },
  minus: {
    position: 'relative',
    background: '#ffff',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    fontSize: 'xxx-large',
    textAlign: 'center',
    left: '20px',
    bottom: '3px',
    border: '1px solid green',
    cursor: 'pointer'
  },
  plus: {
    position: 'relative',
    background: '#ffff',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    fontSize: 'xxx-large',
    textAlign: 'center',
    bottom: '3px',
    right: '21px',
    border: '1px solid green',
    cursor: 'pointer'
  },
  inputFiled: {
    width: '80px',
    background: theme.palette.primary.main,
    height: '39px',
    minWidth: "5px",
    textAlign: 'center',
    color: 'white'
  }
}))

const CustomBtn = ( props ) => {
  const classes = useStyle()
  const {  value, onChange, ...other } = props
  const [number, setNumber] = useState(value)

  const handlePlusBtn = () => {
    setNumber(prevCount => prevCount + 1)
  }
  const handleMinusBtn = () => {
    if (number > 0)
      setNumber(prevCount => prevCount - 1)
  }
  return (
    <>
      <div className={classes.root}>
        <div className={classes.minus}  onClick={handleMinusBtn}>
          <Typography variant='h4' >-</Typography>
        </div>
        <input className={classes.inputFiled} value={number} onChange = {(e)=>setNumber(e.target.value)} />
        <div className={classes.plus} onClick={handlePlusBtn}>
          <Typography variant='h4'>+</Typography>
        </div>
      </div>
    </>
  )
}

export default CustomBtn
