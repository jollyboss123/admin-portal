<script lang="ts" setup>
import navItems from '@/navigation/horizontal'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const { appRouteTransition } = useThemeConfig()
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="d-flex align-center gap-x-3"
      >
        <VNodeRenderer :nodes="themeConfig.app.logo" />

        <h1 class="font-weight-medium leading-normal text-xl text-uppercase">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer />

      <NavSearchBar trigger-btn-class="ms-lg-n3" />

      <NavBarI18n />
      <NavbarThemeSwitcher />
      <NavbarShortcuts />
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </HorizontalNavLayout>
</template>
