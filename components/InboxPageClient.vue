<template>
    <div class="page_wrapper">
        <Drawer 
            :mail="mailToShow"
            @markRead="(ids) => updateMailStatus('markRead', ids)"
            @markArchive="(ids) => updateMailStatus('markArchive', ids)"
            @closeDrawer="handleCloseDrawer"
        />
        <div class="page-header">
            <PageHeading>Inbox</PageHeading>
            <MailActions 
                :checked="checkedItems.length === mails.length"
                :isIndeterminate="!!(checkedItems.length && checkedItems.length !== mails.length)"
                :count="checkedItems.length"
                @toggleCheckbox="handleToggleAllCheckbox"
            />
        </div>
        <MailItem
            v-for="mail in mails" 
            :key="mail.id" 
            :mail="mail" 
            :checked="checkedItems.includes(mail.id)"
            @click="handleEmailItemClick(mail)"
            @toggleCheckbox="handleToggleCheckbox"
        />
    </div>
</template>
<script setup>
import { useMailStore } from '../composables/useMailStore';

const checkedItems = ref([]);

const props = defineProps({
    mails: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['markRead', 'markArchive']);

const handleToggleCheckbox = (mailId) => {
  if (checkedItems.value.includes(mailId)) {
    checkedItems.value = checkedItems.value.filter((id) => id !== mailId);
  } else {
    checkedItems.value.push(mailId);
  }
};

const mailToShow = ref(null);

const { markEmailsAsRead } = useMailStore();

const handleEmailItemClick = (mail) => {
    mailToShow.value = mail;
};

const handleCloseDrawer = () => {
    mailToShow.value = null;
};

const updateMailStatus = (markAs, ids) => {
    emit(markAs, ids);
    handleCloseDrawer();
};

const handleToggleAllCheckbox = (isChecked) => {
    checkedItems.value = isChecked ? props.mails.map(mail => mail.id) : [];
};
  
</script>

<style lang="scss">
.page_wrapper{
    width: 100%;
    height: 100%;
    .page-header{
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
    }
}
</style>
  