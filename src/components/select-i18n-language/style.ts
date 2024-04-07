import MuiSelect from '@mui/material/Select'
import { styled } from '@mui/material/styles'

export const Select = styled(MuiSelect)`
	font-size: 14px;
	font-weight: 400;
	line-height: 73px;
	letter-spacing: 0.564px;
	backdrop-filter: blur(25px);
	color: ${({ theme }) => theme.palette.colors.WHITE};
	background: ${({ theme }) => theme.palette.colors.WHITE10};
`
