import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../lib/axios';
import { toast } from 'sonner';
import { Button } from '../../../components/Button';

const loginSchema = z.object({
	email: z.string().email('E-mail inválido.').toLowerCase().trim(),
	password: z.string().min(1, 'O campo senha é obrigatório.').trim(),
});

type Login = z.infer<typeof loginSchema>;

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Login>({
		resolver: zodResolver(loginSchema),
	});

	const [isLoading, setIsLoading] = useState(false);

	async function loginUser(data: Login) {
		setIsLoading(true);
		await api
			.post('api/auth/login', data)
			.then((res) => console.log(res.status))
			.catch((e) => {
				console.log(e);
				if (e.response.status === 404) {
					toast.error('Usuário não existente.', {
						description: e.request.data,
						action: {
							label: 'X',
							onClick: () => {},
						},
					});
				}
			})
			.finally(() => setIsLoading((old) => !old));
	}

	return (
		<div className="w-[60%] h-[65%] rounded-lg border grid grid-cols-2 bg-zinc-50 relative">
			<div className="flex justify-center items-center flex-col p-5">
				<img className="w-32 h-32 absolute top-0 left-5" src="/logo.svg" alt="FastMenu Logo" loading="lazy" />
				<h1 className="font-bold text-2xl">Login</h1>
				<form onSubmit={handleSubmit(loginUser)} className="mt-10 flex flex-col w-[80%] gap-4 justify-center items-center">
					<div className="w-full h-full flex flex-col">
						<Input {...register('email')} type="email" placeholder="email" className={`${errors?.email && 'outline outline-red-600'}`} />
						{errors.email?.message && <span className="font-medium text-sm text-red-600 mt-2">{errors.email?.message}</span>}
					</div>
					<div className="w-full h-full flex flex-col">
						<Input {...register('password')} placeholder="Senha" type="password" className={`${errors?.password && 'outline outline-red-600'}`} />
						{errors.password?.message && <span className="font-medium text-sm text-red-600 mt-2">{errors.password?.message}</span>}
					</div>
					<Button
						disabled={isLoading}
						isLoading={isLoading}
						type="submit"
						className="bg-orange-500 p-2 w-52 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-400 text-sm disabled:bg-gray-400"
					>
						Login
					</Button>
					<Button type="button" className="bg-transparent outline outline-orange-500 outline-1 p-2 w-52 h-10 rounded-lg shadow text-black font-medium text-sm">
						Crie sua conta
					</Button>
				</form>
			</div>
			<div className="w-full h-full bg-[url(/garfo.jpg)] bg-cover bg-center"></div>
		</div>
	);
}
