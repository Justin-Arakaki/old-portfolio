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
      <Card
        sx={{
          display: 'flex',
          height: { xs: '65vh', sm: '80vh' },
          justifyContent: 'center',
          p: { xs: '1rem', sm: '2rem' }
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1UmBZZQUArrQ-wq_QPQuxugblHCq9jpQ_/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        >
        </iframe>
      </Card>
    </Container>
  );
}
