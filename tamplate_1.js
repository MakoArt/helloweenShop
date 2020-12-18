const lista=document.querySelector('.main-carrito__list')
const ul=document.querySelector('.main-carrito__ul')
const carrito=document.querySelector('.main-carrito')
const tarjeta=document.querySelector('.main-section__col')
const cerrarLista=document.querySelector('.main-carrito__btn--cerrar')
const texto=document.querySelector('.col-text__text')
const fila1=document.querySelector('.main-main__section--2')
let arrayCompras=[]

ul.style.backgroundColor='#FFBB00'


lista.style.display='none'
//lista.style.display='block'
carrito.addEventListener('mouseenter',(e)=>{
    e.preventDefault()
    if(lista.style.display==='none'){
    lista.style.display='block'
    }
    
})
cerrarLista.addEventListener('click',(e)=>{
    e.preventDefault()
    lista.style.display='none'
    
})

   //creacion de objeto Producto 

 class Producto{
     constructor(nombre,precio){
         this.nombre=nombre,
         this.precio=precio
     }
     
     get getNombre(){
         return this.nombre
     }
     get getPrecio(){
         return this.precio
     }
     set setNombre(nombre){
         this.nombre=nombre
     } 
     set setPrecio(precio){
         this.precio=precio
     }

  }
  //Creando sus instancias 
  let demonioRojo=new Producto('Demonio Rojo',13) 
  let veneciaPremium=new Producto('Venecia Premium',15)
  let veneciaPunk=new Producto('Venecia Punk',20)
  let veneciaSombrero=new Producto('Venecia Sombrero',25)
  let veneciaPalacio=new Producto('Venecia Palacio',150)
  let veneciaGondola=new Producto('Venecia Gondola',200)
  let brujaRojo=new Producto('Bruja Rojo',70)
  let brujaNegro=new Producto('Bruja Negro',100)
  let brujaModerno=new Producto('Bruja Moderno',50)
  let gretel=new Producto('Gretel',40)
  let reina=new Producto('Reina',50)
  let psicodelickPunk=new Producto('Psicodelick Punk',13)
 


 //creando los eventos de los productos 

  document.addEventListener('click',seleccion)
  



  function seleccion(e){

  if(e.target.matches('.main-section__col')){

      if(e.target.id==='1'){
          arrayCompras.push(demonioRojo.precio)
          let precioTotal=arrayCompras.length*demonioRojo.precio
          let lista=document.createElement('li')
          ul.appendChild(lista)
          lista.innerHTML=`
        <li><h3>${demonioRojo.getNombre}-Precio:${demonioRojo.getPrecio}€</h3></li>       
         <li><h3>Precio Total:${precioTotal}€</h3></li>
  
          `
         
          

      } 
      if(e.target.id==='2'){
        let lista=document.createElement('li')
        ul.appendChild(lista)
        lista.innerHTML=`
      <li><h3>${veneciaPremium.getNombre}-Precio:${veneciaPremium.getPrecio}€</h3></li>
        
        `
        
      }
      if(e.target.id==='3'){
        let lista=document.createElement('li')
        ul.appendChild(lista)
        lista.innerHTML=`
      <li><h3>${veneciaPunk.getNombre}-Precio:${veneciaPunk.getPrecio}€</h3></li>
        
        `
      } 
      if(e.target.id==='4'){
          console.log(veneciaSombrero)
      } 
      if(e.target.id==='5'){
          console.log(veneciaPalacio)
      } 
      if(e.target.id==='6'){
          console.log(veneciaGondola)
      }
      if(e.target.id==='7'){
          console.log(brujaRojo)
      } 
      if(e.target.id==='8'){
          console.log(brujaNegro)
      }    
      if(e.target.id==='9'){
          console.log(brujaModerno)
      } 
      if(e.target.id==='10'){
          console.log(gretel)
      }
      if(e.target.id==='11'){
          console.log(reina)
      } 
      if(e.target.id==='12'){
          console.log(psicodelickPunk)
      }
     
   }


  }

  //AGREGANDO AL CARRITO 


