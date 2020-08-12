let contpreg=4;
const preg1 = document.getElementById('preguntas');
document.addEventListener("DOMContentLoaded", ready);
function ready() {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', 'preguntas.json', true);
     xhr.onload = function () {
          if (this.status === 200) {
               const preguntas = JSON.parse(this.responseText);
               if (preguntas[0]['tipo'] === 1) {
                  /*  
                    preg1.innerHTML = `
                    <article id="${preguntas[0]['id']}">
                    <p>${preguntas[0]['pregunta']}</p>
                    <table>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                    <option value="1">${preguntas[0]['opciones'][0]}</option>
                    <option value="2">${preguntas[0]['opciones'][1]}</option>
                    <option value="3">${preguntas[0]['opciones'][2]}</option>
                    <option value="4">${preguntas[0]['opciones'][3]}</option>
                    <option value="5">${preguntas[0]['opciones'][4]}</option>
                    </select>
                    </div>            
                        </table>
                    </article> 
                    `;*/
                    generaPregTip1(preguntas);

               }
          }
     }
     xhr.send()
}
function generaPregTip1(preguntas){
   for(var i=0;i<contpreg;i++){
        
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
}