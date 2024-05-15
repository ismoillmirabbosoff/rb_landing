import Link from 'next/link'
import { NAVBAR } from '@/constants/navbar'
import { useTranslation } from 'next-i18next'
import { Nav, type NavbarProps } from './style'
import { IconDirectionDown } from '@/assets/icons/direction-down'

export const Navbar = ({ variant }: NavbarProps) => {
	const { t } = useTranslation('common')
	return (
		<Nav variant={variant}>
			<ul>
				{NAVBAR.map((n, i: number) => (
					<li key={i}>
						<Link href={n.href}>
							{t(n.title)}
							<IconDirectionDown />
						</Link>
					</li>
				))}
			</ul>
		</Nav>
	)
}
