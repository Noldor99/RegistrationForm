import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();
 
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
          props: { stylebutton: 'simple' },
          style: {
            borderRadius: '25px',
            width: '100px',
            fontWeight: '400'
          },
        },
        {
          props: { stylebutton: 'simple', size: 'large' },
          style: {
            width: '140px',
    
          },
        },
      ],
    },
  },
});