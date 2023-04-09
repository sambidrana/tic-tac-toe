$(document).ready(function () {
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
    const $buttonO = $('#O');
    const $buttonX = $('#X');

    ///////////////////////////////////////////////////////

    //active player
    let activePlayer;
    let score = {
        X: 0,
        O: 0,
    }
    //switch player
    const switchPlayer = function () {
        activePlayer = activePlayer === "X" ? "O" : "X";

        if (activePlayer === "X") {
            $('#button-text-display').text('X\'s turn')
        } else (
            $('#button-text-display').text('O\'s turn')

        )
    };

    //click events
    const userSelect = function () {

        $('.box').on('click', function () {

            if ($(this).text() === "X" || $(this).text() === "O") {

                return; //so the user can't click again
            };

            if (activePlayer === "X") {
                $(this).addClass('player1');
                $(this).text(activePlayer);

                switchPlayer();
                checkWinner();
                displayWinOrDraw();
                showPlayAgain();
                scoreKeeper()

            } else if (activePlayer === "O") {
                $(this).addClass('player2');
                $(this).text(activePlayer);

                switchPlayer();
                checkWinner();
                displayWinOrDraw();
                showPlayAgain();
                scoreKeeper()

            }
        }
        )
    };
    userSelect()
    //winning logic - 8 possible winning combination
    // [123], [456], [789] - Horizontally
    // [147], [258], [369] - Vertically
    // [159], [357]        - Diagonally

    let winner;

    const checkWinner = function () {

        // X conditions
        if ($box1.text() === "X" && $box2.text() === "X" && $box3.text() === "X") { //Horizontal Win

            return winner = "X";

        } else if ($box4.text() === "X" && $box5.text() === "X" && $box6.text() === "X") {

            return winner = "X";

        } else if ($box7.text() === "X" && $box8.text() === "X" && $box9.text() === "X") {

            return winner = "X";

        } else if ($box1.text() === "X" && $box4.text() === "X" && $box7.text() === "X") { //Vertical Win

            return winner = "X";

        } else if ($box2.text() === "X" && $box5.text() === "X" && $box8.text() === "X") {

            return winner = "X";

        } else if ($box3.text() === "X" && $box6.text() === "X" && $box9.text() === "X") {

            return winner = "X";

        } else if ($box1.text() === "X" && $box5.text() === "X" && $box9.text() === "X") { //Diagonal Win

            return winner = "X";

        } else if ($box3.text() === "X" && $box5.text() === "X" && $box7.text() === "X") {

            return winner = "X";

        }

        // O conditions

        if ($box1.text() === "O" && $box2.text() === "O" && $box3.text() === "O") { //Horizontal Win

            return winner = "O";

        } else if ($box4.text() === "O" && $box5.text() === "O" && $box6.text() === "O") {

            return winner = "O";

        } else if ($box7.text() === "O" && $box8.text() === "O" && $box9.text() === "O") {

            return winner = "O";

        } else if ($box1.text() === "O" && $box4.text() === "O" && $box7.text() === "O") { //Vertical Win

            return winner = "O";

        } else if ($box2.text() === "O" && $box5.text() === "O" && $box8.text() === "O") {

            return winner = "O";

        } else if ($box3.text() === "O" && $box6.text() === "O" && $box9.text() === "O") {

            return winner = "O";

        } else if ($box1.text() === "O" && $box5.text() === "O" && $box9.text() === "O") { //Diagonal Win

            return winner = "O";

        } else if ($box3.text() === "O" && $box5.text() === "O" && $box7.text() === "O") {

            return winner = "O";

        }
        return winner;

    }

    //Display win or draw function
    let displayResult;

    const displayWinOrDraw = function () {
        //if win
        if (winner) {
            activePlayer = "";
            displayResult = $('#display-result').text(`The winner is ${winner}`);

        }
        //if draw
        const boxFilled = $('.box').text();

        if (boxFilled.split('').length === 9 && !winner) {
            winner = `DRAW!`;
            displayResult = $('#display-result').text(`Its a ${winner}`);

        };

        return;

    };

    //Play again button
    $('#reset-button').on('click', function () {

        activePlayer = "";
        winner = "";
        $('.box').text('');
        $('.box').removeClass('player1');
        $('.box').removeClass('player2');
        $('#display-result').text('');


        $('#main-container').removeClass('main-visibility');
        $buttonX.removeClass('main-visibility');
        $buttonO.removeClass('main-visibility');

        $buttonO.show();
        $buttonX.show();
        $('#reset-button').hide();
        $('#button-text-display').text('Choose who goes first now? ').show();
        $('#end-game').hide();

    }
    );

    //End game button
    $('#end-game').on('click', function () {
        location.reload();
    })

    //Score Keeper 
    const scoreKeeper = function () {

        if (winner === "X") {
            score.X += 1;
            $('#score-X p').text(`${score.X}`)
        } else if (winner === "O") {
            score.O += 1;
            $('#score-O p').text(`${score.O}`)
        }


    }

    //Start game page effect
    $('#header-button').on('click', function () {

        $('#header-container').addClass("header-hide");
        $('#header-container').removeAttr('id');
        $('#button-hide').attr('id', 'button-container');
        $('#button-hide').removeAttr('id');

    });

    // O or X selection after start game page
    if (!activePlayer) {

        $buttonX.on('click', function () {

            activePlayer = $buttonX.text();
            $buttonO.hide();
            $buttonX.hide();

            $('#button-text-display').text(`X makes the first move`);
            $('.main-hide').attr('id', 'main-container');
            $('.main-hide').removeClass();
            $('.scoreX-hide, .scoreO-hide').removeClass();

        })
    };
    if (!activePlayer) {

        $buttonO.on('click', function () {

            activePlayer = $buttonO.text();
            $buttonX.hide();
            $buttonO.hide();

            $('#button-text-display').text(`O makes the first move`);
            $('.main-hide').attr('id', 'main-container');
            $('.main-hide').removeClass();
            $('.reset-hide').attr('id', 'reset-button-container');
            $('.reset-hide').removeClass();
            $('.scoreX-hide, .scoreO-hide').removeClass();

        })
    };




    //Bring restat game up on screen after win/loss or draw
    const showPlayAgain = function () {

        if (winner && displayResult) {

            $('#main-container').addClass('main-visibility');
            $buttonX.addClass('main-visibility');
            $buttonO.addClass('main-visibility');

            $('#display-result').text(`${displayResult.text()}`);
            $('#display-result').attr('id', 'display-result');
            $('.reset-hide').attr('id', 'reset-button-container');
            $('.reset-hide').removeClass(`${displayResult.text()}`);
            $buttonO.hide();
            $buttonX.hide();
            $('#button-text-display').hide();
            $('#reset-button').show();
            $('#end-game').show();

        }

        return;
    };


});