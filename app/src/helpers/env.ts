import { getImportMetaEnv } from './importMeta';

interface Env {
  VITE_SIGN_IN_LOCAL_URL: string;
}

declare global {
  interface Window {
    env: Env;
  }
}

export const getEnvironmentVariables = (environmentVarKey: keyof Env) => {
  console.log(environmentVarKey, 'environmentVarKey');
  console.log(window, 'window');
  if (
    typeof window !== 'undefined' &&
    window.env &&
    window.env[environmentVarKey]
  ) {
    console.log(window.env[environmentVarKey], 'window.env[environmentVarKey]');
    return window.env[environmentVarKey];
  } else if (
    typeof process !== 'undefined' &&
    process.env &&
    process.env[environmentVarKey]
  ) {
    return process.env[environmentVarKey];
  }

  try {
    const importMetaEnv = getImportMetaEnv(environmentVarKey);
    console.log(importMetaEnv, 'importMetaEnv');
    if (importMetaEnv) {
      return importMetaEnv;
    }
  } catch (error) {
    // Silently ignore import.meta errors
  }
  return undefined;
};
