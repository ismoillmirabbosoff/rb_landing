import { styled } from '@mui/material/styles'

export interface NavbarProps {
	variant: 'menu' | 'header'
}

export const Nav = styled('nav')<NavbarProps>`
	ul {
		gap: 4px;
		display: flex;
		padding: ${({ variant }) => (variant === 'menu' ? '0' : '3px 6px')};
		border-radius: 14px;
		white-space: nowrap;
		flex-direction: ${({ variant }) => (variant === 'menu' ? 'column' : 'row')};
		backdrop-filter: ${({ variant }) => (variant === 'menu' ? undefined : 'blur(25px)')};
		background-color: ${({ theme, variant }) =>
			variant === 'menu' ? theme.palette.colors.TRANSPARENT : theme.palette.colors.WHITE10};
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
				align-items: center;
				letter-spacing: 0.564px;
				justify-content: space-between;
				color: ${({ theme }) => theme.palette.colors.WHITE};
				svg {
					transform: rotate(-90deg);
					path {
						stroke: ${({ theme }) => theme.palette.colors.GRAY120};
					}
				}
			}
		}
	}
`

export const WrapIcon = styled('div')``
