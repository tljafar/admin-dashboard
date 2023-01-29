<template>
    <div class="step-list-content-item" :key="id">
        <slot v-if="id === selected"></slot>
    </div>
</template>
<script>
export default {
    name: 'StepListContentItem',
    props: {
        id: {
            type: String,
        },
        selected: {
            type: String
        }
    }
}
</script>