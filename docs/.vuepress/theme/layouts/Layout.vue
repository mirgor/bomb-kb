<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/shared'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()

const heroImage = computed(() => {
  return frontmatter.value.heroImage
})


const HomeHeroImage: FunctionalComponent = () => {
  if (!heroImage.value) return null
  const img = h('img', {
    src: withBase(heroImage.value),
    alt: "heroAlt.value",
  })
  if (frontmatter.value.heroImageDark === undefined) {
    return img
  }
  // wrap hero image with <ClientOnly> to avoid ssr-mismatch
  // when using a different hero image in dark mode
  return h(ClientOnly, () => img)
}

</script>

<template>
 <header class="hero">
    <HomeHeroImage />
  </header>
  <ParentLayout>
    <template #page-top>
      <HomeHeroImage />  
      <div class="my-footer">This is my custom page 999 footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>