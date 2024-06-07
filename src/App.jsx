import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './components/NotFoundPage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import HomePage from './pages/HomePage';

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
    },
    {
      path: '/signup',
      element: <SignUp/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: '/signin',
      element: <SignIn/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: '/home',
      element: <HomePage/>,
      errorElement: <NotFoundPage/>
    }
  ]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={ router }/>
      </AuthProvider>
    </>
  )
}

export default App
