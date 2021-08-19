/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  email: () => _t(translations.Signup.email, 'Email address'),
  password: () => _t(translations.Signup.password, 'Password'),
  confirmPassword: () =>
    _t(translations.Signup.confirmPassword, 'Confirm password'),
  phone: () => _t(translations.Signup.phone, 'Phone'),
  signup: () => _t(translations.Signup.submit, 'Signup'),
  passwordsMustMatch: () =>
    _t(translations.Signup.passwordsMustMatch, 'Passwords must match'),
};
