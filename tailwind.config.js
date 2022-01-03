module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
	theme: {
		extend: {
			fontFamily: {
				base: 'var(--font-base)',
			},
			colors: {
				gray1: 'var(--color-gray1)',
				gray2: 'var(--color-gray2)',
				gray3: 'var(--color-gray3)',
				gray4: 'var(--color-gray4)',
				gray5: 'var(--color-gray5)',
				gray6: 'var(--color-gray6)',
				accent: 'var(--color-accent)',
			},
		},
	},
	plugins: [],
};
