'use strict';

// my original solution (I did this during break between 201 and 301) was this one:
function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var solution = "";
    for (i=0; i<=str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) === -1) {
            solution = solution + str.charAt(i);
        }
    }
  return solution;
}

// // My new solution after i found this:
// g modifier: global. All matches (don't return on first match)
//
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
// so my new solution was:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
