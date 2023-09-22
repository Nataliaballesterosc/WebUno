let menuPrincipal = true
var contaUno = 0
var contaDos = 0
var contaTres = 0
var contaCuatro = 0
var contaCinco = 0
var contaSeis = 0
var contaSiete = 0
var contaOcho = 0


while (menuPrincipal) {
    console.log('EJERCICIOS MATEMAICOS')
    let opcion = Number(prompt(' EJERCICIOS MATEMATICOS\n\n 1- CONTADOR DE NUMEROS PARES E IMPARES\n 2- CALCULADORA FACTORIAL\n 3- VALIDANDO CONTRASEÑA\n 4- GENERADOR DE TABLAS DE MULTIPLICAR\n 5- SUMA DE NUMEROS PRIMOS\n 6- SECUENCIA FIBONACCI\n 7- CONVERTIDOR TEMPERARTU\n 8- CALCULADORA DE POTENCIA\n 9- CERRAR '))

    if (opcion == 9) {
        menuPrincipal = false
    }
   
    
    function confirmar() {
        let opcionAcceso= true
        while (opcionAcceso) {
            let acceso = Number(prompt(' Desea ejecutar este ejercicio\n\n 1. SI \n 2.  NO'))
            
            if (acceso == 2) {
                opcionAcceso = false
            }
            if (acceso == 1) {
               ejecucucion()
            }

            if (opcion == 1 && acceso == 1 ) {
                contaUno = contaUno +1
            } 
            if (opcion == 2 && acceso == 1 ) {
                contaDos = contaDos +1
            }
            if (opcion == 3 && acceso == 1 ) {
                contaTres = contaTres +1
            }
            if (opcion == 4 && acceso == 1 ) {
                contaCuatro = contaCuatro +1
            }
            if (opcion == 5 && acceso == 1 ) {
                contaCinco = contaCinco +1
            }
            if (opcion == 6 && acceso == 1 ) {
                contaSeis = contaSeis +1
            }
            if (opcion == 7 && acceso == 1 ) {
                contaSiete = contaSiete +1
            }
            if (opcion == 8 && acceso == 1 ) {
                contaOcho = contaOcho +1
            }
            
        }
    }

    function contador (){

        if (contaUno > contaDos && contaUno> contaTres && contaUno > contaCuatro && contaUno > contaCinco && contaUno > contaSeis && contaUno> contaSiete && contaUno> contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 1')  
        } else
        if (contaDos > contaUno && contaDos> contaTres && contaDos> contaCuatro && contaDos> contaCinco && contaDos> contaSeis && contaDos>contaSiete && contaDos> contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 2')    
        } else
        if (contaTres > contaUno && contaTres> contaDos && contaTres > contaCuatro && contaTres > contaCinco && contaTres > contaSeis && contaTres> contaSiete && contaUno> contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 3')  
        } else
        if (contaCuatro > contaUno && contaCuatro> contaDos && contaCuatro> contaTres && contaCuatro> contaCinco && contaCuatro> contaSeis && contaCuatro>contaSiete && contaCuatro> contaOcho ){
        console.log('El mas ejecutado fue Ejercicio 4')    
        }else
        if (contaCinco > contaUno && contaCinco > contaDos && contaCinco> contaTres && contaCinco > contaCuatro &&  contaCinco > contaSeis  && contaCinco > contaSiete && contaSiete>contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 5')  
        } else
        if (contaSeis > contaUno && contaSeis > contaDos && contaSeis> contaTres && contaSeis > contaCuatro && contaSeis > contaCinco && contaSeis > contaSiete && contaSeis>contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 6')  
        } else
        if (contaSiete > contaUno && contaSiete > contaDos && contaSiete >contaTres && contaSiete> contaCuatro &&  contaSiete > contaCinco  && contaSiete > contaSeis && contaSiete>contaOcho ){
            console.log('El mas ejecutado fue Ejercicio 7')  
        } else
        if (contaOcho > contaUno && contaOcho  > contaDos && contaOcho > contaTres && contaOcho  > contaCuatro &&  contaOcho  >contaCinco && contaOcho > contaSeis  && contaOcho  > contaSiete  ){
            console.log('El mas ejecutado fue Ejercicio 8')  
        } else{
            console.log('Hay mas de una opcion que tienen el mayor numero de repeticion')
        }
    
    
    
    
        if (contaUno < contaDos && contaUno< contaTres && contaUno <contaCuatro && contaUno < contaCinco && contaUno < contaSeis && contaUno<contaSiete && contaUno< contaOcho ){
            console.log('El menos ejecutado fue Ejercicio 1')  
        } else
        if (contaDos < contaUno && contaDos< contaTres && contaDos< contaCuatro && contaDos<contaCinco && contaDos< contaSeis && contaDos<contaSiete && contaDos< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 2')    
        } else
        if (contaTres < contaUno && contaTres< contaDos && contaTres < contaCuatro && contaTres < contaCinco && contaTres < contaSeis && contaTres< contaSiete && contaUno< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 3')  
        } else
        if (contaCuatro < contaUno && contaCuatro< contaDos && contaCuatro< contaTres&& contaCuatro<contaCinco && contaCuatro< contaSeis && contaCuatro<contaSiete && contaCuatro< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 4')    
        }else
        if (contaCinco < contaUno && contaCinco < contaDos && contaCinco< contaTres && contaCinco< contaCuatro &&  contaCinco < contaSeis  && contaCinco < contaSiete && contaSiete< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 5')  
        } else
        if (contaSeis < contaUno && contaSeis < contaDos && contaSeis<contaTres && contaSeis < contaCuatro &&  contaSeis < contaCinco  && contaSeis < contaSiete && contaSeis< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 6')  
        } else
        if (contaSiete < contaUno && contaSiete < contaDos && contaSiete< contaTres && contaSiete< contaCuatro && contaSiete < contaCinco  && contaSiete < contaSeis && contaSiete< contaOcho ){
        console.log('El menos ejecutado fue Ejercicio 7')  
        } else
        if (contaOcho < contaUno && contaOcho  < contaDos && contaOcho < contaTres && contaOcho  < contaCuatro&&  contaOcho  < contaCinco && contaOcho < contaSeis  && contaOcho  < contaSiete  ){
        console.log('El menos ejecutado fue Ejercicio 8')  
        }else{
            console.log('Hay más de una opcion que tiene el menor valor')
        }
    
    }

    function parImpar(){
        let impar = 0
        let par = 0
        let numero = Number(prompt('Ingresa un número'))
        for (let n=1; n <= numero; n++){
          
            let resto = n % 2;
            if (resto == 0){
                par = par +1
            }else {
                impar = impar +1
            }
    
        }
        console.log('El total de numeros PARES que hay en el rango de 1 a ' + numero + ' es: ' + par  )
        console.log('El total de numeros IMPARES que hay en el rango de 1 a ' + numero + ' es: ' + impar  )
    }

    function factorial() {
        let factorial = 1
        let numero = Number(prompt('Ingrese un número'))
        if (numero != 0){
            for (let n=1; n<=numero; n++){
                factorial =factorial*n;
            }
            console.log('El  factorial de ' + numero + ' es: ' + factorial);
        }else if (numero==0){
            console.log('El  factorial de 0 es: ' + factorial);
        }else {
            console.log('su opción no se encuentra en el rango de un entero positivo')
        }
    }

    function validarUsuario(){
        let  contrasena =prompt('Ingrese la contraseña que se le asigno ')
        const CLAVE = 'Secreto123'
        if (contrasena == CLAVE){
            console.log("Acceso concedido");
        }else {
            console.log("Acceso denegago");
        }
    }
     
    function tablaMultiplicar(){
        let multiplica = 0
        let numero = Number(prompt('Ingrese un número'))
        if (numero>0) {
            for (let n = 1; n < 11; n++) {
                mul = numero * n;
                console.log(numero + "*" + n + " =  " + mul);
            }
        }else {
            console.log("El valor ingresado no esta en el rango de enteros positivos");
        }
    }

    function primo (){
        let numero = Number(prompt('Ingrese un número'))   
        //for (var n = 1; n <= numero; n++) {
         
          let contadorUno = 0
          let contadorCero = 0
          let sumaPrimo = 0
          let primo = 0
          let entero = 0
          for (var i = 1; i <= numero; i++) {
              primo = numero / i;
              entero = primo % 2;
            
              if (entero == 1.0) {
                  contadorUno = contadorUno + 1;
              } else if (entero == 0.0) {
                  contadorCero = contadorCero + 1;
              }
      
              if (numero == 2) {
                  console.log('primo')
              }
      
              if (contadorUno == 2 && contadorCero == 0 ) {
                 console.log(i +' primo ');
              }            
          }
         //}    
      }

    function serieFibonacci(){
        let a = 0
        let b = 1
        let c = 0
        let numero = Number(prompt('Ingrese un número'))
        for (let n = 1; n <=numero; n++){
            console.log(a);
            c=a+b;
            a=b;
            b=c;        
        }
    }

    function convertidorTemperatura(){
        let convertidor = 0
        let grados = Number(prompt(' Ingrese los grados a convertir'))
        let numero = Number(prompt(' Digita una de estas opciones\n\n 1- convertir de grados Fahrenheit a Celsius\n 2- convertir de grados Celsius a Fahrenheit'))
        switch (numero){
            case 1:
                console.log("Ingresaste grados Fahrenheit");
                convertidor = (grados-32)*5/9;
                console.log(grados+" grados Fahrenheit"+ " equivalen a "+convertidor +" grados Celsius");
            break;
            case 2:
                console.log("Ingresaste grados Celius");
                convertidor = (grados*9/5)+32;
                console.log(grados+" grados Celsius"+ " equivale a "+convertidor +" grados Fahrenheit");
            break;
            default:
                console.log("Esta opcion es invalida");
            break;
        }
    }

    function potencia(){
        let numero = Number(prompt('Ingrese un número'))
        let exponente = Number(prompt('Ingrese la potencia a la que desea elevar el número'))
        let potencia = 1
        for (let n = 1; n <= exponente; n++) {
           potencia = potencia * numero  
        }
        console.log(numero + ' elevado a ' + exponente+ ' es igual a: ' +potencia)
    }
   
           
    function ejecucucion() {
        switch (opcion) {
            case 1:
                parImpar()
            break;
            case 2:
                factorial()
            break;
            case 3:
                validarUsuario()
            break;
            case 4:
                tablaMultiplicar()
            break;
            case 5:
                primo()
            break;
            case 6:
                serieFibonacci()
            break;
            case 7:
                convertidorTemperatura()
            break;
            case 8:
                potencia()
            break;
            case 9:
                /* console.log(contaUno)
                console.log(contaDos)
                console.log(contaTres)
                console.log(contaCuatro)
                console.log(contaCinco)
                console.log(contaSeis)
                console.log(contaSiete)
                console.log(contaOcho) */
                contador()
            break;
        
            default:

            break;
        }
        
    }
    
        
    switch (opcion) {
        case 1:
            console.log('CONTAR NUMEROS PARES E IMPARES')
            alert('CONTAR NUMEROS PARES E IMPARES\n\n En este ejercicio, un número ingresado por teclado sera el que nos indique el rango, es decir, de uno hasta ese número verificaremos cuantos números son pares y cuantos son impares')
            confirmar()
        break;
        case 2:
            console.log('CALCULADORA FACTORIAL')
            alert('CALCULADORA FACTORIAL\n\nLa función factorial se representa con un signo de exclamación “!” despúes de un número. Esta exclamación quiere decir que hay que multiplicar todos los números enteros positivos que hay entre ese número y el 1.')
            confirmar()
        break;
        case 3:
            console.log('VALIDANDO CONTRASEÑA')
            alert('VALIDANDO CONTRASEÑA\n\nEn este ejercicio debes ingresar una contraseña, la cual validaremos si corresponde al usuario asignado')
            confirmar()
        break;
        case 4:
            console.log('GENERADOR DE TABLAS DE MULTIPLICAR')
            alert('GENERADOR DE TABLAS DE MULTIPLICAR\n\nEn este ejercicio se genera una tabla de multiplicar del 1 al 10 del numero que ingreses por teclado')
            confirmar()
        break;
        case 5:
            console.log('SUMA DE NUMEROS PRIMOS')
            alert('SUMA DE NUMEROS PRIMOS\n\nUn número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.En este ejercicio, un número ingresado por teclado sera el que nos indique el rango, es decir, de uno hasta ese número; verificaremos cuales son primos y los sumaremos.')
            confirmar()
            break;
        case 6:
            console.log('SECUENCIA FIBONACCI')
            alert('SECUENCIA FIBONACCI\n\n En este ejercicio digitaras un número y se imprimiran los primeros n números de la serie. \n FibonacciLa secuencia Fibonacci see trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores')
            confirmar()
        break;    
        case 7:
            console.log('CONVERTIDOR TEMPERARTURA')
            alert('CONVERTIDOR TEMPERARTURA\n\nEn este ejercicio recibimos dos valores, un numero y la potencia a la que queremos elevarlo')
            confirmar()
        break;
        case 8:
            console.log('CALCULADORA DE POTENCIA')
            alert('CALCULADORA DE POTENCIA\n\nEn este ejercicio recibimos dos valores, un numero y la potencia a la que queremos elevarlo')
            confirmar()
        break;
        case 9:
            console.log('Resumen fin del programa')
            alert('Saliendo')
            ejecucucion()
            
        break;
    
        default:
            alert('OPCION INVALIDA\n\n Vuelve a intentar ')
            break;
    }
}