import { useAuthCheck } from './useAuthCheck';

const ProtectedRoute = ({ Component, redirectTo = '/', authCheckUrl }) => {
  const { isAuthenticated, isLoading } = useAuthCheck(authCheckUrl, redirectTo);

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoute;
