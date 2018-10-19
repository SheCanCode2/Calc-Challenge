/*
 * Implement all your JavaScript in this file!
 */
 //delcaring global variable that can be accessible to all functions
 let operator
 let value1=''
 let value2=''
 let result
 let display = document.getElementById('display')

 //get the value of pressed button and display it on the screen
function getValue(element){
	console.log(element.value)
	let value
	if(!operator && !result){
		value = value1 += element.value
	} else if(operator && !result){
		value = value2 += element.value
	} else if(operator && result){
		value2 = ''
		value1 = result
		value = value2 += element.value
	}
	return display.value = value
}

// set the mathematic operator
function changeOperator(element){
	operator = element.id
}


// get the response depending on the setted math operator
function getResponse(){
	switch(operator){
		case 'addButton':{ 
			result = parseInt(value1) + parseInt(value2)
			return display.value = result
		}
		case 'subtractButton':{
			result = parseInt(value1) - parseInt(value2)
			return display.value = result
		}
		case 'multiplyButton':{
			result = parseInt(value1) * parseInt(value2)
			return display.value = result
		}
		case 'divideButton':{
			result = parseInt(value1) / parseInt(value2)
			return display.value = result
		}
		default:
			return null
	}
}

//rese the caculator
function clearAll(){
	operator = undefined
	value1=''
	value2=''
	result = undefined
	display.value = 0
}