<script setup lang="ts">
const { top, bottom } = uni.getSystemInfoSync().safeAreaInsets || { top: 0, bottom: 0 }
const safeStyle = {
  paddingTop: `${top}px`,
  paddingBottom: `${bottom}px`,
  height: `calc(100vh - ${top}px - ${bottom}px)`,
}
</script>

<template>
  <view :style="safeStyle">
    <slot />
    <app-footer />
  </view>
</template>
