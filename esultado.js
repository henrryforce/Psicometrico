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
 let da =localStorage.getItem('datosP');
 let pun =  localStorage.getItem('puntajeF');
 let res = localStorage.getItem('respuestasP');
let tab ='';
 if(pun <=26){
      console.log('Muy inferior 10%');
      tab ='Muy inferior 10%';
 }else if(pun >= 27 && pun <=33){
     console.log('Inferior 20%');
     tab ='Inferior 20%';
 }else if(pun >=34 && pun <=43){
     console.log('Mediano 40%');
     tab ='Mediano 40%';
 }else if(pun >=44 && pun <=50){
     console.log('Superior 20%');
     tab ='Superior 20%';
 }else if(pun >50){
     console.log('Excelente 10%');
     tab ='Excelente 10%';
 }

let info=[];
info.push(da);
info.push(res);
info.push(pun);
info.push(tab);
window.location.href=`Json_toPDF.php?datos=${da}&puntaje=${pun}&resp=${res}&tabu=${tab}`;
 /*
 document.cookie =`datosP=${da}`;
 document.cookie=`respuestas=${res}`;
 document.cookie=`puntaje=${pun}`;
document.cookie=`tab=${tab}`;*/
 /*
    
   */
}