import { computed, Ref } from 'vue';
import { confetti } from '../../node_modules/dom-confetti/src/main.js';

export const useCalculateWinner = (board: Ref<(string | null)[]>, boardRef: Ref<object>) => {
    const calculateWinner = computed(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                board.value[a] &&
                board.value[a] === board.value[b] &&
                board.value[a] === board.value[c]
            ) {
                fireConfetti(boardRef);
                return `${board.value[a]} Wins!`;
            }
        }

        // if board is full, end game in tie.
        if (board.value.every((val) => val)) return 'Tie!';

        return null;
    });

    return {
        calculateWinner,
    };
};

function fireConfetti(boardRef: Ref<object>) {
    confetti(boardRef.value);
}
