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
`

export const Card = styled('div')`
	display: flex;
	padding: 20px 24px;
	border-radius: 20px;
	flex-direction: column;
	background: ${({ theme }) => theme.palette.colors.GRAY90};

	&.order {
		width: 40%;
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				width: '100%',
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

interface WrapIconAdvantageProps {
	rotate: number
}

export const WrapIconAdvantage = styled('div')<WrapIconAdvantageProps>`
	width: 100%;
	animation: rotate 2s linear infinite;
	-moz-animation: rotate 2s linear infinite;
	-webkit-animation: rotate 2s linear infinite;
	svg {
		width: 100%;
		height: fit-content;
		border-radius: 7.073px;
		box-shadow: 0px 0px 28.292px 0px ${({ theme }) => theme.palette.colors.GRAY110};
	}
	@-moz-keyframes rotate {
		0% {
			-moz-transform: rotate(0deg);
		}
		50% {
			-moz-transform: rotate(${({ rotate }) => rotate}deg);
		}
		100% {
			-moz-transform: rotate(0deg);
		}
	}
	@-webkit-keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg);
		}
		50% {
			-webkit-transform: rotate(${({ rotate }) => rotate}deg);
		}
		100% {
			-webkit-transform: rotate(0deg);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(${({ rotate }) => rotate}deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
`
