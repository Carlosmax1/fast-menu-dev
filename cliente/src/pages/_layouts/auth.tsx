import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
	return (
		<div className="h-screen antialiased flex justify-center items-center">
			<Outlet />
			<Toaster position="bottom-left" />
		</div>
	);
}
