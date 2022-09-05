import React from 'react';
import {
  Container,
  Typography,
  Card
} from '@mui/material';

export default function Resume(props) {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' textAlign='center' mb='2rem'>
        See my credentials
      </Typography>
      <Card sx={{ display: 'flex', justifyContent: 'center', p: '2rem' }}>
        <iframe
          src="https://drive.google.com/file/d/1le8mzq0RoQL98GaaQGwit-JHSX1NRbi4/preview"
          width="100%"
          height="500"
          allow="autoplay"
        >
        </iframe>
      </Card>
    </Container>
  );
}
