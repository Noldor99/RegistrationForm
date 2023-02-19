import { useState } from 'react'
import {useFormContext, Controller} from 'react-hook-form'
import {Box, Button, FormControl, FormHelperText, Typography } from '@mui/material';

const UploadForm = ({filePhoto}) => {

  const [file, setFile] = useState(null)
 
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
    filePhoto(file)
  }

  const {
    control,
    formState:{errors}
  } = useFormContext()

  return (
    <Box sx={{mb: '40px'}} >

    <Controller
      name='photo'
      control={control} 
      defaultValue={[]}
      render={({ field }) => (
      <FormControl fullWidth>
        <Button
          sx={{display:'flex'}} 
          {...field}
          component="label">
        <input
          
          onChange = {handleFileChange}
          hidden 
          accept="image/*" 
          type="file" />
        <Typography   
          sx={{
            textTransform: 'none', 
            border: '1px solid', 
            padding:'8px',
            borderRight: 'none',
            borderRadius: '8px 0 0 8px'
          }}
          variant="p">Upload</Typography>
        <Typography 
          sx={{
            textTransform: 'none', 
            border: '1px solid', 
            padding:'8px', 
            flex: '1',
            borderRadius: '0 8px 8px 0',
            fontWeight: '400'
          }} variant="p">
            { file ? file.name : 'Upload your photo'}
        </Typography>
        </Button>
        <FormHelperText error>
          {String(errors?.photo?.message ?? "")}
        </FormHelperText>
      </FormControl>
    )}
  />
   
    </Box>
  )
}

export default UploadForm