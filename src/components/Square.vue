<template>
    <button class='square' :name="label" :aria-label="label" :disabled='winner || value'>
        {{ value }}
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        label: String,
        value: {
            type: String,
            default: ' ',
        },
        winner: null,
    },
});
</script>

<style scoped>
.square {
    border: 0.1rem solid #000;
    width: 10rem;
    height: 10rem;
    background: none;
}

.square:hover {
    cursor: pointer;
}

.square:first-child,
.square:nth-child(2),
.square:nth-child(3) {
    border-top: none;
}

.square:nth-child(3),
.square:nth-child(6),
.square:last-child {
    border-right: none;
}

.square:nth-child(7),
.square:nth-child(8),
.square:last-child {
    border-bottom: none;
}

.square:first-child,
.square:nth-child(4),
.square:nth-child(7) {
    border-left: none;
}
</style>
