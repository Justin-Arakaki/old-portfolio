import React from 'react';
import GithubIcon from '../components/mui-icons/github-icon';
import LinkedInIcon from '../components/mui-icons/linkedin-icon';
import {
  Container,
  Typography,
  Box,
  IconButton
} from '@mui/material';

export default function Contact(props) {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' textAlign='center' mb='2rem'>
        Know how to reach me
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <Typography variant='h3' textAlign='center'>
          Email: Justin.r.arakaki@gmail.com
        </Typography>
        <Typography variant='h3' textAlign='center'>
          Phone: (714)393-9403
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <IconButton href='https://github.com/Justin-Arakaki'>
            <GithubIcon height='4rem' />
          </IconButton>
          <IconButton href='https://www.linkedin.com/in/jrarakaki/'>
            <LinkedInIcon height='4rem' />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
