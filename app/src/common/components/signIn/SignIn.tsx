import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const SIGN_IN = 'signin';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate(`/${SIGN_IN}`)}
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
