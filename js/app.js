// tipos de variables
// boolean = true o false
// string = "cadena de texto"
// integer = numero
// date = fecha
// const valorA = true;
// const valorB = false;

class Operation {
	constructor(valueA, valueB, typeOperation) {
		this.valueA = parseInt(valueA);
		this.valueB = parseInt(valueB);
		this.typeOperation = typeOperation;
	}

	resultOperation() {
		if (this.typeOperation == 'sum') {
			return this.valueA + this.valueB;
		}
		if (this.typeOperation == 'subtraction') {
			return this.valueA - this.valueB;
		}
		if (this.typeOperation == 'multiplication') {
			return this.valueA * this.valueB;
		}
		if (this.typeOperation == 'division') {
			return this.valueA / this.valueB;
		}
	}

	muestraValor() {
		return `Variables de la operación: ValorA ${this.valueA} - - valueB ${this.valueB}`;
	}
}

document.addEventListener('submit', (e) => {
	e.preventDefault();

	//instantiation de las variables
	let valueA = document.getElementById('valueA').value;
	let valueB = document.getElementById('valueB');
	let typeOperation = document.getElementById('typeOperation');
	let resultOperation = 0;

	// validations
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

	//instantiation de la clase
	let operation = new Operation(valueA, valueB.value, typeOperation.value);
	resultOperation = operation.resultOperation();

	// mostrar resultado
	document.getElementById('type-operation').innerHTML = typeOperation.value;
	document.getElementById('result-operation').innerHTML = resultOperation;
});

// Not recommendable
// console.log(valorA + ' -' + valorB);
// console.log(`${valorA} - ${valorB}`);
