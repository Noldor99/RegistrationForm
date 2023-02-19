
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const MyCard = ({user}) => {
  return (
    <Card sx={{ 
 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      padding: '20px' 
    }}>

      <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
            <img src={user.photo} alt="" />
      </Avatar> 
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.position}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.email}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.phone}
      </Typography>
 
  </Card>
  )
}

export default MyCard