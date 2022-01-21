const btnRegistro = document.querySelector('.btnRegistro')
const btnIniciar = document.querySelector('.btnIniciar')
const iniciarSesion =document.querySelector('.iniciar-sesion')
const registrar = document.querySelector('.registrar-cuenta')

btnIniciar.addEventListener('click',(e)=>{
e.preventDefault()
iniciarSesion.style.zIndex = '-1'
registrar.style.zIndex = '1'
})

btnRegistro.addEventListener('click',(e)=>{
    e.preventDefault()
    registrar.style.zIndex = '-1'
    iniciarSesion.style.zIndex = '1'
 })
    
