import dayjs, { type Dayjs } from 'dayjs'
import ImageBlog1 from '@/assets/images/blog-1.webp'
import ImageBlog2 from '@/assets/images/blog-2.webp'
import ImageBlog3 from '@/assets/images/blog-3.webp'

export interface BlogProps {
	date: Dayjs
	photo: string
	title: string
	isMain: boolean
}

export const BLOGS: BlogProps[] = [
	{
		isMain: true,
		date: dayjs(),
		photo: ImageBlog1.src,
		title: 'Most popular design systems to learn from in 2022',
	},
	{
		isMain: true,
		date: dayjs(),
		photo: ImageBlog2.src,
		title: 'Most popular design systems to learn from in 2022',
	},
	{
		isMain: true,
		date: dayjs(),
		photo: ImageBlog3.src,
		title: 'Most popular design systems to learn from in 2022',
	},
	{
		isMain: false,
		date: dayjs(),
		photo: ImageBlog2.src,
		title: 'Most popular design systems to learn from in 2022',
	},
]
