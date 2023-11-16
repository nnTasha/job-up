import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import Label from '../Label/Label';
import { formatPath } from './utils';
import { headerStyles } from './styles';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();

  const [pathToNavigate, setPath] = useState('');
  const handleNavigationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newPath = formatPath(e.currentTarget.innerText);
    setPath(newPath);
    navigate(`/${newPath}`);
  };

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
          {!pathToNavigate && (
            <>
              <Button sx={headerStyles.button} onClick={handleNavigationClick}>
                Sign up
              </Button>
              <Button variant="contained" onClick={handleNavigationClick}>
                Sign In
              </Button>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
