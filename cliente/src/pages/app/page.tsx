import Lottie from 'lottie-react';
import menuAnimation from '../../animations/menu.json';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel } from '../../components/Carousel';
import { Zap } from 'lucide-react';

export function Home() {
	return (
		<div className="min-h-screen">
			<menu className="md:max-w-[1230px] lg:max-w-[1500px] md:mx-36 mb-auto flex items-center justify-between">
				<img src="/logo.svg" alt="FastMenu Logo" loading="lazy" className="w-52 h-52" />
				<nav>
					<ul className="flex items-center gap-10">
						<li className="font-medium text-zinc-800 text-sm">Planos</li>
						<li className="font-medium text-zinc-800 text-sm">Sobre nós</li>
						<li className="font-medium text-zinc-800 text-sm">Contato</li>
						<button className="bg-orange-500 p-2 w-28 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-400">Login</button>
					</ul>
				</nav>
			</menu>
			<header className="md:max-w-[1230px] lg:max-w-[1500px] md:mx-36 mb-auto mt-10 flex justify-between">
				<div className="md:max-w-[500px] lg:max-w-[700px] flex flex-col">
					<h1 className="font-bold text-zin-800 text-5xl tracking-wide leading-snug max-md:text-center">
						Crie menus personalizados de forma simples e <span className="text-orange-500">eficiente.</span>
					</h1>
					<span className="mt-10 font-normal text-base">Construa cardápios únicos, gerencie seus produtos e otimize a experiência dos seus clientes.</span>
					<button className="bg-orange-500 p-2 w-60 h-10 rounded-lg shadow text-white font-medium hover:bg-orange-400 text-sm mt-10">Comece gratuitamente</button>
				</div>
				<div>
					<Lottie animationData={menuAnimation} loop className="h-[300px] w-[500px]" />
				</div>
			</header>
			<main className="mt-10">
				<section className="mt-20 bg-zinc-100 p-10">
					<div className="flex flex-col justify-center items-center gap-4">
						<h1 className="font-bold text-3xl">Vantagens</h1>
						<span className="text-center text-muted-foreground">Veja o que nós temos de melhor.</span>
					</div>
					<div className="w-full min-h-[50vh] flex justify-center p-4">
						<div className="grid grid-rows-[1fr_1fr_1fr] gap-5">
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
						</div>
						<div className="w-1/2 flex justify-center items-center">
							<img className="h-[600px] w-[50] rounded-lg" src="/garfo.jpg" alt="" loading="lazy" />
						</div>
						<div className="flex flex-col gap-10">
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
							<Card className="w-80 h-fit bg-zinc-50">
								<CardHeader className="h-fit w-fit">
									<CardTitle className="w-max h-max">
										<div className="p-1 flex justify-center items-center rounded bg-orange-500 w-6 h-6">
											<Zap fill="white" className="text-white" size={20} />
										</div>
										<p className="mt-3">Fast</p>
									</CardTitle>
								</CardHeader>
								<CardContent className="h-fit w-fit">
									<span>Lorem ipsum dolor sit amet consectetur adipisic</span>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="mt-20 md:max-w-[1230px] lg:max-w-[1500px] md:mx-36 mb-auto">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-3xl">Relatos</h1>
						<span className="text-muted-foreground text-sm">Veja o que as pessoas acham da gente.</span>
					</div>
					<div>
						<Carousel />
					</div>
				</section>
				<section className="flex justify-center items-center gap-10 mt-20 md:max-w-[1230px] lg:max-w-[1500px] md:mx-36 mb-auto">
					<Card className="shadow bg-transparent">
						<CardHeader>
							<CardTitle>R$ 0.00</CardTitle>
							<CardDescription>Ideal para quem está começando</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Teste</p>
						</CardContent>
						<CardFooter>
							<Button className="w-full shadow">Adiquirir</Button>
						</CardFooter>
					</Card>
					<Card className="shadow bg-transparent">
						<CardHeader>
							<CardTitle>R$ 0.00</CardTitle>
							<CardDescription>Ideal para quem está começando</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Teste</p>
						</CardContent>
						<CardFooter>
							<Button className="w-full shadow">Adiquirir</Button>
						</CardFooter>
					</Card>
				</section>
			</main>
			<footer></footer>
		</div>
	);
}
