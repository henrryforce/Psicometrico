const nom = document.getElementById('usuario');
const matricula = document.getElementById('matricula');
const carreras = document.getElementById('carreras');
const btn = document.getElementById('formdatos');
const grado = document.getElementById('grado');
const mensajes = document.getElementById('mensajes');
btn.addEventListener('submit',function(e){
     e.preventDefault();
     const seCarrera = carreras.options[carreras.selectedIndex].value;
     const nom = document.getElementById('usuario').value;
     const matricula = document.getElementById('matricula').value;
     const grado = document.getElementById('grado').value;
     if(seCarrera==='default'||nom===''||matricula===''||grado===''){
          mensajes.innerHTML=`
          <div class="alert alert-danger" role="alert">
         Todos los datos son obligatorios
          </div>
          `;
          setTimeout(function(){ 
          document.querySelector('#mensajes div').remove(); 
     }, 1500);
     }else{
          mensajes.innerHTML=`
          <div class="alert alert-success" role="alert">
         Todos los dato son correctos
          </div>
          `
          setTimeout(function(){ 
          document.querySelector('#mensajes div').remove(); 
          let dato=[];
     dato.push(nom);
     dato.push(matricula);
     dato.push(seCarrera);
     dato.push(grado);
          enviardatos(dato);
          window.location.href='preguntas.html';
     }, 1000);
     }
     
});
function enviardatos(datos){
     
     localStorage.setItem('datosP',JSON.stringify(datos));

}


