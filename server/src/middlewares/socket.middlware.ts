import { Socket } from "socket.io";

function SocketMiddleware(socket: Socket, next: any) {
  const token = socket.handshake.headers.cookie?.split("=")[1];
  if (!token) {
    return next(new Error("Auth error"));
  }
  try {
  } catch (e) {}
  return next();
}

export { SocketMiddleware };
