import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary as ErrorBoundaryBase } from 'react-error-boundary';

import { ErrorFallback } from '../error-fallback';

export const ErrorBoundary = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const handleErrorReset = () => {
    navigate(`/`, { replace: false });
  };

  return (
    <ErrorBoundaryBase
      FallbackComponent={ErrorFallback}
      onReset={handleErrorReset}
    >
      {children}
    </ErrorBoundaryBase>
  );
};
