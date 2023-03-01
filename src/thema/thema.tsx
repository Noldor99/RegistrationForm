import { createTheme } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';



interface SimpleButtonProps extends ButtonProps {
  stylebutton?: 'simple';
}

interface SimpleLargeButtonProps extends ButtonProps {
  stylebutton?: 'simple';
  size?: 'large';
}


export const theme = createTheme({

  palette: {

    secondary: {
      main: '#FFE302',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { stylebutton: 'simple' } as SimpleButtonProps,
          style: {
            borderRadius: '25px',
            width: '100px',
            fontWeight: '400'
          },
        },
        {
          props: { stylebutton: 'simple', size: 'large' } as SimpleLargeButtonProps,
          style: {
            width: '140px',

          },
        },
      ],
    },
  },
});