
const dia = document.querySelectorAll('.dia');

dia.forEach(dias => {
    dias.addEventListener('click', function(){
        if(this.classList.contains('marcado')){
            this.classList.remove("marcado");
        }else{
            this.classList.add("marcado");
        }
    })
});