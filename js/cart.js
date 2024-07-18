"use strict"
// ID, NOMBRE, PRECIO, NOMBRE-IMAGEN, Desc
const catalogo=[["1","Maneki Neko",25000,"producto1.png","Desc. Producto"],
                ["2","Maneki Neko",10000,"producto1.png","Desc. Producto"],
                ["3","Maneki Neko",50000,"producto1.png","Desc. Producto"]]
let sumapagar=0
let i=0
let cartProduct=catArray()
let cantProduct=catArray()


document.cookie = "sumaPrecio=0";
document.cookie = "product=0";








function catArray(){
  let auxArray=[];
  for(let z of catalogo){
    auxArray.push(0)
  }
  console.log(auxArray)
  return auxArray
}

function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
  }

  function addToCart(x){

    for(let id of catalogo){
      if(id[0]==x){
        cantProduct[x-1]+=1
        cartProduct[x-1]=catalogo[x-1][1]+" "+catalogo[x-1][2]+"<br></br>Cantidad:"+cantProduct[x-1]+'<br></br><button id="'+catalogo[x-1][0]+'" class="cartbtn" onClick="eliminar(this.id)">X</button><br></br>'
        document.getElementById("cartside").innerHTML=""
        sumapagar+=id[2]
        let i=0
        for(let x of cartProduct){
          if(x!=0 & cantProduct[i]!=0){
          document.getElementById("cartside").innerHTML+=x
          }
          i++

        }
        document.getElementById("sumaPago").innerHTML="Total: "+sumapagar
      }
    }
    

  }

  function eliminar(x){
    for(let id of catalogo){
      if(id[0]==x){
        sumapagar-=id[2]
        cantProduct[x-1]-=1
        cartProduct[x-1]=catalogo[x-1][1]+" "+catalogo[x-1][2]+"<br></br>Cantidad:"+cantProduct[x-1]+'<br></br><button id="'+catalogo[x-1][0]+'" class="cartbtn" onClick="eliminar(this.id)">X</button><br></br>'

      }

    }
    document.getElementById("cartside").innerHTML=""
    let i=0
    for(let x of cartProduct){

      if(x!=0 & cantProduct[i]!=0){
      document.getElementById("cartside").innerHTML+=x
      }
      i++
    }
    document.getElementById("sumaPago").innerHTML="Total: "+sumapagar

  }

  function createProduct(){
    let aux=""
    console.log("hola")
    for(let id of catalogo){
      aux='<div class="card col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex"> <img class="hidden" src="images/product/productos/'+id[3]+'" alt="Producto aqui"><div class="hide">I am shown when someone hovers over the div above.</div><h1>'+id[1]+'</h1><p class="price">'+id[2]+'</p><p>'+id[4]+'</p><p><button id="'+id[0]+'" onclick="addToCart(this.id)">Añadir</button></p></div>'
      document.getElementById("creation").innerHTML+=aux
      console.log("adios")
    }
  }

  function pagar(){
    let aux=""
    for(let i=0;i<cantProduct.length;i++){
      aux+=catalogo[i][1] + ": " + cantProduct[i].toString() + " * " + catalogo[i][2].toString() +" = "+ (catalogo[i][2]*cantProduct[i]).toString()+"-"
    }
    document.cookie="product="+aux
    document.cookie="sumaPrecio="+sumapagar.toString()
    location.href='pago.html'

  }
