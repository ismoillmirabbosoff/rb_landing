import { FAQ } from '@/constants/faq'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Wrapper, Container } from './style'
import Accordion from '@mui/material/Accordion'
import { IconMinus } from '@/assets/icons/minus'
import Typography from '@mui/material/Typography'
import { useState, type SyntheticEvent } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

export const Faq = () => {
	const [expanded, setExpanded] = useState<number | false>(false)

	const handleChange = (panel: number) => (_: SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<Container>
			<Wrapper>
				<Typography
					component='h2'
					variant='title30'
					mb={{
						xs: '7px',
						md: '15px',
					}}
				>
					Frequently asked questions
				</Typography>
				<Typography
					variant='text'
					component='h3'
					color='colors.GRAY10'
					mb={{ xs: '30px', md: '70px' }}
				>
					Everything you need to know about the product and billing.
				</Typography>
				<Stack gap={{ xs: '8px', md: '15px' }}>
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
										sx={theme => ({
											mb: { xs: '9px', md: '17px' },
											borderColor: theme.palette.colors.GRAY160,
										})}
									/>
									<Typography variant='text90' component='p' pr={{ xs: '0', md: '50px' }}>
										{text}
									</Typography>
								</AccordionDetails>
							</Accordion>
						)
					})}
				</Stack>
			</Wrapper>
		</Container>
	)
}
