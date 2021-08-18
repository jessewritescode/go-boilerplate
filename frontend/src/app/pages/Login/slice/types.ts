/* --- STATE --- */
export interface SessionState {
  error: boolean;
  errorCode: LoginErrorCodes;
  token: string;
}

export enum LoginErrorCodes {
  NONE = 0,
  BAD_PASSWORD = 1,
}
