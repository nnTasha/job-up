import { FC } from 'react';
import {
  Button,
  CardContent,
  IconButton,
  Link,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import LaunchIcon from '../assets/launch.svg?react';
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from '../theme';

interface AuthFormProps {}

const pageTitle = {
  '/signin': 'SIGN IN',
  '/signup': 'SIGN UP',
};

const AuthForm: FC<AuthFormProps> = () => {
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
      <CardContent sx={fieldsContainerStyle}>
        {/* Will change to Formik */}
        <TextField
          id="user-name"
          label="Your username"
          size="small"
          margin="dense"
          sx={inputFieldStyle}
        />
        {isSignUp && (
          <TextField
            id="email"
            label="Your email"
            size="small"
            margin="dense"
            sx={inputFieldStyle}
          />
        )}
        <TextField
          id="password"
          label="Your password"
          size="small"
          margin="dense"
          sx={inputFieldStyle}
        />
        <Link href="#" underline="none" sx={restorePassStyle}>
          Forgot password ?
        </Link>
        <Button variant="contained" color="primary" sx={continueButtonStyle}>
          Continue
        </Button>
        <Typography sx={existingUserStyle}>
          Already have an account?{' '}
          <Link href="#" underline="none">
            Log In
          </Link>
        </Typography>
      </CardContent>
    </Paper>
  );
};

export default AuthForm;

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
const fieldsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
};
const inputFieldStyle = {
  minWidth: '20rem',
  minHeight: '1rem',
};
const restorePassStyle = {
  alignSelf: 'flex-end',
  fontSize: '0.7rem',
  marginBottom: '0.6rem',
};

const continueButtonStyle = {
  width: '100%',
};
const existingUserStyle = {
  fontSize: '0.7rem',
  marginTop: '0.6rem',
};
