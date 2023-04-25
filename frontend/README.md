# vue

This template should help get you started developing with Vue 3 in Vite.

# Table of Contents
1. [Recommended IDE Setup](#recommended-ide-setup) 
2. [Type Support for `.vue` imports in TS](#type-support-for-vue-imports-in-ts)
3. [Customze configuration](#customize-configuration)
4. [Project Setup](#project-setup)
5. [Folder Structure](#folder-structure)
   1. [@core](#core)
   2. [assets](#assets)
   3. [layouts](#layouts)
   4. [pages](#pages)
   5. [navigation](#navigation)
   6. [plugins](#plugins)
   7. [router](#router)
   8. [styles](#styles)
6. [Color and Themes](#color-and-themes)
   1. [Updating colors](#updating-colors)
   2. [Themes](#themes)
7. [How to create a new page](#how-to-create-a-new-page)
   1. [Creating a page](#creating-a-page)
   2. [Subpath URL](#subpath-url)
   3. [Dynamic URL](#dynamic-url)
   4. [Catching all URLS](#catching-all-urls)
   5. [Using different layout](#using-different-layout)
   6. [Plugin docs](#plugin-docs)
8. [Styles](#styles-1)
   1. [Writing your own SCSS](#writing-your-own-scss)
   2. [Overriding variables](#overriding-variables)
   3. [Mixins](#mixins)
   4. [How to override styles using placeholders](#how-to-override-styles-using-placeholders)
9. [Navigation Menu](#navigation-menu)
   1. [Vertical Nav](#vertical-nav)
   2. [Vertical Nav Link](#vertical-nav-link)
   3. [Vertical Nav Group](#vertical-nav-group)
   4. [Vertical Nav Section Title](#vertical-nav-section-title)
   5. [Badges](#badges)
   6. [Disabling Nav Items](#disabling-nav-items)
   7. [Fetching nav items from API](#fetching-nav-items-from-api)
10. [Authentication](#authentication)
    1. [Login](#login)
    2. [Sending access token in API call](#sending-access-token-in-api-call)
    3. [Logout](#logout)
11. [Access Control](#access-control--acl-)
    1. [Overview](#overview)
    2. [Using ACL](#using-acl)
    3. [Updating ability](#updating-ability)
    4. [Route Protection](#route-protection)
    5. [Show/Hide Navigation Items](#showhide-navigation-items)
12. [Layout](#layout)
    1. [Usage](#usage)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

## Folder Structure

### @core

This directory contains core files and these files should not be changed frequently.
 
1. components 
   1. Components in this directory are auto-imported, thanks to [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

### assets

Contains logos and other static assets.

### layouts

Place app layouts in this directory. This is used in conjunction with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) which is used for [pages](#pages) directory to generate routes based on directory structure just like [next](https://nextjs.org/).
See more at [How to create a new page](#how-to-create-a-new-page).

### pages

Contains app pages. Create a new file and the route will be auto generated based on file name and its placement in this directory.

### navigation

This directory contains vertical & horizontal nav items. Items written in `src/navigation/vertical/index.ts` will be for
vertical nav; and items written in `src/navigation/horizontal/index.ts` will be for horizontal nav.
Both files are imported in `src/layouts/default.vue`.

### plugins

This directory contains plugins we are using in our project:
* CASL
* i18n
* vuetify

### router

This directory contains configuration related to the router. It doesn't have any routes as they are auto generated but it has Access Control (ACL) configurations.

### styles

Can write styles in this directory:
* `_variables.scss`: this file to override variables
* `styles.scss`: this to write custom styles

## Color and Themes

Can customize the colors via theme in Vuetify. Can customize them based on their [docs](https://vuetifyjs.com/en/features/theme/).
Themes are defined in `src/plugins/vuetify.ts`.

### Updating colors

Update colors to the desired colors in the themes as defined in `src/plugins/vuetify.ts`.

### Themes

Can add themes in the same vuetify plugin file. For detailed docs on how to use themes on vuetify, please refer to these [docs](https://vuetifyjs.com/en/features/theme/).

## How to create a new page

Create new file in `/src/pages` directory and a new page will be created with auto generated route.

### Creating a page

Create a file named `about.vue` in `/src/pages` directory. It will auto-register the route with `/about` url.
We can then navigate to http://localhost:8080/about to find the rendered content of `about.vue`.

### Subpath URL 

To create a URL which has something like http://localhost:8080/dashboard/analytics, we need to create `dashboard` directory and have to place `analytics.vue` file inside `dashboard` directory.
Create a new `directory` named dashboard in `/src/pages` directory. With this, it will generate route with the URL http://localhost:8080/dashboard/analytics.

### Dynamic URL

Generally we want to create a page which can accept id as parameter and we want to fetch data according to that id. This is called [dynamic route](https://router.vuejs.org/guide/essentials/dynamic-matching.html) in terms of vue-router.
Let's assume we want to create a dynamic route like http://localhost:8080/users/<id>, where id can be any number.
For this create new directory named users in `/src/pages` and inside `/src/pages/users` create a new file with the name `[id].vue`.
With this, if you visit http://localhost:8080/users/1 it will render for user id: 1. Here, 1 is taken from URL.

### Catching all URLS

For this all you have to do is create `[...404].vue` file inside `/src/pages` directory.
Now, your 404 page is ready. Visit any URL you haven't created (i.e. http://localhost:8080/non-existent-page) and you will see the above content rendered.
Because we written 404 after ellipsis, route name will be `404`. If we created file with `[...all].vue` then route name will be `all`.

### Using different layout

The pages we created so far are rendered in default layout (`/src/layouts/default.vue`).
We want to render 404 page in blank layout instead of default layout.
For this you have to create route block in your vue file to define layout. Update `/src/pages/[...404].vue` as below:
```vue
<route lang="yaml">
meta:
  layout: blank
</route>
```

### Plugin docs

Routes are auto generated and layouts are auto wrapped using below 2 plugins:
* [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
* [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

## Styles

### Writing your own SCSS

Can write SCSS in `/src/styles/styles.scss` file.

### Overriding variables

If you want to override any of vuetify or our custom variable then you can override it in `/src/styles/_variables.scss` file.
You can get list of variables you can override in below locations:

* Check `/src/@core/layouts/styles/_variables.scss` file for custom variables
* Check Vuetify SASS variables [page](https://vuetifyjs.com/en/features/sass-variables/)

### Mixins

* `icon-size`:
We use this mixin to customize the size of icon. Size of icon is determined using `height` and `width` property.
* `rtl`:
You have to use this mixin if you are writing RTL styles. This will scope the written style to RTL direction only:
```scss
// Import mixins
@use '@layouts/styles/mixins';

.selector {
  @include mixins.rtl {
    margin-left: 1rem;
  }
}
```
  It will only generate the styles if you have enabled generating RTL styles:
```scss
// File: /src/styles/_variables.scss

/*
If you have disable generating RTL styles by setting `$enable-rtl-styles: false`
then style won't be generated by rtl mixin
*/

@forward '@layouts/styles/variables' with (
  $enable-rtl-styles: false
);
```

### How to override styles using placeholders
You are allowed to write your styles in `src/@core/scss/templates`.

Placeholders provided in `src/@core/scss/base/placeholders` are available to override.

Assume you want to increase the font-weight of vertical nav section title. You can find placeholder `%vertical-nav-section-title` in `src/@core/scss/base/placeholders/_vertical-nav.scss` file.

Now, to override this placeholder, create file in `src/@core/scss/template/placeholders/` with the same name as in `src/@core/scss/base/placeholders`. Hence, we will create a new file `_vertical-nav.scss` in `src/@core/scss/template/placeholders/`.
```scss
// Section title
%vertical-nav-section-title {
  font-weight: 600;
}
```
Next, import this newly created file in `src/@core/scss/template/placeholders/_index.scss`
```scss
@forward "vertical-nav";
```

## Navigation Menu

### Vertical Nav
You can add vertical nav items via `/src/navigation/vertical/index.ts` file.

### Vertical Nav Link
```ts
/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
  },
] as VerticalNavItems
```
Note: `icon` property is not required if link is inside group (not first level item).

### Vertical Nav Group
```ts
/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
  },
  {
    title: 'Dashboards',
    icon: 'i-mdi-view-dashboard-outline',
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
    ],
  },
] as VerticalNavItems
```
Note: `icon` property is not required if group is inside another group (not first level item).

### Vertical Nav Section Title

```ts
import { VerticalNavItems } from "@layout/types"

export default [
   {
      heading: 'My Section',
   },
] as VerticalNavItems
```

### Badges

Vertical nav link & group supports adding badges. Badges are rendered on right side of item title.

You can optionally pass `badgeContent` & `badgeClass` property to add badge to the item.

```ts
/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    badgeContent: 'new',
    badgeClass: 'some-class',
  },
] as VerticalNavItems
```

### Disabling Nav Items
You can disable any item by simply setting `disable` property to `true`.
```ts
/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    disable: true,
  },
] as VerticalNavItems
```

### Fetching nav items from API
Sometimes we might have to fetch the nav items from API rather than hard coding them in file.

## Authentication

### Login
Once the form is validated and successful API call is made to your API endpoint, we update user ability for access control and store the authentication related data in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage.
For authentication, our portal store below data in `localStorage` for persisting session during reloads:

* access token
* user data (username, full name, etc.)
* user abilities
You can find login related code in `/src/pages/login.vue` file's `login` method.

### Sending access token in API call
We use [axios](https://axios-http.com/) to make API calls. Axios allows intercepting requests & responses. We intercept all requests and attach the access token in [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header so API service can identify logged in user.

### Logout
In logout we remove the stored data and reset the user abilities to initial abilities.

You can find login related code in `/src/layouts/components/UserProfile.vue` file's `logout` method.

## Access Control (ACL)

We use [CASL](https://casl.js.org/v6/en/) package to provide access control in our template.

CASL may look complex at first so please make sure you first read docs carefully and understand base logic of Access Control to proceed further.

### Overview

You can find access control related configuration in `src/plugins/casl` directory.

* `ability.ts`: It exports the Ability instance of CASL. It will read initial ability from themeConfig. It will also try to fetch any ability from `localStorage` and if found it will use ability fetched from `localStorage` rather than initial ability. This will help in persisting the ability between browser window reload/close.
* `AppAbility.ts`: It contains available actions & subjects in the app.
* `shims-ability.d.ts`: This file is shims file for CASL.
* `useAppAbility.ts`: This file contains useAppAbility composable for ease so you don't have to import `AppAbility` from `AppAbility.ts` file. More in the official CASL [docs](https://casl.js.org/v6/en/package/casl-vue#composition-api).

### Using ACL

If you want show/hide anything based on user's ability, you can use global `$can` property:
```vue
<script lang="ts" setup>
const user = {
  action: 'read' as const,

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'Admin' as const,
}
</script>

<template>
  <p v-if="$can(user.action, user.subject)">
    We have earned 50k more compared to previous week
  </p>
  <p v-else>
    You don't have enough permission to view the finance data
  </p>
</template>

<route lang="yaml">
meta:
  action: read
  subject: AclDemo
</route>
```

### Updating ability
* using new ability:
```ts
import { useAbility } from '@casl/vue'
import type { AppAbility } from '@/plugins/casl/AppAbility'

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility<AppAbility>()

// Update the ability using `update` method
ability.update(userAbilities)
```
* to persist ability:
```ts
// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
```
* resetting to initial ability:
On logout we need to reset ability to initial ability. Resetting ability is same as updating to new ability, only difference is that we will pass initialAbility we have in `@/plugins/casl/ability` to `ability.update` method.
```ts
import { useAbility } from '@casl/vue'
import type { AppAbility } from '@/plugins/casl/AppAbility'
import { initialAbility } from '@/plugins/casl/ability'

// Use composable
const ability = useAbility<AppAbility>()

// Update the ability using `update` method
ability.update(initialAbility)

// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(initialAbility))
```

### Route Protection
We have configured [router.beforeEach](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) hook so users can only visit the route they have ability to. You can check its source code in `/src/router/index.ts` file.

For protecting routes based on ability, all you have to do is add `meta` to that route via [route](https://github.com/hannoeru/vite-plugin-pages#sfc-custom-block-for-route-data) block.

In How to create a new page guide we created a dashboard analytics page. Let's add `action` & `subject` meta to this `route` by updating the file as below:
```vue
<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>

<route lang="yaml">
meta:
  action: read
  subject: Web
</route>
```

### Show/Hide Navigation Items
Our project allows hiding & showing navigation items based on user ability.

When you define navigation items in `/src/navigation/{vertical|horizontal}/index.ts` along with properties like `title`, you can write `action` & `subject` for hiding item if user don't have enough ability.
```ts
/* @unocss-include */

import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    action: 'read',
    subject: 'Post',
  },
] as VerticalNavItems
```

## Layout

### Usage
To use layouts plugin you have to register it like other plugins.

1. Create a new plugin file `@/plugins/layouts.ts` with below content:
```ts
// Layouts plugin
import { createLayouts } from '@layouts'
// styles
import '@layouts/styles/index.scss'
// get layout config from themeConfig
import { layoutConfig } from '@themeConfig'

// We generate layout config from our themeConfig so you don't have to write config twice
export default createLayouts(layoutConfig)
```

`themeConfig.ts` file uses `defineThemeConfig` function which return two objects and one of them is configuration of layouts plugin. Hence, you can use this config and omit defining the config twice.

2. Import and use layouts plugin in `main.ts`:
```ts
import layoutsPlugin from '@/plugins/layouts'
app.use(layoutsPlugin)
```












