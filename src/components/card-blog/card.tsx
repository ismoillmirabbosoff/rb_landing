import Image from 'next/image'
import { Card } from './style'
import { type BlogProps } from '@/constants/blog'

export const CardBlog = (props: BlogProps) => {
	return (
		<Card>
			<Image fill src={props.photo} alt={props.title} />
		</Card>
	)
}
