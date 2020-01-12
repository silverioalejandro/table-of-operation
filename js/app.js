// tipos de variables
// boolean = true o false
// string = "cadena de texto"
// integer = numero
// date = fecha
// const valorA = true;
// const valorB = false;

document.addEventListener('submit', (e) => {
	e.preventDefault();

	let valueA = document.getElementById('valueA').value;

	let valueB = document.getElementById('valueB');
	let typeOperation = document.getElementById('typeOperation');

	if (typeOperation.value == 'sum') {
		console.log(parseInt(valueA) + parseInt(valueB.value));
	}

	if (typeOperation.value == 'subtraction') {
		console.log(parseInt(valueA) - parseInt(valueB.value));
	}

	if (typeOperation.value == 'multiplication') {
		console.log(parseInt(valueA) * parseInt(valueB.value));
	}

	if (typeOperation.value == 'division') {
		console.log(parseInt(valueA) / parseInt(valueB.value));
	}
});

// No recomendable
// console.log(valorA + ' -' + valorB);
// console.log(`${valorA} - ${valorB}`);
