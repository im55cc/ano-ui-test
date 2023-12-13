<script setup lang="ts">
// onPageScroll(({ scrollTop }) => {
//   console.log(scrollTop)
// })
</script>

<template>
  <view>
    <view class="flex justify-between gap-2">
      <AButton type="primary">
        迷你按钮
      </AButton>
      <view class="primary">
        primary
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.primary {
  // height: var(--status-bar-height);
  // background: var(--uni-color-primary);
  background: $uni-color-primary;
}
</style>

<route type = "home" lang = "json">
{}
</route>
