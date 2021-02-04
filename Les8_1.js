let stepC;
function step() {
    stepC = 9;
    return function () {
        return stepC--;
    }
}

const stepCount = step();

const equals3 = (a, b, c) => {
    return (a == b && b == c && a != '');
}

const checkWinner = (model) => {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(model[i][0], model[i][1], model[i][2])) {
            winner = model[i][0];
        }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(model[0][i], model[1][i], model[2][i])) {
            winner = model[0][i];
        }
    }

    // diagonal
    if (equals3(model[0][0], model[1][1], model[2][2])) {
        winner = model[0][0];
    }
    if (equals3(model[0][2], model[1][1], model[2][0])) {
        winner = model[0][2];
    }

    return winner;
}

const game = () => {
    const model = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    const playerX = 'X';
    const playerO = 'O';
    let currentPlayer = playerX;

    const $game = document.querySelector('#game');
    const $table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const $tr = document.createElement('tr');
        $tr.dataset.index = i;

        for (let j = 0; j < 3; j++) {
            const $td = document.createElement('td');
            $td.dataset.index = j;
            $tr.appendChild($td);
        }

        $table.appendChild($tr);
    }

    $game.appendChild($table);

    $table.addEventListener('click', (e) => {
        const row = e.target.parentNode.dataset.index;
        const column = e.target.dataset.index;

        if (model[row][column] != '') {
            currentPlayer = currentPlayer === playerO ? playerX : playerO;
            alert('перезаписать нельзя');
        }
        model[row][column] = currentPlayer;
        e.target.innerHTML = currentPlayer;

        console.log(stepCount());

        // 2. check if td assigned

        const winner = checkWinner(model);
        if (winner) {
            alert(`Winner: ${winner}`);
        } else if (!winner && stepC == 0) {
            alert('Ничья');
        }
        // 1. tie

        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    });
}

window.onload = () => {
    game();
};