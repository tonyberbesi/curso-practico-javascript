// codigo del cuadrado
console.group("cuadrados");

/* const ladocuadrado = 5;
console.log("los lados del cuadrado miden: " + ladocuadrado + "cm"); */

function perimetrocuadrado(lado) {
    return lado * 4;
}
/* console.log("el perimetro del cuadrado es : " + perimetrocuadrado + "cm"); */

function areacuadrado(lado) {
    return lado * lado;
}
/* console.log("el area del cuadrado es : " + perimetrocuadrado + "cmˆ2"); */
console.groupEnd();


// codigo del triangulo
console.group("triangulos");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;



/* console.log(
    "los lados del triangulo miden: " 
    + ladotriangulo1 
    + "cm, " 
    + ladotriangulo2 
    + "cm," 
    + basetriangulo 
    + "cm"
    ); */

   /*  const alturatriangulo = 5.5;
    console.log("la altura del triangulo es de: "  + alturatriangulo + "cm");
 */
    function perimetrotriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    /* console.log("el perimetro del triangulo es: " + perimetrotriangulo + "cm"); */

    
    function areatriangulo(base, altura) {
        return (base * altura) / 2;
    }
    /* console.log("el area del triangulo es : " + areatriangulo + "cmˆ2"); */
    
    console.groupEnd();

    // codigo del circulo
    console.group("circulos");

    // radio
   /*  const radiocirculo = 4;
    console.log("el radio del circulo es: "  + radiocirculo + "cm"); */

    function diametrocirculo(radio) {
        return radio * 2;
    }

    // diametro
  

    // pi
  

    // circunferencia

    function perimetrocirculo(radio) {
        const diametro = diametrocirculo(radio);
        return diametro * 3.1416;
    }


    // area

    function areacirculo(radio) {
        return (radio * radio) * 3.1416;
    }

    console.groupEnd();