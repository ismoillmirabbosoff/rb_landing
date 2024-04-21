import Link from 'next/link'
import { Wrapper } from './style'
import { Iconlogo } from '@/assets/icons/logo'
import { IconLogoText } from '@/assets/icons/logo-text'
import { Stack } from '@mui/material'

interface LogoProps {
	variant: 'logo' | 'text'
}

export const Logo = ({ variant }: LogoProps) => {
	return (
		<Link href=''>
			<Wrapper>
				{variant === 'logo' ? (
					<Stack id='logo' justifyContent='center'>
						<Iconlogo />
					</Stack>
				) : (
					<Stack id='logo-text' justifyContent='center'>
						<IconLogoText />
					</Stack>
				)}
			</Wrapper>
		</Link>
	)
}
