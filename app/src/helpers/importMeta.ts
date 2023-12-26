export const getImportMetaEnv = (key: string): string | undefined =>
  import.meta.env[key];
