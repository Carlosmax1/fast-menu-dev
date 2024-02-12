import { Request, Response } from 'express';
import { z } from 'zod';
import { hash } from 'bcrypt';

import { db } from '../db/prismaClient';

const createUserBodySchema = z
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

type UserBody = z.infer<typeof createUserBodySchema>;

export class UserController {
	async create(request: Request<{}, {}, UserBody>, response: Response) {
		const body = request.body;
		try {
			const { CPF, email, lastName, name, password, confirmPassword, tel } =
				createUserBodySchema.parse(body);

			const user = await db.user.findFirst({
				where: {
					OR: [
						{
							email,
						},
						{
							CPF,
						},
					],
				},
			});

			if (user) {
				return response.status(400).json({
					result: 'E-mail ou CPF já cadastrados.',
				});
			}

			const hashPassword = await hash(password, 10);

			await db.user.create({
				data: {
					CPF,
					email,
					lastName,
					password: hashPassword,
					name,
					tel,
				},
			});

			return response.status(200).json({});
		} catch (e) {
			return response.status(400).json(e);
		}
	}
}
