'use strict';

function filter_list(l) {
 return l.filter(digit=>{
 if(typeof digit === 'number'){
 return true
 }
 })
 }
