import Link from 'next/link'
import { Nav } from './style'
import { NAVBAR } from '@/constants/navbar'

export const Navbar = () => {
	return (
		<Nav>
			<ul>
				{NAVBAR.map((n, i: number) => (
					<li key={i}>
						<Link href={n.href}>{n.title}</Link>
					</li>
				))}
			</ul>
		</Nav>
	)
}
