<template>
    <div class="mail-item-wrapper" :class="{ 'mail-read': mail.isRead }">
      <input type="checkbox" :checked="checked" @change="toggleCheckbox" @click.stop />
      <span>{{ mail.subject }}</span>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    mail: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['toggleCheckbox']);
  
  const toggleCheckbox = () => {
    emit('toggleCheckbox', props.mail.id);
  };
  </script>
  
  <style lang="scss">
  .mail-item-wrapper {
    display: flex;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid var(--border-color);
    gap: 12px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;
  
    &:hover {
      background: var(--primary-dark);
    }
  
    &.mail-read {
      background: var(--primary-medium);
    }
  }
  </style>
  