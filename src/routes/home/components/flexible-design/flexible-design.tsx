import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState, type MouseEvent } from 'react'
import { IconCamera } from '@/assets/icons/camera'
import { IconLaptop } from '@/assets/icons/laptop'
import { IconMobile } from '@/assets/icons/mobile'
import { IconIphone } from '@/assets/icons/iphone'
import ToggleButton from '@mui/material/ToggleButton'
import { IconMacbookBody } from '@/assets/icons/macbook-body'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { IconMacbookFooter } from '@/assets/icons/macbook-footer'
import ImageWebappWebsiteShop from '@/assets/images/webapp-website-shop.webp'
import { Wrapper, Container, WrapCamera, WrapImage, WrapImageBody } from './style'
import ImageWebappWebsiteRestaurant from '@/assets/images/webapp-website-restaurant.webp'

export const FlexibleDesign = () => {
	const [device, setDevice] = useState('laptop')
	const [platform, setPlatform] = useState('restaurant')

	const handleChangePlatform = (_: MouseEvent<HTMLElement>, device: string) => {
		setPlatform(device)
	}

	const handleChangeDevice = (_: MouseEvent<HTMLElement>, platform: string) => {
		setDevice(platform)
	}

	return (
		<Container>
			<Wrapper>
				<Typography mb='16px' variant='title20' component='h2'>
					Moslashuvchan Dizayn
				</Typography>
				<Typography mb='80px' variant='text' component='h3' maxWidth='707px'>
					If you receive an order by phone, you can also manage those orders by entering them into
					the system.
				</Typography>
				<Stack width='100%' direction='row'>
					<Stack width='100%' flexGrow={1} alignItems='center'>
						{device === 'mobile' ? (
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
					<Stack pt='50px' gap='50px' component='ul' minWidth='390px'>
						<Stack gap='14px' width='100%' component='li'>
							<Typography variant='title110' component='h3'>
								Web app turi
							</Typography>
							<Stack width='100%' maxWidth='390px'>
								<ToggleButtonGroup
									exclusive
									fullWidth
									value={platform}
									aria-label='Platform'
									onChange={handleChangePlatform}
								>
									<ToggleButton value='restaurant'>Restaurant</ToggleButton>
									<ToggleButton value='shop'>Shop</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
						<Stack gap='14px' width='100%' component='li'>
							<Typography variant='title110' component='h3'>
								Device
							</Typography>
							<Stack width='100%' maxWidth='390px'>
								<ToggleButtonGroup
									exclusive
									fullWidth
									value={device}
									aria-label='Device'
									onChange={handleChangeDevice}
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
									<ToggleButton value='laptop'>
										<Stack justifyContent='center'>
											<IconLaptop />
										</Stack>
										Laptop
									</ToggleButton>
									<ToggleButton value='mobile'>
										<Stack justifyContent='center'>
											<IconMobile />
										</Stack>
										Mobile
									</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Wrapper>
		</Container>
	)
}
