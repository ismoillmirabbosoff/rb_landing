import localFont from 'next/font/local'

export const gilroy = localFont({
	preload: true,
	variable: '--font-onest',
	src: [
		{
			weight: '200',
			style: 'normal',
			path: '../assets/fonts/OnestThin1602-hint.woff2',
		},
		{
			weight: '300',
			style: 'normal',
			path: '../assets/fonts/OnestLight1602-hint.woff2',
		},
		{
			weight: '400',
			style: 'normal',
			path: '../assets/fonts/OnestRegular1602-hint.woff2',
		},
		{
			weight: '500',
			style: 'normal',
			path: '../assets/fonts/OnestMedium1602-hint.woff2',
		},
		{
			weight: '600',
			style: 'normal',
			path: '../assets/fonts/OnestBlack1602-hint.woff2',
		},
		{
			weight: '700',
			style: 'normal',
			path: '../assets/fonts/OnestBold1602-hint.woff2',
		},
		{
			weight: '800',
			style: 'normal',
			path: '../assets/fonts/OnestExtraBold1602-hint.woff2',
		},
	],
})
