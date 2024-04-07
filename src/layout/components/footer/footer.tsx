import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { Wrapper, Container } from './style'
import { SOCIALS } from '@/constants/social'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

export const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='text30' component='h2'>
					Copyright © 2024 RoboSell | All Rights Reserved
				</Typography>
				<Stack
					gap='10px'
					component='ul'
					direction='row'
					alignItems='center'
					justifyContent='flex-end'
				>
					{SOCIALS.map(({ Icon, href }, i: number) => (
						<Stack component='li' key={i} justifyContent='center'>
							<IconButton sx={{ p: '6px' }} component={Link} href={href} target='_blank'>
								<Icon />
							</IconButton>
						</Stack>
					))}
				</Stack>
			</Wrapper>
		</Container>
	)
}
