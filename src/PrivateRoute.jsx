import { useAuth } from 'context/authContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    alert('Please log in');
    return <Navigate to="/Learn-Lingo/" replace />;
  }

  return children;
};
