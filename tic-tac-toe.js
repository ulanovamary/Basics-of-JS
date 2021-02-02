const game = () => {

    const model = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    const $game = document.querySelector('#game');
    const $table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const $tr = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const $td = document.createElement('td');
            $tr.appendChild($td);
        }

        $table.appendChild($tr)
    }

    $game.appendChild($table);

}


window.onload = () => {
    //todo start game
    game();
}