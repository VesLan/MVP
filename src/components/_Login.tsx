import _React, { useContext } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from './_UseForm';
import { AuthContext } from './_AuthProvider';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
});

export const Login = () => {
  const { handleLoginWithCredentials } =
    useContext(AuthContext);

  const { handleChange, pass, email } = useForm({
    initialState: {
      email: '',
      pass: '',
    },
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    handleLoginWithCredentials(pass, email);
  };

  return (
    <Container>
      <Typography
        sx={{
          m: 4,
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          fontFamily: 'creepster',
          letterSpacing: 2,
        }}
      >
        Login
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Type Your Email Here"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />
        <TextField
          label="Type Your Password Here"
          name="pass"
          type="password"
          onChange={handleChange}
          value={pass}
          required
        />
        <Button
          type="submit"
          sx={{
            mt: 1,
            letterSpacing: 1,
          }}
        >
          Log In with Email and Password
        </Button>
      </Form>
    </Container>
  );
};
