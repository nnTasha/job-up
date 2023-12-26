export interface FormValues {
  userName: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  confirmPassword?: string | null | undefined;
  [key: string]: string | null | undefined;
}
