import { useRouteError } from 'react-router';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <p>
        {error.statusText}??{error.message}
      </p>
      <NavLink
        to="/Learn-Lingo/"
        onClick={() => {
          console.log('Clicked');
        }}
      >
        To Home Page
      </NavLink>
    </>
  );
};
