const res = document.getElementById('resultado');
const btn = document.getElementById('btn-fin');
document.addEventListener("DOMContentLoaded", ready);
let pdf=[];
function ready(){
     let datos,puntaje,respuestas;
     if(localStorage.getItem('datosP')!==null){
          datos =JSON.parse(localStorage.getItem('datosP'));
          puntaje =JSON.parse(localStorage.getItem('puntajeF'));
          respuestas=JSON.parse(localStorage.getItem('respuestasP'));
          res.innerHTML=`
          <h5 class="card-title">RESULTADO OBTENIDO</h5>
          <p class="card-text">${puntaje}/60</p>
          <p class="card-text"><small class="text-muted">${datos[0]}</small></p>
          <p class="card-text"><small class="text-muted">Matricula:${datos[1]} </p></small>
          <p class="card-text"><small class="text-muted">Carrera:${datos[2]}</p></small> 
          <p class="card-text"><small class="text-muted">Grado:${datos[3]} </small></p>
          `;
     }
     let p =  localStorage.getItem('puntajeF');

}
btn.addEventListener('click',terminar);
function terminar(){
     $.ajax({
          type: "POST",
          url: "Json_toPDF.php",
          data: { data: 'hola' },
          dataType: 'json',
          success: function(data) {
              //$('#output').html(data);
              alert(data.mensaje);
          },
          error: function(error) {
              alert(error);
              console.log(error);
          }
      });
    
}