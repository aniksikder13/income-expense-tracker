import {TextField, Button, Box} from '@mui/material';
import { useState } from 'react';

export default function Form(props) {
  const [track, setTrack]= useState({})
  const textLabel= props.type === 'income' ? 'Income' : 'Expense'

  const inputHandler= e => {
    const name= e.target.name.toLowerCase()
    const value= e.target.value
    setTrack({
      ...track,
      id: Date.now(),
      [name]: value
    })
  }

  const formHandler= e => {
    e.preventDefault()
    if(props.type === 'income'){
      props.onIncome(track)
    } else {
      props.onExpense(track)
    }
    e.target[2].value=''
    e.target[0].value=''
  }

  return (
    <form onSubmit={formHandler} className='innerContainer'>
      <h3>Your {textLabel}</h3> <br />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <TextField fullWidth label={textLabel} id={textLabel} name='money' type='number' onChange={inputHandler} />
      </Box>
      <Box
        sx={{
          width: '100%',
          margin: '15px 0px'
        }}
      >
        <TextField fullWidth label="Subject" id="Subject" name='subject' type='text' onChange={inputHandler} />
      </Box>
      <Button variant="contained" type='submit'>
        Save
      </Button>
    </form>
  )
}