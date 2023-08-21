import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import VehicleMakeIdList from './components/VehicleMakeIdList';

export default function Home() {
  return (
    <>
      <Container>
        <AppBar position='static' sx={{ marginBottom: 2 }}>
          <Toolbar variant='dense'>
            <IconButton
              edge='start'
              aria-label='menu'
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant='h6' component='div'>
              ICBC
            </Typography>
          </Toolbar>
        </AppBar>

        <VehicleMakeIdList />
      </Container>
    </>
  );
}
