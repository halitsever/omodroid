<script setup lang="ts">
import { computed } from "vue";
import { Content, useData, useRoute, withBase } from "vitepress";
import HomePage from "./HomePage.vue";
import TitleBlock from "./TitleBlock.vue";
import { blogLink, repoUrl, sheets } from "./sheet";

const { frontmatter, page } = useData();
const route = useRoute();

const isHome = computed(() => frontmatter.value.layout === "home");
const others = computed(() => sheets.filter((s) => s.link !== "/" + page.value.relativePath.replace(/(index)?\.md$/, "")));
const isCurrent = (link: string) => route.path.replace(/\.html$/, "") === withBase(link);
const inBlog = computed(() => route.path.startsWith(withBase(blogLink)));
const turkish = computed(() => frontmatter.value.lang === "tr");
</script>

<template>
  <a class="skip" href="#content">Skip to content</a>
  <div class="sheet">
    <header class="top">
      <a class="wordmark" :href="withBase('/')" aria-label="Omodroid home">
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <rect x="3" y="8" width="26" height="16" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path d="M8 19.5h10" stroke="var(--amber)" stroke-width="1.6" stroke-dasharray="3 2" fill="none" />
        </svg>
        <span>omodroid</span>
      </a>
      <nav aria-label="Main">
        <a v-for="s in sheets.slice(1)" :key="s.link" :href="withBase(s.link)" :aria-current="isCurrent(s.link) ? 'page' : undefined">{{ s.label }}</a>
        <a :href="withBase(blogLink)" :aria-current="inBlog ? 'page' : undefined">Blog</a>
        <a :href="repoUrl">GitHub</a>
      </nav>
    </header>

    <p v-if="turkish" class="notice" role="note" lang="tr">
      <strong>Planlanan proje.</strong>
      Depoda henüz kod yok ve indirilecek bir sürüm bulunmuyor.
    </p>
    <p v-else class="notice" role="note">
      <strong>Planned project.</strong>
      There is no code in the repository and nothing to download yet.
    </p>

    <main id="content">
      <div v-if="page.isNotFound" class="doc">
        <h1>Sheet not found</h1>
        <p>This address does not match any sheet on the site.</p>
        <p><a :href="withBase('/')">Go to the overview</a></p>
      </div>
      <HomePage v-else-if="isHome" />
      <template v-else>
        <TitleBlock v-if="frontmatter.sheet" compact :sheet="frontmatter.sheet" />
        <Content class="doc" />
        <nav class="more" aria-label="Other sheets">
          <span class="label">{{ turkish ? "Diğer sayfalar" : "Other sheets" }}</span>
          <a v-for="s in others" :key="s.link" :href="withBase(s.link)">{{ s.label }}</a>
        </nav>
      </template>
    </main>

    <footer class="foot">
      <p>
        Omodroid is an independent open source project. It is not affiliated with, endorsed by or sponsored by Chery or Omoda. The model name appears only to say which head unit
        the project is for.
      </p>
      <p>
        Released under the <a :href="repoUrl + '/blob/main/LICENSE'">MIT License</a>. Source and issues on <a :href="repoUrl">GitHub</a>. Made by
        <a href="https://github.com/halitsever">Halit Sever</a>.
      </p>
    </footer>
  </div>
</template>
