import { api } from "./api/axios";
import { socket } from "./socket/config";

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    function onConnect() {
      console.log("Entrou");
    }
    socket.on("connect", onConnect);
    return () => {
      socket.off("connect", onConnect);
      socket.disconnect();
    };
  }, []);

  async function login() {
    const data = {
      user: "Carlos",
      password: "carlos123",
    };
    await api.post("/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <button onClick={() => socket.connect()}>Conectar</button>
      <button onClick={() => socket.disconnect()}>Desconectar</button>
      <button onClick={() => login()}>Login</button>
    </div>
  );
}
