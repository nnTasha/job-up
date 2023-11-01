import { Box, Container } from '@mui/material';
import DeskImage from '../assets/desk.svg?react';

const LandingPage = () => {
  return (
    <>
      <Container sx={{ display: 'flex' }}>
        <Box sx={{ border: '1px solid red', flexGrow: 1 }}>{'some text '}</Box>
        <Box sx={{ border: '1px solid green', flexGrow: 1 }}>
          <DeskImage />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
