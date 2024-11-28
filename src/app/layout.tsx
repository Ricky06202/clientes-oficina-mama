import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Clientes Oficina',
	description: 'App para gestión de clientes',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body>{children}</body>
		</html>
	)
}
