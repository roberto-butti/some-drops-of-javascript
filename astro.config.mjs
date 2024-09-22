import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind'


// https://astro.build/config
export default defineConfig({
  site: 'https://drops-of-javascript.hi-folks.dev/',
  integrations: [
    starlight({
      title: 'Some drops of JavaScript',
      customCss: ['./src/styles/tailwind.css', './src/styles/custom.css'],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content:
              'https://raw.githubusercontent.com/roberto-butti/some-drops-of-javascript/main/public/header.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content:
              'https://raw.githubusercontent.com/roberto-butti/some-drops-of-javascript/main/public/header.png',
          },
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/roberto-butti/some-drops-of-javascript/edit/main',
      },
      social: {
        github: 'https://github.com/roberto-butti/some-drops-of-javascript',
      },
      sidebar: [
        {
          label: '📔 Intro',
          autogenerate: { directory: '00-intro' },
          collapsed: false,
        },
        {
          label: '🧑‍💻 System',
          autogenerate: { directory: '01-system' },
          collapsed: true,
        },
        {
          label: '📚 Array',
          autogenerate: { directory: '02-array' },
          collapsed: true,
        },
        {
          label: '🧑‍🎨 Vars, Objects, Operators',
          autogenerate: { directory: '03-var' },
          collapsed: true,
        },
        {
          label: '💫 Functions',
          autogenerate: { directory: '04-functions' },
          collapsed: true,
        },
        {
          label: '🪕 Strings',
          autogenerate: { directory: '05-string' },
          collapsed: true,
        },
        {
          label: '🗃️ Files',
          autogenerate: { directory: '06-files' },
          collapsed: true,
        },
        {
          label: '[ 🧑‍💻 Sources ]',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Markdown',
              link: 'https://github.com/roberto-butti/some-drops-of-javascript/tree/main/src/content/docs',
            },
            {
              label: 'Examples',
              link: 'https://github.com/roberto-butti/some-drops-of-javascript/tree/main/examples',
            },
          ],
          collapsed: true,
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
})
