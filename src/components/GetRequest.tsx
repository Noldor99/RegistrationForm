import { CircularProgress, Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import MyCard from "./MyCard"
import { useLazyGetUsersQuery } from "../store/redusers/userApi";
import { useEffect, useState } from "react";
import { HomeButton } from "./UI/HomeButton";
import { useTypedSelector } from "../hook/useTypedSelector";
import { IUser } from "../type/type";

const GetRequest = () => {

  const [fetchReposAll, { isFetching }] = useLazyGetUsersQuery(undefined)

  const { users, totalPages, success } = useTypedSelector(state => state.user);

  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    fetchReposAll(pageCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount, success]);

  return (
    <Container >
      <Box sx={{ pb: '140px' }}>
        <Typography
          id='user'
          textAlign='center'
          variant="h5"
          sx={{ mb: '50px' }}
        >
          Working with GET request
        </Typography>
        <Grid container spacing={2} sx={{ mb: '50px' }}>
          {users.map((user: IUser) =>
            <Grid item xs={12} sm={6} md={4} key={user.registration_timestamp}>
              <MyCard
                user={user}
              />
            </Grid>
          )}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
          {isFetching ? <CircularProgress /> : pageCount !== totalPages
            ?
            <HomeButton
              size='large'
              onClick={() => setPageCount(pageCount + 1)}>
              Show more
            </HomeButton>
            :
            <Typography
              textAlign='center'
            >Laste page</Typography>
          }
        </Box>
      </Box>
    </Container>

  )
}

export default GetRequest