import { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { motion } from 'framer-motion';

import { Quote } from 'lucide-react';

import './style.css';

export function Carousel() {
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
	}, []);

	return (
		<>
			<div className="container-carousel">
				<motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
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
						<motion.div className="w-auto h-auto pb-4">
							<div className="rounded-md border shadow bg-transparent w-[450px] max-h-[250px] h-fit p-4">
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/carlosmax1.png" />
										</Avatar>
										<div className="flex flex-col gap-1">
											<span className="font-bold text-sm text-orange-500">Carlos Eduardo</span>
											<p className="text-muted-foreground text-sm">PizzaFast CEO</p>
										</div>
									</div>
									<Quote size={50} className="text-zinc-200" fill="#e4e4e7" />
								</div>
								<div className="mt-4">
									<p className="text-sm font-normal text-zinc-400 tracking-wide lea">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit culpa? Molestiae dolorum nisi inventore, itaque quibusdam adipisci eum quas veritatis iure sunt, accusamus
										cumque, omnis aliquam. Fuga, repellendus ratione.
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div className="w-auto h-auto pb-4">
							<div className="rounded-md border shadow bg-transparent w-[450px] max-h-[250px] h-fit p-4">
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/carlosmax1.png" />
										</Avatar>
										<div className="flex flex-col gap-1">
											<span className="font-bold text-sm text-orange-500">Carlos Eduardo</span>
											<p className="text-muted-foreground text-sm">PizzaFast CEO</p>
										</div>
									</div>
									<Quote size={50} className="text-zinc-200" fill="#e4e4e7" />
								</div>
								<div className="mt-4">
									<p className="text-sm font-normal text-zinc-400 tracking-wide lea">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit culpa? Molestiae dolorum nisi inventore, itaque quibusdam adipisci eum quas veritatis iure sunt, accusamus
										cumque, omnis aliquam. Fuga, repellendus ratione.
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div className="w-auto h-auto pb-4">
							<div className="rounded-md border shadow bg-transparent w-[450px] max-h-[250px] h-fit p-4">
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/carlosmax1.png" />
										</Avatar>
										<div className="flex flex-col gap-1">
											<span className="font-bold text-sm text-orange-500">Carlos Eduardo</span>
											<p className="text-muted-foreground text-sm">PizzaFast CEO</p>
										</div>
									</div>
									<Quote size={50} className="text-zinc-200" fill="#e4e4e7" />
								</div>
								<div className="mt-4">
									<p className="text-sm font-normal text-zinc-400 tracking-wide lea">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit culpa? Molestiae dolorum nisi inventore, itaque quibusdam adipisci eum quas veritatis iure sunt, accusamus
										cumque, omnis aliquam. Fuga, repellendus ratione.
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div className="w-auto h-auto pb-4">
							<div className="rounded-md border shadow bg-transparent w-[450px] max-h-[250px] h-fit p-4">
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/carlosmax1.png" />
										</Avatar>
										<div className="flex flex-col gap-1">
											<span className="font-bold text-sm text-orange-500">Carlos Eduardo</span>
											<p className="text-muted-foreground text-sm">PizzaFast CEO</p>
										</div>
									</div>
									<Quote size={50} className="text-zinc-200" fill="#e4e4e7" />
								</div>
								<div className="mt-4">
									<p className="text-sm font-normal text-zinc-400 tracking-wide lea">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit culpa? Molestiae dolorum nisi inventore, itaque quibusdam adipisci eum quas veritatis iure sunt, accusamus
										cumque, omnis aliquam. Fuga, repellendus ratione.
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div className="w-auto h-auto pb-4">
							<div className="rounded-md border shadow bg-transparent w-[450px] max-h-[250px] h-fit p-4">
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/carlosmax1.png" />
										</Avatar>
										<div className="flex flex-col gap-1">
											<span className="font-bold text-sm text-orange-500">Carlos Eduardo</span>
											<p className="text-muted-foreground text-sm">PizzaFast CEO</p>
										</div>
									</div>
									<Quote size={50} className="text-zinc-200" fill="#e4e4e7" />
								</div>
								<div className="mt-4">
									<p className="text-sm font-normal text-zinc-400 tracking-wide lea">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit culpa? Molestiae dolorum nisi inventore, itaque quibusdam adipisci eum quas veritatis iure sunt, accusamus
										cumque, omnis aliquam. Fuga, repellendus ratione.
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
