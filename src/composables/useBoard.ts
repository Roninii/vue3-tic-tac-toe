import { ref, Ref } from 'vue';

export const useBoard = () => {
    const board: Ref<(string | null)[]> = ref(Array(9).fill(null));
    const playerValue = ref('X');

    const markSquare = (i: number) => {
        const boardCopy = board.value.slice();
        boardCopy[i] = playerValue.value;
        board.value = boardCopy;
        playerValue.value === 'X' ? (playerValue.value = 'O') : (playerValue.value = 'X');
    };

    const reset = () => {
        board.value = Array(9).fill(null);
        playerValue.value = 'X';
    };

    return {
        board,
        markSquare,
        playerValue,
        reset,
    };
};
