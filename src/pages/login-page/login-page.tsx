import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthUser } from '../../hooks';
import { Form, Input, Text, Button } from '../../shared/ui';

import styles from './login-page.module.css';

export const LoginPage = () => {
  const { errors, signInUser } = useAuthUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateToRegister = useCallback(() => {
    navigate(`/signup`, { replace: false });
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    signInUser({ email, password });
  }, [email, password, signInUser]);

  return (
    <Form title="Login" buttonName="Submit" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        label="Enter email:"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        label="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Text weight={500} className={styles.error}>
        {errors.signIn}
      </Text>
      <Button type="submit" className={styles.button} size="l" weight={600}>
        Submit
      </Button>
      <div className={styles.row}>
        <Text>You do not have an account?</Text>
        <Button
          weight={600}
          className={styles.link}
          onClick={handleNavigateToRegister}
        >
          Sign up
        </Button>
      </div>
    </Form>
  );
};
