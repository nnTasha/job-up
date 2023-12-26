import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from './types';
import { AuthenticationService } from '../api';
import { userSignIn } from './authentication/AccountManagement';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  isSignUp: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ isSignUp }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onFormSubmit = (data: FormValues) => {
    isSignUp
      ? AuthenticationService.authenticationControllerSingUp({
          //userName : data.username as string,
          email: data.email as string,
          password: data.password as string,
          //confirmPassword : data.confirmPassword as string
        })
      : userSignIn({
          email: data.email as string,
          password: data.password as string,
        });
    // navigate('/user-profile');
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormControl sx={{ width: '100%' }}>
        {isSignUp && (
          <TextField
            id="user-name"
            placeholder="username"
            size="small"
            margin="dense"
            {...register('userName', {
              required: 'User name is required',
              maxLength: 30,
            })}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
        )}
        <TextField
          id="user-email"
          placeholder="email"
          size="small"
          margin="dense"
          {...register('email', {
            required: 'Email is required',
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          error={!!errors.email}
          helperText={
            errors.email?.type === 'pattern'
              ? 'Invalid email address format'
              : errors.email?.message
          }
        />
        <TextField
          id="user-password"
          placeholder="password"
          size="small"
          margin="dense"
          {...register('password', {
            required: 'Password is required',
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {isSignUp && (
          <TextField
            id="confirm-password"
            placeholder="confirm password"
            size="small"
            margin="dense"
            {...register('confirmPassword', {
              required: 'Please confirm password',
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
        {!isSignUp && (
          <Link href="#" underline="none" sx={restorePassStyle}>
            Forgot password ?
          </Link>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '0.5rem' }}
        >
          Continue
        </Button>
      </FormControl>
    </form>
  );
};

export default AuthForm;

const restorePassStyle = {
  alignSelf: 'flex-end',
  fontSize: '0.7rem',
  marginBottom: '0.6rem',
};
