import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ImageAdvantagesTopProducts from '@/assets/images/advantages-top-products.webp'

export const TopProducts = () => {
	return (
		<>
			<Typography mb='6px' variant='title60' component='h5'>
				Top 10 products
			</Typography>
			<Typography variant='text120' component='h6'>
				Lorem ipsum dolor sit amet consectetur. Quis fermentum a lectus.
			</Typography>
			<Stack mb='-20px'>
				<Image fill src={ImageAdvantagesTopProducts.src} alt='res' />
			</Stack>
		</>
	)
}
