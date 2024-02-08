import { useEffect, useRef } from "react";
import { Clock, MapPin } from "lucide-react";

import { Cart } from "../../components/Cart";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../../components/ui/dialog";
import { Carousel } from "../../components/Carrousel";
import { CardItem } from "../../components/CardItem";

import { categories } from "../../utils/categories";
import { pizzas } from "../../utils/products";
import { drinks } from "../../utils/drinks";

import "./masks.css";

export function Home() {
  const pizzaSectionRef = useRef<HTMLElement | null>(null);
  const bebidasSectionRef = useRef<HTMLElement | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 md:w-full md:flex md:flex-col md:justify-center relative antialiased">
      <Cart />
      <header className="md:flex md:justify-center md:items-center md:flex-col p-5">
        <h1 className="text-4xl font-bold flex justify-center">Pizza Fast</h1>
        <div className="mt-10 flex items-center max-md:flex-col max-md:gap-4 md:flex-col md:gap-2 md:w-1/2">
          <input
            className="shadow p-2 h-12 rounded-lg font-normal text-zinc-800 w-full border-0 focus:outline focus:outline-orange-500"
            type="text"
            name=""
            id=""
            placeholder="Procurar..."
          />
          <div className="flex items-center gap-2 shadow rounded-lg p-2 w-full justify-between bg-white">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-zinc-800">
                  Endereço
                </span>
                <span className="text-xs text-zinc-400">
                  Rua Dom Pedro I, 200, Rio Paranaíba, Minas Gerais
                </span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger className="text-orange-400 font-bold text-xs">
                Ver no mapa
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Horários de atendimento</DialogTitle>
                </DialogHeader>
                <div>10:10 as 20:20</div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2 shadow rounded-lg p-2 w-full justify-between bg-white">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-red-600">Fechado</span>
                <span className="text-xs text-zinc-400">
                  Abre as 10:00 horas.
                </span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger className="text-orange-400 font-bold text-xs">
                Ver os horários
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Horários de atendimento</DialogTitle>
                </DialogHeader>
                <div>10:10 as 20:20</div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Carousel data={categories} />
      </header>
      <main className="p-5 md:flex md:flex-col md:justify-center md:items-center">
        <section ref={pizzaSectionRef} id="pizzas">
          <h1 className="font-bold text-2xl">Pizzas</h1>
          <CardItem data={pizzas} />
        </section>
        <section ref={bebidasSectionRef} className="mt-10" id="bebidas">
          <h1 className="font-bold text-2xl">Bebidas</h1>
          <CardItem data={drinks} />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
