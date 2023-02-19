import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../schema/schema';
import { HomeButton } from '../UI/HomeButton';
import InputForm from './InputForm';
import RadioForm from './RadioForm';
import UploadForm from './UploadForm';
import { useEffect, useState } from 'react';
import { useGetTokenQuery, useLazyGetTokenQuery, usePostUsersMutation } from '../../store/redusers/userApi';
 
const POSTrequest = () => {

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { register, handleSubmit, formState: { errors } } = methods
  

  const [fetchToken] = useLazyGetTokenQuery(undefined)
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchToken()
  }, []);

  const [crateUser, data] = usePostUsersMutation()

  console.log(data.isSuccess)

  const filePhoto = (e) => {
    console.log(e)
    setFile(e)
  }

  const onSubmit = (e) => {
    console.log(e.photo)
    const formData = new FormData()
    formData.append('photo', file)
    formData.append('phone', e.phone)
    formData.append('position_id', 4)
    formData.append('email', e.email)
    formData.append('name', e.nameInput)
 
    crateUser(formData)
  };

  return (
    <Container>
      <FormProvider {...methods}>
    <Box sx={{
      pb:'140px', margin: '0 auto', display: 'block', maxWidth: '400px'
      }}>
      <Typography
        id ='SignUp' 
        textAlign='center'
        variant="h5"
        sx={{mb:'50px'}}>
        Working with GET request
      </Typography>
      <form onSubmit={(handleSubmit(onSubmit))}>
        <InputForm
          register = {register}
          errors = {errors}
        />
        <RadioForm/>
        <UploadForm
          filePhoto = {filePhoto}
        />
        <HomeButton
          type = 'submit'
          sx = {{display: 'block', margin: '0 auto'}}
        >Sign up
        </HomeButton>
      </form>
      {data?.isSuccess &&
      <Box>
        <Typography 
          textAlign='center'
          variant="h5"
          sx={{mb:'50px', mt: '50px'}}>
          User successfully registered
        </Typography>
        <img src="./img/succes.svg" alt="" />
      </Box>
      }
    </Box>
      </FormProvider>
    </Container>
  )
}

export default POSTrequest