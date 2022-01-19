const  lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1count = {};

lista1.map(function(elemento){
   if (lista1count[elemento]) {
    lista1count[elemento] += 1;
   }else {

    lista1count[elemento] = 1;
   }
}
);

const lista1array = Object.entries(lista1count).sort(
    function (valoracumulado, nuevovalor) {
        valoracumulado - nuevovalor

    }
);