import Link from 'next/link'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import TabContext from '@mui/lab/TabContext'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import type { PlanTypeProps } from '@/types/plan'
import RadioGroup from '@mui/material/RadioGroup'
import { IconRemove } from '@/assets/icons/remove'
import { numberFormat } from '@/utils/number-format'
import { useState, type SyntheticEvent } from 'react'
import { IconInfinity } from '@/assets/icons/infinity'
import { IconTickSolid } from '@/assets/icons/tick-solid'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'
import { TAB_PLANS, PRICING_PLANS, PLAN_PLATFORMS } from '@/constants/plan'
import { Card, Cards, TabList, Wrapper, Container, WrapDiscount } from './style'

export const Plans = () => {
	const { t } = useTranslation('common')
	const [plan, setPlan] = useState<PlanTypeProps>('monthly')
	const [platform, setPlatform] = useState('TELEGREM')

	const handleChangePlan = (_: SyntheticEvent, plan: PlanTypeProps) => {
		setPlan(plan)
	}

	const handleChangePlatform = (_: SyntheticEvent, platform: string) => {
		setPlatform(platform)
	}

	const content = (
		type: 'count' | 'access' | 'full',
		value: boolean | number,
		title: string,
		noBorder?: boolean,
	) => {
		return (
			<Stack component='li'>
				<Stack py='10px' direction='row' alignItems='center' justifyContent='space-between'>
					<Typography variant='text40' component='h6'>
						{t(title)}
					</Typography>
					{type === 'full' ? (
						<Typography
							color={theme => (!value ? theme.palette.colors.RED : theme.palette.colors.GREEN)}
						>
							{t(value ? 'full' : 'incomplete')}
						</Typography>
					) : type === 'access' ? (
						<Stack
							sx={theme => ({
								svg: {
									width: '24px',
									height: '24px',
								},
								'svg path': {
									stroke: value ? theme.palette.colors.GREEN : theme.palette.colors.RED,
								},
							})}
						>
							{value ? <IconTickSolid /> : <IconRemove />}
						</Stack>
					) : typeof value === 'number' && value > 0 ? (
						<Typography variant='text50' color='colors.GREEN'>
							{value}
						</Typography>
					) : (
						<IconInfinity />
					)}
				</Stack>
				{!noBorder && <Divider />}
			</Stack>
		)
	}

	return (
		<Container id='plans'>
			<Wrapper>
				<Stack position='relative' width='100%' alignItems='center'>
					<Stack top='-90%' position='absolute' alignItems='center' zIndex='-1'>
						<IconLinearGradient />
					</Stack>
					<Typography variant='title30' component='h2'>
						{t('our_plans')}
					</Typography>
					<Typography variant='text' component='h3' maxWidth='871px' color='colors.GRAY10'>
						{t(
							'check_what_plan_is_best_for_you_we_care_about_your_convenience_in_using_the_application_so_you_can_update_your_plan_up_or_down_at_any_time',
						)}
					</Typography>
				</Stack>
				<Stack my='29px' width='100%' maxWidth='780px'>
					<RadioGroup
						row
						value={platform}
						onChange={handleChangePlatform}
						sx={{
							width: '100%',
							justifyContent: 'space-between',
						}}
					>
						{Object.values(PLAN_PLATFORMS).map((p, i) => (
							<Tooltip key={i} title={p.disabled ? t('coming_soon') : ''}>
								<FormControlLabel
									value={p.platform}
									control={<Radio />}
									disabled={p.disabled}
									label={
										<Stack gap='9px' direction='row' alignItems='center'>
											{p.icon}
											{p.title}
										</Stack>
									}
								/>
							</Tooltip>
						))}
					</RadioGroup>
				</Stack>
				<TabContext value={plan}>
					<Stack alignItems='center'>
						<TabList
							aria-label='plans'
							onChange={handleChangePlan}
							sx={{
								marginBottom: '47px',
							}}
						>
							{Object.values(TAB_PLANS).map(({ label, value, discount }) => (
								<Tab
									key={value}
									value={value}
									label={
										<Stack gap='5px' direction='row' alignItems='center'>
											<Typography component='h4'>{t(label)}</Typography>
											{discount > 0 && <WrapDiscount>-{discount} %</WrapDiscount>}
										</Stack>
									}
								/>
							))}
						</TabList>
					</Stack>
					<Cards>
						{Object.values(PRICING_PLANS).map((p, index: number) => {
							const price = p.price
							const discountPrice = (price * (100 - TAB_PLANS[plan].discount)) / 100

							return (
								<Card key={index} sx={theme => ({ borderColor: theme.palette.colors[p.color] })}>
									<Stack mb='14px' flexGrow={1}>
										<Stack flexGrow={1}>
											<Stack direction='row' alignItems='flex-end'>
												{plan !== 'monthly' && (
													<Typography
														mr='5px'
														variant='title60'
														sx={theme => ({
															color: theme.palette.colors.GRAY50,
															textDecorationLine: 'line-through',
														})}
													>
														{numberFormat(price)}{' '}
														<Typography
															fontSize='14px'
															fontWeight='400'
															component='span'
															variant='inherit'
														>
															{t('soum')}
														</Typography>
													</Typography>
												)}
												<Typography variant='title70' component='h5'>
													{numberFormat(discountPrice)}
												</Typography>
												<Typography ml='5px' variant='text40'>
													{t('soum')}
												</Typography>
											</Stack>
											<Typography mt='19px' variant='title60' color='colors.BLACK20'>
												{t(p.title)}
											</Typography>
											<Typography m='3px 0 18px' variant='text40' color='colors.BLACK30'>
												{t(p.desc)}
											</Typography>
										</Stack>
										<Button href={`${p.type}?plan=${plan}`} component={Link} size='small'>
											{t('get_started')}
										</Button>
									</Stack>
									<Stack component='ul'>
										{content('count', p.banner, 'banner')}
										{content('access', p.promocode, 'promocode')}
										{content('access', p.source, 'source')}
										{content('count', p.product, 'product')}
										{content('access', p.discount, 'discount')}
										{content('count', p.branch, 'branch')}
										{content('count', p.mailing, 'mailing')}
										{content('access', p.chat, 'chat')}
										{content('access', p.stock, 'stock')}
										{content('full', p.analytics, 'analytics')}
										{content('access', p.export, 'export', true)}
									</Stack>
								</Card>
							)
						})}
					</Cards>
				</TabContext>
			</Wrapper>
		</Container>
	)
}
