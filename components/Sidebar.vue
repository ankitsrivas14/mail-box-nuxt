<template>
  <div class="sidebar">
    <div class="sidebar__top-container">
      <img src="@/assets/images/logo.svg" alt="logo" class="sidebar__logo" />
      <div class="sidebar__top-links">
        <NuxtLink class="sidebar__link" to="/inbox">
          <div class="sidebar__link-text">
            <img src="@/assets/images/inbox.svg" alt="inbox" />
            <span>Inbox</span>
          </div>
          <span>{{ inboxCount }}</span>
        </NuxtLink>
        <NuxtLink class="sidebar__link" to="/archive">
          <div class="sidebar__link-text">
            <img src="@/assets/images/archive.svg" alt="archive" />
            <span>Archive</span>
          </div>
          <span>{{ archiveCount }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="sidebar__bottom-links">
      <NuxtLink class="sidebar__link" to="/logout">
        <div class="sidebar__link-text">
          <img src="@/assets/images/logout.svg" alt="logout" />
          <span>Logout</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  inboxCount: {
    type: Number,
    required: true,
  },
  archiveCount: {
    type: Number,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
.sidebar {
  width: 260px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--white);
  border-right: 1px solid var(--border-color);
  background: var(--light-gray);
}

.sidebar__logo {
  margin-bottom: 32px;
}

.sidebar__top-links,
.sidebar__bottom-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar__link {
  color: var(--dark-gray);
  font-weight: 500;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover,
  &.router-link-active {
    background: var(--primary-light);
    color: var(--dark);
  }
}

.sidebar__link-text {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
