import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { socket } from '../../../lib/socket';
import { Home, Utensils, ClipboardPenIcon, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';

import { TabHome } from './tabs/tab-home';
import { TabProducts } from './tabs/tab-products';
import { TabOrders } from './tabs/tab-orders';
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
			<div className="h-full flex overflow-hidden">
				<div className="shadow-lg w-[15%] h-full grid grid-rows-[max-content_1fr_max-content]">
					<h1 className="p-4 font-bold">PizzaFast</h1>
					<menu className="p-4 flex place-items-center">
						<ul className="flex gap-4 flex-col w-full relative">
							<li
								onClick={() => {
									if (currentTab) {
										setSearchParams((params) => {
											params.delete('tabs');
											return params;
										});
									}
								}}
								className={`text-sm flex items-center gap-2 p-2 w-full font-medium cursor-pointer ${
									currentTab ??
									`after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
								}`}
							>
								<Home size={20} className="text-zinc-800" />
								Inicio
							</li>
							<li
								onClick={() => {
									setSearchParams((params) => {
										params.set('tabs', 'products');
										return params;
									});
								}}
								className={`text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer ${
									currentTab === 'products' &&
									`after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
								}`}
							>
								<Utensils size={20} className="text-zinc-800" />
								Produtos
							</li>
							<li
								onClick={() => {
									setSearchParams((params) => {
										params.set('tabs', 'orders');
										return params;
									});
								}}
								className={`text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer justify-between ${
									currentTab === 'orders' &&
									`after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
								}`}
							>
								<div className="flex items-center gap-2">
									<ClipboardPenIcon size={20} className="text-zinc-800" />
									Pedidos
								</div>
								{notification.length > 0 && (
									<div className="w-3 h-3 text-xs flex justify-center items-center bg-orange-500 p-2 text-white rounded-full">
										{notification.length}
									</div>
								)}
							</li>
							<li
								onClick={() => {
									setSearchParams((params) => {
										params.set('tabs', 'orders');
										return params;
									});
								}}
								className="text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer"
							>
								<ClipboardPenIcon size={20} className="text-zinc-800" />
								Meu plano
							</li>
						</ul>
					</menu>
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
				<main className="mt-10 px-10 overflow-y-auto pb-10 w-full">
					{currentTab === null && <TabHome />}
					{currentTab === 'products' && <TabProducts />}
					{currentTab === 'orders' && <TabOrders />}
				</main>
				<footer></footer>
			</div>
		</>
	);
}
