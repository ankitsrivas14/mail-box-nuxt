<template>
  <div class="wrapper">
    <Sidebar />
    <NuxtPage class="app-page__container" />
  </div>
</template>

<style lang="scss">
@import './assets/css/global.scss';

.wrapper {
  display: flex;
  height: 100%;
}

.app-page__container {
  margin-left: 260px;
}
</style>
