import { Navigate } from 'react-router-dom';

import { useAuthUser } from '../../hooks';

type Props = {
  page: JSX.Element;
};

export const AuthRoute = ({ page }: Props) => {
  const { user } = useAuthUser();

  if (user) {
    return <Navigate to="/" />;
  }

  return page;
};
