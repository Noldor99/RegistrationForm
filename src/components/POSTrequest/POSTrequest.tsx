import Box from '@mui/material/Box';
import { CircularProgress, Container, Typography } from '@mui/material';
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../schema/schema';
import { HomeButton } from '../UI/HomeButton';
import InputForm from './InputForm';
import RadioForm from './RadioForm';
import UploadForm from './UploadForm';
import { useEffect } from 'react';
import { useLazyGetTokenQuery, usePostUsersMutation } from '../../store/redusers/userApi';
import Succes from '../../assets/Succes';
import { IUser } from '../../type/type';




const POSTrequest = () => {

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { register, handleSubmit, formState: { errors, isValid } } = methods

  const [fetchToken] = useLazyGetTokenQuery()


  useEffect(() => {
    fetchToken('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [crateUser, { isSuccess, isLoading }] = usePostUsersMutation()



  const onSubmit = (e: IUser) => {
    console.log(e.photo)
    const formData = new FormData()
    formData.append('photo', e.photo[0])
    formData.append('phone', e.phone)
    formData.append('position_id', e.position)
    formData.append('email', e.email)
    formData.append('name', e.nameInput)

    crateUser(formData)
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <Box sx={{
          pb: '140px', margin: '0 auto', display: 'block', maxWidth: '400px'
        }}>
          <Typography
            id='SignUp'
            textAlign='center'
            variant="h5"
            sx={{ mb: '50px' }}>
            Working with GET request
          </Typography>
          {/* @ts-ignore */}
          <form onSubmit={(handleSubmit(onSubmit))}>
            <InputForm
              register={register}
              errors={errors}
            />
            <RadioForm />
            <UploadForm
              register={register}
              errors={errors}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {isLoading ? <CircularProgress />
                : <HomeButton
                  disabled={!isValid && true}
                  type='submit'
                >Sign up
                </HomeButton>
              }
            </Box>
          </form>
          {isSuccess &&
            <Box>
              <Typography
                textAlign='center'
                variant="h5"
                sx={{ mb: '50px', mt: '50px' }}>
                User successfully registered
              </Typography>
              <Succes />
            </Box>
          }
        </Box>
      </FormProvider>
    </Container>
  )
}

export default POSTrequest