import { useForm } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/ui/input';
import { z } from 'zod';

const registerSchema = z.object({
	name: z
		.string()
		.min(3, 'Minimo 3 caracteres')
		.trim()
		.transform((name) => {
			return name
				.split(' ')
				.map((word) => word[0].toUpperCase().concat(word.substring(1)))
				.join(' ');
		}),
	lastName: z
		.string()
		.min(3, 'Minimo 3 caracteres')
		.trim()
		.transform((lastname) => {
			return lastname
				.split(' ')
				.map((word) => word[0].toUpperCase().concat(word.substring(1)))
				.join(' ');
		}),
	email: z.string().email('E-mail inválido.').toLowerCase().trim(),
});

export function SignUp() {
	return (
		<div className="min-h-[50%] w-1/4 p-4 rounded-md shadow-lg bg-zinc-50 flex flex-col justify-center items-center">
			<h1 className="text-xl font-bold">Crie sua conta</h1>
			<form className="mt-10 grid gap-3">
				<div className="flex items-center gap-2">
					<div className="flex-1">
						<Input placeholder="Nome" type="text" />
					</div>
					<div className="flex-1">
						<Input placeholder="Sobrenome" type="text" />
					</div>
				</div>
				<div>
					<Input placeholder="E-mail" type="email" />
				</div>
				<div>
					<Input placeholder="CPF ou CNPJ" />
				</div>
				<div>
					<Input placeholder="Telefone" />
				</div>
				<div>
					<Input placeholder="Senha" type="password" />
				</div>
				<div>
					<Input placeholder="Confirmar senha" type="password" />
				</div>
				<div className="flex justify-center items-center mt-4">
					<Button className="bg-orange-500 p-2 w-52 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-600 text-sm disabled:bg-gray-400">Criar conta</Button>
				</div>
			</form>
		</div>
	);
}
