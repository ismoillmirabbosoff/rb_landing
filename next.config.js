/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withVideos = require('next-videos')

const nextConfig = {
	i18n,
	swcMinify: true,
	reactStrictMode: true,
	...withVideos(),
}

module.exports = nextConfig
