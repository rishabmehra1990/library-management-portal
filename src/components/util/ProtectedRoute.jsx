import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({
  children,
  authCheckUrl,
  redirectTo
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(authCheckUrl, {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setIsAuth(true);
        } else {
          navigate(redirectTo);
        }
      })
      .catch(() => {
        navigate(redirectTo);
      })
      .finally(() => setLoading(false));
  }, [authCheckUrl, redirectTo, navigate]);

  if (loading) return <div>Loading...</div>;

  return isAuth ? children : null;
}

export default ProtectedRoute
