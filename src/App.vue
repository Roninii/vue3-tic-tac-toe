<template>
<div class="container">
  <span ref='confetti'></span>
  <Board @winner='fireConfetti'/>
</div>
</template>

<script>
import Board from './components/Board.vue'
import { defineComponent } from 'vue'
import { confetti } from '../node_modules/dom-confetti/src/main.js'

export default defineComponent({
  name: 'App',
  components: {
    Board
  },
  methods: {
    fireConfetti () {
      confetti(this.$refs.confetti)
    }
  }
})
</script>

<style scoped>
.container {
  min-height: 90vh;
  display: grid;
  place-items: center;
}
</style>
