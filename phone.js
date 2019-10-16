// document.getElementById('tttt').innerHTML ="How far";
var d = setInterval(stime);
function stime(){
		var stime= new Date;
		var hour = stime.getHours();
		var Minute = stime.getMinutes();
		var Sec = stime.getSeconds();

		var year = stime.getFullYear();
		var month = 1+stime.getMonth();
		var day = stime.getDate();

		var systemTime = hour+':'+Minute;
		document.getElementById('phoneClock').innerHTML+=    day+'/'+month+'/'+year;
		phoneClock.innerHTML= systemTime+ '<br>'
	// 	document.getElementById('phoneClock').innerHTML+=    day+'/'+month+'/'+year+'--'+H+':'+M+':'+S
		document.getElementById('phoneClock').innerHTML+=    day+'/'+month+'/'+year;
	
	}

// function stime(){

// 	 var a = new Date();
// 	var H = a.getTime();
// 	var M = a.getMinutes();
// 	var time = H+':'+M;
// 	homeScreen.innerHTML =time;
// 	console.log('ihik,bj');
// }
function boot(){
	document.getElementById('blackScreen').style.display = 'none';
	document.getElementById('homeScreen').style.display = 'block';
	// document.getElementById('videoScreen').style.display = '';
	document.getElementById('appScreen').style.display = 'none';
	// var video = document.getElementById('btVideo');
	// video.play();

	// document.getElementById('screen').setAtrribute(background-color)=black;
}
function home(){
	document.getElementById('blackScreen').style.display = 'none';
	document.getElementById('homeScreen').style.display = 'block';
	// document.getElementById('videoScreen').style.display = '';
	document.getElementById('appScreen').style.display = 'none';
	document.getElementById('screen').style.display = 'none';
	// var video = document.getElementById('btVideo');
	// video.play();

	// document.getElementById('screen').setAtrribute(background-color)=black;
}
function back(){
	document.getElementById('blackScreen').style.display = 'none';
	document.getElementById('homeScreen').style.display = 'none';
	// document.getElementById('videoScreen').style.display = '';
	document.getElementById('appScreen').style.display = 'block';
	document.getElementById('screen').style.display = 'none';
	// var video = document.getElementById('btVideo');
	// video.play();

	// document.getElementById('screen').setAtrribute(background-color)=black;
}
function loadapps(){
	document.getElementById('blackScreen').style.display = 'none';
	document.getElementById('homeScreen').style.display = 'none';
	// document.getElementById('videoScreen').style.display = '';
	document.getElementById('appScreen').style.display = 'block';
	// var video = document.getElementById('btVideo');
	// video.play();

	// document.getElementById('screen').setAtrribute(background-color)=black;
}

function showDialler(){
	document.getElementById('homeScreen').style.display = 'none';
	document.getElementById('appScreen').style.display = 'none';
	document.getElementById('screen').style.display= 'block';

}

function myClick(a) {
	document.getElementById('screen2').innerHTML += a;
	document.getElementById('delete').style.display = ''
}
function del(){
	var a = document.getElementById('screen2').innerHTML;
	var b = a.substr(0, a.length-1);
	document.getElementk7857utdById('screen2').innerHTML = b;
	
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