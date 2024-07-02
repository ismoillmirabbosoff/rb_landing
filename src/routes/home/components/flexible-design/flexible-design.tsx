import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'
import { IconPhone } from '@/assets/icons/phone'
import Typography from '@mui/material/Typography'
import { useState, type MouseEvent } from 'react'
import { IconCamera } from '@/assets/icons/camera'
import { IconGlobal } from '@/assets/icons/global'
import { IconIsland } from '@/assets/icons/island'
import ToggleButton from '@mui/material/ToggleButton'
import { IconTelegram } from '@/assets/icons/telegram'
import ImagePhoneRes from '@/assets/images/phone-res.webp'
import ImagePhoneShop from '@/assets/images/phone-shop.webp'
import { IconMacbookBody } from '@/assets/icons/macbook-body'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { IconMacbookFooter } from '@/assets/icons/macbook-footer'
import ImageWebappWebsiteShop from '@/assets/images/webapp-website-shop.webp'
import ImageWebappWebsiteRestaurant from '@/assets/images/webapp-website-restaurant.webp'
import {
	Wrap,
	Cards,
	Wrapper,
	WrapMac,
	WrapIcon,
	Container,
	WrapImage,
	WrapCamera,
	WrapIsland,
	ContentPhone,
	WrapImageBody,
	WrapMacMobile,
	WrapperImage,
} from './style'

export const FlexibleDesign = () => {
	const { t } = useTranslation('common')
	const [platform, setPlatform] = useState('website')
	const [business, setBusiness] = useState('restaurant')

	const handleChangePlatform = (_: MouseEvent<HTMLElement>, platform: string) => {
		setPlatform(platform)
	}

	const handleChangeBusiness = (_: MouseEvent<HTMLElement>, business: string) => {
		setBusiness(business)
	}

	return (
		<Container>
			<Wrapper>
				<Typography mb='16px' variant='title20' component='h2'>
					{t('adaptive_design')}
				</Typography>
				<Typography mb={{ xs: '50px', md: '80px' }} variant='text' component='h3' maxWidth='707px'>
					{t(
						'flexible_and_convenient_design_for_your_customers_visibility_of_large_number_of_products_on_one_page_and_advertising_banners',
					)}
				</Typography>
				<Wrap>
					<Stack width='100%' flexGrow={1} alignItems='center'>
						{platform === 'telegram' ? (
							<WrapperImage>
								<WrapMacMobile className='phone'>
									<WrapIsland>
										<IconIsland />
									</WrapIsland>
									<ContentPhone className='phone'>
										{business === 'shop' ? (
											<Image fill src={ImagePhoneShop.src} alt='phone-shop' />
										) : (
											<Image fill src={ImagePhoneRes.src} alt='phone-res' />
										)}
									</ContentPhone>
									<IconPhone />
								</WrapMacMobile>
							</WrapperImage>
						) : (
							<Stack position='relative'>
								<WrapMac>
									<Stack width={{ xs: '100%', md: 'unset' }} display='block' position='relative'>
										<IconMacbookBody />
										<WrapImageBody>
											<WrapImage>
												<WrapCamera>
													<IconCamera />
												</WrapCamera>
												{business === 'shop' ? (
													<Image fill src={ImageWebappWebsiteShop.src} alt='shop' />
												) : (
													<Image fill src={ImageWebappWebsiteRestaurant.src} alt='res' />
												)}
											</WrapImage>
										</WrapImageBody>
									</Stack>
									<IconMacbookFooter />
								</WrapMac>
								<WrapMacMobile>
									<IconPhone />
									<WrapIsland>
										<IconIsland />
									</WrapIsland>
									<ContentPhone>
										{business === 'shop' ? (
											<Image fill src={ImagePhoneShop.src} alt='phone-shop' />
										) : (
											<Image fill src={ImagePhoneRes.src} alt='phone-res' />
										)}
									</ContentPhone>
								</WrapMacMobile>
							</Stack>
						)}
					</Stack>
					<Cards>
						<Stack gap='14px' width='100%' component='li'>
							<Typography width='100%' variant='title110' component='h3'>
								{t('platforms')}:
							</Typography>
							<Stack width='100%'>
								<ToggleButtonGroup
									exclusive
									fullWidth
									value={platform}
									aria-label='Platform'
									onChange={handleChangePlatform}
									sx={theme => ({
										'.MuiToggleButtonGroup-grouped': {
											py: '8px',
											gap: '12px',
											[theme.breakpoints.down('md')]: {
												gap: '4px',
											},
										},
										'.MuiToggleButtonGroup-grouped.Mui-selected': {
											svg: {
												path: {
													fill: theme.palette.colors.GRAY130,
												},
											},
										},
									})}
								>
									<ToggleButton value='website'>
										<WrapIcon>
											<IconGlobal />
										</WrapIcon>
										{t('web_site')}
									</ToggleButton>
									<ToggleButton value='telegram'>
										<WrapIcon>
											<IconTelegram />
										</WrapIcon>
										{t('telegram')}
									</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
						<Stack gap='14px' width='100%' component='li'>
							<Typography width='100%' variant='title110' component='h3'>
								{t('design_types')}:
							</Typography>
							<Stack width='100%' maxWidth={{ xs: '100%', md: '390px' }}>
								<ToggleButtonGroup
									exclusive
									fullWidth
									value={business}
									aria-label='Business'
									onChange={handleChangeBusiness}
								>
									<ToggleButton value='restaurant'>{t('restaurant')}</ToggleButton>
									<ToggleButton value='shop'>{t('online_store')}</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
					</Cards>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
