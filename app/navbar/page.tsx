import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography
} from '@mui/material';
import ClearButton from '../(components)/ClearPageButton';
import ReturnHomeButton from '../(components)/ReturnHomeButton';

export default function Navbar() {
  return (
    <Container>
      <AppBar position='static' sx={{ marginBottom: 2, paddingRight: 2 }}>
        <Toolbar variant='dense' sx={{ flexGrow: 1 }}>
          <ReturnHomeButton />
          <Link href='/admin' sx={{ marginLeft: 'auto', color: 'white' }}>
            <Button component='div' sx={{ color: 'white' }}>
              Admin
            </Button>
          </Link>
          <ClearButton />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
