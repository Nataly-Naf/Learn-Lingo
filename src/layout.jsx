import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* <Header /> */}
      <Outlet></Outlet>
    </div>
  );
};
