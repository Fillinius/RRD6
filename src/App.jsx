import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

const MainPage = () => {
  return (
    <>
      <NavLink to='/users'>Users List Page</NavLink>
    </>
  )
}

const App = () => {
  const elements = useRoutes(routes)
  return (
    <div>
      <h1>App Layout</h1>
      <MainPage />
      {elements}
    </div>
  );
}

export default App;