const elementos = document.querySelectorAll('.elemento');
    
elementos.forEach(element =>{
    let btn = element.querySelector('.pregunta button');
    let icon = element.querySelector('.pregunta button i');
    var respuesta = element.lastElementChild; 
    var respuestas = document.querySelectorAll('.elemento .respuesta');
    btn.addEventListener('click', ()=>{
        respuestas.forEach(resp =>{
            let iconoResp = resp.parentElement.querySelector('button i'); 
            if(respuesta !== resp){
                resp.classList.add('ocultar');
                iconoResp.className = 'fas fa-chevron-circle-down';
            }
        });
        respuesta.classList.toggle('ocultar');
        if (icon.className === 'fas fa-chevron-circle-down'){
          icon.className = 'fas fa-chevron-circle-up'
        }
        else{
          icon.className = 'fas fa-chevron-circle-down'
        }
      
    });
});