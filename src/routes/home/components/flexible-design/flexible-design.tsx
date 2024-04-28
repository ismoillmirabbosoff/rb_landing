import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState, type MouseEvent } from 'react'
import { IconCamera } from '@/assets/icons/camera'
import { IconIphone } from '@/assets/icons/iphone'
import { IconGlobal } from '@/assets/icons/global'
import ToggleButton from '@mui/material/ToggleButton'
import { IconTelegram } from '@/assets/icons/telegram'
import { IconMacbookBody } from '@/assets/icons/macbook-body'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { IconMacbookFooter } from '@/assets/icons/macbook-footer'
import ImageWebappWebsiteShop from '@/assets/images/webapp-website-shop.webp'
import ImageWebappWebsiteRestaurant from '@/assets/images/webapp-website-restaurant.webp'
import {
	Wrap,
	Cards,
	Wrapper,
	WrapIcon,
	Container,
	WrapImage,
	WrapCamera,
	WrapImageBody,
} from './style'

export const FlexibleDesign = () => {
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
					Moslashuvchan Dizayn
				</Typography>
				<Typography mb={{ md: '80px' }} variant='text' component='h3' maxWidth='707px'>
					If you receive an order by phone, you can also manage those orders by entering them into
					the system.
				</Typography>
				<Wrap>
					<Stack width='100%' flexGrow={1} alignItems='center'>
						{platform === 'telegram' ? (
							<IconIphone />
						) : (
							<Stack alignItems='center'>
								<Stack display='block' position='relative'>
									<IconMacbookBody />
									<WrapImageBody>
										<WrapImage>
											<WrapCamera>
												<IconCamera />
											</WrapCamera>
											<Image
												fill
												src={
													platform === 'shop'
														? ImageWebappWebsiteShop.src
														: ImageWebappWebsiteRestaurant.src
												}
												alt='res'
											/>
										</WrapImage>
									</WrapImageBody>
								</Stack>
								<IconMacbookFooter />
							</Stack>
						)}
					</Stack>
					<Cards>
						<Stack gap='14px' width='100%' component='li'>
							<Typography variant='title110' component='h3'>
								Platform
							</Typography>
							<Stack width='100%' maxWidth='390px'>
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
										Website
									</ToggleButton>
									<ToggleButton value='telegram'>
										<WrapIcon>
											<IconTelegram />
										</WrapIcon>
										Telegram
									</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
						<Stack gap='14px' width='100%' component='li'>
							<Typography variant='title110' component='h3'>
								Web app turi
							</Typography>
							<Stack width='100%' maxWidth='390px'>
								<ToggleButtonGroup
									exclusive
									fullWidth
									value={business}
									aria-label='Business'
									onChange={handleChangeBusiness}
								>
									<ToggleButton value='restaurant'>Restaurant</ToggleButton>
									<ToggleButton value='shop'>Shop</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
					</Cards>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
