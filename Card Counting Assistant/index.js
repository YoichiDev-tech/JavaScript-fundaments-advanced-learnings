let count = 0;
function cardCounter(card) {
  if(card == 2) {
    count++;
  } else if(card == 3) {
    count++;
  } else if(card == 4) {
    count++;
  } else if(card == 5) {
    count++;
  } else if(card == 6) {
    count++;
  }

  if(card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count--;
  }

  if(count > 0) {
    return count + " " + "Bet";
  } else {
    return count + " " + "Hold";
  }
  return;
}

let card;
console.log(cardCounter(card));