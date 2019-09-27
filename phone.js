function myClick(a) {
	document.getElementById('delete').style.display = ''
	document.getElementById('screen2').innerHTML += a;
}
function del(){
	var a = document.getElementById('screen2').value;
	// var b = slice(a.lenght(1, ));
	console.log(a);
}
function call(){
	var a = JSON.stringify(localStorage.getItem("pin"));
			console.log(a);
	var rechargePin = '*555*'+ a+'#';
	// var cardPin = JSON.parse(screen2.value);
	// var cardPin = getElementById('screen2').value;
	var cardPin = screen2.value;
	console.log(cardPin)
	var success = 'Your Recarge of N100 is successfull, thank you';
	var fail = 'You have entered an incorrect PIN your line will be barred if you try more than 5 times';
	if (cardPin === rechargePin){
		document.getElementById('screen2')= success;
	} else {
		document.getElementById('screen2')= fail;
	}
			// display.innerText = a.name;
	// alert('hjhijdnikmkmk')
}