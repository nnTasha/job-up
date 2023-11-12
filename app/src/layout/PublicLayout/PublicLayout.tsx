import React, { FC } from 'react';
import Header from '../../common/components/Header/Header';
import { Grid } from '@mui/material';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Grid container rowSpacing={12}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PublicLayout;
