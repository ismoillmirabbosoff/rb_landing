import Link from 'next/link'
import { Iconlogo } from '@/assets/icons/logo'
import { IconLogoText } from '@/assets/icons/logo-text'

interface LogoProps {
	variant: 'logo' | 'text'
}

export const Logo = ({ variant }: LogoProps) => {
	return <Link href=''>{variant === 'logo' ? <Iconlogo /> : <IconLogoText />}</Link>
}
