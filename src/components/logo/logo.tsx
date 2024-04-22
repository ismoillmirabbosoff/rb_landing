import Link from 'next/link'
import { Wrapper } from './style'
import Stack from '@mui/material/Stack'
import { ROUTER } from '@/constants/router'
import { Iconlogo } from '@/assets/icons/logo'
import { IconLogoText } from '@/assets/icons/logo-text'

interface LogoProps {
	variant: 'logo' | 'text'
}

export const Logo = ({ variant }: LogoProps) => {
	return (
		<Link href={ROUTER.HOME}>
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
