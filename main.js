let form = document.getElementById('calc')
let display = document.getElementById('display')
let num1 = num2 = operator = ''

form.addEventListener('click', function(e){
	if (e.target.id !== 'display') {
		let btnVal = e.target.innerHTML
		//i know i want to display the value of the number in the text field
		display.innerHTML += btnVal

		if (btnVal === 'C') {
			display.innerHTML = ''
			num1 = ''
			num2 = ''
			operator = ''
			//have operators hold previously typed numbers
		} else if (btnVal === '=') {
			let val = doMath() + ''
			display.innerHTML = val
			num1 = val
			opeartor = ''
			num2 = ''
			//define operators and their functions
		} else if (btnVal === '+') {
			operator = '+'
		} else if (btnVal === '-') {
			operator = '-'
		} else if (btnVal === '*') {
			operator = '*'
		} else if (btnVal === '/') {
			operator = '/'
		} else {
			// button is a number or a decimal
			if (operator === '') {
				num1 += btnVal
			} else {
				num2 += btnVal
			}
		}
	}
})
	
//be able to solve the string in the display
function doMath() {
	if (operator === '+') {
		return Number(num1) + Number(num2)
	} else if (operator === '-') {
		return Number(num1) - Number(num2)
	} else if (operator === '*') {
		return Number(num1) * Number(num2)
	} else if (operator === '/') {
		return Number(num1) / Number(num2)
	}
}



