import { styled } from '@mui/material/styles'

export const Container = styled('section')`
	z-index: 2;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.palette.colors.BLACK10};
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 46px 0 90px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '24px 18px',
		},
	})}
`

export const WrapImageBody = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	padding: 15px 15px 35px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '12px 12px 25px',
		},
	})};
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 100%;
	padding-top: 15px;
	position: relative;
	border-radius: 10px 10px 0 0;
	background: ${({ theme }) => theme.palette.colors.WHITE};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			paddingTop: '10px',
			borderRadius: '5px 5px 0 0',
		},
	})};
`

export const WrapCamera = styled('div')`
	left: 0;
	top: -5px;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			svg: {
				width: '75px',
				height: '12px',
			},
		},
	})};
`

export const Wrap = styled('div')`
	gap: 100px;
	width: 100%;
	display: flex;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '60px',
			flexDirection: 'column-reverse',
		},
	})};
`

export const Cards = styled('ul')`
	gap: 50px;
	display: flex;
	min-width: 390px;
	padding-top: 50px;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			paddingTop: '0',
			minWidth: '100%',
			li: {
				alignItems: 'center',
			},
		},
	})};
`

export const WrapIcon = styled('div')`
	width: 42px;
	height: 42px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.colors.WHITE40};
	svg {
		width: 24px;
		height: 24px;
		path {
			fill: ${({ theme }) => theme.palette.colors.GRAY120};
		}
	}
`

export const WrapMac = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	& > div > svg,
	& > svg {
		width: 100%;
		height: 100%;
	}
`

export const WrapMacMobile = styled('div')`
	bottom: 15px;
	right: -60px;
	width: 230px;
	height: 435px;
	position: absolute;
	svg {
		width: 100%;
		height: 100%;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			right: '-10px',
			bottom: '7px',
			width: '100px',
			height: 'calc(100% - 25px)',
		},
	})};
`

export const ContentPhone = styled('div')`
	top: 5px;
	z-index: 1;
	left: 15px;
	width: 230px;
	height: 435px;
	position: absolute;
	img {
		border-radius: 32px;
		width: calc(100% - 30px) !important;
		height: calc(100% - 10px) !important;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			top: '8px',
			left: '4px',
			width: '122px',
			height: 'calc(100% - 8px)',
			img: {
				borderRadius: '13px !important',
				width: '100%',
				height: '100%',
			},
		},
	})};
`

export const WrapIsland = styled('div')`
	top: 10px;
	left: 37%;
	z-index: 2;
	position: absolute;
	svg {
		width: 80%;
		height: 80%;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			top: '1px',
			svg: {
				width: '40%',
				height: '40%',
			},
		},
	})};
`

export const WrapperImage = styled('div')`
	width: 230px;
	height: 435px;
	position: relative;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			width: '100px',
			height: '242px',
		},
	})};
`
