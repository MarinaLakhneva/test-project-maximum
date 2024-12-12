/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['photobank.maximum.expert'],
		unoptimized: true, // Отключаем оптимизацию изображений
	},
	sassOptions: {
		includePaths: ['./src'],
	},
	output: 'standalone',
};

export default nextConfig;

