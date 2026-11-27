<script setup lang="ts">
import { sheetDate, sheets } from "./sheet";

defineProps<{ compact?: boolean; sheet?: number }>();
</script>

<template>
  <dl class="titleblock" :class="{ compact }">
    <div class="cell wide">
      <dt>Project</dt>
      <dd>omodroid</dd>
    </div>
    <div v-if="!compact" class="cell full">
      <dt>Title</dt>
      <dd>Android launcher and overlay for the Omoda 5 (2023) infotainment head unit</dd>
    </div>
    <div class="cell">
      <dt>Status</dt>
      <dd class="planned">PLANNED</dd>
    </div>
    <div class="cell">
      <dt>Revision</dt>
      <dd>none, no release</dd>
    </div>
    <div v-if="!compact" class="cell">
      <dt>Source code</dt>
      <dd>none yet</dd>
    </div>
    <div v-if="!compact" class="cell">
      <dt>Scale</dt>
      <dd>not to scale</dd>
    </div>
    <div v-if="!compact" class="cell">
      <dt>License</dt>
      <dd>MIT</dd>
    </div>
    <div v-if="!compact" class="cell">
      <dt>Drawn by</dt>
      <dd>Halit Sever</dd>
    </div>
    <div class="cell">
      <dt>Date</dt>
      <dd>{{ sheetDate }}</dd>
    </div>
    <div class="cell">
      <dt>Sheet</dt>
      <dd>{{ sheet ?? 1 }} of {{ sheets.length }}</dd>
    </div>
  </dl>
</template>
