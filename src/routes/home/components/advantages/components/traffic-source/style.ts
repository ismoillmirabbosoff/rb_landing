import { styled } from '@mui/material/styles'

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
