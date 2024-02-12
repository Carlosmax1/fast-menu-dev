import { Body, Head, Html, Preview, Tailwind, Text } from '@react-email/components';

export function TestMailSend() {
	return (
		<Html>
			<Head />
			<Preview>Olá, mundo</Preview>
			<Tailwind>
				<Body className="flex flex-1 bg-zinc-50">
					<Text>Olá, mundo</Text>
				</Body>
			</Tailwind>
		</Html>
	);
}
