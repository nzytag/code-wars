'use strict';
/////////////////

function solution(str){
  let rev= [];
  str = str.split('');
  for (let i = str.length -1; i >= 0; i --){
    rev.push(str[i]);
  }
  return rev.join('')
}
