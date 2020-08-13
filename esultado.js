const res = document.getElementById('resultado');
document.addEventListener("DOMContentLoaded", ready);
function ready(){
     let datos,puntaje,respuestas;
     if(localStorage.getItem('datosP')!==null){
          datos =JSON.parse(localStorage.getItem('datosP'));
          puntaje =JSON.parse(localStorage.getItem('puntajeF'));
          respuestas=JSON.parse(localStorage.getItem('respuestasP'));
          console.log(datos);
          console.log(puntaje);
          console.log(respuestas);
          res.innerHTML=`
          <h5 class="card-title">RESULTADO OBTENIDO</h5>
          <p class="card-text">${puntaje}/60</p>
          <p class="card-text"><small class="text-muted">${datos[0]}</small></p>
          <p class="card-text"><small class="text-muted">Matricula:${datos[1]} </p></small>
          <p class="card-text"><small class="text-muted">Carrera:${datos[2]}</p></small> 
          <p class="card-text"><small class="text-muted">Grado:${datos[3]} </small></p>
          <a href="#" class="btn btn-primary">Finalizar</a>
          `;
     }
     
}