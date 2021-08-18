/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  email: () => _t(translations.Login.email, 'Email address'),
  password: () => _t(translations.Login.password, 'Password'),
  submit: () => _t(translations.Login.submit, 'Submit'),
  incorrectPassword: () =>
    _t(translations.Login.incorrectPassword, 'Incorrect username or password.'),
};
