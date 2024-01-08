<template>
    <PageClient 
        title="Archive"
        :mails="mails"
        @markRead="markEmailsAsRead"
        @markArchive="markEmailsAsArchive"
    />
</template>
<script setup>
const props = defineProps({
  mails: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['markRead', 'markArchive']);

const markEmailsAsRead = (ids) => {
    emit('markRead', ids);
};

const markEmailsAsArchive = (ids) => {
    emit('markArchive', ids);
};


</script>
