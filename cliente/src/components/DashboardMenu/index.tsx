import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Home, Utensils, ClipboardPenIcon, AlignJustify, ChevronDown } from 'lucide-react';

export function DashboardMenu() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notification, setNotification] = useState<any[]>([]);
	const [meunOpen, setMenuOpen] = useState<boolean>(false);

	const currentTab = searchParams.get('tabs');

	return (
		<>
			<menu className="p-4 flex flex-col">
				<ul className="flex flex-col relative">
					<li
						onClick={() => {
							if (currentTab) {
								setSearchParams((params) => {
									params.delete('tabs');
									return params;
								});
							}
						}}
						className={`text-sm flex items-center gap-2 p-2 w-full font-medium cursor-pointer hover:bg-orange-400/10 rounded-lg ${
							currentTab ?? `after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
						}`}
					>
						<Home size={20} className="text-zinc-800" />
						Inicio
					</li>
				</ul>
				<div className="grid">
					<span className="text-primary-foreground text-zinc-400 text-xs">Vendas</span>
					<div onClick={() => setMenuOpen(old => !old)} className={`${meunOpen && `bg-orange-200 pr-2 rounded-lg`}`}>
						<div className="w-full flex justify-between items-center">
							<span
								className={`text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer ${
									currentTab === 'menu' && `after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
								}`}
							>
								{' '}
								<AlignJustify size={20} className="text-zinc-800" />
								Cardápio
							</span>
							<ChevronDown size={15} className="text-zinc-800" />
						</div>
						{meunOpen && 
						<ul className="ml-5 flex flex-col gap-2">
							<li className="text-xs font-medium text-zinc-800 p-1">Produtos</li>
							<li className="text-xs font-medium text-zinc-800 p-1">Categorias</li>
						</ul> }
					
					</div>
				</div>
				<ul className="flex gap-4 flex-col w-full relative">
					<li
						onClick={() => {
							setSearchParams((params) => {
								params.set('tabs', 'products');
								return params;
							});
						}}
						className={`text-sm font-medium text-zinc-800 flex items-center gap-2 p-2 w-full cursor-pointer ${
							currentTab === 'products' && `after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
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
							currentTab === 'orders' && `after:content-[''] after:absolute after:h-6 after:w-1 after:bg-orange-500 after:left-[-15px] after:rounded-b-md after:rounded-t-md`
						}`}
					>
						<div className="flex items-center gap-2">
							<ClipboardPenIcon size={20} className="text-zinc-800" />
							Pedidos
						</div>
						{notification.length > 0 && <div className="w-3 h-3 text-xs flex justify-center items-center bg-orange-500 p-2 text-white rounded-full">{notification.length}</div>}
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
		</>
	);
}
