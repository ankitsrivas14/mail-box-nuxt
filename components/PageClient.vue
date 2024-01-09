<template>
  <div class="page-wrapper">
    <Drawer
      :mail="mailToShow"
      @markRead="(ids) => updateMailStatus('markRead', ids)"
      @markArchive="(ids) => updateMailStatus('markArchive', ids)"
      @closeDrawer="handleCloseDrawer"
    />
    <div class="page-header">
      <PageHeading>{{ title }}</PageHeading>
      <MailActions
        :checked="isChecked"
        :isIndeterminate="isIndeterminate"
        :count="checkedItems.length"
        @toggleCheckbox="handleToggleAllCheckbox"
        @markRead="() => updateMailStatus('markRead', checkedItems)"
        @markArchive="() => updateMailStatus('markArchive', checkedItems)"
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
import { ref, watch, defineProps, defineEmits } from 'vue';
import { useMailStore } from '../composables/useMailStore';
import { useKeyboardEvents } from '../composables/useKeyboardEvents';

const props = defineProps({
  mails: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['markRead', 'markArchive']);

const checkedItems = ref([]);
const mailToShow = ref(null);
const { markEmailsAsRead } = useMailStore();

const isChecked = computed(() => (checkedItems.value.length === props.mails.length) && checkedItems.value.length > 0);
const isIndeterminate = computed(() => !isChecked.value && checkedItems.value.length > 0);

const handleToggleCheckbox = (mailId) => {
  if (checkedItems.value.includes(mailId)) {
    checkedItems.value = checkedItems.value.filter((id) => id !== mailId);
  } else {
    checkedItems.value.push(mailId);
  }
};

const handleCloseDrawer = () => {
  mailToShow.value = null;
};

const updateMailStatus = (markAs, ids) => {
  emit(markAs, ids);
  handleCloseDrawer();
  checkedItems.value = [];
};

const handleToggleAllCheckbox = (isChecked) => {
  checkedItems.value = isChecked ? props.mails.map((mail) => mail.id) : [];
};

watch(() => mailToShow.value, (newVal, oldVal) => {
  newVal ? removeListener() : addListener();
});

const handleEmailItemClick = (mail) => {
  mailToShow.value = mail;
};

const keyboardEvents = {
  r: () => updateMailStatus('markRead', checkedItems.value),
  a: () => updateMailStatus('markArchive', checkedItems.value),
};

const { addListener, removeListener } = useKeyboardEvents(keyboardEvents);
</script>

<style lang="scss" scoped>
.page-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.page-header {
  position: sticky;
  top: 0;
  background-color: var(--white);
}
</style>
