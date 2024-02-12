import { Router } from 'express';
import { resend } from '../mail/resend';
import { TestMailSend } from '../mail/templates/teste';

const mailRouter = Router();

mailRouter.get('/sendmail', async (req, res) => {
	await resend.emails
		.send({
			from: 'FastMenu <nicegeek.shop>',
			to: 'carlosjogosbr@gmail.com',
			subject: '[FastMenu] - Olá, mundo!',
			react: TestMailSend(),
		})
		.catch((e) => console.log(e));
	return res.status(200).json({});
});

export { mailRouter };
