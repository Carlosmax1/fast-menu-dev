import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Cart() {
  return (
    <div className="absolute top-4 right-4">
      <Sheet>
        <SheetTrigger>
          <div className="h-10 w-10 rounded-full bg-orange-500 justify-center items-center flex relative">
            <ShoppingCart size={20} className="text-zinc-100" />
            <div className="absolute h-4 w-4 p-1 font-bold rounded-full text-xs bg-zinc-100 flex justify-center items-center top-[-7px] right-0">
              1
            </div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
            <SheetDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              asperiores ex nobis enim, possimus voluptatibus tempora voluptates
              a ducimus, eius, maxime explicabo. Soluta ipsa dolorum atque
              veniam, facere est saepe.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>Comprar</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
