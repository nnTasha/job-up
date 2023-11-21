import Header from '../../common/components/Header/Header';
import { Grid } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface PublicLayoutProps {}

const PublicLayout: FC<PublicLayoutProps> = () => {
  return (
    <Grid
      container
      rowSpacing={12}
      className="mainGrid"
      sx={{ alignContent: 'center', justifyContent: 'center' }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PublicLayout;
