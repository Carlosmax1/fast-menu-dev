import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
	email: z.string().email('E-mail inválido.').toLowerCase().trim(),
	password: z.string().min(1, 'O campo senha é obrigatório.').trim(),
});

type Login = z.infer<typeof loginSchema>;

export function Beta() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Login>({
		resolver: zodResolver(loginSchema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<main className="h-full w-full grid grid-cols-2">
			<div className="border-r p-4 bg-zinc-100 grid grid-rows-[max-content_1fr_max-content] shadow-lg rounded-tr-3xl rounded-br-3xl">
				<img loading="lazy" src="/logo.svg" alt="Logo FastMenu" className="w-52" />
				<div></div>
				<span className="text-primary-foreground text-zinc-800">&copy; FastMenu - 2024</span>
			</div>
			<div className="flex flex-col justify-center items-center w-full">
				<h1 className="font-bold text-zinc-800 text-2xl">Bem vindo ao Beta Test</h1>
				<div className="mt-2 flex flex-col gap-2"></div>
				<form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full flex flex-col gap-2 justify-center items-center">
					<div className="w-full flex flex-col gap-2  items-center">
						<Input {...register('email')} placeholder="email" type="email" className="w-1/2" />
						{errors.email && <span className="font-medium text-sm text-red-600 mt-2">{errors.email?.message}</span>}
					</div>
					<div className="w-full flex flex-col gap-2 items-center">
						<Input {...register('password')} placeholder="senha" type="password" className="w-1/2" />
						{errors.password && <span className="font-medium text-sm text-red-600 mt-2">{errors.password?.message}</span>}
					</div>
					<Button className="w-1/2">Login</Button>
				</form>
				<Dialog>
					<DialogTrigger>
						<p className="mt-10 font-medium text-zinc-500 text-sm underline">Quero participar</p>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Adicione seu email</DialogTitle>
							<DialogDescription>Coloque seu melhor e-mail e entraremos em contato quando seu acesso por liberado.</DialogDescription>
						</DialogHeader>
						<form>
							<Input placeholder="Email" type="email" />
						</form>
						<DialogFooter>
							<Button>Participar</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</main>
	);
}
