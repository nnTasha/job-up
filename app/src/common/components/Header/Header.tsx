import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { headerStyles } from './styles';

const Header = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Box display="flex" alignItems="center">
          <Chip sx={headerStyles.chip} label="JT" color="primary" />
          <Typography variant="h4" component="div" sx={headerStyles.title}>
            JobGet
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="center">
          <Button sx={headerStyles.button}>Sign up</Button>
          <Button variant="contained">Sign In</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
