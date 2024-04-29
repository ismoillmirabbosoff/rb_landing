import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import { INSTRUCTIONS } from './constants'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import Typography from '@mui/material/Typography'
import { Wrapper, WrapPlay, Container } from './style'
import ImageHowWorksInstruction from '@/assets/images/how-works-instruction.webp'

export const Instructions = () => {
	const mouse = useBoolean()
	const modal = useBoolean()

	return (
		<>
			<Container>
				<Wrapper>
					<Stack
						pt='18px'
						position='relative'
						onMouseEnter={mouse.setTrue}
						onMouseLeave={mouse.setFalse}
					>
						<Image fill src={ImageHowWorksInstruction.src} alt='res' />
						<WrapPlay
							whileHover={{
								scale: '1.1',
							}}
							onClick={modal.setTrue}
							style={{
								bottom: mouse.value || modal.value ? 'calc(50% - 75px)' : '30px',
								right: mouse.value || modal.value ? 'calc(50% - 130px)' : '-40px',
							}}
						>
							<Stack>
								<IconPlay />
							</Stack>
							<Typography fontWeight='400' variant='title90' component='h5'>
								Introduction
							</Typography>
						</WrapPlay>
					</Stack>
					<Stack>
						<Typography variant='title10' component='h2'>
							How It Works
						</Typography>
						<Typography mb='24px' component='h3' variant='text10'>
							It takes only{' '}
							<Typography component='span' fontWeight='500' variant='inherit' color='colors.BLACK'>
								15 minutes
							</Typography>{' '}
							to create a store and you can start selling
						</Typography>
						<Stack component='ul'>
							{INSTRUCTIONS.map((instruction, i: number) => (
								<Stack gap='16px' key={i} component='li' direction='row' alignItems='center'>
									<Typography>{i + 1}</Typography>
									<Stack>
										<Typography variant='title60' lineHeight='32px'>
											{instruction.title}
										</Typography>
										<Typography variant='text20' lineHeight='20px'>
											{instruction.text}
										</Typography>
									</Stack>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Wrapper>
			</Container>
			<Dialog fullWidth open={modal.value} onClose={modal.setFalse}>
				<iframe
					frameBorder='0'
					title='YouTube video player'
					referrerPolicy='strict-origin-when-cross-origin'
					src='https://www.youtube.com/embed/7_N6dy-pHho?si=wmQgUqPexj38Y1BE'
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
