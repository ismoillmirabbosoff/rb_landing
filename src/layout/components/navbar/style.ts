import { styled } from '@mui/material/styles'

export const Nav = styled('nav')`
	ul {
		gap: 4px;
		display: flex;
		padding: 3px 6px;
		border-radius: 14px;
		white-space: nowrap;
		backdrop-filter: blur(25px);
		background-color: ${({ theme }) => theme.palette.colors.WHITE10};
		li {
			padding: 0 10px;
			border-radius: 10px;
			border-width: 1px;
			border-style: solid;
			border-color: ${({ theme }) => theme.palette.colors.TRANSPARENT};
			:hover {
				border-color: ${({ theme }) => theme.palette.colors.PURPLE};
			}
			a {
				height: 100%;
				display: flex;
				font-size: 14px;
				font-weight: 400;
				line-height: 46px;
				text-align: center;
				letter-spacing: 0.564px;
				color: ${({ theme }) => theme.palette.colors.WHITE};
			}
		}
	}
`
