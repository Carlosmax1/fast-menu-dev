import { Star } from "lucide-react";
import { pizzas } from "../../utils/products";

type CardItemProps = {
  data: {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
  }[];
};

export function CardItem({ data }: CardItemProps) {
  return (
    <>
      {data.map((item) => (
        <>
          <div className="mt-5 md:max-w-[500px]">
            <div className="w-fit border shadow rounded grid grid-cols-[1fr_1fr] h-fit gap-3">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="rounded-tl rounded-bl h-full w-full aspect-square border-r border-dashed"
              />
              <div className="p-2 flex flex-col gap-1 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base text-orange-500">
                    {item.name}
                  </p>
                  <span className="font-normal text-xs">
                    {item.description}
                  </span>
                  <span className="font-bold text-lg mt-3">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </span>
                </div>
                <div className="mt-2 flex gap-1 items-center">
                  <div className="p-1 rounded bg-orange-500">
                    <Star fill="white" className="text-white" size={12} />
                  </div>
                  <div className="p-1 rounded bg-orange-500">
                    <Star fill="white" className="text-white" size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
