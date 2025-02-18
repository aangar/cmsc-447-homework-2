'use client'
import { useState, useCallback } from 'react'
import { useRouter } from "next/navigation"
import Grid2 from "@mui/material/Grid2"
import TextField from "@mui/material/TextField"
import Alert from "@mui/material/Alert"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const ManageView = ({ user, users = [], update = () => {} }) => {
  const router = useRouter()
  const canModifyId = !user
  const baseValues = {
    _id: 0,
    name: '',
    points: 0
  }
  const initialValues = user ?? baseValues
  const [state, setState] = useState(initialValues)
  const [errors, setErrors] = useState(null)
  
  const handleChange = event => {
    const field = event?.target?.id ?? null
    const value = event?.target?.value ?? null
    if (!field) { return }
    const newState = { ...state, [field]: value }
    setState(newState)
  }

  const handleSubmit = async() => {
    const errors = []
    
    // meaning a new user is being made
    if (canModifyId) {
      if (users?.find(x => x._id === state._id)) {
        errors.push("ID is in use, please enter another.")
      }
    }

    if (state._id < 1) {
      errors.push("Please enter an ID greater than 0.")
    }

    if (!state.name) {
      errors.push("Please enter a name.")
    }

    if (state.points < 0) {
      errors.push("Please enter points greater than -1.")
    }

    if (errors.length > 0) {
      setErrors(errors)
      return
    }

    const { success, error } = await update(state)
    if (!success) {
      setErrors([error])
      return
    }

    router.push("/?success=true")
  }

  return (
    <Grid2 size={12} mt={2} >
    { !canModifyId ? 
        <Alert sx={{ mb: 2 }} severity='info' >
          <Typography>
            User ID cannot be modified. The field is intentionally disabled.
          </Typography>
        </Alert>
        : null
      }
      { errors ? 
        <Alert sx={{ mb: 2 }} severity='error' >
          { errors?.map((val, idx) =>
            <Typography key={idx} >
              {val}
            </Typography>
          ) }
        </Alert>
        : null
      }
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            id='_id'
            label='ID'
            value={state._id}
            onChange={handleChange}
            disabled={!canModifyId}
            type='number'
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            id='name'
            label='Name'
            value={state.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            id='points'
            label='Points'
            value={state.points}
            onChange={handleChange}
            type='number'
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Button
            variant='contained'
            onClick={handleSubmit}
            fullWidth
          >Submit</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  )

}

export default ManageView
