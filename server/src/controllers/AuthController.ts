import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { z } from 'zod';
import { db } from '../db/prismaClient';
import { GenerateTokenProvider } from '../providers/GenerateTokenProvider';
import { verify } from 'jsonwebtoken';

const authBodySchema = z.object({
	email: z.string().toLowerCase().trim().email(),
	password: z.string().trim().min(1),
});

type AuthBodySchema = z.infer<typeof authBodySchema>;

export class AuthController {
	async handle(request: Request<{}, {}, AuthBodySchema>, response: Response) {
		const body = request.body;
		try {
			const { email, password } = authBodySchema.parse({
				email: body.email,
				password: body.password,
			});
			const user = await db.user.findUnique({
				where: {
					email,
				},
			});

			if (user) {
				const pass = await compare(password, user.password);
				if (!pass) {
					return response.status(400).json({ result: 'Senha ou e-mail inválido' });
				}
				const generateTokenProvider = new GenerateTokenProvider();
				const token = await generateTokenProvider.execute(user.id);
				const currentDate = new Date();
				return response
					.cookie('auth_token', token, {
						path: '/',

						secure: false,
						httpOnly: true,
						expires: new Date(currentDate.setDate(currentDate.getDate() + 1)),
					})
					.status(200)
					.json(token);
			} else {
				return response.status(404).json({});
			}
		} catch (e) {
			console.log(e);
			return response.status(400).json(e);
		}
	}
	async check(request: Request, response: Response) {
		const cookie: string = request.cookies.auth_token;
		if (!cookie) {
			return response.status(400).json({});
		}
		try {
			const { sub } = verify(cookie, process.env.APP_KEY as string);

			const user = await db.user.findUnique({
				where: {
					id: sub as string,
				},
			});
			if (user) {
				return response.status(200).json({
					id: user.id,
					name: user.name,
					email: user.email,
					token: cookie,
				});
			}
		} catch (e) {
			return response.status(401).json({
				result: 'Token inválido ou expirado',
			});
		}
		return response.status(200).json({});
	}
	async logout(request: Request, response: Response) {
		return response.clearCookie('auth_token').status(200).json({});
	}
}
