// tipos de variables
// boolean = true o false
// string = "cadena de texto"
// integer = numero
// date = fecha
// const valorA = true;
// const valorB = false;

console.log('');

document.addEventListener('submit', (e) => {
	e.preventDefault();

	let valueA = document.getElementById('valueA').value;
	let valueB = document.getElementById('valueB');

	let typeOperation = document.getElementById('typeOperation');

	let resultOperation = 0;

	// valueA = tienen nurmero = true
	// valueA = vacio = false
	if (!valueA || !valueB.value) {
		alert('El campo es requerido');
		return;
	}
	if (typeOperation.value == 'division' && valueB.value == 0) {
		alert('No se puede divider entre 0');
		return;
	}

	if (!/^([0-9])*$/.test(valueA) || !/^([0-9])*$/.test(valueB.value)) {
		alert('Ingrese solo número');
		return;
	}

	if (typeOperation.value == 'sum') {
		resultOperation = parseInt(valueA) + parseInt(valueB.value);
	}

	if (typeOperation.value == 'subtraction') {
		resultOperation = parseInt(valueA) - parseInt(valueB.value);
	}

	if (typeOperation.value == 'multiplication') {
		resultOperation = parseInt(valueA) * parseInt(valueB.value);
	}

	if (typeOperation.value == 'division') {
		resultOperation = parseInt(valueA) / parseInt(valueB.value);
	}

	document.getElementById('type-operation').innerHTML = typeOperation.value;

	document.getElementById('result-operation').innerHTML = resultOperation;

	console.log('el resultado de la operacion');
});

// No recomendable
// console.log(valorA + ' -' + valorB);
// console.log(`${valorA} - ${valorB}`);
