import { io } from "socket.io-client";

const socket = io("http://localhost:3333", {
  autoConnect: false,
  timeout: 10000,
  withCredentials: true,
});

export { socket };
