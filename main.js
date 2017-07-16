let buttons = document.querySelectorAll('button')
	
buttons.forEach(function(action){
	//i know i want to display the value of the number in the text field
	action.addEventListener("click", function(action) {

			let screen = document.getElementById ('display')
			let btnVal = this.innerHTML
			// if equal do the math and show answer in display 
			let equation = screen.innerHTML
			//value of button add to the the inner html of display 
			//if C reset inerhtml in display the rest inner html add to previous in display

		if (btnVal === 'C') {
			screen.innerHTML = ''
		}
		else if (btnVal === '='){
			return domath
		}
		//display the value of inner html onto the display
		else {
			screen.innerHTML += btnVal
		}

		function domath () {
			let num1 = Number()
			let num2 = Number()
			if (btnVal === '/') {
			return num1 / num2
			}
			if (btnVal === '*') {
				return num1 * num2
			}
			if (btnVal === '+') {
				return num1 + num2
			}
			if (btnVal === '-') {
				return num1 - num2
			}
		}

	});
})

//define operators and their functions
//have operators hold previously typed numbers
//be able to solve the string in the display


