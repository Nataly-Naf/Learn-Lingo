import { TeachersCardFull } from 'components/TeachersCardFull/TeachersCardFull';
import fetchData from 'fetchData';
import { Layout } from 'layout';
import { ErrorPage } from 'Pages/ErrorPage/ErrorPage';
import { Favorites } from 'Pages/FavouritesPage/FavouritesPage';
import { HomePage } from 'Pages/HomePage/HomePage';
import { TeachersPage } from 'Pages/TeachersPage/TeachersPage';
import { PrivateRoute } from 'PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';
const loader = async ({ params }) => {
  try {
    const result = await fetchData();
    console.log('Fetched data:', result.data);

    if (Array.isArray(result.data)) {
      const teacherIdFromParams = String(params.teacherId);
      console.log('Teacher ID from params (as string):', teacherIdFromParams);

      const foundTeacher = result.data.find(teacher => {
        const teacherId = String(teacher.id);
        console.log('Teacher ID (converted):', teacherId);
        console.log(teacherId === teacherIdFromParams);

        return teacherId === teacherIdFromParams;
      });

      if (foundTeacher) {
        return foundTeacher;
      } else {
        console.error('Teacher not found with ID:', teacherIdFromParams);
        return null;
      }
    } else {
      console.error('Data is not an array or is missing');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

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
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: '/Learn-Lingo/teachers/:teacherId',
        element: <TeachersCardFull />,
        loader,
      },
    ],
  },
]);
