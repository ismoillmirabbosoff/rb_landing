import { styled } from '@mui/material/styles'

interface WrapIconAdvantageProps {
	rotate: number
}

export const WrapIconAdvantage = styled('div')<WrapIconAdvantageProps>`
	width: 100%;
	animation: sell 2s linear infinite;
	-moz-animation: sell 2s linear infinite;
	-webkit-animation: sell 2s linear infinite;
	svg {
		width: 100%;
		height: fit-content;
		border-radius: 7.073px;
		box-shadow: 0px 0px 28.292px 0px ${({ theme }) => theme.palette.colors.GRAY110};
	}
	@-moz-keyframes sell {
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
	@-webkit-keyframes sell {
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

	@keyframes sell {
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
