import { Typography, styled } from '@mui/material';

const LandingPageDescriptionStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const headerStyle = {
  color: 'blue',
};

const LandingPageDescription: React.FC = () => {
  return (
    <>
      <Typography variant="h2" component="div">
        Find your{' '}
        <span style={headerStyle}>
          dream <br></br>job
        </span>{' '}
        today
      </Typography>
      <Typography variant="body1">
        Thousand of jobs in the computer engineering and technology sectors are
        waiting for you
      </Typography>
    </>
  );
};

export default LandingPageDescription;
