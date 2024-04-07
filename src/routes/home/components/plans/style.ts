import MuiTabList from '@mui/lab/TabList'
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
	padding-bottom: 100px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Cards = styled('ul')`
	gap: 48px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`

export const Card = styled('li')`
	padding: 28px 30px;
	border-radius: 5px;
	border-top-width: 4px;
	border-top-style: solid;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	box-shadow: 0px 2px 100px 0px ${({ theme }) => theme.palette.colors.GRAY40};
`

export const TabList = styled(MuiTabList)`
	min-height: 44px;
	width: fit-content;
	border-radius: 9px;
	border: 1px solid rgba(131, 147, 166, 0.2);
	background: #f9f9fc;

	::after {
		display: none;
	}
	& .MuiTabs-indicator {
		display: none;
	}
	.MuiTabs-flexContainer {
		gap: 10px;
	}

	.MuiTab-root {
		opacity: 1;
		margin: 2px 3px;
		padding: 0 20px;
		min-height: 38px;
		text-transform: unset;
		.MuiTab-iconWrapper {
			margin-right: 4px;
		}

		${({ theme }) => ({
			fontSize: '14px',
			fontWeight: '400',
			lineHeight: '20px',
			color: theme.palette.colors.GRAY30,
			'&.Mui-selected': {
				fontWeight: '500',
				borderRadius: '7px',
				color: theme.palette.colors.BLACK,
				backgroundColor: theme.palette.colors.WHITE,
				boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 3px 8px 0px rgba(0, 0, 0, 0.07)',
			},
		})}
	}
`

export const WrapDiscount = styled('div')`
	padding: 0 4px;
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	border-radius: 24px;
	color: ${({ theme }) => theme.palette.colors.WHITE};
	background: ${({ theme }) => theme.palette.colors.PURPLE};
`
