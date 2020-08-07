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
    min-height: 90vh;
    display: grid;
    place-items: center;
}
</style>
