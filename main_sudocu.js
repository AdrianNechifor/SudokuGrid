
var MatrixTemplate = SudokuBoards[1];
var Matrix = {};

function createMatrix() {
    //the keys of the matrix are: row, col, square
    let square;
    let k = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            square = Math.floor(((parseInt(k,10)) % 9) / 3) + 3 * Math.floor((parseInt(k,10))/ (9 * 3));
                Matrix[i + '-' + j + '-' + square] = MatrixTemplate[i + '' +j];
            k++;
        }
    }

}

function displayMatrix() {
    for (key in Matrix)
        {
        //row=rxs[0], col=rcs[1], square=rcs[2]
        rcs = key.split('-');
        $('.container_game').append( '<div class="cell '+ (rcs[2] % 2 !== 1 ?' odd_square':'' ) + '" id="cell' + key + '">'+ Matrix[key] + '</div>');
        }
}

function appendElement(element, string)
    {
    if (element != undefined)
    {
    if (string != undefined)
        string = string + ' ' + element;
    else
        string = element;
    }
    return string;
    }


function easyCheck() {
    let matrix_rows = [];
    let matrix_cols = [];
    let matrix_squares = [];

    let r = 0, c = 0, s =0;

    for (key in Matrix)
        {
        if (Matrix[key] !=' ' && Number(Matrix[key]) >= 1 && Number(Matrix[key]) <= 9)
            {
            rcs = key.split('-');
            matrix_rows[Number(rcs[0])] = appendElement(Matrix[key], matrix_rows[Number(rcs[0])]);
            matrix_cols[Number(rcs[1])] = appendElement(Matrix[key], matrix_cols[Number(rcs[1])]);
            matrix_squares[Number(rcs[2])] = appendElement(Matrix[key], matrix_squares[Number(rcs[2])]);
            }
        }

    //for every row, col and square check if the number of different unique elements is 9(not none)

    for (k = 0; k < 9; k++)
        {
        uniqueItems = Array.from(new Set(matrix_rows[k].split(' ')));
        if (uniqueItems.length < 9)
            {
            return false;
            }
            uniqueItems = Array.from(new Set(matrix_cols[k].split(' ')));
        if (uniqueItems.length < 9)
            {
            return false;
            }
        uniqueItems = Array.from(new Set(matrix_squares[k].split(' ')));
        if (uniqueItems.length < 9)
            {
            return false;
            }

        }
return true;
}


function selectCell(cellId) {
    $('#'+cellId).addClass('selectedCell');
}

function checkWin() {
    return easyCheck();

}

function addMessage(message)
    {
    $('.container_message').html($('.container_message').html() + '<br>' + message);
    }

function main() {
    createMatrix();
    displayMatrix();


    $('.choice').click(function() {
        let value_of_pushed_button = $(this).val(); //the value of selected button
        let selected_cell_id = $('.selectedCell').attr('id');
        if (selected_cell_id != undefined) // if empty cell is selected
            {
            let rowColBox = selected_cell_id.replace('cell', '');
            $('#' + selected_cell_id).html(value_of_pushed_button); //write the value of selected button in selected cell
            Matrix[rowColBox] = value_of_pushed_button;

            if (checkWin() == true)
                addMessage('You win!');
            }


    });

    $("div[class^='cell']").click(function() { //bindueste click on a cell
        $('.selectedCell').removeClass('selectedCell'); //deselect cell
        let rowColBox = $(this).attr('id').replace('cell','');
        if (Matrix[rowColBox] === '') { //select cell if empty
            selectCell($(this).attr('id'));
        }
    });


}

$( document ).ready(function() {
    console.log( "ready!" );
    main();
    });