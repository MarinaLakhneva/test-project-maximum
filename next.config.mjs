/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'photobank.maximum.expert',
				port: '',
				pathname: '/**',
			},
		],
	},
	output: 'standalone',
};

export default nextConfig;


