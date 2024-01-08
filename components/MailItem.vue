<template>
    <div class="mail-item_wrapper">
        <input type="checkbox" />
        <span>Wave hello with video, reactions and more now in huddles</span>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .mail-item_wrapper{
        display: flex;
        align-items: center;
        padding: 24px;
        border-top: 1px solid #E6E7EB;
        gap: 12px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s ease;
        &:hover{
            background: #D1E2FF;
        }
    }
</style>
