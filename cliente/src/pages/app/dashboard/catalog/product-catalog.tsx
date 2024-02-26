import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, Upload } from 'lucide-react';

export function ProductCatalog() {
	return (
		<>
			<h1 className="max-lg:text-4xl md:text-2xl font-bold text-zinc-800">Cadastre um produto</h1>
			<div className='p-2 rounded-lg bg-zinc-50 border h-14 mt-10 flex items-center'>
				<nav>
					<div className='flex gap-2 items-center'>
						<span className='text-zinc-800 font-medium'>Catalogo</span>
						<ChevronRight size={15} />
						<span className='text-zinc-800 font-medium'>Produtos</span>
					</div>
				</nav>
			</div>
			<form className="grid grid-cols-[2fr_1fr] gap-5">
				<div className="mt-10 border shadow rounded-lg p-4">
					<h2 className="text-zinc-400 text-primary-foreground uppercase">Produto</h2>
					<div className="grid gap-2 mt-5">
						<div className="grid gap-4 mt-4">
							<Label>Nome do produto: </Label>
							<Input placeholder="Nome" type="text" />
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Preço: </Label>
							<Input type="text" placeholder="R$" />
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Peso em gramas (opicional): </Label>
							<Input type="text" placeholder="Grama" />
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Descrição ou ingredientes: </Label>
							<Textarea placeholder="Descrição..."></Textarea>
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Foto(s) do produto:</Label>
							<Label className="w-full border border-dashed h-40 border-zinc-300 rounded-lg flex flex-col gap-2 justify-center items-center cursor-pointer">
								<Upload size={15} className="text-zinc-800" />
								<p className="text-primary-foreground text-zinc-700">
									Arraste ou clique para adicionar as fotos
								</p>
								<span className="font-thin text-xs text-zinc-600">
									* 1080 x 1080 (1:1) recomendado, máximo 2MB por foto
								</span>
								<Input type="file" />
							</Label>
						</div>
					</div>
				</div>
				<section className="grid grid-rows-2">
					<div className="mt-10 border shadow rounded-lg p-4 flex flex-col gap-5 h-fit">
						<h2 className="text-zinc-400 text-primary-foreground uppercase">Publicar produto</h2>
						<div className="grid gap-2">
							<Label>Tipo de publicação: </Label>
							<Select defaultValue="publicar">
								<SelectTrigger>
									<SelectValue />
									<SelectContent>
										<SelectItem value="publicar">Publicar agora</SelectItem>
										<SelectItem value="rascunho">Rascunho</SelectItem>
									</SelectContent>
								</SelectTrigger>
							</Select>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox defaultChecked={true}></Checkbox>
							<Label>Visivel</Label>
						</div>
						<Button>Publicar</Button>
					</div>
					<div className="mt-10 border shadow rounded-lg p-4 h-fit">
						<h2 className="text-zinc-400 text-primary-foreground uppercase">Categoria</h2>
						<div className="grid gap-2 mt-3">
							<Label>Tipo de categoria: </Label>
							<Select defaultValue="pizza">
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pizza">Pizza</SelectItem>
									<SelectItem value="item-1">Item 1</SelectItem>
								</SelectContent>
							</Select>
							<Dialog>
								<DialogTrigger>
									<Button type="button">Criar uma nova categoria</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Crie uma nova categoria</DialogTitle>
									</DialogHeader>
									<form className="grid gap-2 mt-3">
										<Label>Nome da categoria: </Label>
										<Input placeholder="Nome" type="text" />
										<Button className="mt-3">Criar</Button>
									</form>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</section>
			</form>
		</>
	);
}
