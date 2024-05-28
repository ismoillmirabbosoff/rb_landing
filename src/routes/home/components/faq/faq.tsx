import { FAQ } from '@/constants/faq'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Wrapper, Container } from './style'
import Accordion from '@mui/material/Accordion'
import { IconMinus } from '@/assets/icons/minus'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'next-i18next'
import { useState, type SyntheticEvent } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

const BOT_FATHER = 'https://t.me/BotFather'

export const Faq = () => {
	const { t } = useTranslation('common')
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
					{t('frequently_asked_questions')}
				</Typography>
				<Typography
					variant='text'
					component='h3'
					color='colors.GRAY10'
					mb={{ xs: '30px', md: '70px' }}
				>
					{t('everything_you_need_to_know_about_the_product_and_billing')}
				</Typography>
				<Stack width='100%' gap={{ xs: '8px', md: '15px' }}>
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
										{t(title)}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Divider
										sx={theme => ({
											mb: { xs: '9px', md: '17px' },
											borderColor: theme.palette.colors.GRAY160,
										})}
									/>
									{text.title && (
										<Typography mb='10px' variant='title60' component='h3'>
											{t(text.title)}
										</Typography>
									)}
									<Stack gap='5px' component='ul'>
										{text.list.map((title, i: number) => {
											return (
												<Typography
													key={i}
													component='li'
													variant='text90'
													pr={{ xs: '0', md: '50px' }}
												>
													-{' '}
													{title ===
													'enter_token_enter_your_bot_token_which_you_can_get_by_creating_a_bot_through_botfather_on_telegram' ? (
														<Trans
															i18nKey={title}
															components={{
																linkTag: (
																	<Typography
																		component='a'
																		target='_blank'
																		variant='inherit'
																		href={BOT_FATHER}
																		color={theme => theme.palette.colors.PURPLE}
																	/>
																),
															}}
														/>
													) : (
														t(title)
													)}
												</Typography>
											)
										})}
									</Stack>
								</AccordionDetails>
							</Accordion>
						)
					})}
				</Stack>
			</Wrapper>
		</Container>
	)
}
