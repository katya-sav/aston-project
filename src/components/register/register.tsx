import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthUser } from '../../hooks';
import { Form, Input, Text, Button } from '../../shared/ui';

import styles from './register.module.css';

export const Register = () => {
  const { signUpUser } = useAuthUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateToLogin = useCallback(() => {
    navigate(`/signin`, { replace: false });
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    signUpUser({ email, password });
  }, [email, password, signUpUser]);

  return (
    <Form title="Register" buttonName="Submit" onSubmit={handleSubmit}>
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
        label="Create password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button type="submit" className={styles.button} size="l" weight={600}>
        Submit
      </Button>
      <div className={styles.row}>
        <Text>Already registered?</Text>
        <Button
          weight={600}
          className={styles.link}
          onClick={handleNavigateToLogin}
        >
          Sign in
        </Button>
      </div>
    </Form>
  );
};
