import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import { INSTRUCTIONS } from './constants'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'next-i18next'
import ImageDisplay from '@/assets/images/display.webp'
import {
	List,
	Wrapper,
	WrapPlay,
	Container,
	WrapImage,
	WrapNumber,
	WrapContent,
	WrapImageContent,
} from './style'

export const Instructions = () => {
	const mouse = useBoolean()
	const modal = useBoolean()
	const { t } = useTranslation('common')

	return (
		<>
			<Container>
				<Wrapper>
					<WrapContent
						onClick={modal.setTrue}
						onMouseEnter={mouse.setTrue}
						onMouseLeave={mouse.setFalse}
					>
						<WrapImage>
							<WrapImageContent open={modal.value || mouse.value}>
								<Image fill src={ImageDisplay.src} alt='' />
							</WrapImageContent>
						</WrapImage>
						<WrapPlay
							whileHover={{
								scale: '1.1',
							}}
							style={{
								bottom: mouse.value || modal.value ? 'calc(50% - 30px)' : '30px',
								right: mouse.value || modal.value ? 'calc(50% - 130px)' : '-20px',
							}}
						>
							<Stack>
								<IconPlay />
							</Stack>
							<Typography fontWeight='400' variant='title90' component='h5'>
								{t('instruction')}
							</Typography>
						</WrapPlay>
					</WrapContent>
					<Stack>
						<Typography variant='title10' component='h2'>
							{t('how_does_robosell_work')}
						</Typography>
						<Typography mb='24px' component='h3' variant='text10'>
							<Trans
								i18nKey='it_takes_only_15_minutes_to_launch_your_business_platform'
								components={{
									linkTag: (
										<Typography
											component='span'
											fontWeight='500'
											variant='inherit'
											color='colors.BLACK'
										/>
									),
								}}
							/>
						</Typography>
						<List>
							{INSTRUCTIONS.map((instruction, i: number) => (
								<Stack gap='16px' key={i} component='li' direction='row' alignItems='center'>
									<WrapNumber>0{i + 1}</WrapNumber>
									<Stack>
										<Typography variant='title60' lineHeight='32px'>
											{t(instruction.title)}
										</Typography>
										<Typography variant='text20' lineHeight='20px'>
											{t(instruction.text)}
										</Typography>
									</Stack>
								</Stack>
							))}
						</List>
					</Stack>
				</Wrapper>
			</Container>
			<Dialog fullWidth open={modal.value} onClose={modal.setFalse}>
				<iframe
					frameBorder='0'
					title='YouTube video player'
					referrerPolicy='strict-origin-when-cross-origin'
					src='https://www.youtube.com/embed/XepgHqR7V5o?si=In6kymykr8h86TYX&rel=0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					style={{
						width: '100%',
						height: '50vh',
					}}
				/>
			</Dialog>
		</>
	)
}
