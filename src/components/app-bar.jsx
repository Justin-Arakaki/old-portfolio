import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Container,
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
        <Tab label='Home' disableRipple={true} sx={{ color: textColor }} />
        <Tab label='Projects' disableRipple={true} sx={{ color: textColor }} />
        <Tab label='Resume' disableRipple={true} sx={{ color: textColor }} />
        <Tab label='Contact' disableRipple={true} sx={{ color: textColor }} />
      </Tabs>
    </Box>
  );
}
