<template>
  <div class="wrapper">
    <Sidebar 
      :inboxCount="mailsForInboxCount" 
      :archiveCount="mailsForArchiveCount"
    />
    <NuxtPage
      class="app-page__container" 
      :mails="currentMails" 
      @markRead="markEmailsAsRead"
      @markArchive="markEmailsAsArchive"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useMailStore } from '../composables/useMailStore';

const route = useRoute();
const { 
  fetchMails, 
  markEmailsAsRead,
  markEmailsAsArchive,
  mailsForInbox,
  mailsForArchive,
} = useMailStore();

await fetchMails();

const mailsForInboxCount = computed(() => mailsForInbox.value.length);
const mailsForArchiveCount = computed(() => mailsForArchive.value.length);

const currentMails = computed(() => {
  if (route.path === '/inbox') {
    return mailsForInbox.value;
  } else if (route.path === '/archive') {
    return mailsForArchive.value;
  }
  return [];
});

</script>


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
