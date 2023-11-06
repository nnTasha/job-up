import { Typography } from '@mui/material';

const headerStyle = {
  color: 'blue',
};

const LandingPageDescription: React.FC = () => {
  return (
    <>
      <Typography
        variant="h2"
        component="div"
        sx={{ fontWeight: '700', paddingY: '2rem' }}
      >
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
