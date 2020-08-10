document.addEventListener('DOMContentLoaded',function(){

const pre = document.getElementById('4');
console.log(pre.parentElement);

setTimeout(function(){
      pre.parentElement.remove();
      const nuevo = document.getElementById('pregunta5');
}, 3000);
     });