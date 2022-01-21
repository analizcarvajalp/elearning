
const carrito = document.querySelector('.carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenidoCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const borrarCursos = document.querySelector('.borrar-curso')
const imgCarrito = document.querySelector('#img-carrito')
const mensaje =document.querySelector('#mensaje-carrito')
const pagar = document.querySelector('#pagar')
let productosCarrito = [];


eventListener();

function eventListener() {
     imgCarrito.addEventListener('click', mostrarCarrito)
     listaCursos.addEventListener('click', agregarCurso);
     carrito.addEventListener('click', eliminarCurso);

    

}


function mostrarCarrito(){
  
     carrito.classList.toggle('carritoMostrar')
}

function agregarCurso(e) {
     e.preventDefault();
  
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement; //card
      
          mensaje.style.display='none'
          pagar.style.display='block'
          leerDatosCurso(curso);
       
     }
     
}


function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio .precio-final').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }

//verificar si existe elementos 
     if( productosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = productosCarrito.map( curso => { 
               if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                     return curso;
                } else {
                     return curso;
             }
          })
          productosCarrito = [...cursos];

     }  else {
          productosCarrito = [...productosCarrito, infoCurso];
     }
      carritoHTML();
}


function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
      
          const cursoId = e.target.getAttribute('data-id')
          

          productosCarrito = productosCarrito.filter(curso => curso.id !== cursoId); 

          carritoHTML();
     }
}


function carritoHTML() {

     vaciarCarrito();

     productosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          const {cantidad,imagen,titulo,precio,id }= curso
          
          row.innerHTML = `
               <td>  <td>${cantidad} </td>
                    <img src="${imagen}" width=100>
               </td>
               <td>${titulo}</td>
               <td>${precio}</td>
               
               <td>
                    <a href="#" class="borrar-curso" data-id="${id}">x</a>
                    
               </td>
               
          `;
        
          contenidoCarrito.appendChild(row);
     });
     mensajeCarrito()
}

function vaciarCarrito() {
  
     while(contenidoCarrito.firstChild) {
          contenidoCarrito.removeChild(contenidoCarrito.firstChild);
         
      }
}

function mensajeCarrito(){
     if(productosCarrito.length === 0){
          mensaje.style.display ='block'
          pagar.style.display ='none'
     }
}




