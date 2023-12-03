import { FC, useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import Label from '../label/Label';
import { formatPath } from './utils';
import { headerStyles } from './styles';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [buttonVisibility, setButtonVisibility] = useState(true);
  const [pathToNavigate, setPath] = useState('');

  const handleNavigationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newPath = formatPath(e.currentTarget.innerText);
    setPath(newPath);
    navigate(`/${newPath}`);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setButtonVisibility(false);
    } else {
      setButtonVisibility(true);
    }
  }, [location]);

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
          {buttonVisibility && (
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
