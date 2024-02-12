import { Utensils } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MonthOrdersAmountCard() {
	const number = 200;

	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="space-y-1">
				<>
					<span className="text-2xl font-bold tracking-tight">
						{number.toLocaleString('pt-BR')}
					</span>
					<p className="text-xs text-muted-foreground">300</p>
				</>
			</CardContent>
		</Card>
	);
}
