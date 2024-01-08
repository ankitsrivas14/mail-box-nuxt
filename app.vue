<template>
  <div class="wrapper">
    <Sidebar />
    <NuxtPage class="app-page_container"/>
    <Drawer />
  </div>
</template>

<style>

@import './assets/css/global.scss';

.wrapper{
  display: flex;
  height: 100%;
  .app-page_container{
    margin-left: 260px;
  }
}

</style>
