import { FC } from 'react';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import LaunchIcon from '../assets/launch.svg?react';
import ClearIcon from '@mui/icons-material/Clear';
import { cardStyles } from './styles';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  title: string;
}

const AuthForm: FC<AuthFormProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleCloseButton = () => {
    navigate('/');
  };

  return (
    <Card sx={cardStyles.card}>
      <IconButton sx={cardStyles.iconButton} onClick={handleCloseButton}>
        <ClearIcon sx={cardStyles.iconImage} />
      </IconButton>
      <Typography sx={cardStyles.text}>{title}</Typography>
      <SvgIcon component={LaunchIcon} inheritViewBox sx={cardStyles.svgIcon} />
      <CardContent sx={cardStyles.fieldsContainer}>
        <TextField
          id="user-name"
          label="Your username"
          size="small"
          margin="dense"
          sx={cardStyles.inputField}
        />
        {title === 'Sign Up' && (
          <TextField
            id="email"
            label="Your email"
            size="small"
            margin="dense"
            sx={cardStyles.inputField}
          />
        )}
        <TextField
          id="password"
          label="Your password"
          size="small"
          margin="dense"
          sx={cardStyles.inputField}
        />
        <Link href="#" underline="none" sx={cardStyles.restorePass}>
          Forgot password ?
        </Link>
        <Button variant="contained" color="primary" sx={cardStyles.signButton}>
          {title}
        </Button>
        <Typography sx={cardStyles.existingUser}>
          Already have an account?{' '}
          <Link href="#" underline="none">
            Log In
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
