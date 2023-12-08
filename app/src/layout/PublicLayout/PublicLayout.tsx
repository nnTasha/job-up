import { Grid } from '@mui/material';
import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import SignIn from '../../common/components/signIn/SignIn';
import SignUp from '../../common/components/signUp/SignUp';
import Label from '../../common/components/label/Label';
import theme from '../../theme';

interface PublicLayoutProps {}

const PublicLayout: FC<PublicLayoutProps> = () => {
  const currentLocation = useLocation();
  const shouldBeVisible = currentLocation.pathname == '/';

  return (
    <Grid container rowSpacing={10} sx={containerStyle}>
      <Grid item md={6} order={{ xs: 1, md: 1 }} sx={labelStyle}>
        <Label />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }} sx={authButtonsStyle}>
        {shouldBeVisible && (
          <>
            <SignUp />
            <SignIn />
          </>
        )}
      </Grid>
      <Grid item xs={12} order={{ xs: 2, md: 3 }} sx={sectionStyle}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PublicLayout;

const containerStyle = {
  paddingY: '2rem',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const labelStyle = {
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const authButtonsStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    margin: '1rem',
    rowGap: '1rem',
  },
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};
