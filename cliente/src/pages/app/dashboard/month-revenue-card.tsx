import { DollarSign } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MonthRevenueCard() {
	const number = 100;

	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
				<DollarSign className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<>
					<span className="text-2xl font-bold tracking-tight">
						{number.toLocaleString('pt-BR', {
							currency: 'BRL',
							style: 'currency',
						})}
					</span>
					<p className="text-xs text-muted-foreground text-emerald-500">+ 200</p>
				</>
			</CardContent>
		</Card>
	);
}