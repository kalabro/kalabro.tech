# kalabro.tech source code

Hi there, this repo contains the source code for my personal blog [kalabro.tech](https://kalabro.tech).

## Development

- Install Node.js v10 `¯\_(ツ)_/¯`
- `npm install`
- `npm run develop`

## Deployment

Push to `main` branch and Cloudflare Pages will build and deploy it.

Required environment variables:

| Variable Name               | Value                |
|-----------------------------|----------------------|
|`DOMAIN_URL`                 |`https://kalabro.tech`|
|`NODE_VERSION`               |`10.24.1`             |
|`SHARP_IGNORE_GLOBAL_LIBVIPS`|`true`                |
