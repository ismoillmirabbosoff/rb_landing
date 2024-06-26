import MuiTabList from '@mui/lab/TabList'
import { styled } from '@mui/material/styles'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

export const Container = styled('section')`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding-bottom: 90px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '0 0 24px',
		},
	})}
`

export const Cards = styled('ul')`
	gap: 48px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '16px',
			gridTemplateColumns: '1fr',
		},
	})};
`

export const Card = styled('li')`
	display: flex;
	flex-grow: 1;
	height: 100%;
	padding: 28px 30px;
	border-radius: 5px;
	border-top-width: 4px;
	flex-direction: column;
	border-top-style: solid;
	transition: all 0.2s ease-in-out;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	box-shadow: 0px 2px 100px 0px ${({ theme }) => theme.palette.colors.GRAY40};
`

export const TabList = styled(MuiTabList)`
	min-height: 44px;
	width: fit-content;
	border-radius: 9px;
	background: ${({ theme }) => theme.palette.colors.GRAY90};
	border: 1px solid ${({ theme }) => theme.palette.colors.GRAY100};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			minHeight: '37px',
			borderRadius: '7.5px',
		},
	})}
	::after {
		display: none;
	}
	& .MuiTabs-indicator {
		display: none;
	}
	.MuiTabs-flexContainer {
		gap: 10px;
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				gap: '5px',
			},
		})}
	}

	.MuiTab-root {
		opacity: 1;
		margin: 2px 3px;
		padding: 0 20px;
		min-height: 38px;
		text-transform: unset;
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				margin: '2.5px',
				minHeight: '31px',
				padding: '0 10px',
			},
		})}
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
				boxShadow: `0px 1px 3px 0px ${theme.palette.colors.GRAY80}, 0px 3px 8px 0px ${theme.palette.colors.GRAY110}`,
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

export const FormControlLabel = styled(MuiFormControlLabel)`
	.MuiButtonBase-root {
		svg {
			${({ theme }) => ({
				[theme.breakpoints.down('md')]: {
					width: '25px',
					height: '25px',
				},
			})};
		}
	}
`

export const WrapLabel = styled('div')`
	display: flex;
	align-items: center;
	${({ theme }) => ({
		gap: '9px',
		[theme.breakpoints.down('md')]: {
			gap: '6px',
			svg: {
				width: '20px',
				height: '20px',
			},
		},
	})};
`
