import { AuthenticationService } from '../../api';
import useAuthContext from '../../hooks/useAuthContext';

export const useAuthentication = () => {
  const { setAuth } = useAuthContext();

  const userSignIn = async (userCredentials: {
    email: string;
    password: string;
  }) => {
    try {
      const authResponse =
        await AuthenticationService.authenticationControllerSingIn(
          userCredentials
        );

      setAuth(authResponse.accessToken);
      return authResponse;
    } catch (error) {
      throw new Error('Unable to sign in');
    }
  };
  return { userSignIn };
};
