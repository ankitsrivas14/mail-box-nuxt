<template>
    <div class="mail-actions-container">
      <div class="mail-actions-text">
        <input
          type="checkbox"
          :checked="checked"
          :indeterminate="isIndeterminate"
          @change="toggleCheckbox"
          @click.stop
        />
        <span class="mail-actions-text__label">Email Selected ({{ count }})</span>
      </div>
      <div class="mail-actions-buttons">
        <span class="mail-actions-buttons__button">Mark as read (r)</span>
        <span class="mail-actions-buttons__button">Archive (a)</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    checked: {
      type: Boolean,
      required: true,
    },
    isIndeterminate: {
      type: Boolean,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  });
  
  const emit = defineEmits(['toggleCheckbox']);
  
  const toggleCheckbox = (e) => {
    emit('toggleCheckbox', e.target.checked);
  };
  </script>
  
  <style lang="scss">
  .mail-actions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 24px;
    font-weight: 500;
    font-size: 14px;
    border-bottom: 1px solid #e6e7eb;
  }
  
  .mail-actions-text {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .mail-actions-buttons {
    display: flex;
    gap: 40px;
    align-items: center;
  }
  
  .mail-actions-buttons__button {
    cursor: pointer;
  }
  </style>
  