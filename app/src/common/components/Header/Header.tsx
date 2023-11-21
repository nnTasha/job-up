import { Box, Button, Grid } from '@mui/material';
import Label from '../Label/Label';
import { headerStyles } from './styles';

const Header = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '80rem' }}
    >
      <Grid item>
        <Label />
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
