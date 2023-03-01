import { FC } from 'react'
import { Input } from '../UI/Input';
import { Stack } from '@mui/system';



const InputForm: FC<any> = ({ register, errors }: any) => {


  return (

    <Stack spacing={'50px'} sx={{ mb: '25px' }}>
      <Input
        {...register('nameInput')}
        label="Your name"
        type='text'
        error={!!errors.nameInput}
        helperText={errors?.nameInput?.message}
      />
      <Input
        {...register('email')}
        label="Email"
        type='email'
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <Input
        {...register('phone')}
        label="Phone"
        type='tel'
        helperText={errors?.phone ? errors?.phone?.message : "+38 (XXX) XXX - XX - XX"}
        error={!!errors.phone}
      />
    </Stack>

  )
}

export default InputForm