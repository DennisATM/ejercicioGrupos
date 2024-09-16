const regexValidarSoloTexto = /[A-Za-z]/;

const regexNoSonLetras = /[^A-Za-z]/g;

const regexBuscarVocales = /[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/g;

const regexEsNumero = /[0-9]/;

//Ejercicio N°1
const isPalindrome = (cadena)=>{
    if(regexValidarSoloTexto.test(cadena)){
        let cadenaEnMinuscula = cadena.toLowerCase().replace(regexNoSonLetras,'');
        let cadenaAlReves = cadenaEnMinuscula.split('').reverse().join('');
        return (cadenaEnMinuscula === cadenaAlReves);

    }else{
        alert('Debes ingresar una cadena de texto');

    }
}

//Ejercicio N°2
const getVowelsCount = (cadena)=>{
    if(regexValidarSoloTexto.test(cadena)){
        let cantidadDeVocales = cadena.match(regexBuscarVocales);
        return cantidadDeVocales.length;
    
    }else{
        alert('Debes ingresar una cadena de texto');

    }
}

//Ejercicio N° 3
function Person(nombre,edad){
    let _nombre = nombre;
    let _edad = edad;

    this.getDetails = function(){
        return `Nombre: ${_nombre}, Edad: ${_edad}`;
    }
}

//Ejercicio N° 4
const multiplicarPorDos = (numeros) => {
    numerosPorDos=[];
    
    if (typeof numeros !== 'object') return alert('Debes ingresar un array con dos números');
    if (numeros.length == 0) return alert('No podemos calcular elementos vacíos');
    if (numeros.length != 2) return alert('Sólo se admiten dos números'); 
    
    numeros.forEach(numero => {
        if(!regexEsNumero.test(numero)) {
            return alert('Ambos elementos deben ser números');
        } else {
            numerosPorDos.push(numero*2);
        }
    }); 

    if(numerosPorDos.length == 2){
        return numerosPorDos;
    }
}

//Ejercicio N° 5
const filterEvenNumbers = (numeros)=>{
    if (typeof numeros !== 'object') return alert('Ingresa una lista válida');
    if (numeros.length == 0) return [];

    let sonNumeros = numeros.map(numero =>  regexEsNumero.test(numero));
    if(!sonNumeros.every(valor=>valor===true)) return  alert('Debe contener numeros'); 
    
    return numeros.filter(numero => parseInt(numero) % 2 === 0);
}
