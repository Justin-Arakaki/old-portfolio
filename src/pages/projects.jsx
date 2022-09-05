import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box
} from '@mui/material';

export default function Projects(props) {
  const flexy = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '1rem',
    mb: '1.5rem',
    height: '4rem'
  };

  // TODO: Good Lord separate this into components
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' textAlign='center' mb='2rem'>
        Browse my wares
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '2rem',
          pb: '2rem'
        }}
      >
        <Card sx={{ maxWidth: 340 }}>
          <CardMedia
            component='img'
            height='250'
            image='src/assets/images/truestream.png'
            alt='truestream'
          />
          <CardContent>
            <Box sx={flexy}>
              <Typography variant='body1' color='text.secondary'>
                Node.js
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Express.js
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                PostgreSQL
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                React.js
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                MUI
              </Typography>
            </Box>
            <Typography variant="h3" color='secondary'>
              Truestream
            </Typography>
            <Typography variant="body1">
              Full-stack web app that tracks user media streaming subscriptions
            </Typography>
          </CardContent>
          <CardActions>
            <Button href='https://truestream.herokuapp.com/'>
              Demo
            </Button>
            <Button href='https://github.com/Justin-Arakaki/truestream'>
              GitHub
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardMedia
            component='img'
            height='250'
            image='src/assets/images/anicritic.png'
            alt='anicritic'
          />
          <CardContent>
            <Box sx={flexy}>
              <Typography variant='body1' color='text.secondary'>
                Vanilla
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                AJAX
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                JikanAPI
              </Typography>
            </Box>
            <Typography variant="h3" color='secondary'>
              AniCritic
            </Typography>
            <Typography variant="body1">
              Frontend web app that allows users to track and review series using an api
            </Typography>
          </CardContent>
          <CardActions>
            <Button href='https://justin-arakaki.github.io/ajax-project/'>
              Demo
            </Button>
            <Button href='https://github.com/Justin-Arakaki/ajax-project'>
              GitHub
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardMedia
            component='img'
            height='250'
            image='src/assets/images/you-are-here.jpg'
            alt='truestream'
          />
          <CardContent>
            <Box sx={flexy}>
              <Typography variant='body1' color='text.secondary'>
                React.js
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                MUI
              </Typography>
            </Box>
            <Typography gutterBottom variant="h3">
              Personal Website
            </Typography>
            <Typography variant="body1">
              Website that showcases my most recent projects
            </Typography>
          </CardContent>
          <CardActions>
            <Button href='https://github.com/Justin-Arakaki/portfolio'>
              GitHub
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
