import dayjs, { type Dayjs } from 'dayjs'
import ImageBlog1 from '@/assets/images/blog-1.webp'
import ImageBlog2 from '@/assets/images/blog-2.webp'
import ImageBlog3 from '@/assets/images/blog-3.webp'

interface BlogProps {
	date: Dayjs
	photo: string
	title: string
}

export const BLOGS: BlogProps[] = [
	{
		date: dayjs(),
		photo: ImageBlog1.src,
		title: 'Most popular design systems to learn from in 2022',
	},
	{
		date: dayjs(),
		photo: ImageBlog2.src,
		title: 'Most popular design systems to learn from in 2022',
	},
	{
		date: dayjs(),
		photo: ImageBlog3.src,
		title: 'Most popular design systems to learn from in 2022',
	},
]
