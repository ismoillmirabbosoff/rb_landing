import Link from 'next/link'
import Stack from '@mui/material/Stack'
import { SOCIALS } from '@/constants/social'
import IconButton from '@mui/material/IconButton'

export const Social = () => {
	return (
		<Stack pt='21px' gap='12px' component='ul' direction='row'>
			{SOCIALS.map(({ Icon, href }, i: number) => (
				<Stack component='li' key={i} justifyContent='center'>
					<IconButton
						href={href}
						target='_blank'
						component={Link}
						sx={{
							p: '6px',
							minWidth: '31px',
							svg: {
								width: '24px',
								height: '24px',
							},
						}}
					>
						<Icon />
					</IconButton>
				</Stack>
			))}
		</Stack>
	)
}
