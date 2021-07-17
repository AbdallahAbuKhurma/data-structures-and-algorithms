'use strict';

function duckDuckGoose(players, goose) {
  if(goose >= players.length) {
    if(goose%players.length === 0) {
      return players[players.length - 1];
    } else {
      return players[goose%players.length - 1];
    }
  } else {
    return players[goose - 1];
  }
}

/*
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 1)); //should return 'a'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 2)); //should return 'b'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 3)); //should return 'c'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 4)); //should return 'd'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 5)); //should return 'a'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 6)); //should return 'b'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 7)); //should return 'c'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 8)); //should return 'd'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 9)); //should return 'a'
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 10));//should return 'b'
*/

module.exports = duckDuckGoose;
