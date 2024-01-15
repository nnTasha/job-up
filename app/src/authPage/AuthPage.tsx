import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Link,
  Paper,
  SvgIcon,
  Typography,
} from '@mui/material';
import LaunchIcon from '@/assets/launch.svg?react';
import ClearIcon from '@mui/icons-material/Clear';
import AuthForm from './AuthForm';
import theme from '@/theme';

const pageTitle = {
  '/signin': 'SIGN IN',
  '/signup': 'SIGN UP',
};

const AuthPage: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const cardTitle = pageTitle[location.pathname as '/signin' | '/signup'] || '';

  const isSignUp = cardTitle === 'SIGN UP';

  return (
    <Paper sx={containerStyle}>
      <IconButton sx={clearIconButtonStyle} onClick={() => navigate('/')}>
        <ClearIcon sx={clearIconStyle} />
      </IconButton>
      <Typography sx={textStyle}>{cardTitle}</Typography>
      <SvgIcon component={LaunchIcon} inheritViewBox sx={svgIconStyle} />
      <Box sx={boxStyle}>
        <AuthForm isSignUp={isSignUp} />
        {isSignUp && (
          <Typography sx={existingUserStyle}>
            Already have an account?{' '}
            <Link href="/signin" underline="none">
              Log In
            </Link>
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default AuthPage;

const containerStyle = {
  display: 'flex',
  width: '35rem',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 0 80px  rgb(0 0 0 / 0.1)',

  position: 'relative',
  overflow: 'visible',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '40rem',
    boxShadow: 'none',
  },
};

const clearIconButtonStyle = {
  position: 'absolute',
  right: '-1rem',
  top: '-1rem',
  fontSize: '21rem',
  [theme.breakpoints.down('md')]: {
    right: '1rem',
    top: '1rem',
  },
};

const clearIconStyle = {
  fontSize: '20px',
  color: 'rgb(84, 82, 82)',
  backgroundColor: 'rgb(236, 231, 231)',
  borderRadius: '50%',
};

const textStyle = {
  padding: '2rem',
  fontWeight: '700',
  fontSize: '1.5rem',
};
const svgIconStyle = {
  width: '12rem',
  height: '30%',
  filter: 'drop-shadow(-10px -8px 45px rgb(0 0 0 / 0.4))',
};
const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
  width: '60%',

  [theme.breakpoints.down('md')]: {
    width: '75%',
  },
};

const existingUserStyle = {
  fontSize: '0.7rem',
  marginTop: '0.6rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '1.5rem',
  },
};
