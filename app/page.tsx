'use client';

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from './theme/ThemeRegistry';

export default function Home() {
  const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <Container>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <IconButton
              edge='start'
              aria-label='menu'
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant='h6' component='div'>
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}
