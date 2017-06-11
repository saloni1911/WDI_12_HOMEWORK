
var withdrawsavingbtn = document.querySelector("#withdrawsav");
var depositsavingbtn = document.querySelector("#depositsav");
var withdrawcheckingbtn = document.querySelector("#withdrawcheck");
var depositcheckingbtn = document.querySelector("#depositcheck");

var savingbalance = document.querySelector("#savingbalance");
var savInput = document.querySelector("#savamount-input");
var savamt = savInput.value;
var newsav;

var checkingbalance = document.querySelector("#checkingbalance");
var checkInput = document.querySelector("#checkamount-input");
var chkamt = checkInput.value;
var newchk;

var zero = document.querySelectorAll(".boxone");
// if (savingbalance.textContent == 0) {
// 		zero.style.backgroundColor = "red";
// 		}	
// savingbalance.textContent - update
// checkingbalance.textContent - update

// var zeroBalanceSav = savingbalance.textContent;

// var zero = function(event) {
// 	if (event.which === zeroBalanceSav === 0) {
// 	console.log(event.target);
// 	event.target.idName = "one";
// 	}
// }

// zeroBalanceSav.addEventListener("onchange", zero);


var depositsav = function() {
	savamt = savInput.value;
	console.log(savamt);
	newsav = Number(savInput.value) + Number(savingbalance.textContent);
	savingbalance.textContent = newsav;
	savInput.value = "";
}

depositsavingbtn.addEventListener("click", depositsav);

var depositchk = function() {
   chkamt = checkInput.value;
		newchk = Number(chkamt) + Number(checkingbalance.textContent);
	checkingbalance.textContent = newchk;
	checkInput.value = "";
}

depositcheckingbtn.addEventListener("click", depositchk);


var withdrawsav = function() {
	var total = Number(savingbalance.textContent) + Number(checkingbalance.textContent);
	var balance = Number(savInput.value) - Number(savingbalance.textContent);
	savamt = savInput.value;
	console.log(savamt);
	if (Number(savingbalance.textContent) >= Number(savInput.value)) {
		newsav = Number(savingbalance.textContent) - Number(savInput.value);
		console.log(newsav);
		savingbalance.textContent = newsav;
	} else if (total >= Number(savInput.value)) {
		newsav = Number(savingbalance.textContent) - Number(savingbalance.textContent);
		savingbalance.textContent = newsav;
			// if (savingbalance.textContent == 0) {
		zero.innerhtml.style.backgroundColor = "red";
	
		newchk = Number(checkingbalance.textContent) - balance;
		checkingbalance.textContent = newchk;
	} else {
		console.log("Ignore transaction, no sufficient funds")
	}
	savInput.value = "";
}

withdrawsavingbtn.addEventListener("click", withdrawsav);


var withdrawchk = function() {
	var total = Number(checkingbalance.textContent) + Number(savingbalance.textContent);
	var balance = Number(checkInput.value) - Number(checkingbalance.textContent);
	chkamt = checkInput.value;
	console.log(chkamt);
	if (Number(checkingbalance.textContent) >= Number(checkInput.value)) {
		newchk = Number(checkingbalance.textContent) - Number(checkInput.value);
		console.log(newchk);
		checkingbalance.textContent = newchk;
	} else if (total >= Number(checkInput.value)) {
		newchk = Number(checkingbalance.textContent) - Number(checkingbalance.textContent);
		checkingbalance.textContent = newchk;
		newsav = Number(savingbalance.textContent) - balance;
		savingbalance.textContent = newsav;
	} else {
		console.log("Ignore transaction, no sufficient funds")
	}
	checkInput.value = "";
}

withdrawcheckingbtn.addEventListener("click", withdrawchk);








