//Selecting the boxes
const $box1 = $('#one');
const $box2 = $('#two');
const $box3 = $('#three');
const $box4 = $('#four');
const $box5 = $('#five');
const $box6 = $('#six');
const $box7 = $('#seven');
const $box8 = $('#eight');
const $box9 = $('#nine');

//buttons choice
const $buttonO = $('#O')
const $buttonX = $('#X')

//active player
let activePlayer = "X"; //should be able to select from the buttons choice
// let otherPlayer = "O"

//switch player
const switchPlayer = function () {
    activePlayer = activePlayer === "X" ? "O" : "X";

}


//click div 
$('.box').on('click', function () {
    if ($(this).text() !== "X" && $(this).text() !== "O")


        if (activePlayer === "X") {
            $(this).addClass('player1')
            $(this).text(activePlayer)
            switchPlayer()

            winnerPl1() //run the winner function if the winning conditions returns true
            displayWinner()


        } else if (activePlayer === "O") {

            $(this).addClass('player2')
            $(this).text(activePlayer)
            switchPlayer()

            winnerPl2()
            displayWinner()

        }
}
)

//winning logic - 8 possible winning combination
// [123], [456], [789] - Horizontally
// [147], [258], [369] - Vertically
// [159], [357]        - Diagonally

let winner;

const winnerPl1 = function () {

    if ($box1.text() === "X" && $box2.text() === "X" && $box3.text() === "X") { //Horizontal Win

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box4.text() === "X" && $box5.text() === "X" && $box6.text() === "X") {

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box7.text() === "X" && $box8.text() === "X" && $box9.text() === "X") {

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box1.text() === "X" && $box4.text() === "X" && $box7.text() === "X") { //Vertical Win

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box2.text() === "X" && $box5.text() === "X" && $box8.text() === "X") {

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box3.text() === "X" && $box6.text() === "X" && $box9.text() === "X") {

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box1.text() === "X" && $box5.text() === "X" && $box9.text() === "X") { //Vertical Win

        console.log(winner = "X")
        // return winner = "X";

    } else if ($box3.text() === "X" && $box5.text() === "X" && $box7.text() === "X") {

        console.log(winner = "X")
        // return winner = "X";

    }

    return winner

}


const winnerPl2 = function () {

    if ($box1.text() === "O" && $box2.text() === "O" && $box3.text() === "O") { //Horizontal Win

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box4.text() === "O" && $box5.text() === "O" && $box6.text() === "O") {

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box7.text() === "O" && $box8.text() === "O" && $box9.text() === "O") {

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box1.text() === "O" && $box4.text() === "O" && $box7.text() === "O") { //Vertical Win

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box2.text() === "O" && $box5.text() === "O" && $box8.text() === "O") {

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box3.text() === "O" && $box6.text() === "O" && $box9.text() === "O") {

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box1.text() === "O" && $box5.text() === "O" && $box9.text() === "O") { //Vertical Win

        console.log(winner = "O")
        // return winner = "O";

    } else if ($box3.text() === "O" && $box5.text() === "O" && $box7.text() === "O") {

        console.log(winner = "O")
        // return winner = "O";

    }


    return winner

}

const displayWinner = function () {
    if (winner) {
        $('.box').off('click');
        $('#display-winner').text(`The winner is ${winner}`)
    }

}








