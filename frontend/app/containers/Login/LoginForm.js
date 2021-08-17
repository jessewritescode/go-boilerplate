import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
});

const LoginForm = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name || errors.password}>
        <FormLabel as="legend">Email address</FormLabel>
        <Input type="email" {...register('email')} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
        <FormLabel as="legend">Password</FormLabel>
        <Input type="password" {...register('password')} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

LoginForm.displayName = 'LoginForm';

LoginForm.defaultProps = {};

export default LoginForm;
