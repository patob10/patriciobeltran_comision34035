

alert("Bienvenido, por favor pulse enter para comenzar a utilizar la calculadora online");

let operacion = 0;
//inicio del condicional
while (operacion !== '1' && operacion !== '2' && operacion !== '3' && operacion !== '4' ) {
    option = prompt("Ingrese opción deseada: 1- Sumar /  2- Restar / 3- Multiplicar / 4- Dividir");
    
    if (option === '1') {
        var valor1 = prompt("Ingrese el primer valor");
        var valor2 = prompt("Ingrese el segundo valor");
        //Funcion sumar
        function sumar(v1, v2){
            var resultado1 = parseFloat(v1) + parseFloat(v2);
            return resultado1;
            
        }
        let suma = sumar(valor1, valor2);
        alert("La suma es: " + suma);

    }else if (option === '2') {
        let valor1 = prompt("Ingrese el primer valor");
        let valor2 = prompt("Ingrese el segundo valor");

        //funcion restar 
        function restar(v1, v2){
            var resultado2 = parseFloat(v1) - parseFloat(v2);
            return resultado2;
        }
        let resta = restar(valor1, valor2);
        alert("La resta es: " + resta);
    
    }else if (option === '3') {
        let valor1 = prompt("Ingrese el primer valor");
        let valor2 = prompt("Ingrese el segundo valor");

        //Funcion multiplicar
        function multiplicar(v1, v2){
            var resultado3 = parseFloat(v1) * parseFloat(v2);
            return resultado3;
        }
        let multi = multiplicar(valor1, valor2);
        alert("La resta es: " + multi);
        
    }else if (option === '4') {
        let valor1 = prompt("Ingrese el primer valor");
        let valor2 = prompt("Ingrese el segundo valor");
        //funcion dividir
        function dividir(v1, v2){
            var resultado4 = parseFloat(v1) / parseFloat(v2);
            return resultado4;
        }
        let divi = dividir(valor1, valor2);
        alert("La resta es: " + divi);
    }
    else {alert("Entrada incorrecta. Por favor ingrese una opción válida: del 1 al 4");
    break;
}
}
