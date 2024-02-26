import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';
import { Dashboard } from './pages/app/dashboard/page';
import { SignIn } from './pages/app/auth/sign-in';
import { SignUp } from './pages/app/auth/sign-up';
import { Home } from './pages/app/page';
import { Beta } from './pages/app/beta';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Beta />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
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
