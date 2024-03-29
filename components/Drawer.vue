<template>
  <div>
    <transition name="fade">
      <div v-if="mail" class="drawer-overlay" @click="handleCloseDrawer"></div>
    </transition>
    <transition name="slide">
      <div v-if="mail" class="drawer-content">
        <div class="drawer-content__action-container">
          <div class="drawer-content__left-actions">
            <div class="drawer-content__action" @click="handleCloseDrawer">
              <img src="/assets/images/close.svg" alt="close" />
              <span>Close (Esc)</span>
            </div>
          </div>
          <div class="drawer-content__right-actions">
            <div class="drawer-content__action" @click="updateMailStatus('markRead')">
              <img src="/assets/images/read.svg" alt="close" />
              <span>Mark as read (r)</span>
            </div>
            <div class="drawer-content__action" @click="updateMailStatus('markArchive')">
              <img src="/assets/images/delete.svg" alt="close" />
              <span>Archive (a)</span>
            </div>
          </div>
        </div>
        <div class="drawer-content__heading">{{ mail.subject }}</div>
        <div class="drawer-content__text">{{ mail.body }}</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useKeyboardEvents } from '../composables/useKeyboardEvents';
import { ref, defineProps, defineEmits, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  mail: {
    type: [Object, null],
    required: true
  }
});

const emit = defineEmits(['closeDrawer', 'markRead', 'markArchive']);

const handleCloseDrawer = () => {
  emit('closeDrawer');
};

const updateMailStatus = (markAs) => {
  if (props.mail?.id) {
    emit(markAs, [props.mail.id]);
  }
};

const keyboardEvents = {
  escape: handleCloseDrawer,
  r: () => updateMailStatus('markRead'),
  a: () => updateMailStatus('markArchive'),
};
const { handleKeyPress, addListener, removeListener } = useKeyboardEvents(keyboardEvents);

watch(() => props.mail, (newVal, oldVal) => {
  !newVal ? removeListener() : addListener();
});
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overlay);
  opacity: 0.8;
  z-index: 999;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

.drawer-content {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  padding: 32px;
}

.drawer-content__action-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-gray);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 32px;
}

.drawer-content__left-actions,
.drawer-content__right-actions {
  display: flex;
  align-items: center;
  gap: 40px;
}

.drawer-content__action {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.drawer-content__heading {
  color: var(--dark);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}

.drawer-content__text {
  color: var(--dark-gray);
  font-size: 14px;
  font-weight: 500;
}
</style>
