//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  $('#controls #small').click(function(event){
    startGame();
  });
});

// Initializes the game and creates the board
function startGame() {
  $.each(lettersSmall, function (index, value){
    var table = $('#game');
    var column = document.createElement('div');
    $(column).addClass('card');
    $(column).attr('id', index);
    $(column).text(value);
    $(table).append(column);

  })
}
  // for (var i = 0; i < lettersSmall.length; i++) {
  //   $('#game').append('<div class = "card"></div>').each(function(i) {
  //   if (this.class = "card") {
  //     $('div.card').attr('id', i);
  //   }
  // });

// Flips a card and checks for a match
function cardClick() {

}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}
