import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { translations } from 'locales/translations';
import { useSessionSlice } from '../../../../../session/slice/index';
import {
  selectBadPassword,
  selectToken,
} from '../../../../../session/slice/selectors';
import { saveTokenInLocalStorage } from 'session/utils';

interface Props {}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export function LoginForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  let history = useHistory();
  const { actions } = useSessionSlice();
  const hasBadPassword = useSelector(selectBadPassword);
  const token = useSelector(selectToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(actions.login({ ...data, history }));
  };

  React.useEffect(() => {
    if (token) {
      saveTokenInLocalStorage(token);
      history.push('/home');
    }
  }, [token, history]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name || errors.password}>
        <FormLabel as="legend">{t(translations.Login.email)}</FormLabel>
        <Input mb={3} type="email" {...register('email')} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
        <FormLabel as="legend">{t(translations.Login.password)}</FormLabel>
        <Input mb={3} type="password" {...register('password')} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
        {hasBadPassword ? (
          <Alert mt={3} status="error">
            <AlertIcon />
            {t(translations.Login.incorrectPassword)}
          </Alert>
        ) : null}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        {t(translations.Login.submit)}
      </Button>
    </form>
  );
}
