import NotFoundPage from './components/NotFoundPage';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: '/auth',
      element: <AuthPage/>,
      errorElement: <NotFoundPage/>
    }
  ]);
  return (
    <>
      <RouterProvider router={ router }/>
    </>
  )
}

export default App
