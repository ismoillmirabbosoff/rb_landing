import { gilroy } from '@/utils/fonts'
import { createTheme } from '@mui/material/styles'
import { COLORS, BREAKPOINTS } from '@/constants/css'

declare module '@mui/material/styles/createPalette' {
	interface Palette {
		colors: typeof COLORS
	}
	interface PaletteOptions {
		colors: typeof COLORS
	}
}

interface TypographyProps {
	title: React.CSSProperties
	title10: React.CSSProperties
	title20: React.CSSProperties
	title30: React.CSSProperties
	title40: React.CSSProperties
	title50: React.CSSProperties
	text: React.CSSProperties
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		title: true
		title10: true
		title20: true
		title30: true
		title40: true
		title50: true
		text: true
	}
}

declare module '@mui/material/styles' {
	interface TypographyVariants extends TypographyProps {}
	interface TypographyVariantsOptions extends TypographyProps {}
}

export const theme = createTheme({
	breakpoints: BREAKPOINTS,
	shape: {
		borderRadius: 8,
	},
	palette: {
		primary: {
			main: COLORS.PURPLE,
		},
		colors: COLORS,
	},
	typography: palette => ({
		fontFamily: gilroy.style.fontFamily,
		title: {
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
			color: palette.colors.BLACK,
		},
		title10: {
			fontSize: '42px',
			fontWeight: 500,
			lineHeight: '73px',
			letterSpacing: '0.564px',
			color: palette.colors.BLACK,
		},
		title20: {
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			textalign: 'center',
			letterSpacing: '0.564px',
			color: palette.colors.WHITE,
		},
		title30: {
			fontSize: '64px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
			color: palette.colors.BLACK,
		},
		title40: {
			textAlign: 'center',
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			letterSpacing: '0.564px',
			background: palette.colors.LINEAR_GRADIENT,
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
		},
		title50: {
			fontSize: '64px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			backgroundClip: 'text',
			letterSpacing: '0.564px',
			background: palette.colors.LINEAR_GRADIENT,
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
		},
		text: {
			fontWeight: 400,
			fontSize: '24px',
			lineHeight: '35px',
			textAlign: 'center',
			letterSpacing: '0.324px',
			color: palette.colors.GRAY,
		},
	}),
	components: {
		MuiCssBaseline: {
			styleOverrides: theme => ({}),
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
			},
			styleOverrides: {
				sizeMedium: {
					height: 52,
					borderRadius: '14px',
				},
				sizeSmall: {
					height: 38,
					borderRadius: '4px',
				},
				root: ({ theme }) => ({
					fontWeight: 500,
					fontSize: '16px',
					boxShadow: 'none',
					lineHeight: 'normal',
					whiteSpace: 'nowrap',
					textTransform: 'inherit',
					':hover': {
						boxShadow: 'none',
					},
					'&.MuiLoadingButton-loading.Mui-disabled': {
						color: `${theme.palette.colors.TRANSPARENT} !important`,
					},
					'&.MuiLoadingButton-loading': {
						'.MuiCircularProgress-root': {
							width: '18px !important',
							height: '18px !important',
						},
					},
				}),
			},
			variants: [
				{
					props: { variant: 'text' },
					style: ({ theme }) => ({
						color: theme.palette.colors.WHITE,
					}),
				},
			],
		},
	},
})
