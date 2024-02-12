import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { socket } from '../../../lib/socket';
import { Home, Utensils, ClipboardPenIcon, Settings, LogOut } from 'lucide-react';

import { TabHome } from './tabs/tab-home';
import { TabProducts } from './tabs/tab-products';
import { TabOrders } from './tabs/tab-orders';
//import { TopLoadingBar } from '@/components/TopLoadingBar';

export function Dashboard() {
	const { pathname } = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (pathname === '/dashboard') {
			socket.connect();
		}
		return () => {
			socket.disconnect();
		};
	}, [pathname]);

	const currentTab = searchParams.get('tabs');

	return (
		<>
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
								className={`text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer ${
									currentTab === 'orders' &&
									`after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
								}`}
							>
								<ClipboardPenIcon size={20} className="text-zinc-800" />
								Pedidos
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
