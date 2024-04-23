import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { INSTRUCTIONS } from './constants'
import { Wrapper, Container } from './style'
import Typography from '@mui/material/Typography'
import ImageHowWorksInstruction from '@/assets/images/how-works-instruction.webp'

export const Instructions = () => {
	return (
		<Container>
			<Wrapper>
				<Stack pt='18px'>
					<Image fill src={ImageHowWorksInstruction.src} alt='res' />
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
	)
}
