import { AuthenticationService } from '../../api';
import { FormValues } from '../types';

export const userSignIn = async (userCredentials: {
  email: string;
  password: string;
}) => {
  try {
    const authResponse =
      await AuthenticationService.authenticationControllerSingIn(
        userCredentials
      );

    if (!authResponse) {
      throw new Error('Invalid credentials');
    }

    setAuthToken(authResponse.accessToken);
    return authResponse;
  } catch (error) {
    throw new Error('Unable to sign in');
  }
};

const setAuthToken = (token: string) =>
  localStorage.setItem('access_token', token);

export const userSingUp = async (userCredentials: {
  email: string;
  password: string;
}) => {
  try {
    const authResponse =
      await AuthenticationService.authenticationControllerSingUp(
        userCredentials
      );

    if (!authResponse) {
      throw new Error('Invalid credentials');
    }

    setAuthToken(authResponse.accessToken);
    return authResponse;
  } catch (error) {
    throw new Error('Unable to sign in');
  }
};
