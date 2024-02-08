import { Loader2 } from 'lucide-react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	isLoading?: boolean;
	children: React.ReactNode;
};

export function Button({ isLoading, children, ...rest }: ButtonProps) {
	return (
		<button {...rest}>
			{isLoading ? (
				<div className="flex justify-center items-center">
					<Loader2 className="animate-spin" />{' '}
				</div>
			) : (
				<>{children}</>
			)}
		</button>
	);
}
