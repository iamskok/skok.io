# README

[![Netlify Status](https://api.netlify.com/api/v1/badges/fde8d2b7-db16-46c8-95f8-39f3ba641336/deploy-status)](https://app.netlify.com/sites/skok/deploys)

Vladimir Skok's development blog.

## Setup

Create 2 env files in the root of project:

1. `.env.production`
2. `.env.development`

Paste these variables in both of the files:

```sh
FIREBASE_API_KEY=BISfSyD32C3OSD31rF4V1FHdX_XEo6v5FaDHSEi
FIREBASE_AUTH_DOMAIN=example.firebaseapp.com
FIREBASE_DATABASE_URL=https://example.firebaseio.com
FIREBASE_PROJECT_ID=example
FIREBASE_STORAGE_BUCKET=example.appspot.com
```

For Netlify functions:

- open [Netlify admin panel](https://app.netlify.com/)
- site overview
- site settings
- build and deploy
- environment
- click the "Edit" button

Copy and paste all production variables from `.env.production`. Copy and paste all
development variables from `.env.development` and add `DEV` suffix to each one of
them, e.g. `FIREBASE_PROJECT_ID_DEV`.

Add Firebase security configurations for production environment (it's required because your API keys are stored on the client):

- go to [Google developer console](https://console.developers.google.com/apis)
- select your Firebase project
- click on the "Credentials" tab
- from the "API keys" list click on the "Browser key"
- click on the "Application restrictions" tab
- select "HTTP referrers (web sites)" option
- in the "Accept requests from these HTTP referrers" section enter your production site address in `*.example.com/*` format
- in the "API restrictions" sections choose the "Restrict key" option
- select "Cloud Firestore API" for the list

## Scripts

| Name         | Description                                       |
| ------------ | ------------------------------------------------- |
| lint         | Lint all `js` files                               |
| lint:fix     | Lint and fix all `js` file                        |
| prettier     | Lint all `json`, `md`, and `mdx` files            |
| prettier:fix | Lint and format all `json`, `md`, and `mdx` files |
| clean        | Wipe `.cache` and `public` directories            |
| dev          | Start development server                          |
| build        | Compile application                               |
| serve        | serve production build                            |
