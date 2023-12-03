import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate('/signin')}
      sx={{
        [theme.breakpoints.down('md')]: {
          marginRight: '0',
          fontSize: '1.7rem',
        },
      }}
    >
      SIGN IN
    </Button>
  );
};

export default SignIn;
