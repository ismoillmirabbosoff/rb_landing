import Link from 'next/link'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import type { PlanTypeProps } from '@/types/plan'
import { IconRemove } from '@/assets/icons/remove'
import { numberFormat } from '@/utils/number-format'
import { useState, type SyntheticEvent } from 'react'
import { IconInfinity } from '@/assets/icons/infinity'
import { IconTickSolid } from '@/assets/icons/tick-solid'
import { TAB_PLANS, PRICING_PLANS } from '@/constants/plan'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'
import { Card, Cards, TabList, Wrapper, Container, WrapDiscount } from './style'

export const Plans = () => {
	const [plan, setPlan] = useState<PlanTypeProps>('monthly')

	const handleChangePlan = (_: SyntheticEvent, plan: PlanTypeProps) => {
		setPlan(plan)
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
					<Typography textTransform='capitalize'>{title}</Typography>
					{type === 'full' ? (
						<Typography color={theme => (!value ? theme.palette.colors.RED : undefined)}>
							{value ? 'full' : 'incomplete'}
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
						<Typography>{value}</Typography>
					) : (
						<IconInfinity />
					)}
				</Stack>
				{!noBorder && <Divider />}
			</Stack>
		)
	}

	return (
		<Container>
			<Wrapper>
				<Stack mb='9px' position='relative' width='100%' alignItems='center'>
					<Stack top='-90%' position='absolute' alignItems='center'>
						<IconLinearGradient />
					</Stack>
					<Typography variant='title30' component='h2'>
						Our Plans
					</Typography>
					<Typography
						mb='56px'
						variant='text'
						component='h3'
						color='colors.GRAY10'
						maxWidth='871px'
					>
						Check what plan is best for You. We care about your convenience in using the
						application, so you can update your plan up or down at any time
					</Typography>
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
											<Typography>{label}</Typography>
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
									<Stack mb='14px'>
										<Stack direction='row'>
											{plan !== 'monthly' && (
												<Typography>
													{numberFormat(price)}{' '}
													<Typography variant='inherit' component='span'>
														So’m
													</Typography>
												</Typography>
											)}
											<Typography>{numberFormat(discountPrice)}</Typography>
											<Typography>So’m</Typography>
										</Stack>
										<Typography mt='19px'>{p.title}</Typography>
										<Typography m='3px 0 18px'>{p.desc}</Typography>
										<Button href={`${p.type}?plan=${plan}`} component={Link} size='small'>
											Get Started
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
