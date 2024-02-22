import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { socket } from '../../../lib/socket';
import { Home, Utensils, ClipboardPenIcon, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';

import { TabHome } from './tabs/tab-home';
import { TabProducts } from './tabs/tab-products';
import { TabOrders } from './tabs/tab-orders';
import { DashboardMenu } from '../../../components/DashboardMenu';
import { ProductCatalog } from './catalog/product-catalog';
//import { TopLoadingBar } from '@/components/TopLoadingBar';

export function Dashboard() {
	const { pathname } = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const [notification, setNotification] = useState<any[]>([]);
	const notificationAudioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (pathname === '/dashboard') {
			socket.connect();
		}
		function onNotification(data: any) {
			setNotification((old) => [...old, data]);
			toast.success('Você recebeu um novo pedido', {
				description: data.content,
			});
			if (notificationAudioRef.current) {
				notificationAudioRef.current.play();
			}
		}
		socket.on('notification', onNotification);
		return () => {
			socket.off('notification', onNotification);
			socket.disconnect();
		};
	}, [pathname, socket]);

	const currentTab = searchParams.get('tabs');

	useEffect(() => {
		const handleFocus = () => {
			if (currentTab === 'orders') {
				setNotification([]);
			}
		};

		window.addEventListener('focus', handleFocus);

		return () => {
			window.removeEventListener('focus', handleFocus);
		};
	}, [currentTab]);

	return (
		<>
			<audio ref={notificationAudioRef} src="/sound.mp3" preload="metadata" />
			<div className="max-h-full flex overflow-hidden">
				<div className="bg-transparent w-[15%] h-full grid grid-rows-[max-content_1fr_max-content]">
					<h1 className="p-4 font-bold">PizzaFast</h1>
					<DashboardMenu />
					<div className="pb-4">
						<ul>
							<li className="text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer">
								<Settings size={20} className="text-zinc-800" />
								Configurações
							</li>
							<li className="text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer">
								<LogOut size={20} className="text-zinc-800" />
								Sair
							</li>
						</ul>
					</div>
				</div>
				<main className="mt-10 px-10 overflow-y-auto pb-10 pt-10 w-full bg-white rounded-xl border mr-10 shadow-lg">
					{currentTab === null && <TabHome />}
					{currentTab === 'products' && <TabProducts />}
					{currentTab === 'orders' && <TabOrders />}
					{currentTab === 'product' && <ProductCatalog />}
				</main>
				<footer></footer>
			</div>
		</>
	);
}
