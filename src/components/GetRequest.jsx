import { Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import MyCard from "./MyCard"
import Button from '@mui/material/Button';
import { useLazyGetUsersQuery } from "../store/redusers/userApi";
import { useEffect, useState } from "react";
import { HomeButton } from "./UI/HomeButton";
import { useSelector } from "react-redux";

const GetRequest = () => {

  const [fetchReposAll] = useLazyGetUsersQuery(undefined)

  const {users, totalPages}  = useSelector(state => state.user);

  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    fetchReposAll(pageCount)
  }, [pageCount]);

  return (
    <Container >
      <Box sx={{pb:'140px'}}>
        <Typography
          id = 'user' 
          textAlign='center'
          variant="h5"
          sx={{mb:'50px'}}
          >
          Working with GET request
        </Typography>
        <Grid container spacing={2} sx = {{mb:'50px'}}>
          {users.map((user) =>
            <Grid item xs={12} sm={6} md={4} key={user.registration_timestamp}> 
              <MyCard
                user = {user}
              />
            </Grid>
          )}
        </Grid>
        {pageCount !== totalPages 
          ?
          <HomeButton
            sx = {{display: 'block', margin: '0 auto'}} 
            size = 'large'
            onClick={() => setPageCount(pageCount+1)}>
            Show more
          </HomeButton>
          :
          <Typography
            textAlign='center'
          >Laste page</Typography>
        }
      </Box>
    </Container>  
    
  )
}

export default GetRequest