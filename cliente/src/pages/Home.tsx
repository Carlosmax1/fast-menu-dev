import Lottie from "lottie-react";
import menuAnimation from "../animations/menu.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="min-h-screen">
      <menu className="md:max-w-[1230px] md:mx-36 mb-auto flex items-center justify-between">
        <img
          src="/logo.svg"
          alt="FastMenu Logo"
          loading="lazy"
          className="w-52 h-52"
        />
        <nav>
          <ul className="flex items-center gap-10">
            <li className="font-medium text-zinc-800 text-sm">Planos</li>
            <li className="font-medium text-zinc-800 text-sm">Sobre nós</li>
            <li className="font-medium text-zinc-800 text-sm">Contato</li>
            <button className="bg-orange-500 p-2 w-28 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-400">
              Login
            </button>
          </ul>
        </nav>
      </menu>
      <header className="md:max-w-[1230px] md:mx-36 mb-auto mt-10 flex justify-between">
        <div className="max-w-[500px] flex flex-col">
          <h1 className="font-bold text-zin-800 text-5xl tracking-wide leading-snug max-md:text-center">
            Crie menus personalizados de forma simples e{" "}
            <span className="text-orange-500">eficiente.</span>
          </h1>
          <span className="mt-10 font-normal text-base">
            Construa cardápios únicos, gerencie seus produtos e otimize a
            experiência dos seus clientes.
          </span>
          <button className="bg-orange-500 p-2 w-60 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-400 text-sm mt-10">
            Comece gratuitamente
          </button>
        </div>
        <div>
          <Lottie
            animationData={menuAnimation}
            loop
            className="h-[300px] w-[500px]"
          />
        </div>
      </header>
      <main className="md:max-w-[1230px] md:mx-36 mb-auto mt-10">
        <section className="flex justify-center items-center gap-10">
          <Card>
            <CardHeader>
              <CardTitle>R$ 0.00</CardTitle>
              <CardDescription>Ideal para quem está começando</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Teste</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adiquirir</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>R$ 0.00</CardTitle>
              <CardDescription>Ideal para quem está começando</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Teste</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adiquirir</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
