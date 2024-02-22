import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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

export function ProductCatalog() {
	return (
		<>
			<h1 className="max-lg:text-4xl md:text-2xl font-bold text-zinc-800">Cadastre um produto</h1>
			<form className="grid grid-cols-[2fr_1fr] gap-5">
				<div className="mt-10 border shadow rounded-lg p-4">
					<h2 className="text-zinc-400 text-primary-foreground uppercase">Produto</h2>
					<div className="grid gap-2 mt-5">
						<div className="grid gap-4 mt-4">
							<Label>Nome do produto: </Label>
							<Input type="text" />
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Descrição ou ingredientes: </Label>
							<Textarea></Textarea>
						</div>
						<div className="grid gap-4 mt-4">
							<Label>Foto do produto: </Label>
							<Input type="file" />
						</div>
					</div>
				</div>
				<section className="grid grid-rows-2">
					<div className="mt-10 border shadow rounded-lg p-4 flex flex-col gap-5 max-h-fit">
						<h2 className="text-zinc-300 text-primary-foreground uppercase">Publicar produto</h2>
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
						</div>
					</div>
				</section>
			</form>
		</>
	);
}
