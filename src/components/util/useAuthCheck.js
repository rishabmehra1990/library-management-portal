import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthCheck = (authCheckUrl, redirectTo = '/') => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(authCheckUrl, {
          credentials: 'include',
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          navigate(redirectTo);
        }
      } catch (error) {
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [authCheckUrl, redirectTo, navigate]);

  return { isAuthenticated, isLoading };
};
