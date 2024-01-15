import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthProvider not found in the component tree');
  }

  const { auth, setAuth } = authContext;

  return { auth, setAuth };
};

export default useAuthContext;
