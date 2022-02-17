var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var prevBtn = $(".prevBtn");
var nextBtn = $(".nextBtn");
var tabElement = $$(".tab");
var currentTab = 0;
var steps = $$(".step");

showTab(currentTab);

function showTab(n) {
	tabElement[n].style.display = "block";

	if (n == 0) {
		prevBtn.style.display = "none";
	} else {
		prevBtn.style.display = "inline";
	}

	if (n == tabElement.length - 1) {
		nextBtn.innerHTML = "Submit";
	} else {
		nextBtn.innerHTML = "Next";
	}

	fixStepIndicator(n);
}

function nextPrev(n) {
    if (n == 1 && !validateForm()) return false;
	tabElement[currentTab].style.display = "none";
    currentTab = currentTab + n;
	if (currentTab >= tabElement.length) {
		document.getElementById("regForm").submit();
		return false;
	}
	showTab(currentTab);
}

function validateForm() {
	var valid = true;
	var currentInput = tabElement[currentTab].getElementsByTagName("input");
	for (let i = 0; i < currentInput.length; i++) {
	    if(currentInput[i].value == '') {
	        currentInput[i].className += ' invalid';
	        valid = false;
	    }
	}
	if (valid) {
		steps[currentTab].className += " finish";
	}
	return valid; // return the valid status
}

function fixStepIndicator(n) {
	steps.forEach((step) => {
		step.className = step.className.replace(" active", "");
	});
	steps[n].className += " active";
}
