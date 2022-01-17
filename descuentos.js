/* const precioOriginal = 120;
const descuento = 18; */

function calcularpreciocondescuento(precio, descuento){
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento) / 100;

    return preciocondescuento;
}


function onclickbuttonpricediscount() {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscout = document.getElementById("inputdiscout");
    const discountvalue = inputdiscout.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, discountvalue);
    const resultp = document.getElementById("resultp");
    resultp.innerText = "el precio con descuento son: $" + preciocondescuento;
}

