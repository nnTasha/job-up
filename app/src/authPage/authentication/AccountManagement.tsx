import { useContext } from 'react';
import { AuthenticationService } from '../../api';
import { AuthContext } from '../../context/AuthProvider';

export const useAuthentication = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthProvider not found in the component tree');
  }

  const { setAuth } = authContext;

  const userSignIn = async (userCredentials: {
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

      setAuth(authResponse.accessToken);
      return authResponse;
    } catch (error) {
      throw new Error('Unable to sign in');
    }
  };
  return { userSignIn };
};
