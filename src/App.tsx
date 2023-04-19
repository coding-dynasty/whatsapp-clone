import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Login from './components/Account/Login';
import './App.scss';
import Home from './components/Chat/Home';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/chat',
    element: (
      <div className='App'>
        <Home />
      </div>
    ),
  },
]);
