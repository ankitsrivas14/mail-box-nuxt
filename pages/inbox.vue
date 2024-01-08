<template>
    <InboxPageClient 
        :mails="mailsForInbox"
        @markRead="markEmailsAsRead" 
        @markArchive="markEmailsAsArchive" 
    />
</template>
<script setup>

import { useMailStore } from '../composables/useMailStore';

const { 
    fetchMails, 
    markEmailsAsRead,
    markEmailsAsArchive,
    mailsForInbox,
} = useMailStore();

await fetchMails();

</script>
