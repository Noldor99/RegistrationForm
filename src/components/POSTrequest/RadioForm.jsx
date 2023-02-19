import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, FormHelperText, Container, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useGetPositionsQuery } from '../../store/redusers/userApi';
import { useFormContext, Controller } from "react-hook-form";

const RadioForm = () => {

  const {data} = useGetPositionsQuery()

  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name='position'
      defaultValue=""
      control={control}
      render={({ field }) => (
      <FormControl  sx ={{mb:'30px'}}>
        <RadioGroup
          {...field}
           
          onChange={(event, value) => field.onChange(value)}
          value={field.value}
        >
          <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
          {data?.positions.map((item) => (
            <FormControlLabel
              key={item.name}
              value={item.name}
              control={<Radio />}
              label={item.name}
            />
          ))}
        </RadioGroup>
        <FormHelperText error>
          {String(errors?.position?.message ?? "")}
        </FormHelperText>
      </FormControl>
    )}
  />
  )
}

export default RadioForm