

document.addEventListener('DOMContentLoaded', function () {
    var diceElement = document.getElementById('dice');
    var diceImageElement = document.getElementById('diceImage');
    var outputElement = document.getElementById('output');
  
    diceElement.addEventListener('click', function () {
      
      var randomNumber = Math.floor(Math.random() * 6) + 1;
  
      
      if (randomNumber === 1) {
        diceImageElement.src = 'inverted-dice-1.png';
      } 
      else if (randomNumber === 2) {
        diceImageElement.src = 'inverted-dice-2.png';
      }
      else if (randomNumber === 3) {
        diceImageElement.src = 'inverted-dice-3.png';
      }
      else if (randomNumber === 4) {
        diceImageElement.src = 'inverted-dice-4.png';
      }
      else if (randomNumber === 5) {
        diceImageElement.src = 'inverted-dice-5.png';
      }
      else if (randomNumber === 6) {
        diceImageElement.src = 'inverted-dice-6.png';
      }
      
      outputElement.textContent = 'the NUMBER ISSS: ' + randomNumber;
    });
  });
  