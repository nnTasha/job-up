import { Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const SignUp = () => {
  const navigate = useNavigate();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const variantColor = isMdDown ? 'contained' : 'outlined';

  return (
    <Button
      variant={variantColor}
      sx={{
        marginRight: '0.5rem',
        [theme.breakpoints.down('md')]: {
          marginRight: '0',
          fontSize: '1.5rem',
        },
      }}
      onClick={() => navigate('/signup')}
    >
      SIGN UP
    </Button>
  );
};

export default SignUp;
