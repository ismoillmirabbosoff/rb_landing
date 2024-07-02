import Link from 'next/link'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import { useTranslation } from 'next-i18next'
import { numberFormat } from '@/utils/format'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import { IconRemove } from '@/assets/icons/remove'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ScrollDown } from '@/components/scroll-down'
import { IconInfinity } from '@/assets/icons/infinity'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Navigation, EffectCards } from 'swiper/modules'
import { IconTickSolid } from '@/assets/icons/tick-solid'
import { useRef, useState, type SyntheticEvent } from 'react'
import { IconLinearGradient } from '@/assets/icons/linear-gradient'
import { TAB_PLANS, PRICING_PLANS, PLAN_PLATFORMS } from '@/constants/plan'
import type { PlanProps, PlanTypeProps, PlatformTypeProps } from '@/types/plan'
import {
	Card,
	Cards,
	TabList,
	Wrapper,
	Container,
	WrapLabel,
	WrapDiscount,
	FormControlLabel,
} from './style'
import { IconButton } from '@mui/material'
import { IconDirectionLeft } from '@/assets/icons/direction-left'

const adminBaseURL = process.env.NEXT_PUBLIC_ADMIN_BASE_URL

const rotateArray = (arr: PlanProps[], positions: number) => {
	return arr.slice(-positions).concat(arr.slice(0, -positions))
}

export const Plans = () => {
	const theme = useTheme()
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	const [plan, setPlan] = useState<PlanTypeProps>('monthly')
	const [platform, setPlatform] = useState<PlatformTypeProps>(PLAN_PLATFORMS.TELEGRAM.platform)

	const handleChangePlan = (_: SyntheticEvent, plan: PlanTypeProps) => {
		setPlan(plan)
	}

	const handleChangePlatform = (_: SyntheticEvent, platform: string) => {
		setPlatform(platform as PlatformTypeProps)
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

	const list = () => {
		const newArr = matches
			? rotateArray(Object.values(PRICING_PLANS), 2)
			: Object.values(PRICING_PLANS)
		return (
			<>
				{newArr.map((p, index: number) => {
					const price = p.price[platform]
					const discountPrice = (price * (100 - TAB_PLANS[plan].discount)) / 100

					return (
						<SwiperSlide key={index}>
							<Card sx={theme => ({ borderColor: theme.palette.colors[p.color] })}>
								<Stack mb='14px' flexGrow={1}>
									<Stack flexGrow={1}>
										<Stack direction='row' alignItems='flex-end'>
											{plan !== 'monthly' && (
												<Typography
													mr='5px'
													variant='title60'
													whiteSpace='nowrap'
													sx={theme => ({
														color: theme.palette.colors.GRAY50,
														textDecorationLine: 'line-through',
													})}
												>
													{numberFormat(price)} {t('soum')}
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
									<Button target='_blank' component={Link} href={adminBaseURL} size='small'>
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
									{content('count', p.employee, 'employee')}
									{content('access', p.chat, 'chat')}
									{content('access', p.stock, 'stock')}
									{content('full', p.analytics, 'analytics')}
									{content('access', p.export, 'export', true)}
								</Stack>
							</Card>
						</SwiperSlide>
					)
				})}
			</>
		)
	}

	return (
		<Container>
			<ScrollDown id='plans' />
			<Wrapper>
				<Stack sx={{ px: { xs: '18px', md: '0' } }}>
					<Stack position='relative' width='100%' alignItems='center'>
						<Stack top='-90%' position='absolute' alignItems='center' zIndex='-1'>
							<IconLinearGradient />
						</Stack>
						<Typography variant='title30' component='h2'>
							{t('tariff_plans')}
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
								gap: { xs: '0 30px', md: 0 },
								justifyContent: { xs: 'center', md: 'space-between' },
							}}
						>
							{Object.values(PLAN_PLATFORMS).map((p, i) => (
								<FormControlLabel
									key={i}
									value={p.platform}
									control={<Radio />}
									label={
										<WrapLabel>
											{p.icon}
											{p.title}
										</WrapLabel>
									}
								/>
							))}
						</RadioGroup>
					</Stack>
				</Stack>
				<TabContext value={plan}>
					<Stack sx={{ px: { xs: '18px', md: '0' } }} alignItems='center'>
						<TabList
							aria-label='plans'
							onChange={handleChangePlan}
							sx={{
								mb: { xs: '28px', md: '47px' },
							}}
						>
							{Object.values(TAB_PLANS).map(({ label, value, discount }) => (
								<Tab
									key={value}
									value={value}
									label={
										<Stack gap='5px' direction='row' alignItems='center'>
											<Typography variant='inherit' component='h4'>
												{t(label)}
											</Typography>
											{discount > 0 && <WrapDiscount>-{discount} %</WrapDiscount>}
										</Stack>
									}
								/>
							))}
						</TabList>
					</Stack>
					{matches ? (
						<div style={{ padding: '0 20px', width: '100%', position: 'relative' }}>
							<Swiper
								loop={true}
								initialSlide={2}
								effect={'cards'}
								grabCursor={true}
								modules={[Navigation, EffectCards]}
								className='mySwiper'
								centeredSlides={true}
								navigation={{
									prevEl: navigationPrevRef.current,
									nextEl: navigationNextRef.current,
								}}
								onBeforeInit={swiper => {
									// @ts-expect-error
									swiper.params.navigation.prevEl = navigationPrevRef.current
									// @ts-expect-error
									swiper.params.navigation.nextEl = navigationNextRef.current
								}}
							>
								{list()}
							</Swiper>
							<IconButton
								ref={navigationPrevRef}
								className='swiper-b p-custom'
								sx={{ transform: 'rotate(180deg)' }}
							>
								<IconDirectionLeft />
							</IconButton>
							<IconButton ref={navigationNextRef} className='swiper-b n-custom'>
								<IconDirectionLeft />
							</IconButton>
						</div>
					) : (
						<Cards>{list()}</Cards>
					)}
				</TabContext>
			</Wrapper>
		</Container>
	)
}
