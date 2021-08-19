/* --- STATE --- */
export interface SessionState {
  error: boolean;
  loginStatus: LoginStatus;
  token: string;
}

export enum LoginStatus {
  NONE = 0,
  LOGGED_IN = 1,
  BAD_PASSWORD = 2,
}
