import Stack from '@mui/material/Stack'
import { Footer } from './components/footer'
import { Header } from './components/header'
import type { ChildrenProps } from '@/types/common'

export const Layout = ({ children }: ChildrenProps) => {
	return (
		<>
			<Header />
			<Stack flexGrow={1}>{children}</Stack>
			<Footer />
		</>
	)
}
