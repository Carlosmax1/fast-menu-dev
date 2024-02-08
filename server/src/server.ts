import express from "express";
import helmet from "helmet";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

import { SocketMiddleware } from "./middlewares/socket.middlware";

import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/user.routes";

const app = express();
const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

io.use(SocketMiddleware).on("connect", (socket) => {
  console.log(`User ${socket.id} connected`);
  socket.on("disconnect", () => {
    console.log(`User ${socket.id} off`);
  });
});

server.listen(3333, () => {
  console.log("Server listen port 3333");
});
