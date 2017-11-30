function insertDash(number) {
 let previous='',
	 newstring='';

	number = number.toString();
	for ( i=0; i<number.length; i++){
		parseInt(number[i])%2 === 0? current='even' : current='odd';
		if (current==='odd' && previous==='odd'){
			newstring=newstring + '-' + number[i];
			previous='odd';
		} else {
			newstring=newstring + number[i];
		 	previous=current;
		}
	}

  return newstring;
}
