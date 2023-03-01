import { Box, Button, FormHelperText, Typography } from '@mui/material';




const UploadForm = ({ errors, register }: any) => {


  return (
    <Box sx={{ mb: '40px' }} >

      <Button
        sx={{ display: 'flex' }}
        component="label">
        <input

          {...register("photo")}
          hidden
          accept="image/*"
          type="file" />
        <Typography
          sx={{
            textTransform: 'none',
            border: '1px solid',
            padding: '8px',
            borderRight: 'none',
            borderRadius: '8px 0 0 8px'
          }}
        >Upload</Typography>
        <Typography
          sx={{
            textTransform: 'none',
            border: '1px solid',
            padding: '8px',
            flex: '1',
            borderRadius: '0 8px 8px 0',
            fontWeight: '400'
          }}  >
          {'Upload your photo'}
        </Typography>
      </Button>
      <FormHelperText error>
        {String(errors?.photo?.message ?? "")}
      </FormHelperText>
    </Box>
  )
}

export default UploadForm