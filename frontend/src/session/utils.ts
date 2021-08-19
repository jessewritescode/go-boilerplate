/**
 * TODO: Consider something more secure than this, like perhaps a cookie with httpOnly.
 */
export function saveTokenInLocalStorage(token: string) {
  window.localStorage && localStorage.setItem('token', token);
}

export function getTokenFromStorage(): string | null {
  return window.localStorage
    ? (localStorage.getItem('token') as string) || null
    : null;
}

export function deleteTokenFromLocalStorage() {
  window.localStorage && localStorage.delete('token');
}
