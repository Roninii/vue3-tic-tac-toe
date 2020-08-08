<template>
<div class="container">
  <Board />
</div>
</template>

<script>
import Board from './components/Board.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        Board,
    },
});
</script>

<style scoped>
.container {
    display: grid;
    place-items: center;
    gap: 4rem;
    position: relative;
}
</style>
