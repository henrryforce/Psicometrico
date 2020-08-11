const nom = document.getElementById('usuario');
const matricula = document.getElementById('matricula');
const carreras = document.getElementById('carreras');
const btn = document.getElementById('formdatos');
btn.addEventListener('submit',function(e){
     e.preventDefault();
     const seCarrera = carreras.options[carreras.selectedIndex].value;
     console.log(seCarrera);
     
});


