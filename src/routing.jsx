import { TeachersCardFull } from 'components/TeachersCardFull/TeachersCardFull';
import fetchData from 'fetchData';
import { Layout } from 'layout';
import { ErrorPage } from 'Pages/ErrorPage/ErrorPage';
import { Favorites } from 'Pages/FavouritesPage/FavouritesPage';
import { HomePage } from 'Pages/HomePage/HomePage';
import { TeachersPage } from 'Pages/TeachersPage/TeachersPage';
import { PrivateRoute } from 'PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';
// const user = useAuth();
export const Router = createBrowserRouter([
  {
    path: '/Learn-Lingo/',
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/Learn-Lingo/teachers',
        element: <TeachersPage />,
      },
      {
        path: '/Learn-Lingo/favourites',
        element: (
          // <PrivateRoute element={FavouritesPage} isAuthenticated={user} />
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: '/Learn-Lingo/teachers/:teacherId',
        element: <TeachersCardFull />,
        loader: async ({ params }) => {
          const data = await fetchData();
          return data.find(teacher => teacher.id === params.teacherId);
        },
      },
    ],
  },
]);
