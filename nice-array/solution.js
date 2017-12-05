'use strict';


function isNice(arr) {
return arr.length === 0 ? false : arr.every((currentItem) => arr.includes(currentItem + 1) || arr.includes(currentItem - 1));
}
