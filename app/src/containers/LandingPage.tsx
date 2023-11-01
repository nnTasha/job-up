import { Box, Container } from '@mui/material';
// import DeskImage from '../assets/desk.svg?component';

const LandingPage = () => {
  return (
    <>
      <Container sx={{ display: 'flex' }}>
        <Box sx={{ border: '1px solid red', flexGrow: 1 }}>
          {'an image '}
          {/* <DeskImage /> */}
        </Box>
        <Box sx={{ border: '1px solid green', flexGrow: 1 }}>{'an image '}</Box>
      </Container>
    </>
  );
};

export default LandingPage;
