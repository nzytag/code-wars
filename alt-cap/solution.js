'use strict';

function capitalize(s){
let arEvens = s.split('');
let areOdds=[];
areOdds.push(arEvens[0]);
arEvens[0] = arEvens[0].toUpperCase();
for (let i =1; i < arEvens.length; i++) {
if(i%2=== 0) {
  areOdds.push(arEvens[i]);
  arEvens[i] = arEvens[i].toUpperCase();
    } else {
  areOdds[i] = arEvens[i].toUpperCase();
  }
}
 let evens = arEvens.join('');
 let odds = areOdds = areOdds.join('');
  return [evens, odds];
};
