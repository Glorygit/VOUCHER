function rand() {
var quantities = quant.value		
	for (var i = 0; i < quantities; i++) {
		var a = Math.ceil(Math.random() * 10000);
		var b = Math.ceil(Math.random() * 10000);
		var c = Math.ceil(Math.random() * 10000);
		var d = Math.ceil(Math.random() * 10000);
		


// conditions to test if random numbers generated is up to four 
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
		var store= 'Store'+ Object.keys(localStorage).length;
		if (cardType.value ='MTN'){
			var rechargeCode= '*555*';
			var load = rechargeCode+y+'#';
		} 
		 if (cardType.value ='Glo'){
			var rechargeCode= '*126*';
			var load = rechargeCode+y+'#';
		} 
		 if (cardType.value ='Airtel'){
			var rechargeCode= '*123*';
			var load = rechargeCode+y+'#';
		}
		 if (cardType.value ='9Mobile'){
			var rechargeCode= '*232*';
			var load = rechargeCode+y+'#';
		} 
		// else {
		// 	alert('INVALID');
		// }
		
		alert(load);
		var s = {'Network':cardType.value, 'PIN':y, 'Amount':amount.value};
		s = JSON.stringify(s);
		// alert(R);
		 localStorage.setItem(store, s );
		



	var dat = new Date;
	var  H = dat.getHours();
	var  M = dat.getMinutes();
	var  S = dat.getSeconds();
	var year = dat.getFullYear();
	var month = dat.getMonth();
	var day = dat.getDay();
	if (H <10) {
		H= '0'+H;
	}
	if (M <10) {
		M= '0'+M;
	}
	if (S <10) {
		S= '0'+S;
	}



card();
document.getElementById('disp').style.visibility= 'visible';
document.getElementById('disp').innerHTML += '<b>'+ 'PIN: '+ e + '</b>'+'<br>';
document.getElementById('disp').innerHTML+=    day+'/'+month+'/'+year+'--'+H+':'+M+':'+S + '<br>'+'<hr>'+'<br>'    ;
// document.getElementById('disp').innerHTML +=  'PIN: '+ a+'-'+b+'-'+c+'-'+d+ '<br>';

}
}


function card(){
	var w = document.getElementById('amount').value;
	var v = document.getElementById('cardType').value;
	var SN = Math.ceil(Math.random() * 1000000000000000);
	
	

	document.getElementById('disp').innerHTML+=   v + `   DEMMY GLOBAL  `+  '<b>' +w+ '</b>'+ '<br>';
	document.getElementById('disp').innerHTML+=   `S/N :  `+  SN+ '<br>';
	// document.getElementById('disp').innerHTML+=    (H+':'+M+':'+S);
	}

