import Stack from '@mui/material/Stack'

interface ScrollDownProps {
	id: string
}

export const ScrollDown = ({ id }: ScrollDownProps) => {
	return (
		<Stack position='relative'>
			<Stack
				id={id}
				sx={theme => ({
					top: '0',
					position: 'absolute',
					[theme.breakpoints.down('md')]: {
						top: '-60px',
					},
				})}
			/>
		</Stack>
	)
}
