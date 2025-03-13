import styled from 'styled-components';
import useUser from '../features/authentication/useUser';

import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // if the user is not authenticated, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  // while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if the user is authenticated, show the children
  if (isAuthenticated) return <div>{children}</div>;
}
