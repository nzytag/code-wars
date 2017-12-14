'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let arrOne = stringOne.split('');
  let arrTwo = stringTwo.split('');
  let result = '';
  for (let i = 0; i < arrOne.length; i++){
    if(!(arrOne[i] === arrTwo[i])) {
      result = result + arrOne.join('') + '\n';
      arrOne[i] = arrTwo[i];
    }
  }
  result = result + stringTwo + '\n'
  return result;
}
