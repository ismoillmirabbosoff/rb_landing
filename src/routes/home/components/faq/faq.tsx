import { FAQ } from '@/constants/faq'
import Stack from '@mui/material/Stack'
import { Wrapper, Container } from './style'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import { useState, type SyntheticEvent } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { IconMinus } from '@/assets/icons/minus'
import { Divider } from '@mui/material'

export const Faq = () => {
	const [expanded, setExpanded] = useState<number | false>(false)

	const handleChange = (panel: number) => (_: SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<Container>
			<Wrapper>
				<Typography mb='15px' variant='title30' component='h2'>
					Frequently asked questions
				</Typography>
				<Typography mb='70px' variant='text' component='h3' color='colors.GRAY10'>
					Everything you need to know about the product and billing.
				</Typography>
				<Stack gap='40px' direction='row'>
					<Stack gap='15px'>
						{FAQ.map(({ text, title }, i: number) => {
							const isExpanded = expanded === i
							return (
								<Accordion key={i} expanded={isExpanded} onChange={handleChange(i)}>
									<AccordionSummary
										id={`${i}-header`}
										aria-controls={`${i}-content`}
										expandIcon={isExpanded ? <IconMinus /> : undefined}
									>
										<Typography variant='title100' component='h4'>
											{title}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Divider
											sx={theme => ({ mb: '17px', borderColor: theme.palette.colors.GRAY160 })}
										/>
										<Typography variant='text90' component='p' pr='50px'>
											{text}
										</Typography>
									</AccordionDetails>
								</Accordion>
							)
						})}
					</Stack>
				</Stack>
			</Wrapper>
		</Container>
	)
}
