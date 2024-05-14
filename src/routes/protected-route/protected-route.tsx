import { Navigate } from 'react-router-dom';

import { useAuthUser } from '../../hooks';

type Props = {
  page: JSX.Element;
};

export const ProtectedRoute = ({ page }: Props) => {
  const { user, userChecked } = useAuthUser();

  if (!userChecked) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return page;
};
