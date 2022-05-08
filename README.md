## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

"background": {
"service_worker": "background.js"
},
action: {
"default_icon": {
"16": "/images/get_started16.png",
"32": "/images/get_started32.png",
"48": "/images/get_started48.png",
"128": "/images/get_started128.png"
}
},
"options_page": "options.html",
"icons": {
"16": "/images/get_started16.png",
"32": "/images/get_started32.png",
"48": "/images/get_started48.png",
"128": "/images/get_started128.png"
}

NOTE: do not create an `index.css` file or youll get vanilla-extract error due to `index.css.ts` already existing
