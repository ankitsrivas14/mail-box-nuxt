<template>
    <div class="mail-actions_wrapper">
        <div class="mail-actions_text">
            <input 
                type="checkbox" 
                :checked="checked" 
                :indeterminate="isIndeterminate"
                @change="toggleCheckbox" 
                @click.stop 
            />
            <span>Email Selected ({{ count }})</span>
        </div>
        <div class="mail-actions_btns">
            <span class="mail-actions_btns__btn">Mark as read (r)</span>
            <span class="mail-actions_btns__btn">Archive (a)</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    checked: {
        type: Boolean,
        required: true
    },
    isIndeterminate: {
        type: Boolean,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
})

const emit = defineEmits(['toggleCheckbox']);

const toggleCheckbox = (e) => {
  emit('toggleCheckbox', e.target.checked);
};

</script>

<style lang="scss">
    .mail-actions_wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px 24px;
        font-weight: 500;
        font-size: 14px;
        border-bottom: 1px solid #E6E7EB;
        .mail-actions_text{
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .mail-actions_btns{
            display: flex;
            gap: 40px;
            align-items: center;
            .mail-actions_btns__btn{
                cursor: pointer;
            }
        }
    }
</style>
