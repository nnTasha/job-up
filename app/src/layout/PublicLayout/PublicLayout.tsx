import { Grid } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import SignIn from '../../common/components/signIn/SignIn';
import SignUp from '../../common/components/signUp/SignUp';
import Label from '../../common/components/label/Label';
import theme from '../../theme';

interface PublicLayoutProps {}

const PublicLayout: FC<PublicLayoutProps> = () => {
  return (
    <Grid
      container
      rowSpacing={10}
      sx={{
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
    >
      <Grid
        item
        md={6}
        order={{ xs: 1, md: 1 }}
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Label />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        order={{ xs: 3, md: 2 }}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            rowGap: '3.5rem',
          },
        }}
      >
        <SignUp />
        <SignIn />
      </Grid>
      <Grid item xs={12} order={{ xs: 2, md: 3 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PublicLayout;
