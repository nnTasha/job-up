import { FC } from 'react';
import { Button, FormControl, Link, TextField } from '@mui/material';

interface AuthFormProps {
  isSignUp: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ isSignUp }) => {
  return (
    <FormControl required>
      {isSignUp && (
        <TextField
          id="user-name"
          placeholder="username"
          size="small"
          margin="dense"
        />
      )}
      <TextField
        id="user-email"
        placeholder="email"
        size="small"
        margin="dense"
      />
      <TextField
        id="user-password"
        placeholder="password"
        size="small"
        margin="dense"
      />
      {isSignUp && (
        <TextField
          id="user-password"
          placeholder="confirm password"
          size="small"
          margin="dense"
        />
      )}
      {!isSignUp && (
        <Link href="#" underline="none" sx={restorePassStyle}>
          Forgot password ?
        </Link>
      )}
      <Button variant="contained" color="primary" sx={continueButtonStyle}>
        Continue
      </Button>
    </FormControl>
  );
};

export default AuthForm;

const restorePassStyle = {
  alignSelf: 'flex-end',
  fontSize: '0.7rem',
  marginBottom: '0.6rem',
};

const continueButtonStyle = {
  marginTop: '0.5rem',
};
