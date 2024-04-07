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
	title60: React.CSSProperties
	title70: React.CSSProperties
	text: React.CSSProperties
	text10: React.CSSProperties
	text20: React.CSSProperties
	text30: React.CSSProperties
	text40: React.CSSProperties
	text50: React.CSSProperties
	text60: React.CSSProperties
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		title: true
		title10: true
		title20: true
		title30: true
		title40: true
		title50: true
		title60: true
		title70: true
		text: true
		text10: true
		text20: true
		text30: true
		text40: true
		text50: true
		text60: true
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
		text: {
			primary: COLORS.BLACK,
		},
	},
	typography: palette => ({
		fontFamily: gilroy.style.fontFamily,
		title: {
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
		},
		title10: {
			fontSize: '42px',
			fontWeight: 500,
			lineHeight: '73px',
			letterSpacing: '0.564px',
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
		title60: {
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: 'normal',
		},
		title70: {
			fontWeight: 500,
			fontSize: '22px',
			lineHeight: '24px',
			color: palette.colors.BLACK20,
		},
		text: {
			fontWeight: 400,
			fontSize: '24px',
			lineHeight: '35px',
			textAlign: 'center',
			letterSpacing: '0.324px',
			color: palette.colors.GRAY,
		},
		text10: {
			fontWeight: 300,
			fontSize: '22px',
			lineHeight: '32px',
			color: palette.colors.GRAY10,
		},
		text20: {
			fontWeight: 300,
			fontSize: '14px',
			lineHeight: 'normal',
			color: palette.colors.GRAY10,
		},
		text30: {
			fontWeight: 400,
			fontSize: '18px',
			lineHeight: '35px',
			letterSpacing: '0.063px',
			color: palette.colors.GRAY10,
		},
		text40: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: 'normal',
			color: palette.colors.BLACK20,
		},
		text50: {
			fontWeight: 500,
			fontSize: '14px',
			lineHeight: 'normal',
		},
		text60: {
			fontWeight: 300,
			fontSize: '16px',
			lineHeight: '22px',
		},
	}),
	components: {
		MuiCssBaseline: {
			styleOverrides: theme => ({}),
		},
		MuiInputBase: {
			styleOverrides: {
				root: ({ theme }) => ({
					height: 52,
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: '14px',
					'& fieldset': {
						borderWidth: '1px',
						borderColor: theme.palette.colors.TRANSPARENT,
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: `${theme.palette.colors.PURPLE} !important`,
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderWidth: '1px',
						borderColor: `${theme.palette.colors.PURPLE} !important`,
					},
					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderWidth: '1px',
						borderColor: `${theme.palette.colors.RED} !important`,
					},
				}),
			},
		},
		MuiSelect: {
			styleOverrides: {
				select: {
					padding: '14.5px 18px',
				},
			},
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
