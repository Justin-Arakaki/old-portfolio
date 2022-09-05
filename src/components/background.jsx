import React from 'react';
import GearOneIcon from './mui-icons/gear-1-icon';
import GearTwoIcon from './mui-icons/gear-2-icon';
import { Box } from '@mui/material';

export default function Background(props) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '-15rem',
          right: '-15rem',
          zIndex: -1
        }}
      >
        <GearOneIcon height='30rem' fill='#1F2833' />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '-15rem',
          left: '-15rem',
          zIndex: -1
        }}
      >
        <GearTwoIcon height='30rem' fill='#1F2833' />
      </Box>
    </>
  );
}
