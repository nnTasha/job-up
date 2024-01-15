import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material';
import { FormValues } from './types';
import { AuthenticationService } from '../api';
import { useAuthentication } from './authentication/AccountManagement';
import { AuthContext } from '../context/AuthProvider';

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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { userSignIn } = useAuthentication();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthProvider not found in the component tree');
  }

  const { auth } = authContext;

  const navigate = useNavigate();

  const onFormSubmit = (formData: FormValues) => {
    isSignUp
      ? AuthenticationService.authenticationControllerSingUp({
          //userName : data.username as string,
          email: formData.email as string,
          password: formData.password as string,
          //confirmPassword : data.confirmPassword as string
        })
      : userSignIn({
          email: formData.email as string,
          password: formData.password as string,
        });
  };

  //TODO: rethink it :)
  useEffect(() => {
    auth && navigate('/user-profile');
  }, [auth]);

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
