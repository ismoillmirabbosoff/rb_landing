import { styled } from '@mui/material/styles'

export const WrapIconPieChart = styled('div')`
	animation: traffic 15s linear infinite;
	-moz-animation: traffic 15s linear infinite;
	-webkit-animation: traffic 15s linear infinite;

	@-moz-keyframes traffic {
		from {
			-moz-transform: rotate(-360deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes traffic {
		from {
			-webkit-transform: rotate(-360deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes traffic {
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
