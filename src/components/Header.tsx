import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { HomeButton } from './UI/HomeButton';
import { Link } from 'react-scroll'
import Logo from '../assets/Logo';




const Header = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ background: 'inherit', position: 'static' }} >
        <Toolbar>

          <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
            <Logo />
          </Box>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Link to='user' smooth={true}>
              <HomeButton>
                Users
              </HomeButton>
            </Link>
            <Link to='SignUp' smooth={true}>
              <HomeButton
                onClick={() => null}>
                Sign up
              </HomeButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}

export default Header