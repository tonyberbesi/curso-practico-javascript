// codigo del cuadrado
console.group("cuadrados");


function perimetrocuadrado(lado) {
    return lado * 4;
}

function areacuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// codigo del triangulo
console.group("triangulos");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;




    function perimetrotriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    
    function areatriangulo(base, altura) {
        return (base * altura) / 2;
    }
    
    console.groupEnd();

    // codigo del circulo
    console.group("circulos");

   

    function diametrocirculo(radio) {
        return radio * 2;
    }

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

    // aqui interactuamos con el html

    function calcularperimetrocuadrado() {
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const perimetro = perimetrocuadrado(value);
        alert(perimetro);
    }

    function calcularareacuadrado() {
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const area = areacuadrado(value);
        alert(area);

    }

    // triangulo

    
