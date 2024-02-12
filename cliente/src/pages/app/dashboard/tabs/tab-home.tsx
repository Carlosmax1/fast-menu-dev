import { DayOrdersAmountCard } from '../day-orders-amount-card';
import { MonthCanceledOrdersAmountCard } from '../month-canceled-orders-amount-card';
import { MonthOrdersAmountCard } from '../month-orders-amount-card';
import { MonthRevenueCard } from '../month-revenue-card';
import { PopularProductsChart } from '../popular-products-chart';
import { RevenueChart } from '../revenue-chart';

export function TabHome() {
	return (
		<>
			<h1 className="text-4xl font-bold text-zinc-800">Dashboard</h1>
			<div className="grid grid-cols-4 gap-4 mt-10">
				<MonthRevenueCard />
				<MonthOrdersAmountCard />
				<DayOrdersAmountCard />
				<MonthCanceledOrdersAmountCard />
			</div>
			<div className="mt-10 grid grid-cols-9 gap-4">
				<RevenueChart />
				<PopularProductsChart />
			</div>
		</>
	);
}
