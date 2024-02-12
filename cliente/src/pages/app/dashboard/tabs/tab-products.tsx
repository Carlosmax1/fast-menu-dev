import { Search } from 'lucide-react';

export function TabProducts() {
	return (
		<>
			<div className="w-full">
				<h1 className="text-4xl font-bold text-zinc-800">Produtos</h1>
				<div className="mt-10 flex items-center justify-between flex-1 gap-10 w-full">
					<div className="bg-white flex items-center gap-2 rounded flex-1 p-2 shadow w-full">
						<Search size={15} className="text-zinc-400" />
						<input
							className="p-1 outline-none border-0 bg-transparent font-normal text-zinc-800 flex-1"
							placeholder="Pesquisar..."
							type="text"
						/>
					</div>
					<button className="p-1 rounded shadow-lg bg-orange-500 text-sm h-11 text-white font-medium w-32 hover:bg-orange-400">
						Novo produto
					</button>
				</div>
			</div>
		</>
	);
}
