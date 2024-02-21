import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { Toaster } from '@/components/ui/sonner';
import { Loader2 } from 'lucide-react';

export function AppLayout() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	async function checkLogin() {
		await api
			.get('/api/auth/check')
			.then((res) => setIsLoading(false))
			.catch((e) => navigate('/'))
			.finally(() => setIsLoading(false));
	}

	useEffect(() => {
		//checkLogin();
	}, []);

	return (
		<div className="h-screen bg-zinc-50">
			{isLoading ? (
				<div className="h-full flex justify-center items-center">
					<Loader2 size={50} className="animate-spin" />
				</div>
			) : (
				<>
					<Outlet />
					<Toaster expand position="bottom-right" />
				</>
			)}
		</div>
	);
}
