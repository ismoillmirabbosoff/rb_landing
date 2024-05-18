import { gilroy } from '@/utils/fonts'
import { IconPlus } from '@/assets/icons/plus'
import { createTheme } from '@mui/material/styles'
import { COLORS, BREAKPOINTS } from '@/constants/css'
import { IconRadioTrue } from '@/assets/icons/radio-true'
import { IconRadioFalse } from '@/assets/icons/radio-false'

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
	title80: React.CSSProperties
	title90: React.CSSProperties
	title100: React.CSSProperties
	title110: React.CSSProperties
	title120: React.CSSProperties
	title130: React.CSSProperties
	title140: React.CSSProperties
	text: React.CSSProperties
	text10: React.CSSProperties
	text20: React.CSSProperties
	text30: React.CSSProperties
	text40: React.CSSProperties
	text50: React.CSSProperties
	text60: React.CSSProperties
	text70: React.CSSProperties
	text80: React.CSSProperties
	text90: React.CSSProperties
	text100: React.CSSProperties
	text110: React.CSSProperties
	text120: React.CSSProperties
	text130: React.CSSProperties
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
		title80: true
		title90: true
		title100: true
		title110: true
		title120: true
		title130: true
		title140: true
		text: true
		text10: true
		text20: true
		text30: true
		text40: true
		text50: true
		text60: true
		text70: true
		text80: true
		text90: true
		text100: true
		text110: true
		text120: true
		text130: true
	}
}

declare module '@mui/material/styles' {
	interface TypographyVariants extends TypographyProps {}
	interface TypographyVariantsOptions extends TypographyProps {}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		'text-gray': true
	}
}

const defaultCreateTheme = createTheme({
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
})

