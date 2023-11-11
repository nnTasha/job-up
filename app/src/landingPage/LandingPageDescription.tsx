import { Typography } from '@mui/material';
import { descriptionStyles } from './styles';

const LandingPageDescription: React.FC = () => {
  return (
    <>
      <Typography variant="h2" component="div" sx={descriptionStyles.title}>
        Find your{' '}
        <span style={{ color: 'blue' }}>
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
