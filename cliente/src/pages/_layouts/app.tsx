import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { Loader2 } from 'lucide-react';

export function AppLayout() {
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	async function checkLogin() {
		await api
			.get('/api/auth/check')
			.then((res) => setIsLoading(false))
			.catch((e) => navigate('/sign-in'));
	}

	useEffect(() => {
		checkLogin();
	}, []);

	return (
		<div className="h-screen bg-zinc-50">
			{isLoading ? (
				<div className="h-full flex justify-center items-center">
					<Loader2 size={50} className="animate-spin" />
				</div>
			) : (
				<Outlet />
			)}
		</div>
	);
}
