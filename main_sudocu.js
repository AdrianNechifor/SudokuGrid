var choose = '';
var Matrix = {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
              '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
              '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
              '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
              '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
              '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
              '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
              '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
              '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'};

function createMatrix() {
    let deletedCell = 1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let x = Math.floor(Math.random()*10);
            if (x === 9 && deletedCell > 0) {
                Matrix[i + '' + j] = '';
                deletedCell--;
            }
        }
    }

    return Matrix;
}

function displayMatrix() {
    let k = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = Math.floor(((parseInt(k,10)) % 9) / 3) + 3 * Math.floor((parseInt(k,10))/ (9 * 3));
            $('.container_game').append( '<div class="cell '+(val % 2 !== 1 ?' odd_square':'' )+'" id="cell'+i+'-'+j+'-'+val+'">'+Matrix[i+''+j]+'</div>');
            k++;

        }
    }
}

function easyCheck(btnValue, rcb) {
    let checkBox = [];
    $('div[id^="cell"][id$="'+rcb[2]+'"]').each(function() {
        if ($(this).html() !== '') {
            checkBox.push($(this).html());
        }
    });
    if ($.inArray(btnValue, checkBox) !== -1) {
        return false;
    }
    let checkLine = [];
    for (i=0; i<9; i++) {
        if (Matrix[i+''+rcb[1]] !== '') {
            checkLine.push([i+''+rcb[1]]);
    }
    }
    if ($.inArray(btnValue, checkLine) !== -1) {
        return false;
    }
    let checkCol = [];
    for (j=0; j<9; j++) {
        if (Matrix[rcb[0]+''+j] !== '') {
            checkCol.push(Matrix[rcb[0]]+''+j);
    }
    }
    if ($.inArray(btnValue, checkCol) !== -1) {
        return false;
    }
    return true;
}


function selectCell(cellId) {
    $('#'+cellId).addClass('selectedCell');
}

function checkWin(rcb) {
    $('.cell').each(function() {
        if (easyCheck($(this).html(), rcb) === false) {
            return false;
        }
        if ($(this).html() === '') {
            return false;
        }
    });
    return true;
}

function allCellsFilled() {
    let allCellsNumbers = [];
     $('.cell').each(function() {
         if ($(this).html() !== '') {
             allCellsNumbers.push($(this).html());
         }
     });
     return allCellsNumbers.length;
}

/*
function newGame(Matrix) {
    let i = 0;
    while (i < 20) {
        let position = [getRandomInt(1, 10), getRandomInt(1, 10)];
        let positionStr = position[0] + position[1];
        let number = getRandomInt(1, 10);
        if (easyCheck(Matrix, position, number)) {
            i++;
            Matrix[positionStr][0] = number;
            Matrix[positionStr][1] = 1;
        }
    }

    return Matrix;
}


function displayBoard(Matrix) {
    for (const [key, value] of Object.entries(Matrix)) {
    const cell = document.getElementsByClassName('cell'+key);
    cell.innerHTML = value[0];
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function easyCheck(Matrix, position, number) {
    for (let i= 1; i<10; i++) {
        if (Matrix[position[0]+i][0] === number){
            return false;
        }
        if (Matrix[i+position[1]][0] === number){
            return false;
        }
     let combination = [0, 0];
    let first = [1, 2, 3];
    let second = [4, 5, 6];
    let third = [7, 8, 9];

    if (position[0] in first){
        combination[0] = first;
    } else if (position[0] in second){
        combination[0] = second;
    } else {
        combination[0] = third;
    }

    if (position[1] in first){
        combination[1] = first;
    } else if (position[1] in second){
        combination[1] = second;
    } else {
        combination[1] = third;
    }

    for (let i in combination[0]){
        for (let j in combination[1]){
            if (Matrix[position[0]+combination[1][j]][0] === number){
                return false;
            }
            if (Matrix[combination[0][i]+position[1]][0] === number){
                return false;
            }
        }
    }
    return true;
}

 function chooseFunc(event) {
    choose = event.target.id;
    console.log(choose);
}

function hardCheck(Matrix) {
    
}

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', changeColorCell);
    }
        function changeColorCell(event) {
        event.target.style.backgroundColor = '#00FFFF';
    }
*/
function main() {
    Matrix = createMatrix();
    displayMatrix();
    $('.choice').click(function() {
        let rowColBox = $('.selectedCell').attr('id').replace('cell','').split('-');
        if (easyCheck($(this).val(), rowColBox) === true) {
            Matrix[rowColBox[0]+''+rowColBox[1]] = $(this).val();
            $('.selectedCell').html($(this).val());
}
    if (checkWin(rowColBox) === true && allCellsFilled() === 81) {
        $('.win').html('YOU WIN!');
        }
    });
    $("div[class^='cell']").click(function() {
        $('.selectedCell').removeClass('selectedCell');
        let rowColBox = $(this).attr('id').replace('cell','').split('-');
        if (Matrix[rowColBox[0]+rowColBox[1]] === '') {
            selectCell($(this).attr('id'));
            /*easyCheck(rowColBox);*/
        }
    });
    /*    Matrix = newGame(Matrix);
        displayBoard(Matrix);

        const buttons = document.getElementsByClassName('choice');
        for (let i=0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', chooseButton)
            }

    */
}

$( document ).ready(function() {
    console.log( "ready!" );
    main();
    });