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
      <Card p='2rem'>
        <iframe src="http://docs.google.com/gview?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true" style="width:600px; height:500px;" frameBorder="0"/>
      </Card>
    </Container>
  );
}
