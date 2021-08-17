/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Box, Flex } from '@chakra-ui/react';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import LoginForm from './LoginForm';

//       <FormattedMessage {...messages.header} />

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Flex
        w="100%"
        h="100vh"
        direction="column"
        align="center"
        justify="center"
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Box
          w="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgColor="white"
          p={6}
        >
          <LoginForm />
        </Box>
      </Flex>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
