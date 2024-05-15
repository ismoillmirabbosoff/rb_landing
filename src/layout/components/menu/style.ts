import { styled } from '@mui/material/styles'

export const Header = styled('header')`
	display: flex;
	padding: 7px 0 7px 8px;
	border-radius: 10px;
	margin-bottom: 22px;
	align-items: center;
	backdrop-filter: blur(25px);
	justify-content: space-between;
	background: ${({ theme }) => theme.palette.colors.WHITE10};
`
