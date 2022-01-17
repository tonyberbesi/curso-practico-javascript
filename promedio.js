
function calcularmediaaritmetica(lista) {


    const sumalista = lista.reduce(
        function (valoracumulado = 0, nuevoelemento) {
            return valoracumulado + nuevoelemento;  
        }
    );
    
    const promediolista = sumalista / lista.length;

    return promediolista;
    
}
