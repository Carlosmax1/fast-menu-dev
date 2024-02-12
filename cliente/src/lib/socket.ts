import { io } from 'socket.io-client';

export const socket = io('http://localhost:3333', {
	withCredentials: true,
	autoConnect: false,
	timeout: 100000,
});
