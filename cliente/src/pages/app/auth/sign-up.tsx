import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../lib/axios';
import { toast } from 'sonner';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/ui/input';
import { useNavigate } from 'react-router-dom';

const registerSchema = z
	.object({
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
		CPF: z
			.string()
			.min(1, 'Campo obrigatório')
			.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
			.refine((CPF) => {
				let cpf = CPF.replace(/\D/g, '');
				if (cpf.length !== 11 || !cpf.split('').every((c) => c === cpf[0])) {
					let soma = 0;
					let resto;
					for (let i = 1; i <= 9; i++) {
						soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
					}
					resto = (soma * 10) % 11;
					if (resto === 10 || resto === 11) resto = 0;
					if (resto !== parseInt(cpf.substring(9, 10))) return false;
					soma = 0;
					for (let i = 1; i <= 10; i++) {
						soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
					}
					resto = (soma * 10) % 11;
					if (resto === 10 || resto === 11) resto = 0;
					if (resto !== parseInt(cpf.substring(10, 11))) return false;
					return true;
				} else {
					return false;
				}
			}, 'CPF inválido'),
		tel: z
			.string()
			.min(1, 'Campo obrigatório')
			.max(15)
			.regex(/^(\(\d{2}\)\s?|\d{2}\s)?(\d{4,5}-\d{4}|\d{4}-\d{4})$/, 'Telefone inválido.'),
		password: z.string().min(1, 'Campo obrigátorio').trim(),
		confirmPassword: z.string().min(1, 'Campo obrigátorio').trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'As senhas são diferentes.',
	});

type RegisterData = z.infer<typeof registerSchema>;

export function SignUp() {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<RegisterData>({
		resolver: zodResolver(registerSchema),
	});

	const formatCPF = (cpf: string): string => {
		cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
		cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
		cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
		cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
		return cpf;
	};

	const formatPhoneNumber = (phoneNumber: string) => {
		phoneNumber = phoneNumber.replace(/\D/g, ''); // Remove caracteres não numéricos
		phoneNumber = phoneNumber.replace(/^(\d{2})(\d)/g, '($1) $2'); // Adiciona o DDD entre parênteses
		phoneNumber = phoneNumber.replace(/(\d{4,5})(\d)/, '$1-$2');
		console.log(phoneNumber, phoneNumber.length); // Adiciona o hífen entre o número de telefone
		return phoneNumber;
	};

	const nav = useNavigate();

	async function onRegister(data: RegisterData) {
		await api
			.post('/api/user', data)
			.then((res) => {
				if (res.status === 200) {
					nav('/sign-in');
				}
			})
			.catch((e) => {
				//				console.log(e.response);
				toast.error('Erro', {
					description: e.response.data.result,
				});
			});
	}

	return (
		<div className="min-h-[50%] w-1/4 p-4 rounded-md shadow-lg bg-zinc-50 flex flex-col justify-center items-center">
			<h1 className="text-xl font-bold">Crie sua conta</h1>
			<h2 className="text-xs font-normal mt-1">É rapidinho!</h2>
			<form onSubmit={handleSubmit(onRegister)} className="mt-10 grid gap-3">
				<div className="flex items-center gap-2">
					<div className="flex-1">
						<Input {...register('name')} placeholder="Nome" type="text" />
						{errors.name?.message && (
							<span className="mt-2 font-medium text-red-600 text-sm">{errors.name.message}</span>
						)}
					</div>
					<div className="flex-1">
						<Input {...register('lastName')} placeholder="Sobrenome" type="text" />
						{errors.lastName?.message && (
							<span className="mt-2 font-medium text-red-600 text-sm">
								{errors.lastName.message}
							</span>
						)}
					</div>
				</div>
				<div>
					<Input {...register('email')} placeholder="E-mail" type="email" />
					{errors.email?.message && (
						<span className="mt-2 font-medium text-red-600 text-sm">{errors.email.message}</span>
					)}
				</div>
				<div>
					<Controller
						name="CPF"
						control={control}
						render={({ field }) => (
							<Input
								maxLength={14}
								{...field}
								onChange={(e) => {
									const { value } = e.target;
									field.onChange(formatCPF(value));
								}}
								placeholder="CPF ou CNPJ"
							/>
						)}
					/>
					{errors.CPF?.message && (
						<span className="mt-2 font-medium text-red-600 text-sm">{errors.CPF.message}</span>
					)}
				</div>
				<div>
					<Controller
						name="tel"
						control={control}
						render={({ field }) => (
							<Input
								maxLength={15}
								{...field}
								onChange={(e) => {
									const { value } = e.target;
									field.onChange(formatPhoneNumber(value));
								}}
								placeholder="Telefone"
							/>
						)}
					/>
					{errors.tel?.message && (
						<span className="mt-2 font-medium text-red-600 text-sm">{errors.tel.message}</span>
					)}
				</div>
				<div>
					<Input {...register('password')} placeholder="Senha" type="password" />
					{errors.password?.message && (
						<span className="mt-2 font-medium text-red-600 text-sm">{errors.password.message}</span>
					)}
				</div>
				<div>
					<Input {...register('confirmPassword')} placeholder="Confirmar senha" type="password" />
					{errors.confirmPassword?.message && (
						<span className="mt-2 font-medium text-red-600 text-sm">
							{errors.confirmPassword.message}
						</span>
					)}
				</div>
				<div className="flex justify-center items-center mt-4">
					<Button className="bg-orange-500 p-2 w-52 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-600 text-sm disabled:bg-gray-400">
						Criar conta
					</Button>
				</div>
			</form>
		</div>
	);
}
