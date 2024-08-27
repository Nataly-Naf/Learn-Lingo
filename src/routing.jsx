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
const loader = async ({ params }) => {
  try {
    // Fetch data from the data source
    const result = await fetchData();
    console.log('Fetched data:', result.data);

    // Check if result.data is an array
    if (Array.isArray(result.data)) {
      // Get the teacherId from params as a string
      const teacherIdFromParams = String(params.teacherId);
      console.log('Teacher ID from params (as string):', teacherIdFromParams);

      // Find the teacher with the matching ID
      const foundTeacher = result.data.find(teacher => {
        // Convert teacher.id to string if needed
        const teacherId = String(teacher.id);
        console.log('Teacher ID (converted):', teacherId);
        console.log(teacherId === teacherIdFromParams);

        return teacherId === teacherIdFromParams;
      });

      // Check if teacher was found and return the result
      if (foundTeacher) {
        console.log(foundTeacher);

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
    return null; // Return null in case of an error
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
          // <PrivateRoute element={FavouritesPage} isAuthenticated={user} />
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: '/Learn-Lingo/teachers/:teacherId',
        element: <TeachersCardFull />,
        loader,
        // loader: async ({ params }) => {
        //   const data = await fetchData();
        //   console.log(data.data);
        //   return data.data.find(teacher => teacher.id === params.teacherId);
        // },
      },
    ],
  },
]);
