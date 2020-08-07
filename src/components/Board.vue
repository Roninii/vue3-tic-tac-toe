<template>
<h1 v-if='calculateWinner'>Winner: {{ calculateWinner }}</h1>
<h1 v-else>Next Up: {{ playerValue }}</h1>
<div class='board'>
  <Square
    v-for='(square, i) in board'
    :key='`square-${i}`'
    :label="`square-${i}`"
    :value='square'
    @click='markSquare(i)'
    :disabled='calculateWinner'
  />
</div>
</template>

<script>
import Square from './Square.vue'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  components: {
    Square
  },

  setup (props, { emit }) {
    const { board, playerValue, markSquare } = useBoard()
    const calculateWinner = computed(() => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
          emit('winner')
          return board.value[a]
        }
      }

      return null
    })

    return {
      board,
      playerValue,
      markSquare,
      calculateWinner
    }
  }
})

function useBoard () {
  const board = ref(Array(9).fill(null))
  const playerValue = ref('X')

  const markSquare = (i) => {
    const boardCopy = board.value.slice()
    boardCopy[i] = playerValue.value
    board.value = boardCopy
    playerValue.value === 'X' ? playerValue.value = 'O' : playerValue.value = 'X'
  }
  return {
    board,
    markSquare,
    playerValue
  }
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