export const theme = createTheme({
	shape: defaultCreateTheme.shape,
	palette: defaultCreateTheme.palette,
	breakpoints: defaultCreateTheme.breakpoints,
	typography: palette => ({
		fontFamily: gilroy.style.fontFamily,
		title: {
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
			},
		},
		title10: {
			fontSize: '42px',
			fontWeight: 500,
			lineHeight: '73px',
			letterSpacing: '0.564px',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '17px',
			},
		},
		title20: {
			fontSize: '52px',
			fontWeight: 700,
			lineHeight: '73px',
			textalign: 'center',
			letterSpacing: '0.564px',
			color: palette.colors.WHITE,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
				lineHeight: '33px',
			},
		},
		title30: {
			fontSize: '64px',
			fontWeight: 700,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
				lineHeight: '30px',
			},
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
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
				lineHeight: '33px',
			},
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
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
				lineHeight: '33px',
			},
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
		title80: {
			fontSize: '20px',
			fontWeight: 700,
			lineHeight: '22px',
			letterSpacing: '0.35px',
			color: palette.colors.BLACK,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '11px',
				lineHeight: '11px',
			},
		},
		title90: {
			fontSize: '28px',
			fontWeight: 500,
			lineHeight: '73px',
			textAlign: 'center',
			letterSpacing: '0.564px',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '22px',
				lineHeight: '30px',
			},
		},
		title100: {
			fontSize: '22px',
			fontWeight: 500,
			lineHeight: '32px',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				fontWeight: 400,
			},
		},
		title110: {
			fontSize: '18px',
			fontWeight: 500,
			lineHeight: 'normal',
			color: palette.colors.WHITE,
		},
		title120: {
			fontSize: '24px',
			fontWeight: 500,
			lineHeight: 'normal',
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '16px',
			},
		},
		title130: {
			fontSize: '24px',
			fontWeight: 700,
			lineHeight: '30px',
			letterSpacing: '0.564px',
		},
		title140: {
			fontSize: '32px',
			fontWeight: 500,
			lineHeight: '30px',
		},
		text: {
			fontWeight: 400,
			fontSize: '24px',
			lineHeight: '35px',
			textAlign: 'center',
			letterSpacing: '0.324px',
			color: palette.colors.GRAY,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				lineHeight: '20px',
				letterSpacing: '0.049px',
			},
		},
		text10: {
			fontWeight: 300,
			fontSize: '22px',
			lineHeight: '32px',
			color: palette.colors.GRAY10,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				lineHeight: '21px',
			},
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
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '10px',
				lineHeight: '35px',
				letterSpacing: '0.035px',
			},
		},
		text40: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: 'normal',
			color: palette.colors.BLACK20,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '13px',
			},
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
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				lineHeight: '19.641px',
			},
		},
		text70: {
			fontWeight: 500,
			fontSize: '21.149px',
			lineHeight: '29.08px',
			color: palette.colors.PURPLE,
		},
		text80: {
			fontWeight: 400,
			fontSize: '18px',
			lineHeight: '25px',
			letterSpacing: '0.243px',
			color: palette.colors.GRAY10,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				lineHeight: '22px',
				letterSpacing: '0.189px',
			},
		},
		text90: {
			fontWeight: 300,
			fontSize: '16px',
			lineHeight: '27px',
			color: palette.colors.GRAY10,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '12px',
				lineHeight: '17px',
			},
		},
		text100: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '26px',
			color: palette.colors.GRAY130,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '14px',
				lineHeight: '17px',
			},
		},
		text110: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '32px',
			color: palette.colors.GRAY120,
			[defaultCreateTheme.breakpoints.down('md')]: {
				fontSize: '12px',
			},
		},
		text120: {
			fontWeight: 300,
			fontSize: '12px',
			lineHeight: '16.6px',
			color: palette.colors.GRAY10,
		},
		text130: {
			fontWeight: 400,
			fontSize: '12.541px',
			lineHeight: 'normal',
			color: palette.colors.BLACK40,
		},
	}),
	components: {
		MuiSwipeableDrawer: {
			defaultProps: {
				PaperProps: {
					sx: theme => ({
						backdropFilter: 'blur(50px)',
						backgroundColor: theme.palette.colors.BLACK50,
					}),
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				select: {
					padding: '14.5px 18px',
				},
				root: {
					borderRadius: '14px',
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
					[defaultCreateTheme.breakpoints.down('md')]: {
						height: 48,
					},
				},
				sizeSmall: {
					height: 38,
					borderRadius: '4px',
					[defaultCreateTheme.breakpoints.down('md')]: {
						height: 35,
					},
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
					'.MuiLoadingButton-loadingIndicator': {
						color: `${theme.palette.colors.WHITE}`,
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
				{
					props: { variant: 'outlined' },
					style: ({ theme }) => ({
						border: `1.5px solid ${theme.palette.colors.PURPLE}`,
					}),
				},
				{
					props: { variant: 'text-gray' },
					style: ({ theme }) => ({
						fontSize: '16px',
						fontWeight: 400,
						lineHeight: '35px',
						letterSpacing: '0.216px',
						color: theme.palette.colors.GRAY50,
						[defaultCreateTheme.breakpoints.down('md')]: {
							fontSize: '14px',
							letterSpacing: '0.189px',
						},
					}),
				},
			],
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					marginLeft: 0,
					marginRight: 0,
				},
				label: ({ theme }) => ({
					fontSize: '16px',
					fontWeight: '400',
					lineHeight: '27px',
					color: theme.palette.colors.BLACK,
					[defaultCreateTheme.breakpoints.down('md')]: {
						fontSize: '14px',
					},
				}),
			},
		},
		MuiRadio: {
			defaultProps: {
				icon: <IconRadioFalse />,
				checkedIcon: <IconRadioTrue />,
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					transform: 'translate(0, -25px) scale(1)',
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					':has(label.MuiInputLabel-root)': {
						marginTop: '25px  !important',
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: ({ theme }) => ({
					height: 52,
					[defaultCreateTheme.breakpoints.down('md')]: {
						height: 48,
					},
					backgroundColor: theme.palette.colors.GRAY90,
					'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active':
						{
							fontWeight: 500,
							fontSize: '16px',
							borderRadius: '0 9px 9px 0',
							WebkitTextFillColor: `${theme.palette.colors.BLACK} !important`,
							WebkitBoxShadow: `0 0 0 30px ${theme.palette.colors.GRAY90} inset !important`,
							boxShadow: `0 0 0 30px ${theme.palette.colors.GRAY90} inset !important`,
							backgroundColor: theme.palette.colors.GRAY90,
							[defaultCreateTheme.breakpoints.down('md')]: {
								fontSize: '14px',
							},
						},
					':has(.MuiInputAdornment-positionStart)': {
						paddingLeft: '20px !important',
						input: {
							paddingLeft: '0 !important',
						},
					},
					':has(.MuiInputAdornment-positionEnd)': {
						paddingRight: '9px !important',
						input: {
							paddingRight: '0 !important',
						},
					},
					fieldset: {
						top: 0,
						height: 52,
						[defaultCreateTheme.breakpoints.down('md')]: {
							height: 48,
						},
						legend: {
							display: 'none',
						},
					},
					input: {
						fontSize: '16px',
						fontWeight: '500',
						lineHeight: '27px',
						padding: '0 20px !important',
						color: `${theme.palette.colors.BLACK} !important`,
						[defaultCreateTheme.breakpoints.down('md')]: {
							fontSize: '14px',
						},
					},
				}),
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: ({ theme }) => ({
					marginLeft: 0,
					fontSize: '12px',
					fontWeight: 400,
					color: theme.palette.colors.RED,
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: '9px',
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
		MuiAccordion: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderWidth: '1px',
					borderRadius: '8px',
					borderStyle: 'solid',
					borderColor: theme.palette.colors.GRAY140,
					backgroundColor: theme.palette.colors.WHITE,
					boxShadow: `0px 0px 56px 0px ${theme.palette.colors.GRAY150}`,
					'::before': {
						height: 0,
					},
					[defaultCreateTheme.breakpoints.down('md')]: {
						borderRadius: '4px',
					},
				}),
			},
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					padding: '0 40px 33px',
					[defaultCreateTheme.breakpoints.down('md')]: {
						padding: '0px 14px 13px 14px',
					},
				},
			},
		},
		MuiAccordionSummary: {
			defaultProps: {
				expandIcon: <IconPlus />,
			},
			styleOverrides: {
				root: {
					padding: '14px 14px 14px 40px',
					[defaultCreateTheme.breakpoints.down('md')]: {
						padding: '9px 14px',
						minHeight: '10px !important',
					},
				},
				expandIconWrapper: {
					svg: {
						[defaultCreateTheme.breakpoints.down('md')]: {
							width: '24px',
							height: '24px',
						},
					},
				},
				content: {
					margin: '0 !important',
					'.Mui-expanded': {
						margin: '0 !important',
					},
				},
			},
		},
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
					gap: '23px',
					[defaultCreateTheme.breakpoints.down('md')]: {
						justifyContent: 'space-between',
					},
				},
				grouped: ({ theme }) => ({
					borderRadius: '12px',
					[defaultCreateTheme.breakpoints.down('md')]: {
						borderRadius: '8px',
					},
					'&.Mui-selected': {
						color: theme.palette.colors.GRAY130,
						border: `1px solid ${theme.palette.colors.GREEN}`,
					},
				}),
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontWeight: 300,
					fontSize: '16px',
					minHeight: '50px',
					padding: '0 11px',
					lineHeight: '16.6px',
					textTransform: 'unset',
					color: theme.palette.colors.GRAY120,
					background: theme.palette.colors.WHITE30,
					':hover': {
						color: theme.palette.colors.GRAY130,
						border: `1px solid ${theme.palette.colors.GREEN} !important`,
					},
					[defaultCreateTheme.breakpoints.down('md')]: {
						fontSize: '14px',
					},
				}),
			},
		},
		MuiLinearProgress: {
			variants: [
				{
					props: { variant: 'determinate' },
					style: {
						height: 4,
						borderRadius: 12,
					},
				},
			],
		},
	},
})
