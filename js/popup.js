var btnAbrirpopup= document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarpopup = document.getElementById('btn-cerrar-popup');

var btnAbrirpopup1= document.getElementById('btn-abrir-popup1'),
    overlay1 = document.getElementById('overlay1'),
    popup1 = document.getElementById('popup1'),
    btnCerrarpopup1 = document.getElementById('btn-cerrar-popup1');

var btnAbrirpopup2= document.getElementById('btn-abrir-popup2'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarpopup2 = document.getElementById('btn-cerrar-popup2');


    btnAbrirpopup.addEventListener('click', function(){
        overlay.classList.add('active')
        popup.classList.add('active')
    });
    
    btnCerrarpopup.addEventListener('click', function(e){
        overlay.classList.remove('active');
        popup.classList.remove('active')
    });
    
    btnAbrirpopup1.addEventListener('click', function(){
        overlay1.classList.add('active')
        popup1.classList.add('active')
    });
    
    btnCerrarpopup1.addEventListener('click', function(){
        overlay1.classList.remove('active');
        popup1.classList.remove('active')
    });

    btnAbrirpopup2.addEventListener('click', function(){
        overlay2.classList.add('active')
        popup2.classList.add('active')
    });
    
    btnCerrarpopup2.addEventListener('click', function(){
        overlay2.classList.remove('active');
        popup2.classList.remove('active')
    });