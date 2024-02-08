import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { SignIn } from './pages/app/auth/sign-in';
import { SignUp } from './pages/app/auth/sign-up';
import { Home } from './pages/app/page';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				path: '/sign-in',
				element: <SignIn />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
		],
	},
]);

export { routes };
