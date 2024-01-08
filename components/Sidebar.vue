<template>
    <div class="sidebar">
        <div class="sidebar_top-container">
            <img src="../assets/images/logo.svg" alt="logo" class="sidebar-logo" />
            <div class="sidebar_top-links">
                <NuxtLink class="sidebar_link" to="/inbox">
                    <div class="sidebar_link-text">
                        <img src="../assets/images/inbox.svg" alt="inbox" />
                        <span>Inbox</span>
                    </div>
                    <span>{{ totalMailsInInbox }}</span>
                </NuxtLink>
                <NuxtLink class="sidebar_link" to="/archive">
                    <div class="sidebar_link-text">
                        <img src="../assets/images/archive.svg" alt="archive" />
                        <span>Archive</span>
                    </div>
                    <span>8</span>
                </NuxtLink>
            </div>
        </div>
        <div class="sidebar_bottom-links">
            <NuxtLink class="sidebar_link" to="/logout">
                <div class="sidebar_link-text">
                    <img src="../assets/images/logout.svg" alt="logout" />
                    <span>Logout</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.sidebar{
    width: 260px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #FFFFFF;
    border-right: 1px solid #E6E7EB;
    background: #F9FAFC;
    .sidebar-logo{
        margin-bottom: 32px;
    }
    .sidebar_top-links,
    .sidebar_bottom-links{
        display: flex;
        flex-direction: column;
        gap: 12px;
        .sidebar_link{
            color: #4B5563;
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
            &.router-link-active
            {
                background: #D6E2FB;
                color: #121829;
            }
            .sidebar_link-text{
                display: flex;
                align-items: center;
                gap: 12px;
            }
        }
    }
}
</style>
