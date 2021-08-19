/**
 *
 * SignupForm
 *
 */
import * as React from 'react';
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
  NumberInput,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { translations } from 'locales/translations';

interface Props {}

export function SignupForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
      .string()
      .min(6)
      .required()
      .oneOf(
        [yup.ref('password'), null],
        t(translations.Signup.passwordsMustMatch),
      ),
    phone: yup.number().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    confirmPassword: string;
    phone: number;
  }) => {
    // dispatch(actions.login({ ...data, history }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Object.keys(errors).length > 0}>
        <FormLabel as="legend">{t(translations.Signup.email)}</FormLabel>
        <Input mb={3} type="email" {...register('email')} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
        <FormLabel as="legend">{t(translations.Signup.password)}</FormLabel>
        <Input mb={3} type="password" {...register('password')} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
        <FormLabel as="legend">
          {t(translations.Signup.confirmPassword)}
        </FormLabel>
        <Input mb={3} type="password" {...register('confirmPassword')} />
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
        <FormLabel as="legend">
          {t(translations.Signup.confirmPassword)}
        </FormLabel>
        <Input mb={3} type="number" {...register('phone')} />
        <FormErrorMessage>
          {errors.phone && errors.phone.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        {t(translations.Signup.submit)}
      </Button>
    </form>
  );
}
