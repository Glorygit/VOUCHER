// var video = '<src="bootVideo.mp4">';
// 	video.play();
// document.getElementById('homeScreen').style.display = ' ';


function rand() {
var quantities = quant.value;		
	for (var i = 0; i < quantities; i++) {
		var a = Math.ceil(Math.random() * 10000);
		var b = Math.ceil(Math.random() * 10000);
		var c = Math.ceil(Math.random() * 10000);
		var d = Math.ceil(Math.random() * 10000);
		
		// console.log(e);
// console.log(b);
// console.log(c);
// console.log(d);
// var k = Math.random();
// console.log(k);
// console.log(k * 10000);
// var cc = Math.ceil(k * 10000);

// contions to test if random numbers generated is up to four 
// digits each if no add multiple of zeros
		if (a < 10) {
			a += '000';
		} else if (a< 100) {
			a += '00'
		} else if (a< 1000) {
			a += '0'
		}
		if (b < 10) {
			b += '000';
		} else if (b< 100) {
			b += '00'
		} else if (b< 1000) {
			b += '0'
		}
		if (c < 10) {
			c += '000';
		} else if (c< 100) {
			c += '00'
		} else if (c< 1000) {
			c += '0'
		}


		if (d < 10) {
			d += '000';
		} else if (d< 100) {
			d += '00'
		} else if (d< 1000) {
			d += '0'
		}
		var e = a+'-'+b+'-'+c+'-'+d;
		var y = String(a)+String(b)+String(c)+String(d);
		if (cardType.value= 'MTN') {
			var z = '*555*'+ y+'#';
		} else if (cardType.value= 'GLO') {
			var z = '*123*'+ y+'#';
		} else if (cardType.value= 'Airtel') {
			var z = '*126*'+ y+'#';
		} else if (cardType.value= '9Mobile') {
			var z = '*232*'+ y+'#';
		} else {
			alert ('ERROR');
		}
		
		// if (amount.value=N100){
		// 	var store='MTN N100' + Object.keys(localStorage).length;
		//  localStorage.setItem(store,z);

		// }

		var store= 'Store'+ Object.keys(localStorage).length +1;
		 localStorage.setItem(store,z);

	var dat = new Date;
	var  H = dat.getHours();
	var  M = dat.getMinutes();
	var  S = dat.getSeconds();
	var year = dat.getFullYear();
	var month = 1+dat.getMonth();
	var day = dat.getDate();
	if (H <10) {
		H= '0'+H;
	}
	if (M <10) {
		M= '0'+M;
	}
	if (S <10) {
		S= '0'+S;
	}
	if (month <10) {
		month= '0'+month;
	}
	if (day <10) {
		day= '0'+day;
	}

card();
document.getElementById('disp').style.visibility= 'visible';
document.getElementById('disp').innerHTML += '<b>'+ 'PIN: '+ e + '</b>'+'<br>';
document.getElementById('disp').innerHTML+=    day+'/'+month+'/'+year+'--'+H+':'+M+':'+S + '<br>'+'<hr>'+'<br>'    ;
// document.getElementById('disp').innerHTML +=  'PIN: '+ a+'-'+b+'-'+c+'-'+d+ '<br>';

}
// localStorage.setItem("pins", pinns);
}
function card(){
	var w = document.getElementById('amount').value;
	var v = document.getElementById('cardType').value;
	var SN = Math.ceil(Math.random() * 1000000000000000);
	
	

	document.getElementById('disp').innerHTML+=   '<b>' +v+ '</b>' + `   DEMMY GLOBAL  `+  '<b>' +w+ '</b>'+ '<br>';
	document.getElementById('disp').innerHTML+=   `S/N :  `+  SN+ '<br>';
	// document.getElementById('disp').innerHTML+=    (H+':'+M+':'+S);
	}


//code for phone
function showDialler(){
	document.getElementById('screen').style.display= 'block';
	document.getElementById('homeScreen').style.display = 'none';
}

function activatee(){
	var m = new rand();
	var n= m.get(k);
	console.log();
			var load = '*555*'+k+'#';
			localStorage.setItem("pin", e);
		}


	function rand12(min, max) {
var quatities = quant.value;
	for (var i = 0; i < quant; i++) {
		
// document.getElementById('disp').innerHTML = random();
var a = Math.ceil(Math.random() * 10000);
var b = Math.ceil(Math.random() * 10000);
var c = Math.ceil(Math.random() * 10000);
var d = Math.ceil(Math.random() * 10000);

// var k = Math.random();
// console.log(k);
// console.log(k * 10000);
// var cc = Math.ceil(k * 10000);
// if (d < 1000) {
// 	d += '0';
// } else if (d< 100) {
// 	d += '00'
// }
// console.log(cc.length);

// console.log(b);
// console.log(c);
// console.log(d);
document.getElementById('disp').innerHTML +=  a+'-'+b+'-'+c+'-'+d;

	}
}
function myClick(a) {
	document.getElementById('screen2').innerHTML += a;
	document.getElementById('delete').style.display = ''
}
function del(){
	var a = document.getElementById('screen2').innerHTML;
	var b = a.substr(0, a.length-1);
	document.getElementById('screen2').innerHTML = b;
	
}
function call(){
	// var a = JSON.stringify(localStorage);
	var a = JSON.stringify(localStorage);
			alert(a);
	var rechargePin = document.getElementById('screen2').innerHTML;
	// var cardPin = JSON.parse(screen2.value);
	// var cardPin = getElementById('screen2').value;
	// var cardPin = JSON.stringify.parse(localStorage.getItem(keys));
	var n = a.search('*555*4370939053016091#');
	alert(n);
	
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