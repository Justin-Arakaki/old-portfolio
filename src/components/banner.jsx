import React from 'react';
import ReactJsIcon from './mui-icons/react-js-icon';
import NodeJsIcon from './mui-icons/node-js-icon';
import TypescriptIcon from './mui-icons/typescript-icon';
import {
  Container,
  Typography,
  Box
} from '@mui/material';

export default function Banner(props) {
  const flexy = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        py: '8rem'
      }}
    >
      <Box sx={{ display: 'inline-block' }}>
        <Typography variant='h1'>
          Hello!
        </Typography>
        <Typography display='inline' variant='h1'>
          I am&nbsp;
        </Typography>
        <Typography display='inline' variant='h1' color='text.secondary'>
          Justin Arakaki
        </Typography>
        <Typography variant='h1'>
          A full-stack web developer.
        </Typography>
      </Box>
      <Box mt='4rem' sx={flexy}>
        <Typography variant='h3'>Stuff I use -&gt;</Typography>
        <Box sx={flexy}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactJsIcon height='2rem' />
            <Typography display='inline' variant='h3'>React.js</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <NodeJsIcon height='2rem' />
            <Typography display='inline' variant='h3'>Node.js</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TypescriptIcon height='2rem' />
            <Typography display='inline' variant='h3'>Typescript</Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant='h2' mt='4rem'>
        A bit about me...
      </Typography>
      <Box sx={{ width: '80%', textAlign: 'center' }}>
        <Typography display='inline' variant='body1' mt='1rem'>
          I am another mechanical engineer turning to web development for new  learning experiences. Programming is interesting, versatile, and addicting.
        </Typography>
        <Typography display='inline' variant='body1' color='text.secondary'>
          &nbsp;I love it.&nbsp;
        </Typography>
        <Typography display='inline' variant='body1'>
          I do have special interest in
        </Typography>
        <Typography display='inline' variant='body1' color='text.secondary'>
          &nbsp;backend development&nbsp;
        </Typography>
        <Typography display='inline' variant='body1'>
          but I am also competent in frontend.
        </Typography>
      </Box>
    </Container>
  );
}
