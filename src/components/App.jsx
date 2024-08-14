import { AuthProvider } from 'context/authContext';
import { RouterProvider } from 'react-router';
import { Router } from 'routing';
export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />;
    </AuthProvider>
  );
};
