import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 46px 0 90px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '24px 18px 0',
		},
	})}
`

export const Card = styled('div')`
	display: flex;
	overflow: hidden;
	padding: 20px 24px;
	border-radius: 20px;
	flex-direction: column;
	background: ${({ theme }) => theme.palette.colors.GRAY90};

	&.order {
		width: 40%;
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				width: '100%',
				minHeight: '460px',
			},
		})};
	}
`

export const Wrap = styled('div')`
	gap: 20px;
	width: 100%;
	display: flex;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	})};
`

export const WrapUp = styled('div')`
	gap: 20px;
	height: 50%;
	display: grid;
	grid-template-columns: 0.4fr 0.6fr;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			height: 'fit-content',
			gridTemplateColumns: '100%',
		},
	})};
`

export const WrapDown = styled('div')`
	gap: 20px;
	width: 100%;
	height: 50%;
	display: grid;
	grid-template-columns: 0.6fr 0.4fr;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			height: 'fit-content',
			gridTemplateColumns: '100%',
		},
	})};
`

export const WrapLeft = styled('div')`
	gap: 20px;
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '100%',
			gridTemplateColumns: '100%',
		},
	})};
`
