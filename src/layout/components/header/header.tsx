import { Hoc } from './hoc'
import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import { Iconlogo } from '@/assets/icons/logo'
import { Container, WrapDesktop } from './style'

export const Header = () => {
	return (
		<Container>
			<Hoc>
				<WrapDesktop>
					<Link href='/'>
						<Iconlogo />
					</Link>
					<Stack gap='10px' direction='row'>
						<Select />
						<Button variant='text'>Kirish</Button>
						<Button variant='contained'>Start free trial</Button>
					</Stack>
				</WrapDesktop>
			</Hoc>
		</Container>
	)
}
