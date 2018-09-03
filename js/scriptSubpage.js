var numbers = [];
var numbersTaken = [];
var cardIsFliped = [];
var drawnNumbersAmount = 9;
var firstVisit = true;

for (var i = 0; i < drawnNumbersAmount; i++) {
  cardIsFliped[i] = false;
}

/*
  LOADING ANIMATION
*/

window.addEventListener("load", function(){
    document.getElementById("loader").style.height = "0px";

    document.getElementById("loader").style.top = "100vh";

    document.getElementById("loader").style.visibility = "hidden";

    setTimeout(function() {
      document.getElementById("transitionColor").style.height = "0px";

      document.getElementById("transitionColor").style.top = "100vh";

      document.getElementById("transitionColor").style.visibility = "hidden";
    }, 250); //250
});

/*
  GENERATE RANDOM NUMBERS
*/

function generateNumbers(){
  if (firstVisit) {
    firstVisit = false;
    document.getElementById("cardSection").innerHTML = "";

    for (var i = 0; i < drawnNumbersAmount; i++) {
      numbersTaken[i + 1] = false;
    }

    for (var i = 0; i < drawnNumbersAmount; i++) {
      do {
        actualNumber = Math.floor(Math.random() * drawnNumbersAmount) + 1;
      } while (numbersTaken[actualNumber] == true)
        numbersTaken[actualNumber] = true;
        numbers[i] = actualNumber;
        generateCards(i, actualNumber);
  }

  }else{
    flipAll();
    setTimeout(function() {
      document.getElementById("cardSection").innerHTML = "";

      for (var i = 0; i < drawnNumbersAmount; i++) {
        numbersTaken[i + 1] = false;
      }

      for (var i = 0; i < drawnNumbersAmount; i++) {
        do {
          actualNumber = Math.floor(Math.random() * drawnNumbersAmount) + 1;
        } while (numbersTaken[actualNumber] == true)
          numbersTaken[actualNumber] = true;
          numbers[i] = actualNumber;
          generateCards(i, actualNumber);
      }
    }, 500);
  }
}

/*
  CARD FLIP
*/

function flip(cardNumber) {
  if (cardIsFliped[cardNumber]) {
    cardIsFliped[cardNumber] = false;
  }else{
    cardIsFliped[cardNumber] = true;
  }
  var cardToFlip = $('.card' + cardNumber);
  cardToFlip.toggleClass('flipped');
}

function flipAll() {
  for (var i = 0; i < drawnNumbersAmount; i++) {
    if (cardIsFliped[i]) {
      var cardToFlip = $('.card' + i);
      cardToFlip.toggleClass('flipped');
      cardIsFliped[i] = false;
    }
  }
}
