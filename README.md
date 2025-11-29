# 11ty Liquid Optimized

This project converted the static html, css, js, svg template named 'ellie' to 11ty / liquid with html, css, js, svg optimization & minification. The goal was to make it ultra fast via 11ty SSG and even more so with minification and optimization of all assets.

- The SVGs were compiled into a sprite and then displayed via liquid.
- The html, css, js, svg are optimized and minified during production build.
- supports dev and prod environments.

## Usage. See package.json

See package.json file for all npm options. Here's the main two:

- Development: `npm run dev`
- Production Build: `npm run build:prod`

## Features

### Liquid Templates

- Base Layout: `_layouts/base.liquid`
- Components: `_/includes/components`
- Partials: `_includes/partials`
- SVG Layouts: `_includes/svgs`
- Data for site defaults and env: `_data`

### Static Assets

- Static Assets css | js | media: `static/`
- SVG: Migrated files to an svg sprite: `static/svg`

### HTML, CSS, JS, SVG Optimization

Here are the dev depencies, most of which are used to optimizatize the static assets for prod release. The folder `/eleventy-config` has all the optimization files.

- "@11ty/eleventy": "^3.1.2",
- "autoprefixer": "^10.4.21",
- "cssnano": "^7.0.7",
- "esbuild": "^0.25.6",
- "globby": "^14.1.0",
- "html-minifier-terser": "^7.2.0",
- "postcss": "^8.5.6",
- "postcss-custom-media": "^11.0.6",
- "postcss-custom-properties": "^14.0.6",
- "postcss-import": "^16.1.1",
- "postcss-nested": "^7.0.2",
- "svgo": "^4.0.0"

### Image Optimization

The template has no raster images so doesn't include image optimization. 11ty has a plugin for that [11ty Image Optimization](https://www.11ty.dev/docs/plugins/image/)

### LICENSE

Based on the "ellie" template (see `/orig_static_html/ellie.zip`).

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

11ty uses the MIT License, which is more permissive.
