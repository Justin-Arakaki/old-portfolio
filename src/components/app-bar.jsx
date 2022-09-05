import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Tabs,
  Tab
} from '@mui/material';

export default function AppBar(props) {
  const [tabSelection, setTabSelection] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabSelection(newValue);
  };
  const textColor = '#fff';

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Tabs
          value={tabSelection}
          onChange={handleTabChange}
          textColor='secondary'
        >
          <Tab
            label='Home'
            disableRipple={true}
            to='/'
            component={Link}
            sx={{ color: textColor }}
          />
          <Tab
            label='Projects'
            disableRipple={true}
            to='/projects'
            component={Link}
            sx={{ color: textColor }}
          />
          <Tab
            label='Resume'
            disableRipple={true}
            to='/resume'
            component={Link}
            sx={{ color: textColor }}
          />
          <Tab
            label='Contact'
            disableRipple={true}
            to='/contact'
            component={Link}
            sx={{ color: textColor }}
          />
        </Tabs>
      </Box>
      <Box height='4rem' />
    </>
  );
}
