'use strict'

const getSteps = () => {
    let currentPosition = document.querySelector('#curPos').value.toUpperCase();
    let curX = currentPosition.charCodeAt(0);
    //let curY = currentposition.charCodeAt(1);
    let curY = currentPosition.slice(1);
    let x;
    let y;
    let result = [];

    ///создадим массив траекторий хода
    let steps = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

    steps.forEach((step) => {
        if (((x = curX + step[0]) >= ("A".charCodeAt(0)) &&
            (x = curX + step[0]) <= ("H".charCodeAt(0))) &&
            ((y = +curY + step[1]) >= 1 &&
            (y = +curY + step[1]) <= 8)) {
                result.push(String.fromCharCode(x) + y);
            }
    });

    if (result.length) {
        alert('Возможные варианты хода: ' + result.join(' '));
    } else {
        alert('Нет допустимых ходов!');
    }
}
