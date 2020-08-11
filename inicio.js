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
          enviardatos();
     }, 1500);
     }
     
});
function enviardatos(){
     console.log(nom);
     console.log(matricula);
     console.log(seCarrera);
     console.log(grado);
}


