import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/utils/categories";
import { Pizza, Beef, Beer } from "lucide-react";

import "./carousel.css";

type CarouselProps = {
  data: typeof categories;
};

export function Carousel({ data }: CarouselProps) {
  const [width, setWidth] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  function handleItemClick(id: number) {
    setSelected(id);
    const item = data.find((item) => item.id === id);
    const name = item?.name.toLowerCase().replace(/[^\w\s]/gi, (match) => {
      if (match === "ç") {
        return "c";
      } else {
        return "";
      }
    });
    if (name) {
      setSearchParams((params) => {
        params.set("categoria", name);
        return params;
      });
    }
  }

  function setIcon(name: string, id: number): React.ReactElement | undefined {
    const nameLow = name.toLowerCase();
    if (nameLow.includes("pizza")) {
      return (
        <Pizza className={`${selected === id && "text-zinc-100"}`} size={35} />
      );
    }
    if (nameLow.includes("porções")) {
      return (
        <Beef className={`${selected === id && "text-zinc-100"}`} size={35} />
      );
    }
    if (nameLow.includes("bebida")) {
      return (
        <Beer className={`${selected === id && "text-zinc-100"}`} size={35} />
      );
    }
  }

  return (
    <>
      <div className="container-carousel">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            {data.map((item) => (
              <motion.div
                onClick={() => handleItemClick(item.id)}
                key={item.id}
                className="w-auto h-auto pb-4"
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`h-20 w-20 rounded-2xl p-2  border font-normal flex justify-center items-center ${
                      selected === item.id
                        ? "bg-orange-400 border-0"
                        : "bg-gray-100"
                    }`}
                  >
                    {setIcon(item.name, item.id)}
                  </div>
                  <span
                    className={`text-sm ${
                      selected === item.id ? "font-bold" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
