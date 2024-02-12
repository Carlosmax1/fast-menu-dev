import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../../../../components/ui/table';
import { Search } from 'lucide-react';
import { OrderTableFilters } from '../order-table-filters';

export function TabOrders() {
	return (
		<>
			<h1 className="text-4xl font-bold text-zinc-800">Pedidos</h1>
			<div className="mt-10">
				<h2 className="font-medium text-xl">Útimos pedidos</h2>
				<div className="mt-5"></div>
				<div className="mt-5 space-y-1.5">
					<OrderTableFilters />
					<div className="rounded border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[64px]"></TableHead>
									<TableHead className="w-[140px]">Identificador</TableHead>
									<TableHead className="w-[180px]">Realizado há</TableHead>
									<TableHead className="w-[140px]">Status</TableHead>
									<TableHead>Cliente</TableHead>
									<TableHead className="w-[140px]">Total do pedido</TableHead>
									<TableHead className="w-[164px]"></TableHead>
									<TableHead className="w-[132px]"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="w-3 h-3">Ver</TableCell>
									<TableCell className="text-xs">1</TableCell>
									<TableCell className="text-xs">2023-01-01</TableCell>
									<TableCell className="text-xs">Concluido</TableCell>
									<TableCell className="text-xs">Carlos</TableCell>
									<TableCell className="text-xs">20,00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-xs">Ver</TableCell>
									<TableCell className="text-xs">1</TableCell>
									<TableCell className="text-xs">2023-01-01</TableCell>
									<TableCell className="text-xs">Concluido</TableCell>
									<TableCell className="text-xs">Carlos</TableCell>
									<TableCell className="text-xs">20,00</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</>
	);
}
