
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
              terminar();
             //window.location = 'resultados.html'; 
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
        <br>
        <p>${preguntas[i]['pregunta']}</p>
        
        <div class="form-group mb-3">
        <div class="form-group-prepend">
        <label class="form-group-text" for="inputGroupSelect01">Options</label>
        </div>
        <div id="resp" class="resp${preguntas[i]['id']}">
        <select class="custom-select respuesta" id="inputGroupSelect01" >
        <option value="${preguntas[i]['opciones'][0]}">${preguntas[i]['opciones'][0]}</option>
        <option value="${preguntas[i]['opciones'][1]}">${preguntas[i]['opciones'][1]}</option>
        <option value="${preguntas[i]['opciones'][2]}">${preguntas[i]['opciones'][2]}</option>
        <option value="${preguntas[i]['opciones'][3]}">${preguntas[i]['opciones'][3]}</option>
        <option value="${preguntas[i]['opciones'][4]}">${preguntas[i]['opciones'][4]}</option>
        </select>
        </div>
        </div> 
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
     input.innerHTML=`   <span class="input-group-text" >Primer valor y segundo valor</span>
                                <div id="resp" class="${preguntas[i]['id']}">
                            <input type="text" id="preg${preguntas[i]['id']}" class="form-control respuesta">
                            <input type="text" id="pregr${preguntas[i]['id']}" class="form-control respuesta">
                            </div>

     `;
     ar.appendChild(input);
   
     preg1.appendChild(ar);        
   }
   res.addEventListener('click',terminar);
function terminar(){
     console.log('click');
     const art =document.querySelectorAll('.respuesta');
     let res1=4,res2=5,m='';     
     let todr=[];
     let puntaje=0;
          for(let i=0;i<art.length;i++){
               
               if(i===res1){
                    m+=(art[i].value);                    
                    res1+=6                    
               } else if(i===res2){                    
                    m+=','+art[i].value;                    
                    res2+=6;                    
                    todr.push(m);
                    m='';
               }else if(i !==res1 && i !== res2){
                    todr.push(art[i].value);
               }
          }
          for(let p=0;p<60;p++){
               if(preguntas[p]['respuesta']==todr[p]){
                    puntaje+=1;
               }
          }
         localStorage.setItem('respuestasP',JSON.stringify(todr));
          localStorage.setItem('puntajeF',JSON.stringify(puntaje));
          console.log(puntaje);
          console.log(todr);
          //window.location = 'resultados.html';
}