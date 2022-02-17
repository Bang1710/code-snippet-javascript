var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var password = $('input[type="password"]');
var message = $(".message");
var letter = $(".letter");
var capital = $(".capital");
var number = $(".number");
var length = $(".length");

password.addEventListener("focus", function () {
	message.style.display = "block";
});

$('.password-form').addEventListener("change", function () {
	message.style.display = "none";
});

password.onkeyup = function () {
	var lowerCaseLetter = /[a-z]/g;
	if (password.value.match(lowerCaseLetter)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}

	var upperCaseLetter = /[A-Z]/g;
	if (password.value.match(upperCaseLetter)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}

	var numberCase = /[0-9]/g;
	if (password.value.match(numberCase)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	var lengthCase = password.value.length;
	if (lengthCase >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
};

var hidePassword = $('.hide-password')
var showPassword = $('.show-password')

hidePassword.onclick = function() {
    password.type = "text";
    this.style.display = 'none';
    showPassword.style.display = 'block';
}

showPassword.onclick = function() {
    password.type = "password";
    this.style.display = 'none';
    hidePassword.style.display = 'block';
}
