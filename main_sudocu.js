
function createMatrix() {

}

function newGame(Matrix) {

}

function displayBoard(Matrix) {

}

function generateRandom() {

}

function easyCheck(Matrix, position, number) {

}

function hardCheck(Matrix) {

}

function main() {
    Matrix = createMatrix();
    Matrix = newGame(Matrix);
    displayBoard(Matrix);
    const cells = [...document.getElementsByClassName('cell')];
    for (let i in cells){
        cells[i].addEventListener('click', chooseCell(){

        });}
    const buttons = [...document.getElementsByClassName('choice')];
    for (let i in buttons){
        buttons[i].addEventListener('click', chooseButton(){

        });    

}
}
main();