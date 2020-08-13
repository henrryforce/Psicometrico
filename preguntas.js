
let preguntas=[];
const btnnext = document.getElementById('btn-next');
const preg1 = document.getElementById('preguntas');
const res = document.getElementById('btn-fin');
document.addEventListener("DOMContentLoaded", ready);
function ready() {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', 'preguntas.json', true);
     xhr.onload = function () {
          if (this.status === 200) {
              
                preguntas = JSON.parse(this.responseText);
                cpc=0;
                contpreg=5;
                crea5preguntas();
                delayOut();

          }
     }
     xhr.send()
}
function delayOut(){
     document.getElementById('timer').innerHTML = 'La prueba caduca en <span id="countDown"></span> seconds....';
     var count = 600;
     setInterval(function(){
         count--;
         document.getElementById('countDown').innerHTML = count;
         if (count == 0) {
             window.location = 'resultados.html'; 
         }
     },1000);
 }

function crea5preguntas(){

     for(i=0;i<60;i++){  
     if (preguntas[i]['tipo'] === 1) {
          
          generaPregTip1(i);
     }else{
          generaPregtip2(i);
     }

}
}
function generaPregTip1(i){
        
        var ar = document.createElement('article');
        ar.setAttribute("id",preguntas[i]['id']);
        ar.innerHTML=`
        <p>${preguntas[i]['pregunta']}</p>
        <table>
        <div class="form-group mb-3">
        <div class="form-group-prepend">
        <label class="form-group-text" for="inputGroupSelect01">Options</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
        <option value="1">${preguntas[i]['opciones'][0]}</option>
        <option value="2">${preguntas[i]['opciones'][1]}</option>
        <option value="3">${preguntas[i]['opciones'][2]}</option>
        <option value="4">${preguntas[i]['opciones'][3]}</option>
        <option value="5">${preguntas[i]['opciones'][4]}</option>
        </select>
        </div>            
            </table>
        `;
       preg1.appendChild(ar);        
   
}
   function generaPregtip2(i){
     var ar = document.createElement('article');
     ar.setAttribute("id",preguntas[i]['id']);
     
     var serie='';
     for(var j=0;j<preguntas[i]['opciones'].length;j++){
          serie += preguntas[i]['opciones'][j] + ' ';
     }
     ar.innerText=`${preguntas[i]['pregunta']} ${serie}`;
     var input = document.createElement('div');
     input.setAttribute("class",'input-group-prepend');
     input.innerHTML=`
     
                                <span class="input-group-text" id="">Primer valor y segundo valor</span>
                            
                            <input type="text" id="preg${preguntas[i]['id']}" class="form-control">
                            <input type="text" id="pregr${preguntas[i]['id']}" class="form-control">
     `;
     ar.appendChild(input);
   
     preg1.appendChild(ar);        
   }
res.addEventListener('click',function(){
     const art =document.querySelectorAll('#preguntas article');
     
     console.log(document.querySelectorAll(`${art} #preg`) );
});