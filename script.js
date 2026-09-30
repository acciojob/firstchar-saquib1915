function firstChar(text) {
  // your code here
	let p=text.charAt(0);
	if(p===' '||p===''){
		return '';
	}
	else{
		return p;
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
