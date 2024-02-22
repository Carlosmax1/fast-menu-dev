import {
	Dialog,
	DialogContent,
	DialogDescription,
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
import { Search } from 'lucide-react';

export function TabStore() {
	return (
		<>
			<div className="w-full">
				<h1 className="text-4xl font-bold text-zinc-800">Minha loja</h1>
				<div className="mt-10 flex items-center justify-between flex-1 gap-10 w-full">
					<div className="bg-white flex items-center gap-2 rounded flex-1 p-2 shadow w-full">
						<Search size={15} className="text-zinc-400" />
						<input
							className="p-1 outline-none border-0 bg-transparent font-normal text-zinc-800 flex-1"
							placeholder="Pesquisar..."
							type="text"
						/>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<button className="p-1 rounded shadow-lg bg-orange-500 text-sm h-11 text-white font-medium w-32 hover:bg-orange-400">
								Cria nova loja
							</button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Crie sua loja</DialogTitle>
								<DialogDescription>Crie sua loja aqui e coloque ela no ar.</DialogDescription>
							</DialogHeader>
							<div>
								<form className="grid gap-2">
									<Label>Nome: </Label>
									<Input type="text" />
									<Label>CNPJ: </Label>
									<Input type="text" />
									<Label>Telefone da loja: </Label>
									<Input type="tel" />
									<Label>Uma breve descrição da loja: </Label>
									<Textarea placeholder="Escreva aqui" />
									<Label>Tipo de loja: </Label>
									<Select defaultValue="default">
										<SelectTrigger>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="default">Selecionar</SelectItem>
											<SelectItem value="padaria">Padaria</SelectItem>
											<SelectItem value="pizzaria">Pizzaria</SelectItem>
											<SelectItem value="restaurante">Restaurante</SelectItem>
											<SelectItem value="cafeteria">Cafeteria</SelectItem>
											<SelectItem value="lanchonete">Lanchonete</SelectItem>
											<SelectItem value="sorveteria">Sorveteria</SelectItem>
											<SelectItem value="churrascaria">Churrascaria</SelectItem>
											<SelectItem value="hamburgueria">Hamburgueria</SelectItem>
											<SelectItem value="food-truck">Food Truck</SelectItem>
											<SelectItem value="quiosque">Quiosque de Comida</SelectItem>
											<SelectItem value="barraca">Barraca de Comida de Rua</SelectItem>
											<SelectItem value="delicatessen">Delicatessen</SelectItem>
											<SelectItem value="confeitaria">Confeitaria</SelectItem>
											<SelectItem value="mercearia">Mercearia</SelectItem>
											<SelectItem value="mercado">Mercado de Alimentos</SelectItem>
											<SelectItem value="produtos-naturais">Loja de Produtos Naturais</SelectItem>
											<SelectItem value="produtos-organicos">Loja de Produtos Orgânicos</SelectItem>
											<SelectItem value="doces">Loja de Doces</SelectItem>
											<SelectItem value="chocolates">Loja de Chocolates</SelectItem>
											<SelectItem value="especializados">
												Loja de Alimentos Especializados
											</SelectItem>
											<SelectItem value="outro">Outro</SelectItem>
										</SelectContent>
									</Select>
									<Label>Adicione sua logo: </Label>
									<label>
										<Input className="w-full h-full cursor-pointer" type="file" />
										<div className="w-full p-2 border rounded h-36"></div>
									</label>
								</form>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</>
	);
}
