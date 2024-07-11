"use strict"

let ekisde=getCookie("product").split("-")
console.log(ekisde)
let xd=""
for (let ekis of ekisde){
    xd+=ekis+"<br>"
}
  

function cargaPago(){
    document.getElementById("pagoResumen").innerHTML=xd+"Valor carrito: "+getCookie("sumaPrecio")
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function recalcular(x){
    let y = parseInt(x) +parseInt(getCookie("sumaPrecio"))
    document.getElementById("pagoTotal").innerHTML="Total: "+ y.toString()
}