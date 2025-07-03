// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'One Kanban',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OneKanban/OneKanban' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Kanban', slug: 'guides/kanban' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
