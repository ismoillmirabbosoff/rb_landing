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
`

export const WrapIconPieChart = styled('div')`
	animation: rotate 15s linear infinite;
	-moz-animation: rotate 15s linear infinite;
	-webkit-animation: rotate 15s linear infinite;

	@-moz-keyframes rotate {
		from {
			-moz-transform: rotate(-360deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(-360deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		from {
			-webkit-transform: rotate(-360deg);
			transform: rotate(-360deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`
