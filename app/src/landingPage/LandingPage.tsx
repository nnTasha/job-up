import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import theme from '@/theme';
interface LandingPageProps {
  description: ReactNode;
  content: ReactNode;
}

const LandingPage: FC<LandingPageProps> = ({ description, content }) => {
  return (
    <Grid container sx={containerStyle}>
      <Grid item xs={4} sx={descriptionStyle}>
        {description}
      </Grid>
      <Grid item xs={12} md={6}>
        {content}
      </Grid>
    </Grid>
  );
};

export default LandingPage;

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    paddingY: '5rem',
  },
};

const descriptionStyle = {
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
};
