import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cookieParser from 'cookie-parser';

import { SocketMiddleware } from './middlewares/socket.middlware';

import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { mailRouter } from './routes/mail.routes';

const app = express();
const server = createServer(app);

export const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173',
		credentials: true,
	},
});

app.use(express.json());
app.use(helmet());
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
);
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/mail', mailRouter);
app.get('/api/teste', (req, res) => {
	const notification = {
		id: crypto.randomUUID(),
		content: 'Notificação teste',
		createAt: new Date(Date.now()).toISOString(),
	};
	io.emit('notification', notification);
	return res.status(200).json({});
});

io.use(SocketMiddleware).on('connect', (socket) => {
	console.log(`User ${socket.id} connected`);
	socket.on('disconnect', () => {
		console.log(`User ${socket.id} off`);
	});
});

process.on('SIGINT', () => {
	console.log('Ctrl-C was pressed');
	process.exit();
});

server.listen(3333, () => {
	console.log('Server listen port 3333');
});
