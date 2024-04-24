import Link from 'next/link'
import { Nav } from './style'
import { NAVBAR } from '@/constants/navbar'
import { useTranslation } from 'next-i18next'

export const Navbar = () => {
	const { t } = useTranslation('common')
	return (
		<Nav>
			<ul>
				{NAVBAR.map((n, i: number) => (
					<li key={i}>
						<Link href={n.href}>{t(n.title)}</Link>
					</li>
				))}
			</ul>
		</Nav>
	)
}
