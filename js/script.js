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
$('.box').click(function () {
    if ($(this).text() !== "X" && $(this).text() !== "O") //disable from clicking twice
        if (activePlayer === "X") {
            $(this).addClass('player1')
            $(this).text(activePlayer)
            switchPlayer()

        } else if (activePlayer === "O") {

            $(this).addClass('player2')
            $(this).text(activePlayer)
            switchPlayer()
        }

}
)

//winning logic












