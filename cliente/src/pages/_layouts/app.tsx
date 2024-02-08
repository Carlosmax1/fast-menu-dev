import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';

export function AppLayout() {
	const navigate = useNavigate();

	useEffect(() => {
		const interceptorId = api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (isAxiosError(error)) {
					console.log(error);
					const status = error.response?.status;
					const code = error.response?.data.code;

					if (status === 401 && code === 'UNAUTHORIZED') {
						navigate('/sign-in', { replace: true });
					} else {
						throw error;
					}
				}
			}
		);

		return () => {
			api.interceptors.response.eject(interceptorId);
		};
	}, [navigate]);

	return (
		<div className="flex min-h-screen flex-col antialiased bg-zinc-50">
			<Outlet />
		</div>
	);
}
